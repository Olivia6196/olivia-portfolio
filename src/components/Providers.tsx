"use client";

import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import type { ReactNode } from "react";

function ThemeShell({ children }: { children: ReactNode }) {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(180deg, #fdf2f8, #fbe8f4)" }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      data-theme={theme}
      className="min-h-screen"
      style={{
        background: "var(--pg)",
        color: "var(--ink)",
        fontFamily: "var(--font-archivo), Archivo, system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeShell>{children}</ThemeShell>
    </ThemeProvider>
  );
}
