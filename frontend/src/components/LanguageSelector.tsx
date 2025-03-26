"use client";
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button onClick={() => i18n.changeLanguage("en")}>🇺🇸</button>
      <button onClick={() => i18n.changeLanguage("es")}>🇪🇸</button>
      <button onClick={() => i18n.changeLanguage("ja")}>🇯🇵</button>
    </div>
  );
}
