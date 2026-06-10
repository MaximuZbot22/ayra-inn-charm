import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/ayra-inn-logo.png.asset.json";
const logo = logoAsset.url;
import { NAV_LINKS, SITE } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 hidden md:block transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-border/70 shadow-sm"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#home" className="flex items-center gap-2.5">
            <span
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors",
                scrolled ? "bg-transparent" : "bg-white/90 shadow-sm",
              )}
            >
              <img src={logo} alt="Ayra Inn" className="h-8 w-8 object-contain" />
            </span>
            <span
              className={cn(
                "font-display text-xl font-semibold tracking-wide transition-colors",
                scrolled ? "text-primary-deep" : "text-white",
              )}
            >
              Ayra Inn
            </span>
          </a>
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-100",
                  scrolled
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/85 hover:text-white",
                )}
              >
                {l.label}
              </a>
            ))}
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-deep hover:shadow-md"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile */}
      <header className="fixed inset-x-0 top-0 z-40 md:hidden">
        <div
          className={cn(
            "transition-all duration-300",
            scrolled ? "px-0 pt-0" : "px-4 pt-3",
          )}
        >
          <div
            className={cn(
              "flex h-14 items-center justify-between transition-all duration-300",
              scrolled
                ? "bg-white/90 backdrop-blur-md border-b border-border/70 px-4"
                : "rounded-full bg-black/25 backdrop-blur-md border border-white/15 px-3 pl-4",
            )}
          >
            <a href="#home" className="flex items-center gap-2">
              <img src={logo} alt="Ayra Inn" className="h-7 w-7 object-contain" />
              <span
                className={cn(
                  "font-display text-base font-semibold tracking-wide",
                  scrolled ? "text-primary-deep" : "text-white",
                )}
              >
                Ayra Inn
              </span>
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-all active:scale-95",
                scrolled
                  ? "bg-primary/10 text-primary"
                  : "bg-white/15 text-white border border-white/20",
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "menu"}
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
