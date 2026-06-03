
## Goal

Replace the current image-based teaser cards on the home page with the flat color-block style from your reference image — three cards sitting flush against each other, each one a solid color panel with an icon, big display heading, short description, and a pill "Learn More" button.

Only the home `RoomsTeaser` changes. The `/rooms` page, navigation, routing, and room data stay the same.

## Layout

```text
┌───────────────┬───────────────┬───────────────┐
│   [icon]      │   [icon]      │   [icon]      │
│               │               │               │
│  Standard     │  Family       │  Executive    │
│               │               │  Suites       │
│  Short desc…  │  Short desc…  │  Short desc…  │
│               │               │               │
│  ( Learn More)│  ( Learn More)│  ( Learn More)│
└───────────────┴───────────────┴───────────────┘
```

- **Desktop (md+):** three equal columns, edge-to-edge, no gap between cards, single large rounded-2xl container so only the outer corners are rounded (matches the reference).
- **Mobile (<md):** cards stack vertically full-width, still flush, outer container rounded.
- Each card: tall aspect, generous padding, icon top-left in a soft circular badge, display heading, 3-4 line description, pill `Learn More` button pinned to the bottom.
- Whole card remains a `<Link to="/rooms/{-$category}">` so clicks deep-link into the rooms page (same as today).

## Colors (using existing teal tokens, no new palette)

Three tonal variants of the existing teal so it stays on-brand and warm — not the orange/teal/dark mix from the reference, which would clash with the rest of the site.

- **Standard** — `primary` (mid teal), white text, white pill with teal label.
- **Family** — `primary-deep` (deeper teal), white text, white pill.
- **Executive Suites** — darkest teal surface (`primary` mixed toward foreground via `color-mix`), white text, white pill.

Icons (from `lucide-react`, already installed): `BedSingle`, `Users`, `Sparkles`.

## Labels & copy

Renaming for the home teaser only (data file untouched, only display labels change here):

- Standard Rooms → **Standard** — "Clean, comfortable single rooms with attached bathroom. Ideal for short stays and solo travellers."
- Family Apartment → **Family** — "Full 2BHK apartment with 2 bedrooms, a hall, and a kitchen. Sleeps up to 7 — perfect for families."
- Deluxe Suites → **Executive Suites** — "Spacious open-plan suite with a sitting area and king bed. Great for longer or premium stays."

> Note: the `/rooms` page will still show the existing names (Standard Rooms / Deluxe Suites / Family Apartment). If you want the rooms page to also say "Executive Suites" instead of "Deluxe Suites", say the word and I'll update `src/lib/rooms.ts` too.

## Files

**Edited**
- `src/components/landing/RoomsTeaser.tsx` — full rewrite of the cards; keep the section heading, intro, and `Reveal` wrappers; remove the image, count badge, price row, and the desktop overlap/rotation styling.

**Not touched**
- `src/lib/rooms.ts`, `/rooms` route, `RoomCard`, `RoomCategory`, Navbar, Footer, Hero, everything else.

## Out of scope

- No changes to the `/rooms` browsing page or any room data.
- No new images, icons, dependencies, or routes.
- No price displayed on the home cards (kept on the `/rooms` page).
