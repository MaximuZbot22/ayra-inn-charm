import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MapPin, ArrowUpRight, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/ayra-inn-logo.png";
import { NAV_LINKS, SITE } from "@/lib/site";

type Props = { open: boolean; onClose: () => void };

export function MobileMenu({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 md:hidden overflow-y-auto"
          style={{
            background:
              "radial-gradient(120% 60% at 100% 0%, oklch(0.45 0.08 155 / 0.55) 0%, transparent 60%), linear-gradient(160deg, oklch(0.30 0.07 160) 0%, oklch(0.18 0.05 165) 100%)",
          }}
        >
          <div className="flex min-h-full flex-col px-6 pt-5 pb-8 text-white">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                    <img src={logo} alt="" className="h-7 w-7 object-contain" />
                  </div>
                  <span className="font-display text-xl font-semibold tracking-wide">
                    Ayra Inn
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 pulse-dot" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open now · 24/7
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition active:scale-95"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-12 flex flex-col gap-5">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="group flex items-baseline justify-between border-b border-white/10 pb-4"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-[color:var(--gold-soft)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-4xl font-semibold tracking-tight">
                      {l.label}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Bottom block */}
            <div className="mt-auto pt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Get in touch
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-3 flex items-center gap-4 rounded-2xl border border-[color:var(--gold-soft)]/40 bg-white/5 p-4 backdrop-blur transition active:scale-[0.99]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--gold)]/20 text-[color:var(--gold-soft)]">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-lg font-semibold">{SITE.phone}</div>
                  <div className="text-xs text-white/60">Tap to call · 24/7 check-in support</div>
                </div>
                <ArrowUpRight size={18} className="text-white/60" />
              </a>

              <div className="mt-3 flex items-center gap-2">
                <a
                  href={SITE.directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium backdrop-blur"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <p className="mt-5 text-center text-xs text-white/50">
                {SITE.address} · Open 24/7
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
