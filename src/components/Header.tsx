"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
] as const;

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const { theme, menuOpen, toggleTheme, setMenuOpen } = useTheme();
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-[14px]"
      style={{
        background: "color-mix(in srgb, var(--pinkTint) 78%, transparent)",
        borderColor: "var(--line)",
      }}
    >
      <div className="mx-auto flex max-w-305 items-center gap-7 px-4 py-2.5 sm:px-8">
        <Link
          href="/"
          className="mr-auto flex items-center gap-2"
          aria-label="Olivia – Full Stack Developer home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="LiviaCodes – Olivia portfolio logo"
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
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {NAV.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="rounded-full px-3.5 py-2 text-sm transition-colors"
                style={{
                  color: active ? "var(--pinkDeep)" : "var(--ink)",
                  fontWeight: active ? 700 : 500,
                  background: active ? "var(--pinkSoft)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 sm:inline-flex hover:rounded-full"
          style={{
            background: "var(--pink)",
            boxShadow: "0 10px 24px rgba(236,72,153,.35)",
          }}
        >
          Let&apos;s talk
          <ArrowRight size={16} />
        </Link>
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
              {NAV.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-left text-sm font-medium"
                    style={{
                      color: active ? "var(--pinkDeep)" : "var(--ink)",
                      background: active ? "var(--pinkSoft)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full px-4 py-3 text-center text-sm font-semibold text-white"
                style={{ background: "var(--pink)" }}
              >
                Let&apos;s talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
