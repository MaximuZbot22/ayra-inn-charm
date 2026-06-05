## Goal

Wire the real Ayra 2BHK photos from your Dropbox folder into the `/rooms` page, replacing the placeholders for that listing only. The other three listings keep their placeholders until you send their folders.

## Steps

1. **Download** the folder as a zip via `curl -L "<dropbox-url>&dl=1" -o /tmp/ayra-2bhk.zip` and unzip into `/tmp/ayra-2bhk/`.
2. **Inspect** each image, classify by space (Living / Kitchen / Dining / Bedroom 1 / Bedroom 2 / Bath 1 / Bath 2) by looking at it, and rename to `bedroom-1-a.jpg`, `kitchen-a.jpg`, etc.
3. **Upload** each image through `lovable-assets create` → write `.asset.json` pointers into `src/assets/rooms/ayra-2bhk/`.
4. **Wire** the asset URLs into `LISTINGS[0].images` in `src/lib/rooms.ts`, ordered: cover (best living/exterior) → bedroom 1 → bedroom 2 → living → kitchen → dining → bath 1 → bath 2.
5. **Verify** in preview that the 2BHK card carousel shows the new shots.

## Out of scope

- The three other listings (Deluxe, Studio, Deluxe II) — send those folder links next and I'll repeat the same flow.
- No UI/layout changes; only swapping image asset references.
