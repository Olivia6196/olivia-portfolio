"use client";

import Hero from "./Hero";
import AboutPreview from "./AboutPreview";
import FeaturedWork from "./FeaturedWork";
import Testimonials from "./Testimonials";
import HomeCTA from "./HomeCTA";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-305 px-4 pb-18 sm:px-8">
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <Testimonials />
      <HomeCTA />
    </main>
  );
}
