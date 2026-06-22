"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type SiteLanguage = "en" | "es";

interface LanguageContextValue {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<SiteLanguage>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const storedLanguage = window.localStorage.getItem(
      "kotr-language"
    ) as SiteLanguage | null;

    return storedLanguage === "en" || storedLanguage === "es"
      ? storedLanguage
      : "en";
  });

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: SiteLanguage) => {
        setLanguage(nextLanguage);
        window.localStorage.setItem("kotr-language", nextLanguage);
      },
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within LanguageProvider");
  }

  return context;
}
