import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer, S as SITE, c as cn } from "./Footer-C7l7_3zW.mjs";
import { L as LISTINGS, f as findListing } from "./router-u3OyuEyp.mjs";
import { L as ListingCard } from "./ListingCard-BB-7r1da.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { S as Star, P as Phone, C as ChevronDown, a as Clock, W as Wifi, b as Snowflake, c as Car, U as Users, d as Shirt, B as BellRing, e as UtensilsCrossed, M as MapPin, N as Navigation } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const slides = [
  {
    src: "/assets/rooms/ayra-2bhk/01-living.avif",
    alt: "Ayra 2BHK Family Apartment",
    title: "Ayra 2BHK",
    subtitle: "2 Bedroom Apartment",
    details: "Sleeps 5 · 2 Beds · 2 Baths · Full Kitchen",
    slug: "ayra-2bhk"
  },
  {
    src: "/assets/rooms/ayra-deluxe/bedroom-1.avif",
    alt: "Ayra Deluxe Room",
    title: "Ayra Deluxe",
    subtitle: "Premium Double Room",
    details: "Sleeps 2 · 1 Queen Bed · Attached Bath",
    slug: "ayra-deluxe"
  },
  {
    src: "/assets/rooms/ayra-studio/bedroom-1.jpeg",
    alt: "Ayra Studio Stay",
    title: "Ayra Studio",
    subtitle: "Modern Cozy Studio",
    details: "Sleeps 2 · 1 Queen Bed · Workspace",
    slug: "ayra-studio"
  },
  {
    src: "/assets/rooms/ayra-deluxe-ii/bedroom-1.avif",
    alt: "Ayra Deluxe II Room",
    title: "Ayra Deluxe II",
    subtitle: "Elegant Private Room",
    details: "Sleeps 2 · 1 Bed · Workspace · Quiet Area",
    slug: "ayra-deluxe-ii"
  }
];
function Hero() {
  const [checkIn, setCheckIn] = reactExports.useState("");
  const [checkOut, setCheckOut] = reactExports.useState("");
  const [guests, setGuests] = reactExports.useState(1);
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [userInteracted, setUserInteracted] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (userInteracted) {
      const resumeTimer = setTimeout(() => {
        setUserInteracted(false);
      }, 15e3);
      return () => clearTimeout(resumeTimer);
    }
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6e3);
    return () => clearInterval(interval);
  }, [userInteracted]);
  const selectSlide = (index) => {
    setCurrentSlide(index);
    setUserInteracted(true);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const cleanPhone = SITE.phone.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hi, I'd like to check availability at Ayra Inn for ${guests} guest${guests === 1 ? "" : "s"}` + (checkIn ? ` checking in on ${checkIn}` : "") + (checkOut ? ` checking out on ${checkOut}` : "") + ". Is there a room available?"
    );
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative isolate flex min-h-[100dvh] w-full flex-col justify-between overflow-hidden pt-16 pb-16 md:pt-20 md:pb-20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10 h-full w-full bg-neutral-950", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              src: slides[currentSlide].src,
              alt: slides[currentSlide].alt,
              initial: { opacity: 0, scale: 1.12 },
              animate: { opacity: 1, scale: 1.03 },
              exit: { opacity: 0 },
              transition: { duration: 1.5, ease: "easeInOut" },
              className: "absolute inset-0 h-full w-full object-cover object-center"
            },
            currentSlide
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/45 to-black/65 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background hidden md:block" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between px-4 sm:px-6 z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center pt-8 md:pt-16 md:items-start text-center md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white border border-white/5 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" })
              ] }),
              "Available Today · Host Coordinated 24/7"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white text-balance leading-tight", children: [
              "Ayra Inn",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "md:hidden" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-medium text-[color:var(--gold-soft)] block md:inline md:ml-3", children: "Your home in Kochi." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs sm:text-base text-white/80 leading-relaxed max-w-md hidden sm:block", children: "Clean, spacious 2BHK apartments, deluxe rooms, and studio stays in North Kalamassery. Coordinate directly for a stress-free stay." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-2 text-[10px] sm:text-sm text-white/70 border-t border-white/5 pt-3 hidden sm:flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-[color:var(--gold-soft)]", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor", strokeWidth: 0 }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rated 4.7/5 by families & travellers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block w-full mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "form",
            {
              onSubmit: handleSearch,
              className: "w-full rounded-2xl border border-border/80 bg-card p-5 shadow-soft",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-end gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 grid grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Check-In Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        value: checkIn,
                        onChange: (e) => setCheckIn(e.target.value),
                        className: "w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Check-Out Date" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        value: checkOut,
                        onChange: (e) => setCheckOut(e.target.value),
                        className: "w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5", children: "Guests" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "select",
                      {
                        value: guests,
                        onChange: (e) => setGuests(Number(e.target.value)),
                        className: "w-full h-[38px] px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary",
                        children: [1, 2, 3, 4, 5, 6, 7].map((num) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: num, children: [
                          num,
                          " Guest",
                          num === 1 ? "" : "s"
                        ] }, num))
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "submit",
                      className: "inline-flex h-[38px] items-center justify-center gap-2 rounded-xl bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white px-6 text-sm font-semibold shadow-soft transition-all active:scale-[0.98]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" }) }),
                        "Inquire Availability"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: SITE.phoneHref,
                      className: "inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border border-border hover:bg-secondary text-muted-foreground transition",
                      "aria-label": "Call Host",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 })
                    }
                  )
                ] })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex flex-col w-full gap-4 mt-auto mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2 px-1 text-center", children: "Swipe Stays" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-none snap-x snap-mandatory scroll-smooth", children: slides.map((slide, idx) => {
                const isActive = currentSlide === idx;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    onClick: () => selectSlide(idx),
                    className: cn(
                      "snap-center shrink-0 w-[78vw] max-w-[270px] flex items-center gap-3 rounded-2xl p-2.5 transition-all duration-300 border text-left",
                      isActive ? "bg-black/65 backdrop-blur-md border-[color:var(--gold-soft)]/75 shadow-lg scale-[1.01]" : "bg-black/35 backdrop-blur-sm border-white/10 opacity-70"
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-neutral-800 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: slide.src,
                          alt: "",
                          className: "h-full w-full object-cover"
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: cn(
                          "font-display text-sm font-semibold leading-tight truncate",
                          isActive ? "text-[color:var(--gold-soft)]" : "text-white"
                        ), children: slide.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/90 font-medium mt-0.5 truncate", children: slide.subtitle }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-white/50 mt-0.5 truncate", children: [
                          slide.details.split("·")[0],
                          " · ",
                          slide.details.split("·")[1] || ""
                        ] })
                      ] })
                    ]
                  },
                  slide.slug
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1.5 my-0.5", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => selectSlide(idx),
                className: cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  currentSlide === idx ? "w-6 bg-[color:var(--gold-soft)]" : "w-1.5 bg-white/30"
                ),
                "aria-label": `Go to slide ${idx + 1}`
              },
              idx
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => {
                    const active = slides[currentSlide];
                    const cleanPhone = SITE.phone.replace(/[^0-9]/g, "");
                    const text = encodeURIComponent(
                      `Hi, I'd like to check availability at Ayra Inn for the ${active.title} (${active.subtitle}). Is it available?`
                    );
                    window.open(`https://wa.me/${cleanPhone}?text=${text}`, "_blank");
                  },
                  className: "flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white text-xs font-semibold shadow-md transition active:scale-[0.98]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4 fill-current animate-pulse", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" }) }),
                    "Inquire ",
                    slides[currentSlide].title
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: SITE.phoneHref,
                  className: "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-black/35 backdrop-blur-sm hover:bg-white/10 text-white transition active:scale-[0.98]",
                  "aria-label": "Call Host",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 15 })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#rooms",
            "aria-label": "Scroll to explore rooms",
            className: "absolute bottom-4 left-1/2 hidden lg:flex -translate-x-1/2 flex-col items-center gap-0.5 text-white/50 hover:text-white",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase tracking-[0.25em]", children: "Explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 14, className: "bounce-soft" })
            ]
          }
        )
      ]
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
      className,
      children
    }
  );
}
const items$1 = [
  { icon: Clock, label: "Open 24/7" },
  { icon: Wifi, label: "Free WiFi" },
  { icon: Snowflake, label: "AC Rooms" },
  { icon: Car, label: "Free Parking" },
  { icon: Users, label: "Family Friendly" }
];
function InfoBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "info", className: "relative -mt-6 sm:-mt-16 z-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-card shadow-soft border border-border/60 p-4 sm:p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4", children: items$1.map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "li",
    {
      className: "flex items-center gap-3 rounded-xl px-3 py-3 sm:flex-col sm:text-center sm:py-4 hover:bg-secondary/60 transition",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: label })
      ]
    },
    label
  )) }) }) }) });
}
const items = [
  { icon: Wifi, title: "Free WiFi", desc: "Fast in every room and communal areas." },
  { icon: Car, title: "Free Parking", desc: "On-site parking for guests." },
  { icon: Snowflake, title: "Air Conditioning", desc: "Cool, quiet rooms all year." },
  { icon: Shirt, title: "Laundry Service", desc: "Same-day on request." },
  { icon: BellRing, title: "24/7 Check-In", desc: "Coordinate check-in any time of day." },
  { icon: UtensilsCrossed, title: "Nearby Restaurants", desc: "Walk to local eateries." }
];
function Amenities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "amenities", className: "bg-secondary/40 px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary font-medium", children: "Amenities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground", children: "Everything you need for an easy stay." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.05, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex items-start gap-4 rounded-2xl bg-card p-5 border border-border/60 hover:border-primary/30 hover:shadow-card transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { size: 20 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.desc })
      ] })
    ] }) }, it.title)) })
  ] }) });
}
const bhk = findListing("ayra-2bhk");
const deluxe = findListing("ayra-deluxe");
const studio = findListing("ayra-studio");
const featured = bhk.photoTour.find((c) => c.name === "Living room")?.images[0] ?? bhk.photoTour[0].images[0];
const bedroomDeluxe = deluxe.photoTour[0].images[0];
const studioLiving = studio.photoTour[0].images[0];
const exterior = bhk.photoTour.find((c) => c.name === "Exterior")?.images[0] ?? bhk.photoTour[bhk.photoTour.length - 1].images[0];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary font-medium", children: "Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground", children: "A look around Ayra Inn." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 [&>div]:overflow-hidden [&>div]:rounded-2xl [&>div]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 row-span-2 aspect-square md:aspect-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featured, alt: "Ayra 2BHK living room", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: bedroomDeluxe, alt: "Ayra Deluxe bedroom", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: studioLiving, alt: "Ayra Studio living area", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-700" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 aspect-[2/1]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: exterior, alt: "Ayra Inn exterior", loading: "lazy", className: "h-full w-full object-cover hover:scale-105 transition duration-700" }) })
    ] }) })
  ] }) });
}
const about = "/assets/about-BnoPS8FL.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-cream/60 px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: about,
        alt: "Inside Ayra Inn",
        loading: "lazy",
        className: "h-full w-full object-cover aspect-[4/5]"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary font-medium", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground text-balance", children: "A simple, comfortable home for your stay." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Ayra Inn offers clean and comfortable rooms for travellers, families, and short stays. Located in a convenient area with easy access to transport, shops, and restaurants — with host support available around the clock to coordinate your check-in." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-3 gap-4 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "24/7", label: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "4", label: "Stays" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { n: "★ 4.7", label: "Guest rating" })
      ] })
    ] }) })
  ] }) });
}
function Stat({ n, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold text-primary", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: label })
  ] });
}
function Location() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "location", className: "px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary font-medium", children: "Location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground", children: "Find us in Kochi." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-6 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border/60 shadow-card aspect-[4/3] md:aspect-auto md:h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "Ayra Inn location",
          src: SITE.mapEmbed,
          className: "h-full w-full",
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/60 bg-card p-6 sm:p-8 h-full flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 18 }), label: "Address", value: SITE.address }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Item,
            {
              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }),
              label: "Phone",
              value: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.phoneHref, className: "hover:text-primary", children: SITE.phone })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 18 }), label: "Check-In", value: "Coordinated 24/7" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: SITE.directionsUrl,
            target: "_blank",
            rel: "noreferrer",
            className: "mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep mt-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 16 }),
              " Get Directions"
            ]
          }
        )
      ] }) })
    ] })
  ] }) });
}
function Item({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground font-medium mt-0.5", children: value })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(InfoBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "rooms", className: "px-6 py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-12 sm:mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary font-medium", children: "Our Stays" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground", children: "Pick the room that suits your stay." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-balance", children: "Four comfortable spaces in Kalamassery, Kochi — explore detail galleries and features." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12", children: LISTINGS.map((listing, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCard, { listing, index: i }, listing.slug)) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Amenities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Location, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
