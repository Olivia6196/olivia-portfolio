"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { usePortfolio } from "@/context/PortfolioContext";

export default function CaseStudy() {
  const { project, nav, openStudy } = usePortfolio();
  const study = PROJECTS[project];
  const nextIndex = (project + 1) % PROJECTS.length;
  const nextStudy = PROJECTS[nextIndex];

  return (
    <main className="mx-auto max-w-[1220px] px-4 py-12 sm:px-8">
      <button
        onClick={() => nav("work")}
        className="mb-6 inline-flex items-center gap-2 text-[13px] font-bold"
        style={{ color: "var(--pinkDeep)" }}
      >
        <ArrowLeft size={14} strokeWidth={2.4} />
        All work
      </button>

      <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
        <span
          className="rounded-full px-3 py-1.5 text-xs font-bold text-white"
          style={{ background: "var(--pink)" }}
        >
          {study.num}
        </span>
        <span
          className="rounded-full px-3 py-1.5 text-[11px] font-bold"
          style={{ background: "var(--chip)", color: "var(--chipInk)" }}
        >
          {study.kind}
        </span>
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          {study.year}
        </span>
      </div>

      <h1 className="mb-4 text-[40px] leading-[1.04] font-extrabold tracking-tight sm:text-[56px]">
        {study.name}
      </h1>
      <p
        className="mb-7 max-w-[58ch] text-lg leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        {study.blurb}
      </p>

      <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {study.facts.map((f) => (
          <div
            key={f.label}
            className="rounded-[20px] p-[18px]"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="mb-1.5 text-[11px] font-bold tracking-[0.12em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {f.label}
            </div>
            <div className="text-base font-bold">{f.value}</div>
          </div>
        ))}
      </div>

      <div
        className="mb-7 flex h-[240px] items-end rounded-[28px] p-7"
        style={{
          background: "linear-gradient(140deg, var(--pinkSoft), var(--card2))",
        }}
      >
        <span
          className="text-[104px] leading-[0.8] font-extrabold tracking-[-0.05em] opacity-30"
          style={{ color: "var(--pink)" }}
        >
          {study.mark}
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {study.chapters.map((c) => (
          <div
            key={c.title}
            className="rounded-[24px] p-[26px]"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <h2
              className="mb-2.5 text-xs font-bold tracking-[0.16em] uppercase"
              style={{ color: "var(--pinkDeep)" }}
            >
              {c.title}
            </h2>
            <p
              className="m-0 text-[15px] leading-[1.7]"
              style={{ color: "var(--muted)" }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] px-7 py-6"
        style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
      >
        <div>
          <div
            className="text-[11px] font-bold tracking-[0.14em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            Next project
          </div>
          <div className="text-[26px] font-extrabold tracking-tight">
            {nextStudy.name}
          </div>
        </div>
        <button
          onClick={() => openStudy(nextIndex)}
          className="inline-flex items-center gap-2 rounded-full px-[22px] py-3.5 text-sm font-semibold text-white"
          style={{ background: "var(--pink)" }}
        >
          Read it
          <ArrowRight size={15} strokeWidth={2.2} />
        </button>
      </div>
    </main>
  );
}
