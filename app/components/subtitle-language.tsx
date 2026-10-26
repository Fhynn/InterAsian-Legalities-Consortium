"use client";

import { createContext, ElementType, ReactNode, useCallback, useContext, useEffect, useSyncExternalStore } from "react";

type SubtitleLanguage = "en" | "id";

type SubtitleLanguageContextValue = {
  language: SubtitleLanguage;
  setLanguage: (language: SubtitleLanguage) => void;
};

const SubtitleLanguageContext = createContext<SubtitleLanguageContextValue | null>(null);

const languageListeners = new Set<() => void>();

function readLanguage(): SubtitleLanguage {
  const savedLanguage = window.localStorage.getItem("site-language") ?? window.localStorage.getItem("subtitle-language");
  return savedLanguage === "en" ? "en" : "id";
}

function readServerLanguage(): SubtitleLanguage {
  return "id";
}

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    languageListeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function SubtitleLanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeToLanguage, readLanguage, readServerLanguage);
  const setLanguage = useCallback((nextLanguage: SubtitleLanguage) => {
    window.localStorage.setItem("site-language", nextLanguage);
    window.localStorage.removeItem("subtitle-language");
    languageListeners.forEach((listener) => listener());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <SubtitleLanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </SubtitleLanguageContext.Provider>
  );
}

export function useSubtitleLanguage() {
  const context = useContext(SubtitleLanguageContext);
  if (!context) throw new Error("useSubtitleLanguage must be used inside SubtitleLanguageProvider");
  return context;
}

export function Subtitle({ en, id, className = "", as = "p" }: { en: string; id: string; className?: string; as?: "p" | "span" }) {
  const { language } = useSubtitleLanguage();
  const Tag = as;

  return <Tag className={`indo-subtitle ${className}`.trim()} lang={language}>{language === "id" ? id : en}</Tag>;
}

export function Localized({ en, id, as: Tag = "span", ...props }: { en: ReactNode; id: ReactNode; as?: ElementType; [key: string]: unknown }) {
  const { language } = useSubtitleLanguage();
  return <Tag {...props} lang={language}>{language === "id" ? id : en}</Tag>;
}
