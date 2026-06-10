"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { whatsappLink } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/track";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvjqoaz";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactoPage() {
  const { t, lang } = useLang();
  const waLink = whatsappLink(t.contact.whatsappMessage);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        trackEvent("Lead", {
          email: data.get("email")?.toString(),
          customData: { content_name: data.get("servicio")?.toString() },
        });
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="font-montserrat text-[11px] uppercase tracking-[0.4em] text-gold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {t.contact.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="font-cardo text-5xl md:text-7xl text-cream leading-tight mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.contact.hero.headline}
          </motion.h1>
          <motion.p
            className="font-montserrat text-sm text-cream/60 max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.contact.hero.body}
          </motion.p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16 px-6 bg-black-deep">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp CTA */}
          <motion.div
            className="border border-gold/30 p-10 flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold">
              Contacto directo
            </p>
            <h2 className="font-cardo text-3xl text-cream">WhatsApp</h2>
            <p className="font-montserrat text-xs text-cream/50 leading-relaxed">
              Respondemos en menos de 24hs. Arrancamos con una conversación sobre tu negocio.
            </p>
            <Button href={waLink} variant="primary" size="lg" external onClick={() => trackEvent("Contact")}>
              {t.contact.whatsapp}
            </Button>
            <p className="font-montserrat text-[10px] text-cream/30 uppercase tracking-widest">
              {t.contact.location}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="border border-cream/10 p-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-montserrat text-[10px] uppercase tracking-[0.3em] text-gold mb-8">
              Formulario
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 block mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="w-full bg-black border border-cream/20 text-cream font-montserrat text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 block mb-2">
                  {t.contact.form.company}
                </label>
                <input
                  name="empresa"
                  type="text"
                  className="w-full bg-black border border-cream/20 text-cream font-montserrat text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 block mb-2">
                  {t.contact.form.service}
                </label>
                <select
                  name="servicio"
                  className="w-full bg-black border border-cream/20 text-cream/60 font-montserrat text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">{t.contact.form.placeholder.service}</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.translations[lang].title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-montserrat text-[10px] uppercase tracking-widest text-cream/40 block mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full bg-black border border-cream/20 text-cream font-montserrat text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-montserrat text-[11px] uppercase tracking-widest bg-cream text-black px-6 py-3 hover:bg-gold transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "..." : t.contact.form.submit}
              </button>
              {status === "success" && (
                <p className="font-montserrat text-xs text-gold">
                  {lang === "es"
                    ? "¡Gracias! Te contactaremos a la brevedad."
                    : "Thanks! We'll get back to you shortly."}
                </p>
              )}
              {status === "error" && (
                <p className="font-montserrat text-xs text-red-400">
                  {lang === "es"
                    ? "Ocurrió un error. Por favor intentá de nuevo o escribinos por WhatsApp."
                    : "Something went wrong. Please try again or message us on WhatsApp."}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
