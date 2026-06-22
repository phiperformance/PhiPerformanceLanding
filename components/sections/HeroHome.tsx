"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";

const Hero3D = dynamic(
  () => import("@/components/3d/SceneWrapper").then((m) => m.SceneWrapper),
  { ssr: false }
);

export function HeroHome() {
  const { t } = useLang();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Mobile + reduced-motion users never pay for WebGL (three.js isn't even
    // fetched) — they get the static backdrop only.
    if (isMobile || reduced) return;

    // Defer the heavy WebGL scene until the page is idle so it doesn't compete
    // with hydration and first paint. Keeps TBT / LCP out of the 3D's way.
    const start = () => setEnable3D(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(start, { timeout: 3000 });
      return () => w.cancelIdleCallback?.(id);
    }
    const id = window.setTimeout(start, 2000);
    return () => window.clearTimeout(id);
  }, []);

  const waLink = whatsappLink(t.contact.whatsappMessage);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Static backdrop (paints immediately); 3D layers on top once idle */}
      <HeroBackdrop />
      {enable3D && <Hero3D />}

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.home.hero.eyebrow}
        </motion.p>

        {/* LCP element — rendered visible from first paint (no entrance fade) */}
        <h1 className="font-cardo text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-8">
          {t.home.hero.headline}
        </h1>

        <motion.p
          className="font-montserrat text-sm md:text-base text-cream/60 max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          {t.home.hero.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
        >
          <Button href={waLink} variant="primary" size="lg" external onClick={() => trackEvent("Contact")}>
            {t.home.hero.ctaPrimary}
          </Button>
          <Button href="/servicios" variant="outline" size="lg">
            {t.home.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator — CSS-only animation, no main-thread JS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-cream/30">
          Scroll
        </span>
        <div className="w-px h-8 bg-gold/30 animate-scroll-pulse" />
      </div>
    </section>
  );
}
