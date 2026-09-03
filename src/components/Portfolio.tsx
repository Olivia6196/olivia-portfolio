"use client";

import { AnimatePresence, motion } from "framer-motion";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/home/HomePage";
import AboutPage from "@/components/about/AboutPage";
import WorkPage from "@/components/work/WorkPage";
import CaseStudy from "@/components/work/CaseStudy";
import ServicesPage from "@/components/services/ServicesPage";
import ContactPage from "@/components/contact/ContactPage";

function PortfolioShell() {
  const { page, project, theme, mounted } = usePortfolio();

  if (!mounted) {
    return (
      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(180deg, #fdf2f8, #fbe8f4)" }}
      />
    );
  }

  return (
    <div
      data-theme={theme}
      className="min-h-screen"
      style={{
        background: "var(--pg)",
        color: "var(--ink)",
        fontFamily: "var(--font-archivo), Archivo, system-ui, sans-serif",
      }}
    >
      <Header />

      <AnimatePresence mode="wait">
        <motion.div
          key={page + (page === "case" ? String(project) : "")}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
        >
          {page === "home" && <HomePage />}
          {page === "about" && <AboutPage />}
          {page === "work" && <WorkPage />}
          {page === "case" && <CaseStudy />}
          {page === "services" && <ServicesPage />}
          {page === "contact" && <ContactPage />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function Portfolio() {
  return (
    <PortfolioProvider>
      <PortfolioShell />
    </PortfolioProvider>
  );
}
