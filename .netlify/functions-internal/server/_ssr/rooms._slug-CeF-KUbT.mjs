import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
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
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl text-foreground", children: "We couldn't find that stay" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The link may be out of date. Browse all our stays below." }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rooms/{-$category}", params: {
    category: void 0
  }, className: "mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep transition-colors", children: "View all stays" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
