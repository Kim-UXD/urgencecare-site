"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { href: "#probleme", label: "Le problème" },
  { href: "#solution", label: "La solution" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#comment",  label: "Comment ça marche" },
  { href: "#equipe",   label: "Équipe" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Smooth scroll on anchor clicks (works inside iframes/sandboxes too)
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? "shadow-soft" : "shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" onClick={(e) => handleAnchorClick(e, "#top")} aria-label="UrgenceCare, accueil">
            <Logo iconSize={26} textClassName="text-lg" />
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="font-body text-[15px] font-semibold text-gray-600 transition-colors hover:text-gray-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
            className="hidden rounded-full bg-primary-600 px-5 py-2.5 font-heading text-[14px] font-bold text-white shadow-cta transition-shadow hover:shadow-cta-hover lg:inline-block"
          >
            Demander une démo
          </a>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-900 lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="13" x2="20" y2="13" />
                  <line x1="4" y1="19" x2="20" y2="19" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col gap-5 bg-white px-6 pt-24 pb-10 transition-opacity lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => handleAnchorClick(e, l.href)}
            className="font-heading text-[19px] font-bold text-gray-600"
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:contact@urgencecare.bj?subject=Demande%20de%20démonstration"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-primary-600 px-6 py-3.5 font-heading text-[15px] font-bold text-white shadow-cta"
          onClick={() => setOpen(false)}
        >
          Demander une démonstration
        </a>
      </div>
    </>
  );
}
