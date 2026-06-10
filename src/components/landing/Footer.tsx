import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/ayra-inn-logo.png.asset.json";
const logo = logoAsset.url;
import { NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-secondary/40 px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Ayra Inn" className="h-9 w-9 object-contain" />
              <span className="font-display text-xl font-semibold text-primary-deep">
                Ayra Inn
              </span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Clean, comfortable rooms in Kochi — open 24/7 for travellers and
              short stays.
            </p>
            <div className="mt-5 flex gap-2">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-foreground/80 hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-foreground/80">
                <Phone size={14} className="text-primary" />
                <a href={SITE.phoneHref} className="hover:text-primary">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <MapPin size={14} className="text-primary" /> {SITE.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ayra Inn. All rights reserved.</p>
          <p>Open 24/7 · Kochi, Kerala</p>
        </div>
      </div>
    </footer>
  );
}
