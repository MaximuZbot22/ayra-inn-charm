import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RoomCardList } from "./RoomCard";
import type { RoomCategory as RoomCategoryT } from "@/lib/rooms";

export function RoomCategorySection({ category }: { category: RoomCategoryT }) {
  return (
    <AccordionItem
      value={category.slug}
      className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card"
    >
      <AccordionTrigger className="px-5 sm:px-6 py-5 hover:no-underline">
        <div className="flex flex-1 items-center gap-4 text-left">
          <img
            src={category.cover}
            alt=""
            className="h-16 w-16 rounded-xl object-cover"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {category.subtitle}
            </p>
            <div className="font-display text-2xl font-semibold text-foreground">
              {category.name}
            </div>
            <div className="text-xs text-muted-foreground mt-0.5">
              {category.rooms.length}{" "}
              {category.rooms.length === 1 ? "room" : "rooms"} available · from{" "}
              <span className="text-primary font-semibold">
                {category.startingPrice}
              </span>{" "}
              / night
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 sm:px-6 pb-6">
        <p className="text-sm text-muted-foreground mb-5">{category.blurb}</p>
        <RoomCardList rooms={category.rooms} />
      </AccordionContent>
    </AccordionItem>
  );
}
