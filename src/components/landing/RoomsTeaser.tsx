import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ROOM_CATEGORIES } from "@/lib/rooms";
import { cn } from "@/lib/utils";

export function RoomsTeaser() {
  // Order: standard, family (middle/front), deluxe — so middle card is the highlight
  const ordered = [
    ROOM_CATEGORIES[0],
    ROOM_CATEGORIES[2],
    ROOM_CATEGORIES[1],
  ];

  return (
    <section id="rooms" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Our Rooms
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Rooms we have available.
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Three styles to choose from — tap a card to explore every room in
              that category. Reception is open 24/7.
            </p>
          </div>
        </Reveal>

        {/* Mobile: clean stacked cards */}
        <div className="mt-12 grid gap-5 md:hidden">
          {ROOM_CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <TeaserCard category={c} />
            </Reveal>
          ))}
        </div>

        {/* Desktop: stacked / overlapping with middle card in front */}
        <div className="mt-16 hidden md:grid md:grid-cols-3 md:gap-6 md:items-center">
          {ordered.map((c, i) => {
            const isMiddle = i === 1;
            return (
              <Reveal key={c.slug} delay={i * 0.08}>
                <div
                  className={cn(
                    "transition-transform duration-500",
                    isMiddle
                      ? "md:scale-105 md:z-10"
                      : i === 0
                        ? "md:-rotate-2 md:translate-x-4 md:opacity-95"
                        : "md:rotate-2 md:-translate-x-4 md:opacity-95",
                  )}
                >
                  <TeaserCard category={c} highlight={isMiddle} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeaserCard({
  category,
  highlight,
}: {
  category: (typeof ROOM_CATEGORIES)[number];
  highlight?: boolean;
}) {
  return (
    <Link
      to="/rooms/{-$category}"
      params={{ category: category.slug }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 transition-all hover:-translate-y-1",
        highlight ? "shadow-soft" : "shadow-card hover:shadow-soft",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.cover}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-primary-deep">
          {category.rooms.length}{" "}
          {category.rooms.length === 1 ? "room" : "rooms"} available
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {category.subtitle}
        </p>
        <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">
          {category.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {category.blurb}
        </p>
        <div className="mt-5 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-muted-foreground">from </span>
            <span className="text-lg font-semibold text-primary">
              {category.startingPrice}
            </span>
            <span className="text-xs text-muted-foreground"> / night</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
            View rooms <ArrowRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}
