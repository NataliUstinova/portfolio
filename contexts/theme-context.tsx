"use client";
import React, { useEffect, useState, createContext, useContext } from "react";

type TTheme = "light" | "dark";
type TThemeContextProviderProps = {
  children: React.ReactNode;
};
type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

export const ThemeContextProvider = ({
  children,
}: TThemeContextProviderProps) => {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as TTheme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
