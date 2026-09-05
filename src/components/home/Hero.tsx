"use client";

import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Linkedin, 
  Github, 
  Instagram, 
  Facebook,
  Sparkles,
  Download,
} from "lucide-react";
import Link from "next/link";

const socials = [
            { icon: Linkedin,
    link: "https://www.linkedin.com/in/olivia-ifebuchechukwu-omeje-36011b355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", 
    style:" py-1 px-2 rounded-xl bg-[#0a66c2] text-white text-4xl mr-1" 
},
            { icon: Github,
    link: "https://github.com/Olivia6196",
    style: " text-white text-4xl bg-[#171515] py-1 px-2 rounded-xl border border-white mr-1"},
  
  { icon: Instagram,   
    link: "https://www.instagram.com/olivia_codes", 
    style: " text-white text-[2.45rem] md:text-4xl bg-gradient-to-tr from-yellow-300 via-red-400 to-purple-400 pt-[1.6vw] md:pt-[0.4vw] pb-1 px-2 rounded-xl mr-1" 
},
  { icon:   Facebook, 
    link: "https://www.facebook.com/abel.olivi.5", 
    style: " text-4xl text-white bg-blue-500 py-[1.5vw] md:py-[0.4vw] px-2 rounded-lg" }
  ]

export default function Hero() {
  return (
    <section className="grid items-center gap-10 py-14 md:grid-cols-[1.02fr_0.98fr] md:gap-10">
      <div>
        <div
          className="mb-4.5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: "var(--pinkDeep)" }}
        >
          Hey, I&apos;m Olivia
          <Sparkles size={14} />
        </div>
        <h1 className="mb-5 text-[40px] leading-[1.03] font-extrabold tracking-[-0.03em] sm:text-[52px] md:text-[62px]">
          I design
          <br />
          <span style={{ color: "var(--pink)" }}>digital worlds</span>
          <br />
          <span
            className="text-[48px] sm:text-[58px] md:text-[66px]"
            style={{
              fontFamily: "var(--font-caveat), Caveat, cursive",
              fontWeight: 700,
              color: "var(--ink)",
            }}
          >
            that spark imagination.
          </span>
        </h1>
        <div
          className="mb-6.5 h-0.75 w-47.5 rounded-full"
          style={{
            background: "linear-gradient(90deg, var(--pink), transparent)",
          }}
        />
        <p
          className="mb-7.5 max-w-[44ch] text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          A full stack developer who turns ideas into beautiful, functional and
          meaningful web experiences — data model to interface, shipped and
          supported.
        </p>
        <div className="mb-10 flex flex-wrap gap-3.5">
          <Link
            href="/Olivia_Omeje_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-6 py-3 text-[15px] font-semibold transition-all dark:hover:shadow-[0_0 _8px_#f472b6] hover:shadow-[0_0_8px_#f472b6]"
            style={{
              background: "var(--card)",
              color: "var(--pinkDeep)",
              borderColor: "var(--pink)",
            }}
          >
            Download Resume 
            <Download size={16} strokeWidth={2.2} />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--pink)",
              boxShadow: "0 12px 28px rgba(236,72,153,.34)",
            }}
          >
            View My Work
            <ArrowRight size={16} strokeWidth={2.2} />
          </Link>
        </div>
        <div className="flex gap-3">
           {socials.map(({ icon: Icon, link, style }) => {
            return(
            <a
              key={link}
              href={link}
              aria-label={link.includes("linkedin") ? "Olivia on LinkedIn" : link.includes("github") ? "Olivia on GitHub" : link.includes("instagram") ? "Olivia on Instagram" : "Olivia on Facebook"}
              target="_blank"
              rel="noopener noreferrer"
              className={style}
              
            >
              <Icon size={20} />
            </a>
            )})}
        </div>
      </div>

      <div className="relative">
        <div
          className="absolute inset-[8%_-4%_6%_6%] rounded-[999px_999px_220px_220px]"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 10%, var(--pinkSoft), transparent 70%)",
          }}
        />
        <figure
          className="relative m-0 overflow-hidden rounded-[28px] border-[6px]"
          style={{
            borderColor: "var(--card)",
            boxShadow: "var(--shadow)",
          }}
        >
          <Image
            src="/olivia.jpg"
            alt="Omeje Olivia – Full Stack Developer (LiviaCodes)"
            width={560}
            height={700}
            sizes="(max-width: 768px) 100vw, 560px"
            className="aspect-4/5 w-full object-cover object-[50%_22%] hover:scale-95 transition-transform duration-300 rounded-2xl"
            loading="eager"
            priority
          />
        </figure>
        <div
          className="animate-float absolute top-4.5 -right-3.5 rounded-[22px] border-[1.5px] px-5 py-4 text-center text-2xl leading-tight font-bold"
          style={{
            background: "var(--card)",
            borderColor: "var(--pink)",
            boxShadow: "var(--shadow)",
            fontFamily: "var(--font-caveat), Caveat, cursive",
            color: "var(--pinkDeep)",
          }}
        >
          Frontend
          <br />
          Backend
          <br />
          Fullstack
          <Heart
            size={16}
            className="mx-auto mt-1.5 block"
            fill="currentColor"
          />
        </div>
      </div>
    </section>
  );
}
