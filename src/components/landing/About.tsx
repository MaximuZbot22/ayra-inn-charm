import about from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="bg-cream/60 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src={about}
              alt="Inside Ayra Inn"
              loading="lazy"
              className="h-full w-full object-cover aspect-[4/5]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground text-balance">
              A simple, comfortable home for your stay.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Ayra Inn offers clean and comfortable rooms for travellers,
              families, and short stays. Located in a convenient area with easy
              access to transport, shops, and restaurants — and a friendly
              reception team available around the clock.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat n="24/7" label="Reception" />
              <Stat n="3" label="Room types" />
              <Stat n="★ 4.7" label="Guest rating" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-semibold text-primary">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
