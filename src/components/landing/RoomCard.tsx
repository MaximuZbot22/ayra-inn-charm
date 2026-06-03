import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SITE } from "@/lib/site";
import type { Room, RoomCategory } from "@/lib/rooms";
import { cn } from "@/lib/utils";

type Props = {
  room: Room;
  category: RoomCategory;
  index: number;
};

export function RoomCard({ room, category, index }: Props) {
  const total = category.rooms.length;
  const eyebrow =
    total === 1
      ? "Exclusive Unit"
      : `${category.name} · Room ${index + 1} of ${total}`;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <article className="group">
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-soft mb-6">
        <Carousel setApi={setApi} className="h-full w-full">
          <CarouselContent className="h-full">
            {room.images.map((src, i) => (
              <CarouselItem key={i} className="h-full">
                <img
                  src={src}
                  alt={`${room.name} photo ${i + 1}`}
                  loading={index === 0 && i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover aspect-[16/10] transition-transform duration-700 group-hover:scale-105"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="right-3 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
          {room.images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-2 w-2 rounded-full shadow-sm transition-all",
                i === current ? "bg-white" : "bg-white/50",
              )}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-start mb-4">
        <div>
          <span className="block text-xs font-medium uppercase tracking-wider text-primary mb-1">
            {eyebrow}
          </span>
          <h3 className="font-display text-2xl font-medium text-foreground">
            {room.name}
          </h3>
        </div>
        <div className="sm:text-right">
          <p className="text-xs uppercase tracking-tighter text-muted-foreground">
            Starting from
          </p>
          <p className="text-xl font-semibold text-foreground">
            {category.startingPrice}{" "}
            <span className="text-sm font-normal text-muted-foreground">
              / night
            </span>
          </p>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 max-w-2xl leading-relaxed">
        {room.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {room.amenities.slice(0, 4).map((a) => (
          <span
            key={a}
            className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground"
          >
            {a}
          </span>
        ))}
      </div>

      <a
        href={SITE.phoneHref}
        className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-deep text-primary-foreground font-medium rounded-full transition-all shadow-soft"
      >
        <Phone size={15} /> Call to Book
      </a>
    </article>
  );
}
