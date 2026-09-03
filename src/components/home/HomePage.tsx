"use client";

import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import FeaturedWork from "./FeaturedWork";
import Testimonials from "./Testimonials";
import HomeCTA from "./HomeCTA";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1220px] px-4 pb-[72px] sm:px-8">
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
