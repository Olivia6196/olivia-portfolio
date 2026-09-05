"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export default function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="pt-14">
      <div className="mb-5.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <h2 className="m-0 text-[15px] font-extrabold tracking-[0.16em] uppercase">
            Featured projects
          </h2>
          <Sparkles size={15} style={{ color: "var(--pink)" }} />
        </div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--pinkDeep)" }}
        >
          View all projects
          <ArrowRight size={15} strokeWidth={2.2} />
        </Link>
      </div>

      <div className="grid gap-5.5 md:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="project-card group flex flex-col overflow-hidden rounded-[26px] text-left transition-transform hover:-translate-y-1.5"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <div
              className="relative flex h-44 items-end p-4.5"
              style={{
                background:
                  "linear-gradient(150deg, var(--pinkSoft), var(--card2))",
              }}
            >
              {p.mark.startsWith("/") ? (
                <>
                  <Image
                    src={p.mark}
                    alt={`${p.name} by Olivia – project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-opacity duration-500"
                    loading="lazy"
                  />
                  {p.hoverMark && (
                    <Image
                      src={p.hoverMark}
                      alt={`${p.name} alternate preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="project-image-secondary z-10 object-cover opacity-0 transition-opacity duration-500"
                      loading="lazy"
                    />
                  )}
                </>
              ) : (
                <span
                  className="text-[52px] font-extrabold tracking-[-0.04em] opacity-30"
                  style={{ color: "var(--pink)" }}
                >
                  {p.mark}
                </span>
              )}
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
          </Link>
        ))}
      </div>
    </section>
  );
}
