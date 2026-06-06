import { Grid3x3 } from "lucide-react";
import { coverImages, type Listing } from "@/lib/rooms";

type Props = {
  listing: Listing;
  onOpenTour: () => void;
};

export function HeroGallery({ listing, onOpenTour }: Props) {
  const imgs = coverImages(listing, 5);
  const [hero, ...rest] = imgs;
  const grid = rest.slice(0, 4);

  if (!hero) return null;

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[2/1]">
        <button
          type="button"
          onClick={onOpenTour}
          className="md:col-span-2 md:row-span-2 relative group bg-muted overflow-hidden"
        >
          <img
            src={hero}
            alt={`${listing.name} hero`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </button>
        {grid.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={onOpenTour}
            className="hidden md:block relative group bg-muted overflow-hidden"
          >
            <img
              src={src}
              alt={`${listing.name} ${i + 2}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenTour}
        className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-sm font-medium text-foreground border border-border shadow-soft hover:bg-background transition-colors"
      >
        <Grid3x3 size={14} /> Show all photos
      </button>
    </div>
  );
}
