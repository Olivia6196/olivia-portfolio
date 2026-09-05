"use client";

import Image from "next/image";
import Skills from "./Skills";

const CARDS = [
  {
    title: "My Passion",
    body: "My passion for web development stems from the joy of creating something from scratch and seeing it come to life on the screen. I love the blend of creativity and logic that web development offers, allowing me to express myself through design while also solving complex problems with code. Whether it's a simple portfolio site or a complex web application, I am passionate about delivering high-quality work that meets the needs of users and exceeds their expectations.",
  },
  {
    title: "My Vision",
    body: "My vision as a web developer is to create innovative and impactful web experiences that enhance the way people interact with technology. I believe in the power of technology to connect people and improve lives, and I want to contribute to that by creating meaningful digital products. I am committed to continuous learning and improvement, and I look forward to the opportunities and challenges that lie ahead in my journey as a web developer.",
  },
  {
    title: "My Goals",
    body: "My goals as a web developer include continuously improving my skills and knowledge in frontend development, staying up-to-date with the latest technologies and trends in the industry. I aim to work on diverse projects that challenge me and allow me to grow as a developer. Additionally, I want to contribute to the web development community by sharing my knowledge and experiences through blogging, open-source contributions, or speaking at events.",
  },
  {
    title: "My Values",
    body: "My values as a web developer include a commitment to quality, creativity, and continuous learning. I believe in writing clean, maintainable code that follows best practices and delivers a great user experience. I value creativity and strive to bring unique and innovative ideas to my projects. I also believe in the importance of collaboration and communication, as working with others can lead to better outcomes and foster a positive work environment.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-305 px-4 py-12 sm:px-8">
      <div className="grid items-start gap-11 md:grid-cols-[380px_1fr]">
        <div className="relative flex min-h-115 items-end justify-center">
          <div
            className="absolute inset-[6%_4%_0_4%] rounded-[999px_999px_40px_40px]"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 20%, var(--pinkSoft), transparent 72%)",
            }}
          />
          <div
            className="absolute bottom-0 left-1/2 aspect-square w-[86%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(160deg, var(--pinkSoft), var(--card2))",
            }}
          />
          <Image
            src="/olivia-about.png"
            alt="Omeje Olivia"
            width={380}
            height={480}
            sizes="(max-width: 768px) 86vw, 380px"
            loading="lazy"
            className="animate-float relative block w-full max-w-95"
            style={{
              height: "auto",
              filter: "drop-shadow(0 22px 40px rgba(236,72,153,.28))",
            }}
          />
        </div>

        <div className="flex flex-col gap-7">
          <div
            className="rounded-[28px] p-8"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <h1
              className="mb-2 text-[44px] leading-none font-bold"
              style={{
                fontFamily: "var(--font-caveat), Caveat, cursive",
                color: "var(--pink)",
              }}
            >
              About Me
            </h1>
            <div
              className="animate-divider mb-4.5 h-0.75 w-17.5 rounded-full"
              style={{ background: "var(--pink)" }}
            />
            <p
              className="m-0 text-base leading-[1.75]"
              style={{ color: "var(--ink)" }}
            >
              Hi, I’m Olivia, a Full Stack Developer passionate about building
              modern, scalable, and high-performing web applications that solve
              real-world problems. I specialize in creating seamless digital
              experiences by combining responsive, user-focused frontend
              interfaces with robust and efficient backend systems. With a
              strong focus on clean code, performance, accessibility, and
              intuitive design, I enjoy turning ideas into reliable digital
              products that deliver meaningful results. I’m constantly exploring
              new technologies and refining my skills to stay ahead in the
              ever-evolving world of web development. Whether it’s developing a
              dynamic web application, designing an engaging user interface, or
              building the backend infrastructure that powers it, I approach
              every project with creativity, attention to detail, and a
              problem-solving mindset. Let’s turn your ideas into powerful
              digital experiences.
            </p>
          </div>

          <div
            className="rounded-[28px] p-8"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <h2
              className="mb-2 text-[40px] leading-none font-bold"
              style={{
                fontFamily: "var(--font-caveat), Caveat, cursive",
                color: "var(--pink)",
              }}
            >
              My Journey
            </h2>
            <div
              className="animate-divider mb-4.5 h-0.75 w-17.5 rounded-full"
              style={{ background: "var(--pink)" }}
            />
            <p
              className="m-0 text-base leading-[1.75]"
              style={{ color: "var(--muted)" }}
            >
              My journey into web development started with a simple curiosity
              about how websites work. Coming from a science background, I
              became fascinated by the process of designing and building digital
              products, and that curiosity gradually grew into a career in
              web development. I started with HTML and CSS before moving
              into JavaScript and React, where I developed a deeper
              understanding of interactive and responsive interfaces. I later
              expanded into backend development, working with APIs, databases,
              authentication, and server-side technologies. Through hands-on
              projects, I’ve gained practical experience building full-stack
              applications while strengthening my problem-solving and
              development skills. I continue to explore new technologies and
              take on projects that challenge me to grow.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-5.5 md:grid-cols-2">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="rounded-[26px] p-7"
            style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
          >
            <h2 className="mb-3.5 text-[22px] font-extrabold tracking-tight">
              {c.title}
            </h2>
            <div
              className="animate-divider mb-3.5 h-0.75 w-11.5 rounded-full"
              style={{ background: "var(--pink)" }}
            />
            <p
              className="m-0 text-sm leading-[1.75]"
              style={{ color: "var(--muted)" }}
            >
              {c.body}
            </p>
          </div>
        ))}
      </div>

      <div
        className="mt-7 rounded-[28px] p-9"
        style={{
          background: "linear-gradient(120deg, var(--pinkSoft), var(--card))",
        }}
      >
        <h2 className="mb-4 text-[26px] font-extrabold tracking-tight">
          My Education
        </h2>
        <p
          className="mb-3.5 text-[32px] leading-snug"
          style={{
            fontFamily: "var(--font-caveat), Caveat, cursive",
            color: "var(--pink)",
          }}
        >
          Bachelor of Science (B.Sc.) — Anatomy.
        </p>
        <p
          className="m-0 text-[15px] leading-[1.75]"
          style={{ color: "var(--muted)" }}
        >
          My academic training helped me develop strong analytical thinking,
          attention to detail, and research skills. These abilities have been
          valuable in my transition into web development, where problem-solving
          and logical thinking are essential. I am grateful for the diverse
          knowledge and skills I gained during my studies, which have
          contributed to my growth as a web developer. My education has provided
          me with a unique perspective and a strong foundation that I continue
          to build upon in my journey as a developer.
        </p>
      </div>

      <Skills />
    </main>
  );
}
