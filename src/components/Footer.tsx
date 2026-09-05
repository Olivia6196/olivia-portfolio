"use client";

import Link from "next/link";

export default function Footer() {
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
          © {new Date().getFullYear()} Omeje Olivia (LiviaCodes). All rights
          reserved.
        </span>
        <Link href="/work" className="hidden md:inline-block hover:opacity-80">
          Work
        </Link>
        <Link
          href="/services"
          className="hidden md:inline-block hover:opacity-80"
        >
          Services
        </Link>
        <a
          href="mailto:oliviaifebuche002@gmail.com"
          className="hidden md:inline-block hover:opacity-80"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
