"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";
import { trackEvent } from "@/lib/track";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  const { t } = useLang();
  const waLink = whatsappLink(t.contact.whatsappMessage);

  return (
    <section className="py-32 px-6 bg-blue">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-cardo text-5xl md:text-6xl lg:text-7xl text-cream mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t.home.cta.title}
        </motion.h2>
        <motion.p
          className="font-montserrat text-sm text-cream/70 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t.home.cta.body}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button href={waLink} variant="primary" size="lg" external onClick={() => trackEvent("Contact")}>
            {t.home.cta.ctaPrimary}
          </Button>
          <Button href="/contacto" variant="outline" size="lg">
            {t.home.cta.ctaSecondary}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
