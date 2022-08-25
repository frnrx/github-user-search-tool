import { useState } from "react";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "light"
  );

  const toggleTheme = () => {
    const oppositeTheme = themeMode === "light" ? "dark" : "light";

    localStorage.setItem("themeMode", oppositeTheme);
    setThemeMode(oppositeTheme);
  };

  return { themeMode, toggleTheme };
};

export default useTheme;
