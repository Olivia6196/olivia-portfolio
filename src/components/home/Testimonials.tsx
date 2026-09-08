"use client";

import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useState } from "react";
import { QUOTES } from "@/data/portfolio";
import Image from "next/image";

export default function Testimonials() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const quotesPerPage = 3;
  const pageCount = Math.ceil(QUOTES.length / quotesPerPage);
  const quotes = QUOTES.slice(
    quoteIdx * quotesPerPage,
    quoteIdx * quotesPerPage + quotesPerPage
  );
  const nextQuotePage = () => setQuoteIdx((quoteIdx + 1) % pageCount);
  const previousQuotePage = () =>
    setQuoteIdx((quoteIdx - 1 + pageCount) % pageCount);

  return (
    <section className="pt-14">
      <div className="mb-5.5 flex items-center gap-2.5">
        <h2 className="m-0 text-[16px] font-extrabold tracking-[0.16em] uppercase">
          Kind words
        </h2>
        <Heart size={15} fill="var(--pink)" style={{ color: "var(--pink)" }} />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {quotes.map((q) => (
          <div
            key={q.name}
            className="flex flex-col gap-4 rounded-[26px] p-6.5"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[32px] leading-none font-bold text-white"
              style={{
                background: "var(--pink)",
                fontFamily: "var(--font-caveat), Caveat, cursive",
              }}
            >
              &ldquo;
            </span>
            <p
              className="m-0 flex-1 text-[15px] leading-relaxed"
              style={{ color: "var(--ink)" }}
            >
              {q.text}
            </p>
            <div
              className="flex items-center gap-3 border-t pt-3.5"
              style={{ borderColor: "var(--line)" }}
            >
              <Image 
                src={q.initials}
                alt={q.name}
                width={40}
                height={40}
                className="h-9 w-9 rounded-full"
              />
              <div>
                <div className="text-sm font-bold">{q.name}</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {q.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6.5 flex items-center justify-center gap-3.5">
        <button
          onClick={previousQuotePage}
          aria-label="Previous testimonials"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--line)",
            background: "var(--card)",
            color: "var(--pinkDeep)",
            boxShadow: "var(--shadow)",
          }}
        >
          <ChevronLeft size={16} strokeWidth={2.2} />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setQuoteIdx(i)}
              aria-label={`Testimonial page ${i + 1}`}
              className="h-1.5 w-7 rounded-full border-0 p-0"
              style={{
                background: i === quoteIdx ? "var(--pink)" : "var(--line)",
              }}
            />
          ))}
        </div>
        <button
          onClick={nextQuotePage}
          aria-label="More testimonials"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--line)",
            background: "var(--card)",
            color: "var(--pinkDeep)",
            boxShadow: "var(--shadow)",
          }}
        >
          <ChevronRight size={16} strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
