## Diagnosis

This is a **TanStack Start SSR** app (not a SPA), built via Nitro through `@lovable.dev/vite-tanstack-config`. Server entry is `src/server.ts`, routes use file-based routing under `src/routes/`, and there are server-rendered loaders + `head()` metadata. A SPA configuration would break SSR and `createServerFn`.

### Why the previous deploy 404s

`netlify.toml` is currently:
```
publish = "dist/public"
```

But Nitro's **`netlify` preset** (confirmed by reading `node_modules/nitro/dist/_presets.mjs` lines 1180–1190) emits:

- Static assets → `<rootDir>/dist/` (publicDir is `dist/{baseURL}`, baseURL is `/`)
- SSR Netlify Function → `<rootDir>/.netlify/functions-internal/server/server.mjs`
- Auto-generated `_redirects` and `_headers` written into `dist/`

So Netlify was publishing `dist/public` (which doesn't exist under the netlify preset), found no `index.html`, no `_redirects`, no function — every URL 404'd.

Also, the Lovable Vite wrapper forces a Cloudflare build *inside the Lovable sandbox*, but `preset: "netlify"` is honored outside it (i.e. on Netlify CI), so we don't need to remove the wrapper.

## Architecture

- Type: **SSR (TanStack Start + Nitro)** with server functions (`createServerFn`) and route loaders. Not static, not pure SPA.
- Adapter: **Nitro `netlify` preset** → Netlify Functions (Node 20).

## Required changes

1. **`netlify.toml`** — fix publish directory and keep build/Node settings:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     NODE_VERSION = "20"
   ```
   - Publish dir is `dist` (Nitro's netlify preset writes static + `_redirects` here).
   - No manual `[[redirects]]` block — Nitro writes the SSR catch-all to `dist/_redirects` automatically. That fixes deep-link / refresh 404s.
   - Functions dir is auto-detected at `.netlify/functions-internal/` (Netlify's convention; no config needed).
   - Use `npm run build` instead of `bun run build` to match Netlify's default toolchain (it auto-installs from `package.json`); `bun.lock` will be ignored, `package.json` drives install. This avoids needing a `BUN_VERSION` override.

2. **`vite.config.ts`** — already correct from the previous turn:
   ```ts
   nitro: { preset: "netlify" }
   ```
   No further change.

3. **`.nvmrc`** — already present, pins Node 20.

4. **No package changes.** `nitro` is already a devDependency; `@tanstack/react-start` already produces a Netlify-compatible handler via Nitro.

5. **No source changes.** `src/server.ts` (the SSR error wrapper) works unchanged — Nitro's netlify runtime wraps the same `export default { fetch }` handler.

## Netlify dashboard settings (also encoded in `netlify.toml`)

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Functions directory | *(leave blank — auto-detected at `.netlify/functions-internal`)* |
| Node version | `20` (via `NODE_VERSION` / `.nvmrc`) |

## Verification

After fixing `netlify.toml`, on Netlify CI the build will produce:
- `dist/` with hashed JS/CSS, favicon, and a Nitro-generated `_redirects` whose catch-all routes every URL to the SSR function (so `/`, deep links, and refreshes all hit SSR).
- `.netlify/functions-internal/server/server.mjs` — the SSR handler Netlify deploys as a Function.

I'll re-run `npm run build` locally outside the sandbox-forced Cloudflare path is not possible here, but the preset code path is verified by source inspection.

## Out of scope

- No conversion to a SPA — would regress server functions, route loaders, and per-route social metadata.
- No edge functions — Nitro also ships a `netlify-edge` preset, but standard `netlify` (Node functions) is the safer default for this app's dependencies.
