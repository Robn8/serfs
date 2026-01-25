import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const NAV_OFFSET = 84;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <img
                src="/serf.jpg.png"
                alt="Serfs Associates logo"
                className="h-16 w-auto rounded-xl object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Serfs Shower Doors
                </p>
                <p className="text-xs text-slate-600">Glass & Hardware Supplier</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-600 max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
              A customer-first supplier of heavy shower door glass, hardware, and trusted
              product lines.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToId("products")}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("why")}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Why Serfs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId("facilities")}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Facilities
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>

            {/* Important: use flex on the LI so the button can align to the left edge on desktop */}
            <ul className="mt-3 space-y-2 text-sm text-slate-600 text-center lg:text-left">
              <li className="flex justify-center lg:justify-start">
                <a
                  href="tel:+18154699330"
                  className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Phone: (815) 469-9330
                </a>
              </li>

              <li>Fax: (815) 469-9353</li>

              <li className="leading-relaxed">
                6370 W. Emerald Parkway
                <br />
                Monee, IL 60449
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Get in touch</h4>
            <p className="mt-3 text-sm text-slate-600">
              Have questions or need product guidance?
            </p>

            <a
              href="tel:+18154699330"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 mx-auto lg:mx-0"
            >
              Call Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} Serfs Shower Doors. All rights reserved.
          </p>

          <p className="text-xs text-slate-500">Built with care.</p>
        </div>
      </div>
    </footer>
  );
}