import React, { useEffect, useMemo, useState } from "react";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  const links = useMemo(
    () => [
      { label: "Products", href: "#products", id: "products" },
      { label: "Why Serfs", href: "#why", id: "why" },
      { label: "Facilities", href: "#facilities", id: "facilities" },
    ],
    []
  );

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAV_OFFSET = 84;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  useEffect(() => {
    const ids = ["products", "why", "facilities"];

    const onScroll = () => {
      const NAV_OFFSET = 100;
      const scrollPos = window.scrollY + NAV_OFFSET;

      let current = "top";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <button
          type="button"
          onClick={() => scrollToId("top")}
          className="flex items-center gap-3 rounded-lg px-2 py-1 text-left hover:bg-slate-50"
          aria-label="Go to top"
        >
          <img
            src="/serf.jpg.png"
            alt="Serfs Associates logo"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">Serfs Shower Doors</div>
            <div className="text-xs text-slate-500">Glass & Hardware</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.id)}
              className={cx(
                "rounded-xl px-3 py-2 text-sm font-semibold transition",
                activeId === l.id
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {l.label}
            </a>
          ))}

          {/* Call button */}
          <a
            href="tel:+18154699330"
            className="ml-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Call (815) 469-9330
          </a>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.id)}
                className={cx(
                  "rounded-xl px-3 py-3 text-sm font-semibold",
                  activeId === l.id
                    ? "bg-slate-900 text-white"
                    : "text-slate-800 hover:bg-slate-50"
                )}
              >
                {l.label}
              </a>
            ))}

            {/* Mobile call button */}
            <a
              href="tel:+18154699330"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Call (815) 469-9330
            </a>
          </div>
        </div>
      )}
    </header>
  );
}