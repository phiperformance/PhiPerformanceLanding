"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";

const navLinks = [
  { href: "/", key: "home" as const },
  { href: "/nosotros", key: "about" as const },
  { href: "/servicios", key: "services" as const },
  { href: "/proyectos", key: "projects" as const },
  { href: "/blog", key: "blog" as const },
  { href: "/contacto", key: "contact" as const },
];

export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const waLink = whatsappLink(t.contact.whatsappMessage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-black border-b border-cream/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-montserrat text-xs uppercase tracking-[0.25em] text-cream/80 group-hover:text-cream transition-colors">
              Performance
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, key }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-montserrat text-[11px] uppercase tracking-widest transition-colors relative pb-1 ${
                      isActive ? "text-gold" : "text-cream/60 hover:text-cream"
                    }`}
                  >
                    {t.nav[key]}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-px bg-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="font-montserrat text-[11px] tracking-widest flex items-center gap-1"
              aria-label="Toggle language"
            >
              <span className={lang === "es" ? "text-gold" : "text-cream/30"}>ES</span>
              <span className="text-cream/20">|</span>
              <span className={lang === "en" ? "text-gold" : "text-cream/30"}>EN</span>
            </button>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[11px] uppercase tracking-widest bg-gold text-black px-5 py-2 hover:bg-gold/90 transition-colors"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Language toggle — mobile only, visible in navbar */}
          <button
            onClick={toggleLang}
            className="md:hidden font-montserrat text-[11px] tracking-widest flex items-center gap-1"
            aria-label="Toggle language"
          >
            <span className={lang === "es" ? "text-gold" : "text-cream/30"}>ES</span>
            <span className="text-cream/20">|</span>
            <span className={lang === "en" ? "text-gold" : "text-cream/30"}>EN</span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-cream transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-cream transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black pt-16 flex flex-col"
          >
            <div className="flex flex-col flex-1 px-6 py-10 gap-6">
              {navLinks.map(({ href, key }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`font-cardo text-3xl transition-colors ${
                      isActive ? "text-gold" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {t.nav[key]}
                  </Link>
                );
              })}
            </div>
            <div className="px-6 pb-10 flex items-center gap-6">
              <button
                onClick={toggleLang}
                className="font-montserrat text-xs tracking-widest flex items-center gap-1"
              >
                <span className={lang === "es" ? "text-gold" : "text-cream/30"}>ES</span>
                <span className="text-cream/20">|</span>
                <span className={lang === "en" ? "text-gold" : "text-cream/30"}>EN</span>
              </button>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat text-xs uppercase tracking-widest border border-gold text-gold px-5 py-2"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
