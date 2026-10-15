import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/site-content";

const links = [
  { href: "#services", label: "Services" },
  
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-hairline bg-background/90 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <img src={brand.logoUrl} alt="M&L Digital Solutions logo" className="h-9 w-9 shrink-0 object-contain" />
          <span className="truncate font-display text-lg font-bold text-navy">{brand.name}</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-navy px-5 py-2 text-sm font-medium text-navy transition-colors hover:border-deco hover:bg-deco"
          >
            Let's Connect
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-hairline text-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-hairline bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-hairline py-4 font-display text-lg text-navy last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="my-4 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-background"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
