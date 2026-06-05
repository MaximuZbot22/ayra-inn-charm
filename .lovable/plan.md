## Goal

Rebuild the `/rooms` page as a clean, Airbnb-style mobile-first browse experience with **4 listings** — Ayra 2BHK, Ayra Deluxe, Ayra Studio, Ayra Deluxe II — using the real photos and the amenity/description data you sent. Homepage teaser stays untouched.

## Images — I need you to upload them here

The Dropbox folder requires login, so I can't pull the photos directly. Please **drag the 4 folders into chat** (or upload them image-by-image) and label each batch with the folder name so I know which listing each photo belongs to:

- `Ayra 2BHK` — expecting Living room, Kitchen, Dining, Bedroom 1, Bedroom 2, Bathroom 1, Bathroom 2 shots
- `Ayra delux`
- `Ayra Deluxe II`
- `Ayra Studio`

I'll auto-classify each image into its space group (Bedroom / Bathroom / Kitchen / Living / Exterior) by looking at it, and order the gallery as: cover → bedroom → living → kitchen/dining → bathroom → extras.

## Listings (final data)

Hidden price everywhere — every CTA reads **"Call for rates"** and dials `SITE.phoneHref`.

| Listing | Type | Capacity | Beds | Baths |
| --- | --- | --- | --- | --- |
| Ayra 2BHK | Entire rental unit | 5 guests | 2 bedrooms · 2 beds | 2 baths |
| Ayra Deluxe | Entire rental unit | 2 guests | 1 bedroom · 1 bed | 1 bath |
| Ayra Deluxe II | Entire rental unit | 2 guests | 1 bedroom · 1 bed | 1 bath |
| Ayra Studio | Room (shared bath) | 1–2 guests | 1 bed | Shared bath |

Amenities and per-room sub-groups (2BHK) come from the spec you pasted, verbatim.

## Page (mobile-first, Airbnb-style)

```text
┌─────────────────────────────┐
│ Navbar                      │
├─────────────────────────────┤
│ ← Back to home              │
│ Stays at Ayra Inn           │
│ 4 places to stay · Kochi    │
│                             │
│ ┌─────────────────────────┐ │  ← one card per listing
│ │  [swipeable photo]   ♥  │ │     • 4:3 photo carousel w/ dots
│ │  • • ◦ ◦                │ │     • swipe on mobile, arrows on desktop hover
│ └─────────────────────────┘ │     • rounded-2xl, soft shadow
│ Ayra 2BHK              ›    │  ← title row
│ Entire rental unit in Kochi │  ← subtitle muted
│ 5 guests · 2 BR · 2 ba      │  ← meta line
│ Wifi · AC · Kitchen · TV +3 │  ← top amenities chip-line (truncated)
│ ─────────────────────────── │
│ [ Call for rates ]          │  ← full-width pill, teal
│                             │
│ ┌─────────────────────────┐ │
│ │  Ayra Deluxe ...        │ │
│ └─────────────────────────┘ │
│  ...Studio, Deluxe II       │
├─────────────────────────────┤
│ Footer                      │
└─────────────────────────────┘
```

- Cards stack with `space-y-8` on mobile, 2-column grid (`md:grid-cols-2`) from `md` up, 4:3 image ratio (Airbnb shape).
- Single page only — **no detail route**. The amenities chip-line + meta is enough; "Call for rates" is the only action. (Per your scope answer.)
- Header band is quiet: small "Stays at Ayra Inn" eyebrow, serif H1, count line. No big hero band.
- Category deep-link param (`/rooms/{-$category}`) becomes a no-op for now since we don't have categories anymore — the route file still accepts the optional param but ignores it (keeps existing inbound links from breaking).

## Files

**New**
- Nothing structurally new; all listings live in one updated data file.

**Rewritten**
- `src/lib/rooms.ts` — replace `ROOM_CATEGORIES` with a flat `LISTINGS: Listing[]` array. Each Listing has `slug, name, type, capacity, bedrooms, beds, bathrooms, blurb, amenities[], images[]`. The 2BHK additionally carries `spaces: { name, amenities[] }[]` (Living, Kitchen, Dining, Bedroom 1, Bedroom 2, Bath 1, Bath 2) — kept in data even though we don't render sub-groups on the card, so we can surface them later without re-touching data.
- `src/components/landing/RoomCard.tsx` → becomes the **ListingCard** (Airbnb shape): 4:3 carousel with dots, title + chevron, subtitle, meta line (guests · BR · BA), top-4 amenity chips with `+N more`, full-width "Call for rates" pill. No price.
- `src/components/landing/RoomCategory.tsx` → **removed** (no categories anymore). Imports updated.
- `src/routes/rooms.{-$category}.tsx` → renders the new header + grid of `ListingCard`s. Drops scroll-to-category effect. Keeps the optional param so existing `/rooms/standard` etc. URLs still 200 (just shows the same page).

**Not touched**
- `src/components/landing/RoomsTeaser.tsx` (homepage teaser stays as-is per your answer).
- Navbar, Footer, Hero, About, Amenities, Gallery, Location.
- `head()` SEO logic — kept, updated copy for the new 4-listing structure.

## Image asset wiring

When you upload, I'll:
1. Drop the originals into `src/assets/rooms/<slug>/` (e.g. `ayra-2bhk/bedroom-1.jpg`).
2. Upload each one through `lovable-assets` so the repo stays light and they're served from CDN.
3. Reference them as `.asset.json` imports inside `src/lib/rooms.ts`.

If any listing is short on photos, I'll fall back to the existing `gallery-*.jpg` placeholders for that listing only and flag which ones are missing.

## Tokens

All semantic — `text-primary` (teal), `bg-primary hover:bg-primary-deep`, `bg-muted border-border` (chips), `shadow-soft`, existing serif/sans pair. No hard-coded colors.

## Out of scope

- No detail page per listing, no booking flow, no calendar, no filters/search, no favorites heart (just visual on the card if at all — happy to skip).
- No homepage changes.
- No new dependencies.

## Next step

Upload the 4 image folders here labeled by listing name, then I'll switch to build mode and wire everything up in one pass.
