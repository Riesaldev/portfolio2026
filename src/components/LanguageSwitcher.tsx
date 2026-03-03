import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    updateLanguage(savedLang);
  }, []);

  const updateLanguage = (lang: string) => {
    const elements = document.querySelectorAll(".lang-text");
    elements.forEach((element) => {
      const text = element.getAttribute(`data-${lang}`);
      if (text) {
        element.textContent = text;
      }
    });

    // Update placeholder text
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
      onClick={toggleLanguage}
      className="px-3 h-10 rounded-full bg-white dark:bg-gray-800 shadow hover:shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-105"
      aria-label={language === "en" ? "Switch to Swedish" : "Switch to English"}
    >
      <span className="text-2xl">{language === "en" ? "🇬🇧" : "🇸🇪"}</span>
      <span className="font-medium text-gray-700 dark:text-gray-300 uppercase">
        {language === "en" ? "EN" : "SV"}
      </span>
    </button>
  );
}
