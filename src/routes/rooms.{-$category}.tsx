import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { RoomCategorySection } from "@/components/landing/RoomCategory";
import { ROOM_CATEGORIES, getCategory, CATEGORY_SLUGS } from "@/lib/rooms";

export const Route = createFileRoute("/rooms/{-$category}")({
  head: ({ params }) => {
    const cat = getCategory(params.category);
    const title = cat ? `${cat.name} — Ayra Inn` : "Our Rooms — Ayra Inn";
    const description = cat
      ? `${cat.blurb} ${cat.rooms.length} ${cat.rooms.length === 1 ? "room" : "rooms"} available at Ayra Inn, Kochi.`
      : "Browse all room categories at Ayra Inn — Standard Rooms, Deluxe Suites, and a 2BHK Family Apartment. Open 24/7 in Kochi, Kerala.";
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
  const { category } = Route.useParams();

  useEffect(() => {
    if (category && CATEGORY_SLUGS.includes(category as never)) {
      // Wait a tick for layout to settle
      const id = window.setTimeout(() => {
        document
          .getElementById(category)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => window.clearTimeout(id);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="mb-16">
            <span className="block text-xs font-semibold tracking-widest text-primary uppercase mb-3">
              Our Rooms
            </span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Find the room that fits{" "}
              <br className="hidden md:block" />
              your stay.
            </h1>
            <p className="text-muted-foreground max-w-lg leading-relaxed">
              Discover our curated selection of comfortable rooms in the heart
              of Kochi. Each space is designed for a calm, restful stay — call
              reception anytime to confirm availability.
            </p>
          </div>

          <div className="space-y-20">
            {ROOM_CATEGORIES.map((c) => (
              <RoomCategorySection key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
