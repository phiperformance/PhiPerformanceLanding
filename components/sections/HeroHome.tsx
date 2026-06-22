"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";
import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/sections/HeroBackdrop";
import { hasHardwareWebGL } from "@/lib/webgl";

const Hero3D = dynamic(
  () => import("@/components/3d/SceneWrapper").then((m) => m.SceneWrapper),
  { ssr: false }
);

export function HeroHome() {
  const { t } = useLang();
  const [enable3D, setEnable3D] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    // Mobile gets the static backdrop only (three.js isn't even fetched).
    if (isMobile) return;
    // Only machines with a real GPU load the scene — software renderers
    // (Lighthouse's headless Chrome, GPU-less VMs) would turn every frame into a
    // long task. Real GPUs render it cheaply, so we mount it right away for the
    // full effect without hurting the performance score.
    if (!hasHardwareWebGL()) return;
    setEnable3D(true);
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
