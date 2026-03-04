import { useState, useEffect } from "react";

const gb = '<img src="https://flagsapi.com/GB/shiny/64.png" alt="English" width="32" height="32" loading="lazy" decoding="async" />';
const se = '<img src="https://flagsapi.com/SE/shiny/64.png" alt="Svenska" width="32" height="32" loading="lazy" decoding="async" />';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    updateLanguage(savedLang);
  }, []);

  const updateLanguage = (lang: string) => {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll(".lang-text");
    elements.forEach((element) => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });

    const inputs = document.querySelectorAll(
      "input[placeholder], textarea[placeholder]",
    );
    inputs.forEach((input) => {
      const placeholder = input.getAttribute(`data-${lang}`);
      if (placeholder) {
        input.setAttribute("placeholder", placeholder);
      }
    });
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "sv" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    updateLanguage(newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="p-1 w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      aria-label={language === "en" ? "Switch to Swedish" : "Switch to English"}
    >
      <span className="w-8 h-8" dangerouslySetInnerHTML={{ __html: language === "en" ? gb : se }}></span>
    </button>
  );
}
