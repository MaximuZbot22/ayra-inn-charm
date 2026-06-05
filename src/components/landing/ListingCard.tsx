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
import type { Listing } from "@/lib/rooms";
import { cn } from "@/lib/utils";

type Props = {
  listing: Listing;
  index: number;
};

export function ListingCard({ listing, index }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const metaBits: string[] = [
    `${listing.guests} guest${listing.guests === 1 ? "" : "s"}`,
    listing.bedrooms != null
      ? `${listing.bedrooms} bedroom${listing.bedrooms === 1 ? "" : "s"}`
      : null,
    `${listing.beds} bed${listing.beds === 1 ? "" : "s"}`,
    listing.bathrooms,
  ].filter((x): x is string => Boolean(x));

  const topAmenities = listing.amenities.slice(0, 4);
  const remaining = Math.max(0, listing.amenities.length - topAmenities.length);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-soft">
        <Carousel setApi={setApi} className="h-full w-full">
          <CarouselContent className="h-full">
            {listing.images.map((src, i) => (
              <CarouselItem key={i} className="h-full">
                <img
                  src={src}
                  alt={`${listing.name} photo ${i + 1}`}
                  loading={index === 0 && i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="right-3 hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 pointer-events-none">
          {listing.images.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-1.5 rounded-full shadow-sm transition-all",
                i === current ? "bg-white scale-110" : "bg-white/55",
              )}
            />
          ))}
        </div>
      </div>

      <div className="pt-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-foreground leading-snug">
            {listing.name}
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5">{listing.type}</p>
        <p className="text-sm text-muted-foreground mt-1">{metaBits.join(" · ")}</p>

        <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-3">
          {listing.blurb}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {topAmenities.map((a) => (
            <span
              key={a}
              className="px-2.5 py-1 bg-muted border border-border rounded-full text-[11px] text-muted-foreground"
            >
              {a}
            </span>
          ))}
          {remaining > 0 && (
            <span className="px-2.5 py-1 rounded-full text-[11px] text-muted-foreground">
              +{remaining} more
            </span>
          )}
        </div>

        <a
          href={SITE.phoneHref}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-deep text-primary-foreground font-medium rounded-full transition-all shadow-soft"
        >
          <Phone size={14} /> Call for rates
        </a>
      </div>
    </article>
  );
}
