import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Listing } from "@/lib/rooms";

type Props = {
  listing: Listing;
  open: boolean;
  onClose: () => void;
  initialCategory?: string;
};

export function PhotoTour({ listing, open, onClose, initialCategory }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !initialCategory) return;
    const id = sectionId(initialCategory);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [open, initialCategory]);

  if (!open) return null;

  const scrollTo = (name: string) => {
    const el = document.getElementById(sectionId(name));
    if (!el || !scrollRef.current) return;
    const top = el.offsetTop - 96;
    scrollRef.current.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <div className="sticky top-0 z-10 flex items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 sm:px-8 h-16">
        <button
          onClick={onClose}
          aria-label="Close photo tour"
          className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted transition-colors"
        >
          <X size={18} />
        </button>
        <div className="font-display text-base sm:text-lg text-foreground truncate">
          {listing.name}
        </div>
      </div>

      <div ref={scrollRef} className="h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="mx-auto max-w-5xl px-4 sm:px-8 py-8 sm:py-12">
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-6">
            Photo tour
          </h2>

          {/* Category nav strip */}
          <div className="flex gap-5 overflow-x-auto pb-6 mb-8 border-b border-border -mx-1 px-1">
            {listing.photoTour.map((cat) => (
              <button
                key={cat.name}
                onClick={() => scrollTo(cat.name)}
                className="group flex flex-col items-start gap-2 shrink-0 w-32 text-left"
              >
                <div className="h-20 w-32 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={cat.images[0]}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <span className="text-xs text-foreground/80 group-hover:text-foreground">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {listing.photoTour.map((cat) => (
              <section key={cat.name} id={sectionId(cat.name)} className="scroll-mt-24">
                <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4">
                  {cat.name}
                </h3>
                <div className="columns-1 sm:columns-2 gap-3 [&>*]:mb-3">
                  {cat.images.map((src, i) => (
                    <div
                      key={i}
                      className="break-inside-avoid overflow-hidden rounded-xl bg-muted"
                    >
                      <img
                        src={src}
                        alt={`${cat.name} ${i + 1}`}
                        loading="lazy"
                        className="w-full h-auto block"
                      />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function sectionId(name: string) {
  return `tour-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
