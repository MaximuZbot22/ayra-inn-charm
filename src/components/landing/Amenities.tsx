import {
  Wifi,
  Car,
  Snowflake,
  Shirt,
  Concierge,
  UtensilsCrossed,
} from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Wifi, title: "Free WiFi", desc: "Fast in every room and the lobby." },
  { icon: Car, title: "Free Parking", desc: "On-site parking for guests." },
  { icon: Snowflake, title: "Air Conditioning", desc: "Cool, quiet rooms all year." },
  { icon: Shirt, title: "Laundry Service", desc: "Same-day on request." },
  { icon: Concierge, title: "24/7 Reception", desc: "Check in any time of day." },
  { icon: UtensilsCrossed, title: "Nearby Restaurants", desc: "Walk to local eateries." },
];

export function Amenities() {
  return (
    <section id="amenities" className="bg-secondary/40 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Amenities
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Everything you need for an easy stay.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="group flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/60 hover:border-primary/30 hover:shadow-card transition-all">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <it.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
