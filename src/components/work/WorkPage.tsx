"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

const FILTERS = ["All", "Web App", "Full Stack"] as const;

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const visible =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.kind === filter);

  return (
    <main className="mx-auto max-w-305 px-4 py-12 sm:px-8">
      <div className="mb-7">
        <h1 className="text-[40px] font-extrabold tracking-tight sm:text-[54px]">
          Selected{" "}
          <span
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              color: "var(--pink)",
              fontSize: "1.08em",
            }}
          >
            projects
          </span>
        </h1>
        <p className="mt-3 max-w-[50ch] text-base" style={{ color: "var(--muted)" }}>
          Full stack and web applications built by Olivia — from hospital
          dashboards to community platforms.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2.5" role="group" aria-label="Filter projects">
        {FILTERS.map((k) => {
          const count =
            k === "All"
              ? PROJECTS.length
              : PROJECTS.filter((p) => p.kind === k).length;
          const active = filter === k;
          return (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className="rounded-full border-[1.5px] px-4 py-2 text-[13px] font-bold"
              style={{
                background: active ? "var(--pink)" : "var(--card)",
                color: active ? "#fff" : "var(--ink)",
                borderColor: active ? "var(--pink)" : "var(--line)",
              }}
            >
              {k} <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group rounded-[26px] p-7 text-left transition-transform hover:-translate-y-1"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span
                className="rounded-full px-3 py-1.5 text-[11px] font-bold"
                style={{ background: "var(--chip)", color: "var(--chipInk)" }}
              >
                {p.kind}
              </span>
              <span className="text-xs" style={{ color: "var(--muted)" }}>
                {p.year}
              </span>
            </div>
            <h2 className="mb-2 text-[26px] font-extrabold tracking-tight">
              {p.name}
            </h2>
            <p className="mb-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              {p.blurb}
            </p>
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--pinkDeep)" }}
            >
              Read case study
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
