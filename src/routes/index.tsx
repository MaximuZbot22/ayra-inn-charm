import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { InfoBar } from "@/components/landing/InfoBar";
import { Amenities } from "@/components/landing/Amenities";
import { Gallery } from "@/components/landing/Gallery";
import { About } from "@/components/landing/About";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";
import { LISTINGS } from "@/lib/rooms";
import { ListingCard } from "@/components/landing/ListingCard";
import { Reveal } from "@/components/landing/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayra Inn — Comfortable Rooms in Kochi, Kerala" },
      {
        name: "description",
        content:
          "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support. Call to check availability today.",
      },
      { property: "og:title", content: "Ayra Inn — Comfortable Rooms in Kochi" },
      {
        property: "og:description",
        content:
          "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Ayra Inn",
          description:
            "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          telephone: "+919876543210",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <InfoBar />

        {/* Rooms Section */}
        <section id="rooms" className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <div className="max-w-2xl mb-12 sm:mb-16">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
                  Our Stays
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
                  Pick the room that suits your stay.
                </h2>
                <p className="mt-4 text-muted-foreground text-balance">
                  Four comfortable spaces in Kalamassery, Kochi — explore detail galleries and features.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12">
                {LISTINGS.map((listing, i) => (
                  <ListingCard key={listing.slug} listing={listing} index={i} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Amenities />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
