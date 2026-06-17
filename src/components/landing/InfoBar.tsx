import { Clock, Wifi, Snowflake, Car, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Clock, label: "Open 24/7" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Snowflake, label: "AC Rooms" },
  { icon: Car, label: "Free Parking" },
  { icon: Users, label: "Family Friendly" },
];

export function InfoBar() {
  return (
    <section id="info" className="relative -mt-6 sm:-mt-16 z-10 px-4 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-2xl bg-card shadow-soft border border-border/60 p-4 sm:p-6">
          <ul className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl px-3 py-3 sm:flex-col sm:text-center sm:py-4 hover:bg-secondary/60 transition"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
