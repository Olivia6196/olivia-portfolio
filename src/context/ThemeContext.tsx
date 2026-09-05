"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  menuOpen: boolean;
  toggleTheme: () => void;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("olivia-portfolio-theme") as Theme | null;
    if (stored === "light" || stored === "dark") setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      setTheme("dark");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("olivia-portfolio-theme", next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, mounted, menuOpen, toggleTheme, setMenuOpen }),
    [theme, mounted, menuOpen, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
