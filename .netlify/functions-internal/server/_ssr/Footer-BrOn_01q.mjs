import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logo } from "./router-DbyI7hYT.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { X, f as Menu, I as Instagram, F as Facebook, P as Phone, M as MapPin, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
const SITE = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  address: "M S Junction, Rockwell Nad Rd, Pradeeksha Nagar, North Kalamassery, Kalamassery, Kochi, Kerala 683503",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=AYRA+INN/@10.0560248,76.332641",
  mapEmbed: "https://www.google.com/maps?q=10.0560248,76.332641&z=17&output=embed"
};
const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/#amenities" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" }
];
function MobileMenu({ open, onClose }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      className: "fixed inset-0 z-50 md:hidden overflow-y-auto",
      style: {
        background: "radial-gradient(120% 60% at 100% 0%, oklch(0.45 0.08 155 / 0.55) 0%, transparent 60%), linear-gradient(160deg, oklch(0.30 0.07 160) 0%, oklch(0.18 0.05 165) 100%)"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-full flex-col px-6 pt-5 pb-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", className: "h-7 w-7 object-contain" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-semibold tracking-wide", children: "Ayra Inn" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-emerald-400 pulse-dot" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-400" })
              ] }),
              "Open now · 24/7"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: onClose,
              "aria-label": "Close menu",
              className: "flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition active:scale-95",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-12 flex flex-col gap-5", children: NAV_LINKS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: l.href,
            onClick: onClose,
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15 + i * 0.06, duration: 0.4 },
            className: "group flex items-baseline justify-between border-b border-white/10 pb-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-baseline gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-[color:var(--gold-soft)]", children: String(i + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl font-semibold tracking-tight", children: l.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ArrowUpRight,
                {
                  size: 20,
                  className: "-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                }
              )
            ]
          },
          l.href
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-white/50", children: "Get in touch" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: SITE.phoneHref,
              className: "mt-3 flex items-center gap-4 rounded-2xl border border-[color:var(--gold-soft)]/40 bg-white/5 p-4 backdrop-blur transition active:scale-[0.99]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--gold)]/20 text-[color:var(--gold-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: SITE.phone }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/60", children: "Tap to call · 24/7 check-in support" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, className: "text-white/60" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: SITE.directionsUrl,
                target: "_blank",
                rel: "noreferrer",
                className: "flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }),
                  " Get Directions"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#",
                "aria-label": "Instagram",
                className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#",
                "aria-label": "Facebook",
                className: "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-center text-xs text-white/50", children: [
            SITE.address,
            " · Open 24/7"
          ] })
        ] })
      ] })
    }
  ) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "fixed inset-x-0 top-0 z-40 hidden md:block transition-all duration-300",
          scrolled ? "bg-white/85 backdrop-blur-md border-b border-border/70 shadow-sm" : "bg-transparent"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                  scrolled ? "bg-transparent" : "bg-white/90 shadow-sm"
                ),
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Ayra Inn", className: "h-8 w-8 object-contain" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "font-display text-xl font-semibold tracking-wide transition-colors",
                  scrolled ? "text-primary-deep" : "text-white"
                ),
                children: "Ayra Inn"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-8", children: [
            NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                className: cn(
                  "text-sm font-medium transition-colors hover:opacity-100",
                  scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"
                ),
                children: l.label
              },
              l.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: SITE.phoneHref,
                className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-deep hover:shadow-md",
                children: "Call Now"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed inset-x-0 top-0 z-40 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "transition-all duration-300",
          scrolled ? "px-0 pt-0" : "px-4 pt-3"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex h-14 items-center justify-between transition-all duration-300",
              scrolled ? "bg-white/90 backdrop-blur-md border-b border-border/70 px-4" : "rounded-full bg-black/25 backdrop-blur-md border border-white/15 px-3 pl-4"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                      scrolled ? "bg-transparent" : "bg-white/90"
                    ),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Ayra Inn", className: "h-6 w-6 object-contain" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "font-display text-base font-semibold tracking-wide",
                      scrolled ? "text-primary-deep" : "text-white"
                    ),
                    children: "Ayra Inn"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Open menu",
                  onClick: () => setOpen(true),
                  className: cn(
                    "flex h-11 w-11 items-center justify-center rounded-full transition-all active:scale-95",
                    scrolled ? "bg-primary/10 text-primary" : "bg-white/15 text-white border border-white/20"
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      initial: { rotate: -45, opacity: 0 },
                      animate: { rotate: 0, opacity: 1 },
                      exit: { rotate: 45, opacity: 0 },
                      transition: { duration: 0.2 },
                      children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
                    },
                    open ? "x" : "menu"
                  ) })
                }
              )
            ]
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenu, { open, onClose: () => setOpen(false) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "border-t border-border/60 bg-secondary/40 px-6 pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Ayra Inn", className: "h-9 w-9 object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-semibold text-primary-deep", children: "Ayra Inn" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs", children: "Clean, comfortable rooms in Kochi — open 24/7 for travellers and short stays." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid grid-cols-2 gap-2", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "text-sm text-foreground/80 hover:text-primary", children: l.label }) }, l.href)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: SITE.phoneHref, className: "hover:text-primary", children: SITE.phone })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-foreground/80", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-primary" }),
            " ",
            SITE.address
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Ayra Inn. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Open 24/7 · Kochi, Kerala" })
    ] })
  ] }) });
}
export {
  Footer as F,
  Navbar as N,
  SITE as S,
  cn as c
};
