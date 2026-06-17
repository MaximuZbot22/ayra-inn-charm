import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Star, ChevronDown } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/assets/rooms/ayra-2bhk/01-living.avif",
    alt: "Ayra 2BHK Family Apartment",
    title: "Ayra 2BHK",
    subtitle: "2 Bedroom Apartment",
    details: "Sleeps 5 · 2 Beds · 2 Baths · Full Kitchen",
    slug: "ayra-2bhk",
  },
  {
    src: "/assets/rooms/ayra-deluxe/bedroom-1.avif",
    alt: "Ayra Deluxe Room",
    title: "Ayra Deluxe",
    subtitle: "Premium Double Room",
    details: "Sleeps 2 · 1 Queen Bed · Attached Bath",
    slug: "ayra-deluxe",
  },
  {
    src: "/assets/rooms/ayra-studio/bedroom-1.jpeg",
    alt: "Ayra Studio Stay",
    title: "Ayra Studio",
    subtitle: "Modern Cozy Studio",
    details: "Sleeps 2 · 1 Queen Bed · Workspace",
    slug: "ayra-studio",
  },
  {
    src: "/assets/rooms/ayra-deluxe-ii/bedroom-1.avif",
    alt: "Ayra Deluxe II Room",
    title: "Ayra Deluxe II",
    subtitle: "Elegant Private Room",
    details: "Sleeps 2 · 1 Bed · Workspace · Quiet Area",
    slug: "ayra-deluxe-ii",
  },
];

export function Hero() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (userInteracted) {
      const resumeTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 15000); // Resume autoplay after 15s of inactivity
      return () => clearTimeout(resumeTimer);
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [userInteracted]);

  const selectSlide = (index: number) => {
    setCurrentSlide(index);
    setUserInteracted(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = SITE.phone.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hi Mohammed, I'd like to check availability at Ayra Inn for ${guests} guest${guests === 1 ? "" : "s"}` +
        (checkIn ? ` checking in on ${checkIn}` : "") +
        (checkOut ? ` checking out on ${checkOut}` : "") +
        ". Is there a room available?"
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden pt-16 pb-16 md:pt-20 md:pb-20"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </AnimatePresence>
        {/* Cinematic dark gradients for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/45 to-black/65 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background hidden md:block" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-4 sm:px-6 z-10">
        {/* 1. Brand Section */}
        <div className="flex flex-col items-center pt-8 md:pt-16 md:items-start text-center md:text-left">
          {/* Glow status chip */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white border border-white/5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available Today · Host Coordinated 24/7
          </div>

          {/* Title & Subtitle */}
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-balance leading-tight">
            Ayra Inn
            <br className="md:hidden" />
            <span className="italic font-medium text-[color:var(--gold-soft)] block md:inline md:ml-3">
              Your home in Kochi.
            </span>
          </h1>

          {/* Description (desktop/tablet only to keep mobile clean) */}
          <p className="mt-3 text-xs sm:text-base text-white/80 leading-relaxed max-w-md hidden sm:block">
            Clean, spacious 2BHK apartments, deluxe rooms, and studio stays in North Kalamassery. Coordinate directly with host Mohammed for a stress-free stay.
          </p>

          {/* Trust bar (desktop/tablet only to save mobile vertical space) */}
          <div className="mt-4 flex items-center gap-2 text-[10px] sm:text-sm text-white/70 border-t border-white/5 pt-3 hidden sm:flex">
            <div className="flex text-[color:var(--gold-soft)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span>Rated 4.7/5 by families & travellers</span>
          </div>
        </div>

        {/* 2. Desktop Booking Form (hidden on mobile) */}
        <div className="hidden md:block w-full mt-auto">
          <form
            onSubmit={handleSearch}
            className="w-full rounded-2xl border border-border/80 bg-card p-5 shadow-soft"
          >
            <div className="flex w-full items-end gap-4">
              <div className="flex-1 grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full h-[38px] px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  >
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num === 1 ? "" : "s"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  className="inline-flex h-[38px] items-center justify-center gap-2 rounded-xl bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white px-6 text-sm font-semibold shadow-soft transition-all active:scale-[0.98]"
                >
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" />
                  </svg>
                  Inquire Availability
                </button>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border border-border hover:bg-secondary text-muted-foreground transition"
                  aria-label="Call Host"
                >
                  <Phone size={15} />
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* 3. Mobile Custom Experience Layout (hidden on desktop) */}
        <div className="md:hidden flex flex-col w-full gap-4 mt-auto mb-2">
          {/* Swipeable Carousel of Rooms */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 px-1 text-center">
              Swipe Stays
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-none snap-x snap-mandatory scroll-smooth">
              {slides.map((slide, idx) => {
                const isActive = currentSlide === idx;
                return (
                  <button
                    key={slide.slug}
                    onClick={() => selectSlide(idx)}
                    className={cn(
                      "snap-center shrink-0 w-[78vw] max-w-[270px] flex items-center gap-3 rounded-2xl p-2.5 transition-all duration-300 border text-left",
                      isActive
                        ? "bg-black/65 backdrop-blur-md border-[color:var(--gold-soft)]/75 shadow-lg scale-[1.01]"
                        : "bg-black/35 backdrop-blur-sm border-white/10 opacity-70"
                    )}
                  >
                    {/* Thumbnail Image */}
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-neutral-800 border border-white/10">
                      <img
                        src={slide.src}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "font-display text-sm font-semibold leading-tight truncate",
                        isActive ? "text-[color:var(--gold-soft)]" : "text-white"
                      )}>
                        {slide.title}
                      </h3>
                      <p className="text-[10px] text-white/90 font-medium mt-0.5 truncate">
                        {slide.subtitle}
                      </p>
                      <p className="text-[9px] text-white/50 mt-0.5 truncate">
                        {slide.details.split("·")[0]} · {slide.details.split("·")[1] || ""}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex justify-center gap-1.5 my-0.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentSlide === idx ? "w-6 bg-[color:var(--gold-soft)]" : "w-1.5 bg-white/30"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action Button Row */}
          <div className="flex gap-2">
            {/* Main Inquiry WhatsApp CTA */}
            <button
              onClick={() => {
                const active = slides[currentSlide];
                const cleanPhone = SITE.phone.replace(/[^0-9]/g, "");
                const text = encodeURIComponent(
                  `Hi Mohammed, I'd like to check availability at Ayra Inn for the ${active.title} (${active.subtitle}). Is it available?`
                );
                window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
              }}
              className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white text-xs font-semibold shadow-md transition active:scale-[0.98]"
            >
              <svg className="h-4 w-4 fill-current animate-pulse" viewBox="0 0 24 24">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" />
              </svg>
              Inquire {slides[currentSlide].title}
            </button>

            {/* Quick Call */}
            <a
              href={SITE.phoneHref}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/35 backdrop-blur-sm hover:bg-white/10 text-white transition active:scale-[0.98]"
              aria-label="Call Host"
            >
              <Phone size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue (desktop only) */}
      <a
        href="#rooms"
        aria-label="Scroll to explore rooms"
        className="absolute bottom-4 left-1/2 hidden lg:flex -translate-x-1/2 flex-col items-center gap-0.5 text-white/50 hover:text-white"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Explore</span>
        <ChevronDown size={14} className="bounce-soft" />
      </a>
    </section>
  );
}
