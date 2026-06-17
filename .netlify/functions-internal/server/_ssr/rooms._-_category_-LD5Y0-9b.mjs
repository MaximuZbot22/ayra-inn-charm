import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, F as Footer } from "./Footer-BrOn_01q.mjs";
import { L as ListingCard } from "./ListingCard-u-efMjb8.mjs";
import { L as LISTINGS } from "./router-DbyI7hYT.mjs";
import { g as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
function RoomsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 15 }),
        " Back to home"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 sm:mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold tracking-widest text-primary uppercase mb-3", children: "Stays at Ayra Inn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight", children: [
          LISTINGS.length,
          " places to stay in Kochi."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl text-sm sm:text-base leading-relaxed", children: "From a full 2BHK apartment to private deluxe rooms and a cozy studio — pick what fits your stay. Contact our host team any time for rates and availability." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-12", children: LISTINGS.map((listing, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListingCard, { listing, index: i }, listing.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  RoomsPage as component
};
