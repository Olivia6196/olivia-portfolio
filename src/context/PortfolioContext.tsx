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
import type { PageId } from "@/data/portfolio";

type Theme = "light" | "dark";

type PortfolioContextValue = {
  page: PageId;
  project: number;
  filter: string;
  quoteIdx: number;
  theme: Theme;
  menuOpen: boolean;
  mounted: boolean;
  nav: (page: PageId) => void;
  openStudy: (index: number) => void;
  setFilter: (filter: string) => void;
  setQuoteIdx: (idx: number) => void;
  toggleTheme: () => void;
  setMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  isActive: (id: PageId) => boolean;
};

const PortfolioContext = createContext<PortfolioContextValue | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>("home");
  const [project, setProject] = useState(0);
  const [filter, setFilter] = useState("All");
  const [quoteIdx, setQuoteIdx] = useState(0);
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

  const nav = useCallback((p: PageId) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const openStudy = useCallback((index: number) => {
    setProject(index);
    setPage("case");
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("olivia-portfolio-theme", next);
      return next;
    });
  }, []);

  const isActive = useCallback(
    (id: PageId) => page === id || (id === "work" && page === "case"),
    [page]
  );

  const value = useMemo(
    () => ({
      page,
      project,
      filter,
      quoteIdx,
      theme,
      menuOpen,
      mounted,
      nav,
      openStudy,
      setFilter,
      setQuoteIdx,
      toggleTheme,
      setMenuOpen,
      isActive,
    }),
    [
      page,
      project,
      filter,
      quoteIdx,
      theme,
      menuOpen,
      mounted,
      nav,
      openStudy,
      toggleTheme,
      isActive,
    ]
  );

  return (
    <PortfolioContext.Provider value={value}>{children}</PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
