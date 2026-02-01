import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const brands = [
  { name: "Alumax", href: "https://www.alumaxshowerdoor.com/" },
  { name: "CRL", href: "https://www.crlaurence.com/" },
  { name: "Portals", href: "https://www.portalshardware.com/" },
  { name: "Heavy Glass", href: "#products" },
];

const productCards = [
  {
    title: "Heavy Glass Enclosures",
    desc: '3/8" and 3/16" heavy glass for premium shower door projects.',
    action: "modal",
    image: "/serf3.jpg",
    // No external link needed
    websiteUrl: null,
  },
  {
    title: "Alumax Systems",
    desc: "Enclosure systems and components from a trusted brand.",
    action: "modal",
    image: "/alumax.jpeg",
    websiteUrl: "https://www.alumaxshowerdoor.com/",
  },
  {
    title: "CRL Hardware",
    desc: "Reliable shower door hardware for a variety of builds.",
    action: "modal",
    image: "/crl.jpg",
    websiteUrl: "https://www.crlaurence.com/",
  },
  {
    title: "Portals Hinges",
    desc: "Premium hinge solutions designed for performance.",
    action: "modal",
    image: "/serport.jpg",
    websiteUrl: "https://www.portalshardware.com/",
  },
];

const features = [
  {
    title: "Quality You Can Trust",
    desc: "We focus on product lines known for consistency and durability.",
  },
  {
    title: "Reliable Supply",
    desc: "Partner-friendly fulfillment with clear communication and support.",
  },
  {
    title: "Customer-First Support",
    desc: "Fast answers, practical guidance and product knowledge.",
  },
];

function RequestInfoModal({ open, onClose, product }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const title = product?.title ? `Request Info — ${product.title}` : "Request Info";
  const websiteUrl = product?.websiteUrl;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request information"
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal panel */}
      <div className="relative w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">
              Call us for availability, lead times and product guidance.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="mt-5 space-y-4 rounded-xl bg-slate-50 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Phone
            </p>
            <a
              href="tel:+18154699330"
              className="mt-1 inline-block text-sm font-semibold text-slate-900 hover:underline"
            >
              (815) 469-9330
            </a>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Address
            </p>
            <p className="mt-1 text-sm text-slate-700">
              6370 W. Emerald Parkway, Monee, IL 60449 | Units 102 - 103
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Fax
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              (815) 469-9353
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {/* Optional website button for Alumax/CRL/Portals */}
          {websiteUrl ? (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Visit Website
            </a>
          ) : null}

          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Close
          </button>

          <a
            href="tel:+18154699330"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const productsRef = useRef(null);

  const openModalFor = (product) => {
    setActiveProduct(product);
    setIsInfoOpen(true);
  };

  const closeModal = () => {
    setIsInfoOpen(false);
    setActiveProduct(null);
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    document.body.style.overflow = isInfoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isInfoOpen]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <RequestInfoModal open={isInfoOpen} onClose={closeModal} product={activeProduct} />

      <Navbar />

      {/* HERO */}
      <section
        className="scroll-mt-24 mx-auto max-w-6xl px-4 pt-6 sm:pt-10 lg:pt-20 pb-10"
        id="top"
      >
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* TEXT COLUMN */}
          <div>
            {/* BRAND PILL: Desktop-only (hidden on mobile) */}
            <div className="mt-6 flex justify-center lg:justify-start lg:mt-4 lg:mb-4 lg:block hidden">
              <p className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                Heavy Glass • Shower door hardware • Trusted brands
              </p>
            </div>
            {/* H1 */}
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl text-center lg:text-left">
              Premium bath enclosures & shower door hardware.
            </h1>

            {/* MOBILE-ONLY IMAGE right under H1 */}
            <div className="mt-6 lg:hidden">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="/serf2.jpg"
                    alt="Glass enclosure and hardware"
                    className="h-full w-full object-cover object-top rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Tagline now below pill */}
            <p className="mt-4 text-lg leading-relaxed text-slate-600 text-center lg:text-left">
              A customer-first supplier for heavy shower door glass, quality product lines and
              reliable support.
            </p>

            <div className=" mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsInfoOpen(true)}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800"
              >
                Contact Us
              </button>

              <button
                type="button"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View Products
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Responsive support
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
                Trusted distributors
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500" />
                Quality product lines
              </span>
            </div>
          </div>

          {/* DESKTOP-ONLY IMAGE COLUMN (unchanged desktop layout) */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-slate-100 to-white" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/serf2.jpg"
                  alt="Glass enclosure and hardware"
                  className="h-full w-full object-cover object-top rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BRAND PILL: below image on mobile, above brand strip */}
        <div className="mt-6 flex justify-center lg:justify-start lg:hidden lg:mt-4">
          <p className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
            Heavy Glass • Shower door hardware • Trusted brands
          </p>
        </div>


        {/* BRAND STRIP stays below everything */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between">
            <p className="text-sm font-medium text-slate-700 text-center lg:text-left">
              Product lines & brands we carry
            </p>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-end">
              {brands.map((b) => {
                const isExternal = b.href.startsWith("http");
                return (
                  <a
                    key={b.name}
                    href={b.href}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 hover:bg-slate-50"
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    {b.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </section>


      {/* PRODUCTS */}
      <section ref={productsRef} className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12" id="products">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
            <p className="mt-2 text-slate-600">Explore enclosure systems and hardware built to last.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCards.map((p) => (
            <button
              key={p.title}
              type="button"
              onClick={() => openModalFor(p)}
              className="group text-left overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-[16/10] w-full bg-slate-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 text-sm font-semibold text-slate-900">
                  Request Info{" "}
                  <span className="ml-1 inline-block transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12" id="why">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Why Serfs</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            A simple, reliable partner approach: quality product lines, clear communication and
            support that helps projects move.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12" id="facilities">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* MOBILE header first */}
          <div className="lg:hidden text-center">
            <h2 className="text-2xl font-semibold tracking-tight">Our facilities</h2>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/shop1.jpg"
              alt="Facility photo 1"
              className="h-44 w-full rounded-2xl object-cover object-top sm:h-56"
              loading="lazy"
            />
            <img
              src="/shop2.jpg"
              alt="Facility photo 2"
              className="h-44 w-full rounded-2xl object-cover object-top sm:h-56"
              loading="lazy"
            />
            <img
              src="/shop3.jpg"
              alt="Facility photo 3"
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
              loading="lazy"
            />
            <img
              src="/shop4.jpg"
              alt="Facility photo 4"
              className="h-44 w-full rounded-2xl object-cover sm:h-56"
              loading="lazy"
            />
          </div>

          {/* Desktop text column (header + description) */}
          <div className="hidden lg:block">
            <h2 className="text-2xl font-semibold tracking-tight">Our facilities</h2>
            <p className="mt-2 text-slate-600">
              A quick look behind the scenes — our team and workflow are set up to support
              dependable fulfillment and consistent quality.
            </p>
          </div>

          {/* Mobile description below pictures */}
          <div className="lg:hidden text-center">
            <p className="mt-2 text-slate-600">
              A quick look behind the scenes — our team and workflow are set up to support
              dependable fulfillment and consistent quality.
            </p>
          </div>
        </div>
      </section>


      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Need help selecting the right hardware or enclosure setup?
              </h2>
              <p className="mt-2 text-white/80">
                Tell us what you’re building — we’ll point you to the right products.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openModalFor({ title: "General Inquiry", websiteUrl: null })}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                Contact Us
              </button>
              <a
                href="tel:+18154699330"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}