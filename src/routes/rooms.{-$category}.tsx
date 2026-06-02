import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { RoomCategorySection } from "@/components/landing/RoomCategory";
import { ROOM_CATEGORIES, getCategory, CATEGORY_SLUGS } from "@/lib/rooms";

export const Route = createFileRoute("/rooms/{-$category}")({
  head: ({ params }) => {
    const cat = getCategory(params.category);
    const title = cat
      ? `${cat.name} — Ayra Inn`
      : "Our Rooms — Ayra Inn";
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
  const initialOpen = category && CATEGORY_SLUGS.includes(category as never)
    ? [category]
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition"
          >
            <ArrowLeft size={15} /> Back to home
          </Link>

          <div className="mt-6 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Our Rooms
            </p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Find the room that fits your stay.
            </h1>
            <p className="mt-4 text-muted-foreground text-balance">
              Tap a category to see every room inside it, then tap a room to
              browse photos and details. Call us anytime to confirm
              availability.
            </p>
          </div>

          <Accordion
            type="multiple"
            defaultValue={initialOpen}
            className="mt-10 space-y-4"
          >
            {ROOM_CATEGORIES.map((c) => (
              <RoomCategorySection key={c.slug} category={c} />
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
}
