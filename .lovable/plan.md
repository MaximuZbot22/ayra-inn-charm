# Ayra Inn — Hotel Landing Page

Single-page, mobile-first landing site. No booking, no auth — CTAs link to `tel:`, in-page anchors, and Google Maps.

## Brand decision

The brief mentions teal, but the uploaded logo is **deep forest green + warm gold** on white. I'll align the palette to the logo (premium, warmer, more "inn"-like) and reference "Ayra Inn" everywhere — not "Nice Day" (that was leftover from the earlier brief). If you'd rather keep teal as the accent, say so and I'll swap.

- Primary: deep forest green `oklch(0.32 0.05 155)`
- Accent: warm gold `oklch(0.72 0.11 75)`
- Surfaces: white + soft warm gray
- Text: dark charcoal

## Design system (`src/styles.css`)

- Add brand tokens (`--primary`, `--accent`, `--brand-cream`) in oklch
- Rounded corners (`--radius: 0.875rem`), soft shadows, generous spacing
- Inter via Google Fonts in `__root.tsx`, with optional Cormorant serif for the logo wordmark to echo the logo
- Global scrollbar hidden (keep touch/keyboard scroll)
- Subtle fade-in-up keyframes + hover-scale utility

## Route + components

Single page at `src/routes/index.tsx` (replaces placeholder). Sections live in `src/components/landing/`:

- **Navbar.tsx** — sticky. Desktop: clean white blurred bar with logo mark + "Ayra Inn" wordmark + anchor links. Mobile: floating translucent pill over hero, teal/green-tinted hamburger button with animated Menu↔X.
- **MobileMenu.tsx** — full-screen Framer Motion overlay (not shadcn Sheet). Forest-green gradient bg, faint hero texture, gold radial glow. Numbered display-size links (`01 — Home`…), staggered entrance, big tappable Call card, Get Directions pill + socials, "Kochi, Kerala · Open 24/7" footnote. Body scroll lock, close on link/Escape/backdrop.
- **Hero.tsx** — full-bleed hotel image, dark overlay melting into next section. Mobile: `min-h-[92svh]`, "Open now · 24/7" pulse chip, two-line headline ("Comfortable Rooms." / "Simple Stay." in cream italic), small star/trust line, solid primary "Check Availability" + ghost "or call +91 98765 43210", animated scroll-down chevron. Desktop: larger type, two-button layout.
- **InfoBar.tsx** — 5 quick-info cards (Clock, Wifi, Snowflake, Car, Users).
- **Rooms.tsx** — 3 cards (Standard / Deluxe / Family): image, ₹ price/night, feature list, "Call to Book" → `tel:`.
- **Amenities.tsx** — 6-icon grid (Wifi, Car, Snowflake, Shirt, Concierge/Clock, UtensilsCrossed).
- **Gallery.tsx** — responsive CSS grid with varied spans.
- **About.tsx** — short paragraph + soft image. Copy updated to reference Ayra Inn.
- **Location.tsx** — Google Maps `<iframe>` Kochi embed (no API key), address, phone, "Get Directions" → `maps/dir/?api=1&destination=Kochi,Kerala`.
- **Footer.tsx** — name, contact, address, quick links, social icons.

All sections wrapped in lightweight Framer Motion `whileInView` fade-up.

## Imagery

Generate 8 images with `imagegen` (fast tier, jpg) into `src/assets/`:

- `hero.jpg` — warm exterior of small modern Indian boutique inn at golden hour
- `room-standard.jpg`, `room-deluxe.jpg`, `room-family.jpg`
- `gallery-1/2/3.jpg` — lobby, bathroom detail, breakfast corner
- `about.jpg` — facade / hallway

Logo: copy uploaded image to `src/assets/ayra-inn-logo.png`, use in Navbar + Footer.

## CTAs

- Call Now → `tel:+919876543210`
- Check Availability → smooth scroll to `#rooms`
- Get Directions → Google Maps URL above

## SEO

Override `head()` in `src/routes/index.tsx`:

- title: "Ayra Inn — Comfortable Rooms in Kochi, Kerala"
- description (~155 chars) about clean 24/7 rooms
- og:title, og:description, og:image (hero), twitter card
- Single H1 in Hero

## Technical notes

- Tailwind v4 tokens in `src/styles.css` `@theme inline`
- New dep: `framer-motion` (via `bun add`)
- shadcn Button + Card reused; Sheet not needed (custom mobile menu)
- No new routes, no backend, no Lovable Cloud
- No booking, forms, auth, or database
