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
              <div className="lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-xl text-foreground">Call for rates</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Reception is open 24/7 — we'll confirm rates and availability over the
                  phone.
                </p>
                <a
                  href={SITE.phoneHref}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-deep text-primary-foreground font-medium rounded-full transition-all shadow-soft"
                >
                  <Phone size={14} /> {SITE.phone}
                </a>
                <button
                  type="button"
                  onClick={() => setTourOpen(true)}
                  className="mt-3 w-full text-sm text-primary hover:underline"
                >
                  See all photos
                </button>
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
