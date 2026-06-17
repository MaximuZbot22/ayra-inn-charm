import { MapPin, Phone, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section id="location" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Location
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              Find us in Kochi.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-card aspect-[4/3] md:aspect-auto md:h-full">
              <iframe
                title="Ayra Inn location"
                src={SITE.mapEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 h-full flex flex-col">
              <div className="space-y-5">
                <Item icon={<MapPin size={18} />} label="Address" value={SITE.address} />
                <Item
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={
                    <a href={SITE.phoneHref} className="hover:text-primary">
                      {SITE.phone}
                    </a>
                  }
                />
                <Item icon={<Navigation size={18} />} label="Check-In" value="Coordinated 24/7" />
              </div>
              <a
                href={SITE.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep mt-8"
              >
                <Navigation size={16} /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-foreground font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
}
