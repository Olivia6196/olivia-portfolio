"use client";

import {
  Database,
  Layers,
  LayoutGrid,
  Lock,
  Monitor,
  Server,
  Webhook,
  Wrench,
} from "lucide-react";
import { SERVICES } from "@/data/portfolio";

const iconMap = {
  Layers,
  Monitor,
  Server,
  LayoutGrid,
  Webhook,
  Database,
  Lock,
  Wrench,
} as const;

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-305 px-4 py-12 sm:px-8">
      <div className="mb-7">
        <div
          className="mb-3 text-xs font-bold tracking-[0.18em] uppercase"
          style={{ color: "var(--pinkDeep)" }}
        >
          Services
        </div>
        <h1 className="text-[40px] font-extrabold tracking-tight sm:text-[54px]">
          My{" "}
          <span
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              color: "var(--pink)",
              fontSize: "1.08em",
            }}
          >
            Services
          </span>
        </h1>
      </div>

      <div className="grid gap-5.5 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = iconMap[s.icon as keyof typeof iconMap] || Layers;
          return (
            <div
              key={s.title}
              className="flex gap-5.5 rounded-[26px] p-6.5 shadow-(---shadow) transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(236,72,153,.95)]"
              style={{ background: "var(--card)" }}
            >
              <span
                className="inline-flex h-11.5 w-11.5 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "var(--pinkSoft)",
                  color: "var(--pinkDeep)",
                }}
              >
                <Icon size={20} />
              </span>
              <div>
                <h2 className="mb-2 text-[19px] font-extrabold tracking-tight">
                  {s.title}
                </h2>
                <p
                  className="m-0 text-sm leading-[1.7]"
                  style={{ color: "var(--muted)" }}
                >
                  {s.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
