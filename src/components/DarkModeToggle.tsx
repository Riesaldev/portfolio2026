import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);

    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 shadow-gray-900 shadow hover:shadow-md transition-all duration-300 flex items-center justify-center hover:scale-110"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon */}
      <svg fill="none" stroke="currentColor" className={`w-8 h-8 text-yellow-500 absolute transition-all duration-300 ${
          isDark
            ? "opacity-0 rotate-180 scale-0"
            : "opacity-100 rotate-0 scale-100"
        }`} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" strokeWidth={2}/></svg>

      {/* Moon icon */}
      <svg fill="none" stroke="currentColor" className={`w-8 h-8 text-blue-600 rounded-full absolute transition-all duration-300 shadow-gray-200 shadow hover:shadow-md hover:scale-110 ${
          isDark
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-180 scale-0"
        }`} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9 9 0 0 0 8.354-5.646" strokeWidth={2}/></svg>
    </button>
  );
}
