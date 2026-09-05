"use client";

import { ArrowUpRight, Mail, MapPin, User } from "lucide-react";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      className="mt-8 rounded-[30px] px-8.5 py-10"
      style={{
        background: "linear-gradient(120deg, var(--pinkSoft), var(--card))",
      }}
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-2 text-[32px] leading-[1.1] font-extrabold tracking-tight sm:text-[38px]">
            Let&apos;s create something{" "}
            <span
              style={{
                fontFamily: "var(--font-caveat), Caveat, cursive",
                color: "var(--pink)",
                fontSize: "1.15em",
              }}
            >
              amazing
            </span>{" "}
            together!
          </h2>
          <p
            className="mb-6 max-w-[40ch] text-[15px]"
            style={{ color: "var(--muted)" }}
          >
            Few build slots open this quarter. Bring the hard problem.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white"
            style={{
              background: "var(--pink)",
              boxShadow: "0 12px 28px rgba(236,72,153,.34)",
            }}
          >
            Let&apos;s Connect
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {[
            {
              Icon: Mail,
              label: "Email",
              value: "oliviaifebuche002@gmail.com",
            },
            { Icon: MapPin, label: "Based in", value: "Enugu / Remote" },
            {
              Icon: User,
              label: "Available for",
              value: "Freelance & contract",
            },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3.5">
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-[14px]"
                style={{
                  background: "var(--card)",
                  color: "var(--pinkDeep)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <Icon size={18} />
              </span>
              <div>
                <div
                  className="text-[11px] font-bold tracking-[0.12em] uppercase"
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </div>
                <div className="text-[15px] font-semibold">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
