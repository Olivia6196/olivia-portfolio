"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";
import type { PageId } from "@/data/portfolio";

const NAV: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "services", label: "Services" },
];

export default function Header() {
  const {
    theme,
    menuOpen,
    nav,
    toggleTheme,
    setMenuOpen,
    isActive,
  } = usePortfolio();

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-[14px]"
      style={{
        background: "color-mix(in srgb, var(--pinkTint) 78%, transparent)",
        borderColor: "var(--line)",
      }}
    >
      <div className="mx-auto flex max-w-305 items-center gap-7 px-4 py-2.5 sm:px-8">
        <button
          onClick={() => nav("home")}
          className="mr-auto flex items-center gap-2"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="Livia Codes"
            width={140}
            height={48}
            sizes="140px"
            className="h-9.5 w-auto object-contain"
            style={{
              width: "auto",
              background: "var(--logoChip)",
              padding: "var(--logoPad)",
              borderRadius: 7,
            }}
            priority
          />
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => nav(item.id)}
              aria-current={isActive(item.id) ? "page" : undefined}
              className="rounded-full px-3.5 py-2 text-sm transition-colors"
              style={{
                color: isActive(item.id) ? "var(--pinkDeep)" : "var(--ink)",
                fontWeight: isActive(item.id) ? 700 : 500,
                background: isActive(item.id) ? "var(--pinkSoft)" : "transparent",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-transform hover:-rotate-12 hover:scale-105"
          style={{
            borderColor: "var(--line)",
            background: "var(--card)",
            color: "var(--pinkDeep)",
            boxShadow: "var(--shadow)",
          }}
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
          style={{
            borderColor: "var(--line)",
            background: "var(--card)",
            color: "var(--pinkDeep)",
          }}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <button
          onClick={() => nav("contact")}
          className="hidden items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:inline-flex hover:rounded-full transition-5s"
          style={{
            background: "var(--pink)",
            boxShadow: "0 10px 24px rgba(236,72,153,.35)",
          }}
        >
          Let&apos;s talk
          <ArrowRight size={16} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t md:hidden"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => nav(item.id)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium"
                  style={{
                    color: isActive(item.id) ? "var(--pinkDeep)" : "var(--ink)",
                    background: isActive(item.id)
                      ? "var(--pinkSoft)"
                      : "transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => nav("contact")}
                className="mt-1 rounded-full px-4 py-3 text-center text-sm font-semibold text-white"
                style={{ background: "var(--pink)" }}
              >
                Let&apos;s talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
