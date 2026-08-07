import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export function useHomeLanguage() {
  const { i18n } = useTranslation();
  const currentLng = i18n.language || "zh";
  const isZh = currentLng.startsWith("zh");

  const toggleLanguage = useCallback(() => {
    const next = isZh ? "en" : "zh";
    i18n.changeLanguage(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("i18nextLng", next);
    }
  }, [i18n, isZh]);

  return { currentLng, isZh, toggleLanguage };
}
