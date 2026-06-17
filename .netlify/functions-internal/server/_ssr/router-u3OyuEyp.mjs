import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DUTesRXU.css";
const logo = "/assets/ayra-inn-logo-EoJZJy0k.png";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$3 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ayra Inn — Comfortable Rooms in Kochi, Kerala" },
      {
        name: "description",
        content: "Ayra Inn offers clean, comfortable rooms in Kochi, Kerala. Open 24/7 for travellers, families and short stays. Call to check availability."
      },
      { name: "author", content: "Ayra Inn" },
      { property: "og:site_name", content: "Ayra Inn" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: logo },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$3.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$2 = () => import("./index-Ca2t1ApZ.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Ayra Inn — Comfortable Rooms in Kochi, Kerala"
    }, {
      name: "description",
      content: "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support. Call to check availability today."
    }, {
      property: "og:title",
      content: "Ayra Inn — Comfortable Rooms in Kochi"
    }, {
      property: "og:description",
      content: "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Hotel",
        name: "Ayra Inn",
        description: "Clean, comfortable rooms in Kochi for travellers, families and short stays. 24/7 check-in support.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          addressCountry: "IN"
        },
        telephone: "+919292007046"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const LISTINGS = [
  {
    slug: "ayra-2bhk",
    name: "Ayra 2BHK",
    type: "Entire rental unit in Kochi, India",
    guests: 5,
    bedrooms: 2,
    beds: 2,
    bathrooms: "2 baths",
    blurb: "A full 2-bedroom apartment with a spacious living room, dining area, and complete kitchen. Sleeps 5 — ideal for families or small groups travelling together.",
    amenities: [
      "Wifi",
      "Air conditioning",
      "Full kitchen",
      "TV",
      "Washing machine",
      "Free parking",
      "Hot water"
    ],
    spaces: [
      { name: "Living room", amenities: ["TV"] },
      { name: "Full kitchen", amenities: ["Crockery and cutlery", "Coffee", "Freezer"] },
      { name: "Dining area", amenities: ["Dining table"] },
      {
        name: "Bedroom 1",
        amenities: [
          "Queen bed",
          "Air conditioning",
          "Bed linen",
          "Clothes storage",
          "Hangers",
          "TV",
          "Room-darkening blinds"
        ]
      },
      {
        name: "Bedroom 2",
        amenities: [
          "Queen bed",
          "Air conditioning",
          "Bed linen",
          "Clothes storage",
          "Hangers",
          "Room-darkening blinds"
        ]
      },
      { name: "Full bathroom 1", amenities: ["Body soap", "Hot water", "Shampoo"] },
      { name: "Full bathroom 2", amenities: ["Body soap", "Hot water", "Shampoo"] }
    ],
    photoTour: [
      { name: "Living room", images: ["/assets/rooms/ayra-2bhk/01-living.avif"] },
      { name: "Bedroom", images: ["/assets/rooms/ayra-2bhk/02-bedroom-1.avif", "/assets/rooms/ayra-2bhk/03-bedroom-2.avif"] },
      { name: "Kitchen & Dining", images: ["/assets/rooms/ayra-2bhk/04-dining-kitchen.avif", "/assets/rooms/ayra-2bhk/05-kitchen-detail.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-2bhk/06-bathroom-1.jpeg", "/assets/rooms/ayra-2bhk/07-bathroom-2.jpeg"] },
      { name: "Exterior", images: ["/assets/rooms/ayra-2bhk/08-exterior.jpeg"] }
    ]
  },
  {
    slug: "ayra-deluxe",
    name: "Ayra Deluxe",
    type: "Entire rental unit in Kochi, India",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: "1 bath",
    blurb: "Relax in this comfortable private room featuring a queen-size bed, air conditioning, and an attached bathroom. Ideal for solo travellers or couples seeking a clean, peaceful, and convenient stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property"
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Bedroom", images: ["/assets/rooms/ayra-deluxe/bedroom-1.avif", "/assets/rooms/ayra-deluxe/bedroom-2.avif", "/assets/rooms/ayra-deluxe/bedroom-3.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-deluxe/bathroom-1.avif", "/assets/rooms/ayra-deluxe/bathroom-2.avif"] }
    ]
  },
  {
    slug: "ayra-studio",
    name: "Ayra Studio",
    type: "Room in Kochi, India · Shared bathroom",
    guests: 2,
    bedrooms: null,
    beds: 1,
    bathrooms: "Shared bath",
    blurb: "A comfortable, modern studio room with a cozy bed, air conditioning, high-speed Wi-Fi, Smart TV, and a dedicated workspace. Perfect for business travellers, couples, and solo guests looking for a clean, peaceful stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "Free parking on premises",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property"
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Shared living room", images: ["/assets/rooms/ayra-studio/living-1.jpeg", "/assets/rooms/ayra-studio/living-2.jpeg", "/assets/rooms/ayra-studio/living-3.avif"] },
      { name: "Bedroom", images: ["/assets/rooms/ayra-studio/bedroom-1.jpeg", "/assets/rooms/ayra-studio/bedroom-2.avif", "/assets/rooms/ayra-studio/bedroom-3.avif", "/assets/rooms/ayra-studio/bedroom-4.avif"] },
      { name: "Shared workspace", images: ["/assets/rooms/ayra-studio/workspace-1.jpeg", "/assets/rooms/ayra-studio/workspace-2.jpeg"] },
      { name: "Full bathroom", images: ["/assets/rooms/ayra-studio/bathroom-1.jpeg", "/assets/rooms/ayra-studio/bathroom-2.jpeg"] },
      { name: "Additional photos", images: ["/assets/rooms/ayra-studio/additional-1.jpeg"] }
    ]
  },
  {
    slug: "ayra-deluxe-ii",
    name: "Ayra Deluxe II",
    type: "Entire rental unit in Kochi, India",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: "1 bath",
    blurb: "Relax in this comfortable private room featuring a queen-size bed, air conditioning, and an attached bathroom. Ideal for solo travellers or couples seeking a clean, peaceful, and convenient stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property"
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Bedroom", images: ["/assets/rooms/ayra-deluxe-ii/bedroom-1.avif", "/assets/rooms/ayra-deluxe-ii/bedroom-2.avif", "/assets/rooms/ayra-deluxe-ii/bedroom-3.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-deluxe-ii/bathroom-1.avif", "/assets/rooms/ayra-deluxe-ii/bathroom-2.avif"] }
    ]
  }
];
function allImages(listing) {
  return listing.photoTour.flatMap((c) => c.images);
}
function coverImages(listing, count = 5) {
  const firsts = listing.photoTour.map((c) => c.images[0]).filter(Boolean);
  const rest = listing.photoTour.flatMap((c) => c.images.slice(1));
  return [...firsts, ...rest].slice(0, count);
}
function findListing(slug) {
  return LISTINGS.find((l) => l.slug === slug);
}
const $$splitComponentImporter$1 = () => import("./rooms._-_category_-C240ev2X.mjs");
const Route$1 = createFileRoute("/rooms/{-$category}")({
  head: () => {
    const title = "Our Stays — Ayra Inn";
    const description = `Browse all ${LISTINGS.length} stays at Ayra Inn, Kochi — a 2BHK apartment, two Deluxe units, and a Studio room. 24/7 check-in support.`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./rooms._slug-B9_4S0ro.mjs");
const $$splitNotFoundComponentImporter = () => import("./rooms._slug-CeF-KUbT.mjs");
const Route = createFileRoute("/rooms/$slug")({
  beforeLoad: ({
    params
  }) => {
    if (!findListing(params.slug)) throw notFound();
  },
  head: ({
    params
  }) => {
    const listing = findListing(params.slug);
    if (!listing) return {};
    const title = `${listing.name} — Ayra Inn, Kochi`;
    const description = listing.blurb;
    const ogImage = coverImages(listing, 1)[0];
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }, ...ogImage ? [{
        property: "og:image",
        content: ogImage
      }] : [], ...ogImage ? [{
        name: "twitter:image",
        content: ogImage
      }] : []]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$3
});
const RoomsChar123CategoryChar125Route = Route$1.update({
  id: "/rooms/{-$category}",
  path: "/rooms/{-$category}",
  getParentRoute: () => Route$3
});
const RoomsSlugRoute = Route.update({
  id: "/rooms/$slug",
  path: "/rooms/$slug",
  getParentRoute: () => Route$3
});
const rootRouteChildren = {
  IndexRoute,
  RoomsSlugRoute,
  RoomsChar123CategoryChar125Route
};
const routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  LISTINGS as L,
  Route as R,
  allImages as a,
  coverImages as c,
  findListing as f,
  logo as l,
  router as r
};
