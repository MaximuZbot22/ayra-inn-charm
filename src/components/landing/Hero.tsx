import { ChevronDown, Phone, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[88svh] sm:min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      <img
        src={hero}
        alt="Ayra Inn — warm exterior at golden hour"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[60%_center] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/85 sm:from-black/55 sm:via-black/30 sm:to-black/80" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-32 pt-24 sm:pt-40">
        {/* Status chip */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md border border-white/15">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open now · 24/7
        </div>

        <h1 className="mt-4 sm:mt-5 max-w-3xl font-display text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl font-semibold text-white text-balance">
          Comfortable Rooms.
          <br />
          <span className="italic font-medium text-[color:var(--gold-soft)]">
            Simple Stay.
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-base sm:text-lg text-white/85 text-balance">
          Affordable, clean rooms available 24/7 in the heart of Kochi.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
          <div className="flex text-[color:var(--gold-soft)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span>Loved by travellers in Kochi</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <a
            href="#rooms"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary-deep hover:shadow-xl active:scale-[0.98]"
          >
            Check Availability
          </a>
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href={SITE.phoneHref}
            className="sm:hidden inline-flex items-center gap-2 text-sm text-white/85 underline-offset-4 hover:underline pt-1"
          >
            <Phone size={14} /> or call {SITE.phone}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#info"
        aria-label="Scroll to explore"
        className="absolute bottom-6 left-1/2 hidden sm:flex -translate-x-1/2 flex-col items-center gap-1 text-white/70 hover:text-white"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown size={18} className="bounce-soft" />
      </a>
    </section>
  );
}
