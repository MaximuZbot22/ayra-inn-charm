
## Goal

Replace the cramped accordion-inside-accordion `/rooms` page with the **Editorial Gallery** direction you picked — every room gets its own full-width editorial card with a large 16:10 photo carousel, calm typography, and a generous "Call to Book" button. No more tiny thumbnails, no more nested collapsibles.

## Composition (per the picked prototype)

Each individual room renders as a single editorial card, top to bottom:

1. **Large image carousel** — 16:10, soft rounded-2xl, subtle shadow. shadcn `Carousel` with autoplay-free swipe + carousel dots overlaid bottom-center (matching the prototype's dot indicator). Hover zoom on desktop.
2. **Meta row** — left: teal uppercase eyebrow ("Standard · Room 2 of 4"), then serif room name. Right: "Starting from" label + ₹price.
3. **Description** — 1–2 sentence body, max-w-2xl, muted-foreground.
4. **Amenity chips** — soft gray pill chips, wrap row.
5. **Call to Book** — full-width pill on mobile, auto-width on desktop, teal-600 with soft teal shadow.

Cards are stacked with `space-y-16`. No accordions, no expand/collapse. Everything is visible — that's the point.

## Page structure

```text
┌────────────────────────────────────┐
│ Navbar                             │
├────────────────────────────────────┤
│ ← Back to home                     │
│ OUR ROOMS                          │
│ Find the room that fits            │
│ your stay.                         │
│ intro paragraph                    │
│                                    │
│ ── Standard Rooms · 4 available ── │  ← quiet section divider
│ [editorial card — Standard Room 1] │
│ [editorial card — Standard Room 2] │
│ [editorial card — Standard Room 3] │
│ [editorial card — Standard Room 4] │
│                                    │
│ ── Deluxe Suites · 3 available  ── │
│ [editorial card — Deluxe 1..3]     │
│                                    │
│ ── Family Apartment · 1 available ─│
│ [editorial card — 2BHK]            │
├────────────────────────────────────┤
│ Footer                             │
└────────────────────────────────────┘
```

- Page width: `max-w-4xl` (matches prototype) — generous gutters on desktop, full-bleed on mobile.
- Category dividers are simple — a teal eyebrow + serif H2 + count line + thin border-top. No collapsing.
- When the URL has `/rooms/standard|deluxe|family`, the page **smooth-scrolls** to that category section on mount instead of expanding an accordion.

## Files

**Edited (full rewrite)**
- `src/routes/rooms.{-$category}.tsx` — drop the `<Accordion>`, render category sections as simple anchored blocks, scroll into view on mount when `category` param matches.
- `src/components/landing/RoomCategory.tsx` — becomes a flat `<section id={slug}>` with the category header band + list of `RoomCard`s. No accordion item.
- `src/components/landing/RoomCard.tsx` — flat editorial card (image carousel hero + meta row + description + chips + CTA). No accordion item.

**Not touched**
- `src/lib/rooms.ts` (data unchanged).
- `src/components/landing/RoomsTeaser.tsx` (home teaser unchanged — already the color-block style you approved).
- Navbar, Footer, Hero, Amenities, Gallery, About, Location.
- `head()` metadata logic on the route — kept as-is.

## Implementation notes

- shadcn `Carousel` (already installed) for the image gallery; render small white dot indicators absolute-bottom-center to match the prototype. Prev/next arrows shown on desktop hover only; mobile uses swipe.
- Eyebrow text per room: `{categoryName} · Room {n} of {total}`. Family Apartment shows `Exclusive Unit` (single-unit case) per the prototype.
- Price source: `category.startingPrice` shown on every card in that category (data doesn't track per-room price).
- Chips: pull from `room.amenities`, show first 4, soft `bg-gray-50 border-gray-100` style from the prototype mapped to our `bg-muted border-border` tokens so it stays themed.
- "Back to home" link kept at top.
- Smooth scroll on category deep-link: `useEffect` reads param, does `document.getElementById(slug)?.scrollIntoView({behavior:'smooth', block:'start'})` after layout settles.

## Tokens

Colors map to existing tokens — no hard-coded teal/gray:
- `text-teal-600` → `text-primary`
- `bg-teal-600 hover:bg-teal-700` → `bg-primary hover:bg-primary-deep`
- `text-gray-900` → `text-foreground`
- `text-gray-500/600` → `text-muted-foreground`
- `bg-gray-50 border-gray-100` → `bg-muted border-border`
- `shadow-sm shadow-teal-100` → existing `shadow-soft`

Fonts: existing project serif/sans pair (no Playfair/Inter import — Lovable's stack already has display+body wired).

## Out of scope

- No filters, no search, no calendar, no booking flow.
- No changes to home, navbar, footer, or room data.
- No new dependencies.
