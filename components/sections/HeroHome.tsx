"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function HeroHome() {
  const { t } = useLang();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || navigator.hardwareConcurrency <= 4);
  }, []);

  const waLink = whatsappLink(t.contact.whatsappMessage);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Scene — loaded dynamically */}
      {!isMobile ? (
        <SceneWrapperLazy />
      ) : (
        <PhiFallbackLazy />
      )}

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

        <motion.h1
          className="font-cardo text-5xl md:text-7xl lg:text-8xl text-cream leading-tight mb-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {t.home.hero.headline}
        </motion.h1>

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
          <Button href={waLink} variant="primary" size="lg" external>
            {t.home.hero.ctaPrimary}
          </Button>
          <Button href="/servicios" variant="outline" size="lg">
            {t.home.hero.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-montserrat text-[9px] uppercase tracking-[0.3em] text-cream/30">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gold/30"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

function SceneWrapperLazy() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@/components/3d/SceneWrapper").then((mod) => {
      setComp(() => mod.SceneWrapper);
    });
  }, []);

  if (!Comp) return null;
  return <Comp />;
}

function PhiFallbackLazy() {
  const [Comp, setComp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import("@/components/3d/SceneWrapper").then((mod) => {
      setComp(() => mod.PhiFallback);
    });
  }, []);

  if (!Comp) return null;
  return <Comp />;
}
