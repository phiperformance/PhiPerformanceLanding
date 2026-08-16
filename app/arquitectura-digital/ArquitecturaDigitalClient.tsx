"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { Button } from "@/components/ui/Button";
import { whatsappLink, SITE_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/track";

const PAGE_PATH = "/arquitectura-digital";

export function ArquitecturaDigitalClient() {
  const { t } = useLang();
  const { architecture } = t;
  const { hero, plans, detail, faq, cta } = architecture;

  const waLink = whatsappLink(architecture.whatsappMessage);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: architecture.breadcrumb,
    description: hero.body,
    serviceType: "Web design and development",
    provider: {
      "@type": "Organization",
      name: "Phi Performance Marketing",
      url: SITE_URL,
    },
    areaServed: "AR",
    offers: plans.items.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.purpose,
      price: plan.setupPrice.replace(/[^0-9]/g, ""),
      priceCurrency: "USD",
      url: `${SITE_URL}${PAGE_PATH}`,
      // Published figures are a starting point, refined per project scope.
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: plan.setupPrice.replace(/[^0-9]/g, ""),
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
    })),
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: architecture.breadcrumb,
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Breadcrumb */}
      <div className="pt-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <nav className="font-montserrat text-[10px] uppercase tracking-widest text-cream/30 flex items-center gap-2">
            <Link href="/" className="hover:text-cream transition-colors">
              {t.ui.breadcrumb.home}
            </Link>
            <span>/</span>
            <span className="text-gold">{architecture.breadcrumb}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {hero.eyebrow}
          </motion.p>
          {/* LCP element — visible from first paint (no entrance fade), since
              this page is a paid-traffic destination */}
          <h1 className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-8">
            {hero.headline}
          </h1>
          <motion.div
            className="max-w-2xl flex flex-col gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="font-montserrat text-sm text-cream/60 leading-relaxed">
              {hero.body}
            </p>
            <p className="font-montserrat text-sm text-cream/80 leading-relaxed border-l border-gold/40 pl-5">
              {hero.note}
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <Button href="#propuestas" variant="primary">
              {hero.ctaPrimary}
            </Button>
            <Button
              href={waLink}
              variant="outline"
              external
              onClick={() => trackEvent("Contact")}
            >
              {hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section
        id="propuestas"
        className="scroll-mt-16 py-24 px-6 bg-black-deep border-y border-cream/10"
      >
        <div className="max-w-7xl mx-auto">
          <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {plans.eyebrow}
          </p>
          <h2 className="font-cardo text-4xl md:text-5xl text-cream leading-tight mb-16">
            {plans.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px border border-cream/10">
            {plans.items.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`flex flex-col bg-black-deep border p-8 md:p-10 ${
                  i === 1 ? "border-gold/40" : "border-cream/10"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <h3 className="font-cardo text-3xl text-cream mb-2">{plan.name}</h3>
                <p className="font-montserrat text-xs text-gold/80 mb-10">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="border-y border-cream/10 py-8 mb-8">
                  <p className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 mb-2">
                    {plans.fromLabel}
                  </p>
                  <p className="font-cardo text-5xl text-cream leading-none">
                    {plan.setupPrice}
                  </p>
                  <p className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 mt-2">
                    {plans.setupLabel}
                  </p>
                  <p className="font-montserrat text-sm text-gold mt-6">
                    + {plan.monthlyPrice}
                    {plans.monthlySuffix}
                    <span className="text-cream/40 text-xs"> · {plans.monthlyLabel}</span>
                  </p>
                </div>

                {/* Purpose */}
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-3">
                  {plans.purposeLabel}
                </p>
                <p className="font-montserrat text-xs text-cream/60 leading-relaxed mb-8">
                  {plan.purpose}
                </p>

                {/* Includes */}
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-4">
                  {plans.includesLabel}
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.includes.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-gold text-xs mt-0.5">✓</span>
                      <span className="font-montserrat text-xs text-cream/60 leading-relaxed">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Delivery + CTA pinned to the bottom so both cards align */}
                <div className="mt-auto pt-6 border-t border-cream/10">
                  <p className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 mb-1">
                    {plans.deliveryLabel}
                  </p>
                  <p className="font-montserrat text-xs text-cream/70 mb-8">
                    {plan.delivery}
                  </p>
                  <Button
                    href={whatsappLink(
                      `${architecture.whatsappPlanMessage} ${plan.name}.`
                    )}
                    variant={i === 1 ? "primary" : "outline"}
                    size="sm"
                    external
                    className="w-full"
                    onClick={() => trackEvent("Contact")}
                  >
                    {plans.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* "Desde" disclaimer — deliberately visible, not fine print */}
          <div className="mt-10 border border-gold/20 p-6 md:p-8">
            <p className="font-montserrat text-xs text-cream/60 leading-relaxed">
              {plans.note}
            </p>
          </div>
        </div>
      </section>

      {/* What's included — detail */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {detail.eyebrow}
          </p>
          <h2 className="font-cardo text-4xl md:text-5xl text-cream leading-tight mb-4">
            {detail.title}
          </h2>
          <p className="font-montserrat text-sm text-cream/60 mb-16">{detail.body}</p>

          <dl className="flex flex-col gap-px border border-cream/10">
            {detail.items.map((item, i) => (
              <motion.div
                key={item.term}
                className="bg-black border border-cream/10 p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i, 4) * 0.05 }}
              >
                <dt className="font-cardo text-xl text-cream md:col-span-1">
                  {item.term}
                </dt>
                <dd className="font-montserrat text-xs text-cream/60 leading-relaxed md:col-span-2">
                  {item.body}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-black-deep border-y border-cream/10">
        <div className="max-w-4xl mx-auto">
          <p className="font-montserrat text-xs uppercase tracking-[0.3em] text-gold mb-4">
            {faq.eyebrow}
          </p>
          <h2 className="font-cardo text-4xl md:text-5xl text-cream leading-tight mb-16">
            {faq.title}
          </h2>

          <div className="flex flex-col gap-10">
            {faq.items.map((item) => (
              <motion.div
                key={item.q}
                className="border-b border-cream/10 pb-10 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-cardo text-2xl text-cream mb-4">{item.q}</h3>
                <p className="font-montserrat text-sm text-cream/60 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-blue">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="font-cardo text-5xl md:text-6xl text-cream mb-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {cta.title}
          </motion.h2>
          <motion.p
            className="font-montserrat text-sm text-cream/70 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {cta.body}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              href={waLink}
              variant="primary"
              size="lg"
              external
              onClick={() => trackEvent("Contact")}
            >
              {cta.ctaPrimary}
            </Button>
            <Button href="/contacto" variant="outline" size="lg">
              {cta.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
