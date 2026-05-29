import { Phone, Check } from "lucide-react";
import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

const rooms = [
  {
    name: "Standard Room",
    img: roomStandard,
    price: "₹1,200",
    features: ["1 Double Bed", "Air Conditioning", "Free WiFi", "Private Bathroom"],
  },
  {
    name: "Deluxe Room",
    img: roomDeluxe,
    price: "₹1,800",
    features: ["King Size Bed", "Premium Linens", "Work Desk", "Tea/Coffee Maker"],
  },
  {
    name: "Family Room",
    img: roomFamily,
    price: "₹2,400",
    features: ["2 Queen Beds", "Sleeps 4", "Extra Space", "Large Window"],
  },
];

export function Rooms() {
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
              Three simple options, all clean and comfortable. Call us anytime to
              confirm availability — we're open 24/7.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rooms.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-soft transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      {r.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-xl font-semibold text-primary">{r.price}</div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        per night
                      </div>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground flex-1">
                    {r.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check size={14} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={SITE.phoneHref}
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
                  >
                    <Phone size={15} /> Call to Book
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
