"use client";

import { useLang } from "@/i18n/context";
import { Button } from "@/components/ui/Button";

export function CookiesClient() {
  const { t } = useLang();
  const { page } = t.cookies;

  return (
    <section className="pt-40 pb-24 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-cardo text-4xl md:text-5xl text-cream mb-3">{page.title}</h1>
        <p className="font-montserrat text-[10px] uppercase tracking-widest text-gold mb-10">
          {page.updated}
        </p>
        <p className="font-montserrat text-sm text-cream/60 leading-relaxed mb-12">
          {page.intro}
        </p>

        <div className="flex flex-col gap-10 mb-12">
          {page.sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-cardo text-2xl text-cream mb-3">{section.title}</h2>
              <p className="font-montserrat text-sm text-cream/60 leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.dispatchEvent(new Event("phi-open-cookie-settings"))}
        >
          {t.cookies.settings.title}
        </Button>
      </div>
    </section>
  );
}
