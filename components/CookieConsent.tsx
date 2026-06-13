"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "@/i18n/context";
import { Button } from "@/components/ui/Button";
import {
  CookieConsent as ConsentValue,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookieConsent";

export function CookieConsent() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);

    const openSettings = () => setShowSettings(true);
    window.addEventListener("phi-open-cookie-settings", openSettings);
    return () => window.removeEventListener("phi-open-cookie-settings", openSettings);
  }, []);

  const choose = (consent: ConsentValue) => {
    setCookieConsent(consent);
    setVisible(false);
    setShowSettings(false);
  };

  const openCustomize = () => {
    setAnalyticsEnabled(getCookieConsent() === "accepted");
    setShowSettings(true);
  };

  const saveCustom = () => {
    choose(analyticsEnabled ? "accepted" : "rejected");
  };

  return (
    <AnimatePresence>
      {visible && !showSettings && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-cream/10 bg-black-deep"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <p className="font-cardo text-lg text-cream mb-2">{t.cookies.banner.title}</p>
              <p className="font-montserrat text-xs text-cream/50 leading-relaxed max-w-2xl">
                {t.cookies.banner.body}{" "}
                <Link href="/politica-de-cookies" className="text-gold hover:underline">
                  {t.cookies.banner.policyLink}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button variant="ghost" size="sm" onClick={openCustomize}>
                {t.cookies.banner.customize}
              </Button>
              <Button variant="outline" size="sm" onClick={() => choose("rejected")}>
                {t.cookies.banner.rejectAll}
              </Button>
              <Button variant="primary" size="sm" onClick={() => choose("accepted")}>
                {t.cookies.banner.acceptAll}
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {showSettings && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="bg-black-deep border border-cream/10 max-w-lg w-full p-8"
          >
            <h2 className="font-cardo text-2xl text-cream mb-3">{t.cookies.settings.title}</h2>
            <p className="font-montserrat text-xs text-cream/50 leading-relaxed mb-6">
              {t.cookies.settings.body}
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start justify-between gap-4 border border-cream/10 p-4">
                <div>
                  <p className="font-montserrat text-sm text-cream mb-1">
                    {t.cookies.settings.essential.title}
                  </p>
                  <p className="font-montserrat text-xs text-cream/40 leading-relaxed">
                    {t.cookies.settings.essential.body}
                  </p>
                </div>
                <span className="font-montserrat text-[10px] uppercase tracking-widest text-gold shrink-0 mt-1">
                  ✓
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border border-cream/10 p-4">
                <div>
                  <p className="font-montserrat text-sm text-cream mb-1">
                    {t.cookies.settings.analytics.title}
                  </p>
                  <p className="font-montserrat text-xs text-cream/40 leading-relaxed">
                    {t.cookies.settings.analytics.body}
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={analyticsEnabled}
                  onClick={() => setAnalyticsEnabled((v) => !v)}
                  className={`shrink-0 mt-1 w-10 h-6 rounded-full relative transition-colors ${
                    analyticsEnabled ? "bg-gold" : "bg-cream/20"
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-black transition-transform ${
                      analyticsEnabled ? "translate-x-4" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                ✕
              </Button>
              <Button variant="primary" size="sm" onClick={saveCustom}>
                {t.cookies.settings.save}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
