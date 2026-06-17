import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, S as SITE, F as Footer } from "./Footer-C7l7_3zW.mjs";
import { R as Route, f as findListing, c as coverImages } from "./router-u3OyuEyp.mjs";
import { g as ArrowLeft, i as Check, P as Phone, G as Grid3x3, X } from "../_libs/lucide-react.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function HeroGallery({ listing, onOpenTour }) {
  const imgs = coverImages(listing, 5);
  const [hero, ...rest] = imgs;
  const grid = rest.slice(0, 4);
  if (!hero) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[2/1]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onOpenTour,
          className: "md:col-span-2 md:row-span-2 relative group bg-muted overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: hero,
              alt: `${listing.name} hero`,
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            }
          )
        }
      ),
      grid.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onOpenTour,
          className: "hidden md:block relative group bg-muted overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: `${listing.name} ${i + 2}`,
              className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            }
          )
        },
        i
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: onOpenTour,
        className: "absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-background/95 backdrop-blur px-4 py-2 text-sm font-medium text-foreground border border-border shadow-soft hover:bg-background transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { size: 14 }),
          " Show all photos"
        ]
      }
    )
  ] });
}
function PhotoTour({ listing, open, onClose, initialCategory }) {
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);
  reactExports.useEffect(() => {
    if (!open || !initialCategory) return;
    const id = sectionId(initialCategory);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  }, [open, initialCategory]);
  if (!open) return null;
  const scrollTo = (name) => {
    const el = document.getElementById(sectionId(name));
    if (!el || !scrollRef.current) return;
    const top = el.offsetTop - 96;
    scrollRef.current.scrollTo({ top, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center gap-4 border-b border-border bg-background/95 backdrop-blur px-4 sm:px-8 h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          "aria-label": "Close photo tour",
          className: "flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base sm:text-lg text-foreground truncate", children: listing.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-8 py-8 sm:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl text-foreground mb-6", children: "Photo tour" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-5 overflow-x-auto no-scrollbar pb-6 mb-8 border-b border-border -mx-1 px-1", children: listing.photoTour.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => scrollTo(cat.name),
          className: "group flex flex-col items-start gap-2 shrink-0 w-32 text-left",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-20 w-32 overflow-hidden rounded-lg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: cat.images[0],
                alt: cat.name,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform group-hover:scale-105"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/80 group-hover:text-foreground", children: cat.name })
          ]
        },
        cat.name
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: listing.photoTour.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: sectionId(cat.name), className: "scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl text-foreground mb-4", children: cat.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 gap-3 [&>*]:mb-3", children: cat.images.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "break-inside-avoid overflow-hidden rounded-xl bg-muted",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src,
                alt: `${cat.name} ${i + 1}`,
                loading: "lazy",
                className: "w-full h-auto block"
              }
            )
          },
          i
        )) })
      ] }, cat.name)) })
    ] }) })
  ] });
}
function sectionId(name) {
  return `tour-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}
function ListingDetail() {
  const {
    slug
  } = Route.useParams();
  const listing = findListing(slug);
  const [tourOpen, setTourOpen] = reactExports.useState(false);
  const [checkIn, setCheckIn] = reactExports.useState("");
  const [checkOut, setCheckOut] = reactExports.useState("");
  const [guests, setGuests] = reactExports.useState(1);
  const metaBits = [`${listing.guests} guest${listing.guests === 1 ? "" : "s"}`, listing.bedrooms != null ? `${listing.bedrooms} bedroom${listing.bedrooms === 1 ? "" : "s"}` : null, `${listing.beds} bed${listing.beds === 1 ? "" : "s"}`, listing.bathrooms].filter(Boolean);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/rooms/{-$category}", params: {
        category: void 0
      }, className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 15 }),
        " All stays"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-2", children: listing.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: listing.type }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroGallery, { listing, onOpenTour: () => setTourOpen(true) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-2", children: "About this place" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: metaBits.join(" · ") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/85 leading-relaxed mt-4", children: listing.blurb })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "What this place offers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
              listing.amenities.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground/85", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: a })
              ] }, a)),
              listing.unavailable?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex items-center gap-3 text-muted-foreground line-through", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: a }) }, a))
            ] })
          ] }),
          listing.spaces && listing.spaces.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground mb-4", children: "Where you'll be" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: listing.spaces.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4 bg-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: s.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.amenities.join(" · ") })
            ] }, s.name)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-24 rounded-2xl border border-border bg-card p-6 shadow-soft space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-foreground font-semibold", children: "Confirm rates & book" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Select your stay details to check availability and rates directly via WhatsApp." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Check-In Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: checkIn, onChange: (e) => setCheckIn(e.target.value), className: "w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Check-Out Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: checkOut, onChange: (e) => setCheckOut(e.target.value), className: "w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1", children: "Guests" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: guests, onChange: (e) => setGuests(Number(e.target.value)), className: "w-full px-3 py-2 border border-border rounded-xl bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary", children: Array.from({
                length: listing.guests || 2
              }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: i + 1, children: [
                i + 1,
                " guest",
                i + 1 === 1 ? "" : "s"
              ] }, i + 1)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hi, I'd like to book ${listing.name} for ${guests} guest${guests === 1 ? "" : "s"}` + (checkIn ? ` checking in on ${checkIn}` : "") + (checkOut ? ` checking out on ${checkOut}` : "") + ". Is there a room available?")}`, target: "_blank", rel: "noreferrer", className: "flex w-full items-center justify-center gap-2 px-6 py-3 bg-[color:oklch(0.60_0.15_145)] hover:bg-[color:oklch(0.50_0.15_145)] text-white font-semibold rounded-full transition-all shadow-soft text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.233-1.371a9.994 9.994 0 0 0 4.779 1.21h.004c5.505 0 9.988-4.478 9.99-9.986 0-2.67-1.037-5.178-2.92-7.062C17.182 3.007 14.68 2 12.012 2zm5.728 14.111c-.314.88-1.545 1.62-2.122 1.744-.577.123-1.127.227-3.805-.884-2.883-1.2-4.683-4.119-4.827-4.31-.144-.191-1.165-1.548-1.165-2.953 0-1.405.736-2.096.997-2.37.262-.274.577-.341.77-.341.192 0 .385.001.55.009.174.008.406-.065.632.483.23.56.786 1.916.852 2.052.067.137.111.297.02.48-.09.182-.135.297-.27.457-.135.159-.283.356-.405.479-.136.137-.279.287-.12.56.159.273.708 1.168 1.517 1.89.103.091.205.182.308.272.784.693 1.393.9 1.723 1.036.33.136.522.091.714-.136.192-.227.825-.955 1.045-1.295.22-.34.44-.273.742-.159.303.114 1.926.909 2.256 1.074.33.165.55.244.632.386.083.143.083.824-.23 1.704z" }) }),
              "Book via WhatsApp"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: SITE.phoneHref, className: "mt-2.5 flex w-full items-center justify-center gap-2 px-6 py-2.5 border border-border hover:bg-secondary text-foreground font-medium rounded-full transition-all text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-muted-foreground" }),
              " Call Host"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setTourOpen(true), className: "mt-3 w-full text-xs text-primary hover:underline block text-center", children: "See all photos" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PhotoTour, { listing, open: tourOpen, onClose: () => setTourOpen(false) })
  ] });
}
export {
  ListingDetail as component
};
