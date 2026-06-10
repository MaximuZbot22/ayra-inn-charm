## 1. New logo
- Upload the attached `aryA LOH@2x.png` via `lovable-assets` to `src/assets/ayra-inn-logo.png.asset.json` (replace the current bundled logo import).
- Update `src/components/landing/Navbar.tsx` to import the new asset pointer and use `.url`. The dark-green mark reads well on the white scrolled state; on the transparent hero state, wrap it in a subtle white circle (`bg-white/90 rounded-full p-1`) so it stays visible over the photo.
- Replace `public/favicon.ico` reference in `__root.tsx` head with the new logo URL (PNG favicon link) so the browser tab matches.

## 2. Gallery — reuse real room photos
- Rewrite `src/components/landing/Gallery.tsx` to pull from `LISTINGS` in `src/lib/rooms.ts` instead of the placeholder `gallery-1/2/3.jpg` + `room-deluxe.jpg`.
- Pick 4 representative shots: 2BHK living (large tile), Deluxe bedroom, Studio living, 2BHK exterior — keep the same 2-col / 4-col bento layout and hover zoom.
- Delete the now-unused asset pointers: `src/assets/gallery-1.jpg.asset.json`, `gallery-2.jpg.asset.json`, `gallery-3.jpg.asset.json`, `room-deluxe.jpg.asset.json`, `room-family.jpg.asset.json`, `room-standard.jpg.asset.json` (via `assets--delete_asset`) — only after confirming no other file imports them.

## 3. Mobile hero polish
In `src/components/landing/Hero.tsx`:
- Tighten vertical rhythm on mobile: reduce top padding (`pt-28` → `pt-24`), lower `min-h-[92svh]` to `min-h-[88svh]`, and move the headline closer to the status chip (`mt-5` → `mt-4` on mobile).
- Strengthen the bottom gradient on mobile so the CTAs read cleanly (`from-black/65 via-black/40 to-black/85`).
- Add a subtle `object-position: 60% center` on mobile so the building, not sky, anchors the frame.
- Make the status chip + headline group `space-y-3` so the gap feels intentional rather than an empty band.
- Consider swapping the hero image — out of scope unless user provides one; the gradient/position tweaks above are the fix for now.

## 4. Fix "Listing not found" from RoomsTeaser
**Root cause:** `RoomsTeaser` links to `/rooms/standard` (etc.) using the old `CategorySlug`. The dynamic route `/rooms/$slug` matches first, calls `findListing("standard")`, finds nothing, and throws `notFound()` → renders the error component.

Fix in `src/components/landing/RoomsTeaser.tsx`:
- Repoint each teaser card to a real listing slug:
  - Standard → `ayra-deluxe`
  - Family → `ayra-2bhk`
  - Executive Suites → `ayra-deluxe-ii`
- Change `<Link to="/rooms/{-$category}" params={{ category: item.slug }}>` to `<Link to="/rooms/$slug" params={{ slug: item.listingSlug }}>`.
- Drop the `CategorySlug` import (no longer referenced).

Also polish the `notFoundComponent` in `src/routes/rooms.$slug.tsx`: replace "Back to all stays" (typo'd as "states" by the user) with a clearer message and a primary button styled to match the site, so even if a bad slug is hit it doesn't look broken.

## 5. Hide scrollbars in PhotoTour (mobile)
In `src/components/landing/PhotoTour.tsx`:
- Add a `.no-scrollbar` utility (or inline classes) on the vertical scroll container and the horizontal category strip:
  - `scrollbar-width: none` (Firefox)
  - `-ms-overflow-style: none` (legacy Edge)
  - `&::-webkit-scrollbar { display: none }` (WebKit)
- Apply to both the main `ref={scrollRef}` container and the category nav `overflow-x-auto` strip.
- Add the utility class once in `src/styles.css` under a `@layer utilities` block so it's reusable.

Touch scrolling continues to work; only the visible scrollbar disappears.

## Files touched
- `src/assets/ayra-inn-logo.png.asset.json` (replaced via lovable-assets)
- `src/components/landing/Navbar.tsx`
- `src/components/landing/Gallery.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/RoomsTeaser.tsx`
- `src/routes/rooms.$slug.tsx` (notFoundComponent polish)
- `src/components/landing/PhotoTour.tsx`
- `src/styles.css` (add `.no-scrollbar` utility)
- `src/routes/__root.tsx` (favicon link)
- Delete 6 unused gallery/room asset pointers
