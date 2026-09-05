"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

type Props = { projectIndex: number };

export default function CaseStudy({ projectIndex }: Props) {
  const study = PROJECTS[projectIndex];
  if (!study) return null;

  const nextIndex = (projectIndex + 1) % PROJECTS.length;
  const nextStudy = PROJECTS[nextIndex];

  return (
    <main className="mx-auto max-w-305 px-4 py-12 sm:px-8">

      <Link
        href="/work"
        className="mb-6 inline-flex items-center gap-2 text-[13px] font-bold"
        style={{ color: "var(--pinkDeep)" }}
      >
        <ArrowLeft size={14} strokeWidth={2.4} />
        All work
      </Link>

      <div className="mb-3.5 flex flex-wrap items-center gap-2.5">
        <span className="rounded-full px-3 py-1.5 text-[11px] font-bold" style={{ background: "var(--chip)", color: "var(--chipInk)" }}>
          {study.kind}
        </span>
        <span className="text-xs" style={{ color: "var(--muted)" }}>{study.year}</span>
      </div>

      <h1 className="mb-4 text-[40px] leading-[1.04] font-extrabold tracking-tight sm:text-[56px]">
        {study.name}
      </h1>
      <p className="mb-7 max-w-[58ch] text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
        {study.blurb}
      </p>

      <div className="mb-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {study.facts.map((f) => (
          <div key={f.label} className="rounded-[20px] p-4.5" style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}>
            <div className="mb-1.5 text-[11px] font-bold tracking-[0.12em] uppercase" style={{ color: "var(--muted)" }}>
              {f.label}
            </div>
            <div className="text-base font-bold">{f.value}</div>
          </div>
        ))}
      </div>

      <div
        className="relative mb-10 h-[55vw] w-full overflow-hidden rounded-2xl p-4.5 md:h-140"
        style={{ background: "linear-gradient(150deg, var(--pinkSoft), var(--card2))" }}
      >
        {study.mark.startsWith("/") ? (
          <>
            <Image
              src={study.mark}
              alt={`${study.name} project preview by Olivia`}
              fill
              sizes="(max-width: 768px) 100vw, 1220px"
              className="object-cover transition-opacity duration-500"
              priority
            />
            {study.hoverMark && (
              <Image
                src={study.hoverMark}
                alt={`${study.name} alternate preview`}
                fill
                sizes="(max-width: 768px) 100vw, 1220px"
                className="project-image-secondary z-10 object-cover opacity-0 transition-opacity duration-500"
              />
            )}
          </>
        ) : (
          <span className="text-[52px] font-extrabold tracking-[-0.04em] opacity-30" style={{ color: "var(--pink)" }}>
            {study.mark}
          </span>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {study.chapters.map((c) => (
          <div key={c.title} className="rounded-3xl p-6.5" style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}>
            <h2 className="mb-2.5 text-xs font-bold tracking-[0.16em] uppercase" style={{ color: "var(--pinkDeep)" }}>
              {c.title}
            </h2>
            <p className="m-0 text-[15px] leading-[1.7]" style={{ color: "var(--muted)" }}>{c.body}</p>
          </div>
        ))}
      </div>

      {study.link.startsWith("http") && (
        <Link
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex gap-2 rounded-2xl px-5.5 py-3.5 text-sm font-semibold text-white lg:ml-[43%]"
          style={{ background: "var(--pink)" }}
        >
          Visit the project
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      )}

      <div
        className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[26px] px-7 py-6"
        style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
      >
        <div>
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: "var(--muted)" }}>
            Next project
          </div>
          <div className="text-[26px] font-extrabold tracking-tight">{nextStudy.name}</div>
        </div>
        <Link
          href={`/work/${nextStudy.slug}`}
          className="inline-flex items-center gap-2 rounded-full px-5.5 py-3.5 text-sm font-semibold text-white"
          style={{ background: "var(--pink)" }}
        >
          Read it
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>
    </main>
  );
}
