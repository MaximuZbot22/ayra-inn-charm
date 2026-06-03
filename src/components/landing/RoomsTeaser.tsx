import { Link } from "@tanstack/react-router";
import { ArrowRight, BedSingle, Users, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import type { CategorySlug } from "@/lib/rooms";
import { cn } from "@/lib/utils";

type TeaserItem = {
  slug: CategorySlug;
  title: string;
  description: string;
  Icon: LucideIcon;
  tone: "mid" | "deep" | "darkest";
};

const ITEMS: TeaserItem[] = [
  {
    slug: "standard",
    title: "Standard",
    description:
      "Clean, comfortable single rooms with attached bathroom. Ideal for short stays and solo travellers.",
    Icon: BedSingle,
    tone: "mid",
  },
  {
    slug: "family",
    title: "Family",
    description:
      "Full 2BHK apartment with 2 bedrooms, a hall, and a kitchen. Sleeps up to 7 — perfect for families.",
    Icon: Users,
    tone: "deep",
  },
  {
    slug: "deluxe",
    title: "Executive Suites",
    description:
      "Spacious open-plan suite with a sitting area and king bed. Great for longer or premium stays.",
    Icon: Sparkles,
    tone: "darkest",
  },
];

const TONE_BG: Record<TeaserItem["tone"], string> = {
  mid: "bg-primary",
  deep: "bg-primary-deep",
  darkest: "bg-[color-mix(in_oklab,var(--primary-deep)_70%,black)]",
};

export function RoomsTeaser() {
  return (
    <section id="rooms" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Our Rooms
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Pick the room that suits your stay.
            </h2>
            <p className="mt-4 text-muted-foreground text-balance">
              Three styles to choose from — tap a card to explore every room in
              that category. Reception is open 24/7.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl shadow-soft grid grid-cols-1 md:grid-cols-3">
            {ITEMS.map((item) => (
              <TeaserCard key={item.slug} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeaserCard({ item }: { item: TeaserItem }) {
  const { Icon } = item;
  return (
    <Link
      to="/rooms/{-$category}"
      params={{ category: item.slug }}
      className={cn(
        "group relative flex flex-col p-7 sm:p-10 min-h-[340px] md:min-h-[420px] text-white transition-colors",
        TONE_BG[item.tone],
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
        <Icon size={20} className="text-white" />
      </div>

      <h3 className="mt-8 font-display text-3xl sm:text-4xl font-semibold leading-tight">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/85 max-w-sm">
        {item.description}
      </p>

      <div className="mt-auto pt-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary-deep transition-all group-hover:gap-3">
          Learn More
          <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
