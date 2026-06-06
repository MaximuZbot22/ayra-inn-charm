
## Goal

1. Wire real photos for the remaining three listings (Ayra Deluxe, Ayra Studio, Ayra Deluxe II) from their Dropbox folders.
2. Add an Airbnb-style photo experience: each listing card opens a detail page with a 1-large + 4-small hero gallery; clicking any photo opens a full-screen Photo Tour grouped by category (Living, Bedroom, Bathroom, Kitchen, Workspace, etc.) — matching the screenshot.

## Steps

### 1. Photos — upload & wire (per folder)
For each of the 3 Dropbox links:
- `curl -L "<url>&dl=1" -o /tmp/<slug>.zip` → unzip into `/tmp/<slug>/`
- Inspect each image, classify by category (Living / Bedroom / Bathroom / Kitchen / Workspace / Exterior / Additional), rename `<category>-<n>.<ext>`
- `lovable-assets create --file ...` → write `.asset.json` pointers into `src/assets/rooms/<slug>/`
- Build a `categorizedImages` structure for each listing.

### 2. Data shape — extend `Listing`
In `src/lib/rooms.ts`, replace flat `images: string[]` with:

```ts
type PhotoCategory = { name: string; images: string[] };
type Listing = { ...; photoTour: PhotoCategory[]; coverImages: string[] /* derived: first of each cat, max 5 */ };
```

Backfill Ayra 2BHK with the already-uploaded photos grouped by category.

### 3. New route: `/rooms/$slug` (listing detail)
File: `src/routes/rooms.$slug.tsx`
- Hero gallery: 1 large image (left, ~2/3 width) + 4 small (right grid 2x2) — Airbnb layout.
- A "Show all photos" button (bottom-right of hero).
- Below: listing meta, blurb, amenities, spaces, "Call for rates" CTA.
- Clicking any hero image or "Show all" opens the Photo Tour modal.

### 4. Photo Tour modal
New component: `src/components/landing/PhotoTour.tsx`
- Full-screen Dialog with sticky header (close X, listing title).
- Top: horizontal scrollable category thumbnails (matches screenshot) — click scrolls to that section.
- Body: each category rendered as a section with title + responsive masonry/grid that preserves aspect ratios (CSS columns or grid with `object-cover` removed; use natural ratios via `aspect-auto`).

### 5. Update existing rooms list page
`src/routes/rooms.{-$category}.tsx`: keep grid, but each `ListingCard` now links to `/rooms/$slug` on title/image click (carousel stays for quick browse).

### 6. Out of scope
- No admin panel / drag-and-drop reordering (static data file is fine for now — order is controlled by `src/lib/rooms.ts`).
- No DB; images stay in the codebase via `.asset.json` pointers.
- No customer uploads / customer photos category.

## Technical notes
- Masonry: use Tailwind `columns-1 sm:columns-2 lg:columns-3 gap-3` with `break-inside-avoid` on each image wrapper — simplest way to preserve aspect ratios.
- Modal: reuse `@/components/ui/dialog` with full-screen variant (`max-w-none w-screen h-screen`).
- Category thumbnails strip: horizontal flex with `snap-x` + smooth scroll to anchor.
- Category classification is done by me eyeballing each photo during upload — no ML needed.

## Confirm before I start
Three quick checks:

1. **Category labels** — OK to use: Living room, Bedroom, Bathroom, Kitchen, Dining, Workspace, Exterior, Additional photos? (I'll only include categories that actually have photos per listing.)
2. **Hero gallery click** — should clicking any hero photo open the full Photo Tour modal (Airbnb behavior), or open a single-photo lightbox? I'm planning Airbnb behavior unless you say otherwise.
3. **Card click on `/rooms`** — should the whole card link to the new detail page, or keep the carousel + add a separate "View details" button?
