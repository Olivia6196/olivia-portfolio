"use client";

import { useState } from "react";
import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  User,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const socials = [
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/in/olivia-ifebuchechukwu-omeje-36011b355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    style: " py-1 px-2 rounded-xl bg-[#0a66c2] text-white text-4xl mr-1",
  },
  {
    icon: Github,
    link: "https://github.com/Olivia6196",
    style:
      " text-white text-4xl bg-[#171515] py-1 px-2 rounded-xl border border-white mr-1",
  },

  {
    icon: Instagram,
    link: "https://www.instagram.com/olivia_codes",
    style:
      " text-white text-[2.45rem] md:text-4xl bg-gradient-to-tr from-yellow-300 via-red-400 to-purple-400 pt-[1.6vw] md:pt-[0.4vw] pb-1 px-2 rounded-xl mr-1",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/abel.olivi.5",
    style:
      " text-4xl text-white bg-blue-500 py-[1.5vw] md:py-[0.4vw] px-2 rounded-lg",
  },
];

function validate(f: FormState) {
  const e: Record<string, string> = {};
  if (!f.name.trim()) e.name = "Tell me who you are.";
  if (!f.email.trim()) e.email = "I need somewhere to reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    e.email = "That address doesn't look complete.";
  if (f.message.trim().length < 20)
    e.message = "A few more words — twenty characters minimum.";
  return e;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const setField =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const next = { ...form, [k]: e.target.value };
      setForm(next);
      if (Object.keys(err).length) setErr(validate(next));
    };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErr(errs);
    setSent(Object.keys(errs).length === 0);
  };

  return (
    <main className="mx-auto max-w-305 px-4 py-12 sm:px-8">
      <div className="mb-7">
        <div
          className="mb-3 text-xs font-bold tracking-[0.18em] uppercase"
          style={{ color: "var(--pinkDeep)" }}
        >
          Contact
        </div>
        <h1 className="text-[40px] font-extrabold tracking-tight sm:text-[54px]">
          Tell me what you&apos;re{" "}
          <span
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              color: "var(--pink)",
              fontSize: "1.08em",
            }}
          >
            building
          </span>
          .
        </h1>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
        <form
          onSubmit={submit}
          noValidate
          className="flex flex-col gap-4.5 rounded-[28px] p-7.5"
          style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          <div>
            <label
              htmlFor="cf-name"
              className="mb-1.5 block text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
            >
              Name
            </label>
            <input
              id="cf-name"
              value={form.name}
              onChange={setField("name")}
              placeholder="Your name"
              className="w-full rounded-2xl border-[1.5px] px-4 py-3.5 text-[15px] outline-none"
              style={{
                color: "var(--ink)",
                background: "var(--card2)",
                borderColor: err.name ? "var(--pink)" : "var(--line)",
              }}
            />
            {err.name && (
              <div
                className="mt-1.5 text-xs font-semibold"
                style={{ color: "var(--pinkDeep)" }}
              >
                {err.name}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="cf-email"
              className="mb-1.5 block text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
            >
              Email
            </label>
            <input
              id="cf-email"
              value={form.email}
              onChange={setField("email")}
              placeholder="you@company.com"
              className="w-full rounded-2xl border-[1.5px] px-4 py-3.5 text-[15px] outline-none"
              style={{
                color: "var(--ink)",
                background: "var(--card2)",
                borderColor: err.email ? "var(--pink)" : "var(--line)",
              }}
            />
            {err.email && (
              <div
                className="mt-1.5 text-xs font-semibold"
                style={{ color: "var(--pinkDeep)" }}
              >
                {err.email}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="cf-msg"
              className="mb-1.5 block text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
            >
              Project
            </label>
            <textarea
              id="cf-msg"
              value={form.message}
              onChange={setField("message")}
              placeholder="What are you building, and what's in the way?"
              className="min-h-32.5 w-full resize-y rounded-2xl border-[1.5px] px-4 py-3.5 text-[15px] outline-none"
              style={{
                color: "var(--ink)",
                background: "var(--card2)",
                borderColor: err.message ? "var(--pink)" : "var(--line)",
              }}
            />
            {err.message && (
              <div
                className="mt-1.5 text-xs font-semibold"
                style={{ color: "var(--pinkDeep)" }}
              >
                {err.message}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border-0 px-6 py-3.5 text-[15px] font-semibold text-white"
              style={{
                background: "var(--pink)",
                boxShadow: "0 12px 28px rgba(236,72,153,.34)",
              }}
            >
              Send it
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
            {sent && (
              <span
                className="text-[13px] font-semibold"
                style={{ color: "var(--pinkDeep)" }}
              >
                Sent. I reply within two working days.
              </span>
            )}
          </div>
        </form>

        <aside
          className="flex flex-col gap-5 rounded-[28px] p-7"
          style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
        >
          {[
            { Icon: Mail, label: "Email", value: "oliviaifebuche002@gmail.com" },
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
                  background: "var(--pinkSoft)",
                  color: "var(--pinkDeep)",
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

          <div
            className="border-t pt-4.5"
            style={{ borderColor: "var(--line)" }}
          >
            <div
              className="mb-2.5 text-[11px] font-bold tracking-widest uppercase"
              style={{ color: "var(--muted)" }}
            >
              Elsewhere
            </div>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, link, style }) => {
                return (
                  <a
                    key={link}
                    href={link}
                    aria-label={link.includes("linkedin") ? "Olivia on LinkedIn" : link.includes("github") ? "Olivia on GitHub" : link.includes("instagram") ? "Olivia on Instagram" : "Olivia on Facebook"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style}
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
