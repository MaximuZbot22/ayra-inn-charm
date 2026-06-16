## Goal
Make this project deploy on Netlify with zero manual fixes, preserving its TanStack Start SSR features (server functions, route loaders, head metadata).

## Current state (what would break on Netlify)
- This is **not** a plain Vite SPA. It's **TanStack Start (SSR)** built via Nitro through `@lovable.dev/vite-tanstack-config`, with `src/server.ts` as the server entry.
- `vite.config.ts` currently doesn't set a Nitro `preset`, so the default target is **Cloudflare Workers** — the build emits a Worker bundle, not a Netlify-compatible output. Deploying that to Netlify would 404 every route (no SSR handler, no SPA fallback).
- There is no `netlify.toml`, no `_redirects`, and no Netlify Functions entry.
- A naive "set publish dir to `dist`" SPA approach would break SSR, server functions (`createServerFn`), and route `head()` metadata.

## Approach
Switch the Nitro build preset to **`netlify`**. Nitro's Netlify preset produces the exact layout Netlify expects:
- Static assets in `dist/public/`
- An SSR handler deployed as a Netlify Function with a catch-all redirect auto-written to `dist/public/_redirects`

Then add a `netlify.toml` so Netlify picks the right build command and publish directory automatically, and add Node version pinning.

## Changes

1. **`vite.config.ts`** — pass `nitro: { preset: "netlify" }` to `defineConfig` so the build targets Netlify Functions instead of Cloudflare Workers.

2. **`netlify.toml`** (new) — at project root:
   ```toml
   [build]
     command = "bun run build"
     publish = "dist/public"

   [build.environment]
     NODE_VERSION = "20"
   ```
   No manual `[[redirects]]` block needed — Nitro's Netlify preset writes the SSR catch-all into `dist/public/_redirects` during build, which handles deep links and refreshes (no 404s).

3. **`.nvmrc`** (new) — `20` — guarantees the same Node version locally and on Netlify.

4. **`package.json`** — add an explicit `"start": "node .output/server/index.mjs"` script is **not** needed for Netlify (the function is invoked by the platform); no dependency changes required. Nitro is already a devDependency.

5. **`src/server.ts`** — unchanged. The Nitro Netlify preset wraps the same `export default { fetch }` handler used today, so the SSR error wrapper keeps working.

## Build & deploy settings to enter in Netlify (also encoded in `netlify.toml`)
- **Build command:** `bun run build`
- **Publish directory:** `dist/public`
- **Functions directory:** auto-detected (Nitro emits to `.netlify/functions-internal/`)
- **Node version:** 20

## Verification
After the edits I'll run `bun run build` from a clean state and confirm:
- `dist/public/` exists with hashed JS/CSS and `_redirects`
- A Netlify function bundle is emitted under `.netlify/`
- No build errors

## Out of scope
- No source/route refactors. Routing, components, and assets already use Vite-hashed paths and TanStack file routes — they are Netlify-safe once the preset is correct.
- No switch to a pure SPA — that would regress SSR, server functions, and per-route social metadata.
