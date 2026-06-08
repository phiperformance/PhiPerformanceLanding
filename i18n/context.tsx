"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { es } from "./es";
import { en } from "./en";

export type Lang = "es" | "en";
export type Translations = typeof es;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("phi-lang") as Lang | null;
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("phi-lang", next);
  };

  const t = lang === "es" ? es : (en as unknown as Translations);

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextType {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
