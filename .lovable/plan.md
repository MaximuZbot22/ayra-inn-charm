## Goal

Turn the current static `Rooms` section into a two-level experience:

1. **Home** — a compact teaser with 3 stacked cards (Standard / Executive / Suite) that link into a dedicated rooms page.
2. **`/rooms` page** — a full browsing page with collapsible categories. Each room expands inline to show a small image carousel + short description + amenities.

Routing is real (TanStack Router), so the browser back button returns the user to exactly where they were on the home page — no full reload, scroll position preserved.

## Room inventory (from your message)

- **Standard** — 4× Executive Rooms (single bedroom + attached bathroom)
- **Deluxe** — 3× Executive Suites (sitting area + bedroom, open layout)
- **Family** — 1× 2BHK Apartment (2 bedrooms, hall, kitchen, sleeps 7)

Naming uses the existing `Standard / Deluxe / Family` labels per your choice, with the original room type shown as a subtitle (e.g. "Deluxe · Executive Suite").

## Home page — "Rooms we have available"

Replaces the current `Rooms.tsx` grid. New layout:

- Section heading stays ("Pick the room that suits your stay").
- Three cards in a stacked/overlapping arrangement on desktop — middle card front and slightly larger, the two outer cards rotated/offset behind it. On mobile they stack vertically (no overlap, just normal cards).
- Each card shows: cover image, category name, room type subtitle, count badge ("4 rooms available"), starting price, and a "View rooms →" affordance.
- The whole card is a `<Link to="/rooms/$category" params={{category: "executive"}}>` — clicking deep-links into the rooms page with that category pre-expanded.

## `/rooms` page

New route `src/routes/rooms.$category.tsx` with `$category` as an **optional** segment so both `/rooms` and `/rooms/executive` work.

Structure:

```text
Header (sticky, slim) — back link, "Our Rooms" title
Intro paragraph
─────────────────────────────
[▼] Standard Rooms · 4 available          ← collapsible category
     ├── Room 1   [▼ click to expand]
     │     ↳ image carousel + description + amenities + Call to Book
     ├── Room 2   [▶]
     ├── Room 3   [▶]
     └── Room 4   [▶]
[▶] Deluxe Suites · 3 available
[▶] Family Apartment · 1 available
```

Behavior:

- Two-level accordion (shadcn `Accordion` already in the project). Outer accordion = categories, inner accordion = individual rooms.
- Multiple panels can be open at once (`type="multiple"`).
- When arriving from a home card, the matching category is auto-opened; other categories stay collapsed.
- Each individual room, when expanded, shows: 4–6 placeholder images in a small carousel (shadcn `Carousel`, already installed), a 1–2 sentence description, an amenities row (icons), and a "Call to Book" button (`tel:` link to existing `SITE.phoneHref`).
- Placeholder images: reuse existing `room-standard.jpg`, `room-deluxe.jpg`, `room-family.jpg`, `gallery-1/2/3.jpg` from `src/assets/`. Each room gets a 4-image set cycled from this pool — easy to swap with your real photos later.

## History / back-button behavior

This is handled for free by TanStack Router:

- Clicking a card uses `<Link>` → real client-side navigation pushes onto history.
- Browser back returns to `/` without a hard reload; React state is preserved (the rest of the home page stays mounted-in-memory because TanStack keeps route trees, and scroll restoration is already enabled in `src/router.tsx`).
- The expanded accordion state on `/rooms` is encoded via the URL param (`/rooms/executive`), so reopening the back/forward stack restores what the user was looking at.

## Files

**New**
- `src/routes/rooms.$category.tsx` — the rooms page (optional `$category` param via `{-$category}` syntax).
- `src/components/landing/RoomsTeaser.tsx` — new 3-card stacked teaser used on home.
- `src/components/landing/RoomCategory.tsx` — outer collapsible category wrapper.
- `src/components/landing/RoomCard.tsx` — inner collapsible single-room card with image carousel.
- `src/lib/rooms.ts` — single source of truth for room data (categories, counts, per-room name/description/amenities/image list).

**Edited**
- `src/routes/index.tsx` — swap `<Rooms />` for `<RoomsTeaser />`.
- `src/components/landing/Navbar.tsx` / `MobileMenu.tsx` — point the "Rooms" link to `/rooms` instead of `#rooms`.
- `src/lib/site.ts` — update the nav anchor entry.

**Removed**
- `src/components/landing/Rooms.tsx` (replaced by `RoomsTeaser` + the new `/rooms` page).

## Technical notes

- Route file uses `createFileRoute("/rooms/{-$category}")` so `/rooms` and `/rooms/standard|deluxe|family` all resolve to the same component.
- The component reads `Route.useParams()` to get `category`, validates it against the 3 known slugs (anything else → all collapsed), and passes it to the accordion's `defaultValue`.
- `head()` on the new route sets a distinct title/description ("Our Rooms — Ayra Inn") and adds canonical + og tags per the route-architecture rules. Category-specific titles when `category` is present (e.g. "Executive Suites — Ayra Inn").
- No new dependencies. Reuses Framer Motion, shadcn `Accordion`, shadcn `Carousel`, existing tokens and `Reveal` wrapper.
- Mobile-first: cards stack at <768px; stacked/overlapping teaser only on `md:`+.

## Out of scope

- No booking flow, no forms, no auth.
- No image uploads yet — placeholders only, structured so you can drop real photos into `src/lib/rooms.ts` later.
- No changes to Hero, InfoBar, Amenities, Gallery, About, Location, Footer.
