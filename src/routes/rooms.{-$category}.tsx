import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ListingCard } from "@/components/landing/ListingCard";
import { LISTINGS } from "@/lib/rooms";

export const Route = createFileRoute("/rooms/{-$category}")({
  head: () => {
    const title = "Our Stays — Ayra Inn";
    const description = `Browse all ${LISTINGS.length} stays at Ayra Inn, Kochi — a 2BHK apartment, two Deluxe units, and a Studio room. 24/7 check-in support.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="mb-10 sm:mb-14">
            <span className="block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Stays at Ayra Inn
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight">
              {LISTINGS.length} places to stay in Kochi.
            </h1>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed">
              From a full 2BHK apartment to private deluxe rooms and a cozy
              studio — pick what fits your stay. Contact our host team any time for
              rates and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12">
            {LISTINGS.map((listing, i) => (
              <ListingCard key={listing.slug} listing={listing} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
