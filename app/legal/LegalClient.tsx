"use client";

import { useLang } from "@/i18n/context";

export function LegalClient() {
  const { t } = useLang();
  const { legal } = t;

  return (
    <section className="pt-40 pb-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-cardo text-4xl md:text-5xl text-cream mb-3">{legal.title}</h1>
        <p className="font-montserrat text-sm text-cream/60 leading-relaxed mb-12">
          {legal.intro}
        </p>

        {/* Quick nav */}
        <div className="flex gap-6 mb-16 border-b border-cream/10 pb-6">
          <a
            href="#privacidad"
            className="font-montserrat text-[10px] uppercase tracking-widest text-gold hover:underline"
          >
            {legal.privacy.title}
          </a>
          <a
            href="#terminos"
            className="font-montserrat text-[10px] uppercase tracking-widest text-gold hover:underline"
          >
            {legal.terms.title}
          </a>
        </div>

        {/* Privacy Policy */}
        <div id="privacidad" className="mb-20">
          <h2 className="font-cardo text-3xl text-cream mb-2">{legal.privacy.title}</h2>
          <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-8">
            {legal.privacy.updated}
          </p>
          <div className="flex flex-col gap-8">
            {legal.privacy.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-cardo text-xl text-cream mb-2">{section.title}</h3>
                <p className="font-montserrat text-sm text-cream/60 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div id="terminos">
          <h2 className="font-cardo text-3xl text-cream mb-2">{legal.terms.title}</h2>
          <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-8">
            {legal.terms.updated}
          </p>
          <div className="flex flex-col gap-8">
            {legal.terms.sections.map((section) => (
              <div key={section.title}>
                <h3 className="font-cardo text-xl text-cream mb-2">{section.title}</h3>
                <p className="font-montserrat text-sm text-cream/60 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
