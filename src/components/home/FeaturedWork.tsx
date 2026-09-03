"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";

export default function FeaturedWork() {
  const { nav, openStudy } = usePortfolio();
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="pt-14">
      <div className="mb-[22px] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <h2 className="m-0 text-[15px] font-extrabold tracking-[0.16em] uppercase">
            Featured projects
          </h2>
          <Sparkles size={15} style={{ color: "var(--pink)" }} />
        </div>
        <button
          onClick={() => nav("work")}
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--pinkDeep)" }}
        >
          View all projects
          <ArrowRight size={15} strokeWidth={2.2} />
        </button>
      </div>

      <div className="grid gap-[22px] md:grid-cols-3">
        {featured.map((p, i) => (
          <button
            key={p.name}
            onClick={() => openStudy(i)}
            className="group flex flex-col overflow-hidden rounded-[26px] text-left transition-transform hover:-translate-y-1.5"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="relative flex h-[176px] items-end p-[18px]"
              style={{
                background:
                  "linear-gradient(150deg, var(--pinkSoft), var(--card2))",
              }}
            >
              <span
                className="text-[52px] font-extrabold tracking-[-0.04em] opacity-30"
                style={{ color: "var(--pink)" }}
              >
                {p.mark}
              </span>
              <span
                className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ background: "var(--pink)" }}
              >
                {p.num}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-5">
              <div className="flex items-center gap-2.5">
                <span className="text-[17px] font-bold">{p.name}</span>
                <span
                  className="rounded-full px-2.5 py-1 text-[11px] font-bold"
                  style={{ background: "var(--chip)", color: "var(--chipInk)" }}
                >
                  {p.kind}
                </span>
              </div>
              <p
                className="m-0 flex-1 text-[13px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {p.blurb}
              </p>
              <span
                className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ background: "var(--pink)" }}
              >
                <ArrowRight size={16} strokeWidth={2.2} />
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
