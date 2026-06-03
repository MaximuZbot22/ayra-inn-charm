import { RoomCard } from "./RoomCard";
import type { RoomCategory as RoomCategoryT } from "@/lib/rooms";

export function RoomCategorySection({ category }: { category: RoomCategoryT }) {
  return (
    <section id={category.slug} className="scroll-mt-28">
      <header className="border-t border-border pt-8 mb-10">
        <span className="block text-xs font-semibold tracking-widest text-primary uppercase mb-2">
          {category.subtitle}
        </span>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground">
            {category.name}
          </h2>
          <p className="text-sm text-muted-foreground">
            {category.rooms.length}{" "}
            {category.rooms.length === 1 ? "room" : "rooms"} available · from{" "}
            <span className="text-primary font-semibold">
              {category.startingPrice}
            </span>{" "}
            / night
          </p>
        </div>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          {category.blurb}
        </p>
      </header>

      <div className="space-y-16">
        {category.rooms.map((room, i) => (
          <RoomCard key={room.id} room={room} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}
