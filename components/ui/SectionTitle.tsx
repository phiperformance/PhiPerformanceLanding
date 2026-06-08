"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <motion.div
      className={`${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-cardo text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 ${
          light ? "text-black" : "text-cream"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-montserrat text-sm md:text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-black/70" : "text-cream/60"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
