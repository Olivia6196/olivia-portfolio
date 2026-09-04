"use client";

import { usePortfolio } from "@/context/PortfolioContext";

export default function Footer() {
  const { nav } = usePortfolio();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--line)",
        background: "color-mix(in srgb, var(--pinkTint) 60%, transparent)",
      }}
    >
      <div
        className="mx-auto flex max-w-305 flex-wrap items-center gap-5 px-4 py-5 text-[13px] sm:px-8"
        style={{ color: "var(--muted)" }}
      >
        <span className="mr-auto">
          © 2026 Omeje Olivia. All rights reserved.
        </span>
        <button onClick={() => nav("work")} className="hidden md:inline-block hover:opacity-80">
          Work
        </button>
        <button onClick={() => nav("services")} className="hidden md:inline-block hover:opacity-80">
          Services
        </button>
        <a href="mailto:oliviaifebuche002@gmail.com" className="hidden md:inline-block hover:opacity-80">
          Email
        </a>
      </div>
    </footer>
  );
}
