"use client";

import Image from "next/image";
import { Heart, Layers, LayoutGrid, Monitor, Server } from "lucide-react";
import Link from "next/link";

const TILES = [
  {
    title: "Full-Stack Web Development",
    body: "Building complete, scalable web applications from frontend to backend.",
    Icon: Layers,
  },
  {
    title: "Frontend Development",
    body: "Creating responsive, modern, and user-friendly interfaces.",
    Icon: Monitor,
  },
  {
    title: "Backend Development",
    body: "Developing secure servers, APIs, and application logic.",
    Icon: Server,
  },
  {
    title: "Custom Web Applications",
    body: "Building dashboards, management systems, booking platforms, and other custom solutions.",
    Icon: LayoutGrid,
  },
];

export default function AboutPreview() {
  return (
    <section
      className="mt-6 rounded-[30px] p-8.5"
      style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
    >
      <div className="grid items-start gap-8 md:grid-cols-[300px_1fr_1fr]">
        <figure
          className="hidden md:block m-0 overflow-hidden rounded-[200px_200px_26px_26px]"
          style={{ background: "var(--card2)" }}
        >
          <Image
            src="/olivia.jpg"
            alt="Olivia, full stack developer, at work"
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw, 300px"
            loading="eager"
            className="aspect-3/4 w-full object-cover object-[50%_18%]"
          />
        </figure>

        <div>
          <div
            className="mb-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] uppercase"
            style={{ color: "var(--pinkDeep)" }}
          >
            About me
            <Heart size={13} fill="currentColor" />
          </div>
          <h2 className="mb-3.5 text-[28px] leading-[1.16] font-extrabold tracking-tight sm:text-[32px]">
            I turn ideas into{" "}
            <span
              style={{
                fontFamily: "var(--font-caveat), Caveat, cursive",
                color: "var(--pink)",
                fontSize: "1.12em",
              }}
            >
              beautiful
            </span>{" "}
            and{" "}
            <span
              style={{
                fontFamily: "var(--font-caveat), Caveat, cursive",
                color: "var(--pink)",
                fontSize: "1.12em",
              }}
            >
              impactful
            </span>{"  "}
             realities.
          </h2>
          <div
            className="animate-divider mb-4 h-0.75 w-25 rounded-full"
            style={{ background: "var(--pink)" }}
          />
          <p
            className="mb-5 max-w-[40ch] text-[15px] leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I combine technical depth with design sense to build websites that are technically solid and genuinely pleasant to use.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full px-5.5 py-3 text-sm font-semibold text-white"
            style={{
              background: "var(--pink)",
              boxShadow: "0 10px 24px rgba(236,72,153,.3)",
            }}
          >
            Know More About Me
          </Link>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[22px]"
          style={{ gap: 1, background: "var(--line)" }}
        >
          {TILES.map(({ title, body, Icon }) => (
            <div
              key={title}
              className="p-5"
              style={{ background: "var(--card)" }}
            >
              <span
                className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[14px]"
                style={{
                  background: "var(--pinkSoft)",
                  color: "var(--pinkDeep)",
                }}
              >
                <Icon size={20} />
              </span>
              <div className="mb-1.5 text-[15px] font-bold">{title}</div>
              <p
                className="m-0 text-[13px] leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
