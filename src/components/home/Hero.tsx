"use client";

import Image from "next/image";
import {
  ArrowRight,
  Dribbble,
  Github,
  Heart,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { usePortfolio } from "@/context/PortfolioContext";

function XIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 5.5a7.6 7.6 0 0 1-2.3.7A3.7 3.7 0 0 0 20.4 4a7.6 7.6 0 0 1-2.5 1A3.7 3.7 0 0 0 11.5 8a10 10 0 0 1-7.3-3.7 3.7 3.7 0 0 0 1.1 5 3.6 3.6 0 0 1-1.7-.5 3.7 3.7 0 0 0 3 3.6 3.7 3.7 0 0 1-1.7.1 3.7 3.7 0 0 0 3.4 2.6A10 10 0 0 1 3 17.5 14 14 0 0 0 21 5.5Z" />
    </svg>
  );
}

export default function Hero() {
  const { nav } = usePortfolio();

  return (
    <section className="grid items-center gap-10 py-14 md:grid-cols-[1.02fr_0.98fr] md:gap-10">
      <div>
        <div
          className="mb-4.5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: "var(--pinkDeep)" }}
        >
          Hey, I&apos;m Olivia
          <Sparkles size={14} />
        </div>
        <h1 className="mb-5 text-[40px] leading-[1.03] font-extrabold tracking-[-0.03em] sm:text-[52px] md:text-[62px]">
          I craft
          <br />
          <span style={{ color: "var(--pink)" }}>digital experiences</span>
          <br />
          <span
            className="text-[48px] sm:text-[58px] md:text-[66px]"
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              fontWeight: 700,
              color: "var(--ink)",
            }}
          >
            that inspire.
          </span>
        </h1>
        <div
          className="mb-6.5 h-0.75 w-47.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--pink), transparent)",
          }}
        />
        <p
          className="mb-7.5 max-w-[44ch] text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          A full stack developer who turns ideas into beautiful, functional and
          meaningful web experiences — data model to interface, shipped and
          supported.
        </p>
        <div className="mb-10 flex flex-wrap gap-3.5">
          <button
            onClick={() => nav("work")}
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--pink)",
              boxShadow: "0 12px 28px rgba(236,72,153,.34)",
            }}
          >
            View My Work
            <ArrowRight size={16} strokeWidth={2.2} />
          </button>
          <button
            onClick={() => nav("about")}
            className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-6 py-3.5 text-[15px] font-semibold transition-colors"
            style={{
              background: "var(--card)",
              color: "var(--pinkDeep)",
              borderColor: "var(--pink)",
            }}
          >
            About me
          </button>
        </div>
        <div className="flex gap-3">
          {[
            { Icon: Github, label: "GitHub" },
            { Icon: Linkedin, label: "LinkedIn" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-all hover:-translate-y-0.5"
              style={{
                background: "var(--pinkSoft)",
                color: "var(--pinkDeep)",
              }}
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-[8%_-4%_6%_6%] rounded-[999px_999px_220px_220px]"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 10%, var(--pinkSoft), transparent 70%)",
          }}
        />
        <figure
          className="relative m-0 overflow-hidden rounded-[28px] border-[6px]"
          style={{
            borderColor: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Image
            src="/olivia.jpg"
            alt="Omeje Olivia"
            width={560}
            height={700}
            className="aspect-4/5 w-full object-cover object-[50%_22%]"
            priority
          />
        </figure>
        <div
          className="animate-float absolute top-4.5 -right-3.5 rounded-[22px] border-[1.5px] px-5 py-4 text-center text-2xl leading-tight font-bold"
          style={{
            background: "var(--card)",
            borderColor: "var(--pink)",
            boxShadow: "var(--shadow)",
            fontFamily: "var(--font-caveat), Caveat, cursive",
            color: "var(--pinkDeep)",
          }}
        >
          Frontend
          <br />
          Backend
          <br />
          Fullstack
          <Heart
            size={16}
            className="mx-auto mt-1.5 block"
            fill="currentColor"
          />
        </div>
      </div>
    </section>
  );
}
