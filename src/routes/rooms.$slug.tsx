import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Phone, Check } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { HeroGallery } from "@/components/landing/HeroGallery";
import { PhotoTour } from "@/components/landing/PhotoTour";
import { findListing, LISTINGS, coverImages } from "@/lib/rooms";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/rooms/$slug")({
  beforeLoad: ({ params }) => {
    if (!findListing(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const listing = findListing(params.slug);
    if (!listing) return {};
    const title = `${listing.name} — Ayra Inn, Kochi`;
    const description = listing.blurb;
    const ogImage = coverImages(listing, 1)[0];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
        ...(ogImage ? [{ name: "twitter:image", content: ogImage }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <p className="font-display text-3xl text-foreground">We couldn't find that stay</p>
        <p className="text-sm text-muted-foreground mt-2">
          The link may be out of date. Browse all our stays below.
        </p>
        <Link
          to="/rooms/{-$category}"
          params={{ category: undefined }}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors"
        >
          View all stays
        </Link>
      </div>
    </div>
  ),
  component: ListingDetail,
});

function ListingDetail() {
  const { slug } = Route.useParams();
  const listing = findListing(slug)!;
  const [tourOpen, setTourOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const metaBits = [
    `${listing.guests} guest${listing.guests === 1 ? "" : "s"}`,
    listing.bedrooms != null ? `${listing.bedrooms} bedroom${listing.bedrooms === 1 ? "" : "s"}` : null,
    `${listing.beds} bed${listing.beds === 1 ? "" : "s"}`,
    listing.bathrooms,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Link
            to="/rooms/{-$category}"
            params={{ category: undefined }}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={15} /> All stays
          </Link>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-2">
            {listing.name}
          </h1>
          <p className="text-muted-foreground mb-6">{listing.type}</p>

          <HeroGallery listing={listing} onOpenTour={() => setTourOpen(true)} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-2">
                  About this place
                </h2>
                <p className="text-sm text-muted-foreground">{metaBits.join(" · ")}</p>
                <p className="text-foreground/85 leading-relaxed mt-4">{listing.blurb}</p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">
                  What this place offers
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-3 text-foreground/85">
                      <Check size={16} className="text-primary shrink-0" />
                      <span className="text-sm">{a}</span>
                    </li>
                  ))}
                  {listing.unavailable?.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-3 text-muted-foreground line-through"
                    >
                      <span className="text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {listing.spaces && listing.spaces.length > 0 && (
                <section>
                  <h2 className="font-display text-2xl text-foreground mb-4">
                    Where you'll be
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {listing.spaces.map((s) => (
                      <div
                        key={s.name}
                        className="rounded-xl border border-border p-4 bg-card"
                      >
                        <p className="font-medium text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {s.amenities.join(" · ")}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-6 shadow-soft space-y-5">
                <div>
                  <h3 className="font-display text-xl text-foreground font-semibold">Confirm rates & book</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Select your stay details to check availability and rates directly with host Mohammed via WhatsApp.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Check-Out Date
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                      Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    >
                      {Array.from({ length: listing.guests || 2 }).map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} guest{i + 1 === 1 ? "" : "s"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                      `Hi Mohammed, I'd like to book ${listing.name} for ${guests} guest${guests === 1 ? "" : "s"}` +
                        (checkIn ? ` checking in on ${checkIn}` : "") +
                        (checkOut ? ` checking out on ${checkOut}` : "") +
                        ". Is it available?"
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white font-semibold rounded-full transition-all shadow-soft text-sm"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" />
                    </svg>
                    Book via WhatsApp
                  </a>

                  <a
                    href={SITE.phoneHref}
                    className="mt-2.5 flex w-full items-center justify-center gap-2 px-6 py-2.5 border border-border hover:bg-secondary text-foreground font-medium rounded-full transition-all text-sm"
                  >
                    <Phone size={14} className="text-muted-foreground" /> Call Host
                  </a>

                  <button
                    type="button"
                    onClick={() => setTourOpen(true)}
                    className="mt-3 w-full text-xs text-primary hover:underline block text-center"
                  >
                    See all photos
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />

      <PhotoTour
        listing={listing}
        open={tourOpen}
        onClose={() => setTourOpen(false)}
      />
    </div>
  );
}

// Suppress unused-import lint when LISTINGS isn't used directly
void LISTINGS;
