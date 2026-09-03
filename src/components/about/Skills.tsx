"use client";

import { useEffect, useState } from "react";
import { TECH, PRO } from "@/data/portfolio";

const CIRC = 2 * Math.PI * 44;

export default function Skills() {
  const [techC, setTechC] = useState(TECH.map(() => 0));
  const [proC, setProC] = useState(PRO.map(() => 0));

  useEffect(() => {
    setTechC(TECH.map(() => 0));
    setProC(PRO.map(() => 0));
    const id = setInterval(() => {
      setTechC((prev) =>
        prev.map((v, i) => Math.min(v + 2, TECH[i].level))
      );
      setProC((prev) => prev.map((v, i) => Math.min(v + 2, PRO[i].level)));
    }, 18);
    const timeout = setTimeout(() => clearInterval(id), 3000);
    return () => {
      clearInterval(id);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="mt-11">
      <h2 className="mb-1.5 text-[30px] font-extrabold tracking-tight">
        Technical Skills
      </h2>
      <div
        className="mb-[26px] h-[3px] w-[70px] rounded-full"
        style={{ background: "var(--pink)" }}
      />
      <div className="grid gap-x-10 gap-y-[22px] sm:grid-cols-2">
        {TECH.map((t, i) => (
          <div key={t.name}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="text-sm font-semibold">{t.name}</span>
              <span
                className="text-[13px] font-bold"
                style={{ color: "var(--pinkDeep)" }}
              >
                {techC[i]}%
              </span>
            </div>
            <div
              className="h-3 overflow-hidden rounded-full"
              style={{ background: "var(--line)" }}
            >
              <div
                className="h-full rounded-full transition-[width] duration-75"
                style={{
                  width: `${techC[i]}%`,
                  background:
                    "linear-gradient(90deg, var(--pink), var(--pinkDeep))",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-11 mb-1.5 text-[30px] font-extrabold tracking-tight">
        Professional Skills
      </h2>
      <div
        className="mb-[26px] h-[3px] w-[70px] rounded-full"
        style={{ background: "var(--pink)" }}
      />
      <div className="grid grid-cols-2 gap-[26px] sm:grid-cols-3">
        {PRO.map((p, i) => {
          const offset = CIRC * (1 - proC[i] / 100);
          return (
            <div
              key={p.name}
              className="flex flex-col items-center gap-3 rounded-[24px] p-6"
              style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
            >
              <div className="relative h-[108px] w-[108px]">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full -rotate-90"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="var(--line)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="transparent"
                    stroke="var(--pink)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={CIRC}
                    strokeDashoffset={offset}
                    className="transition-[stroke-dashoffset] duration-75"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[19px] font-extrabold">
                  {proC[i]}%
                </span>
              </div>
              <p className="m-0 text-center text-[13px] leading-snug font-semibold">
                {p.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
