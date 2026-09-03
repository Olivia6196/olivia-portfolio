# Omeje Olivia Portfolio

Exact recreation of the prototype using Next.js, TypeScript, Tailwind CSS, Lucide React, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## Component structure

```
src/
  context/
    PortfolioContext.tsx   # page, theme, nav, filters
  components/
    Header.tsx
    Footer.tsx
    Portfolio.tsx          # thin shell / page switcher
    home/
      HomePage.tsx
      Hero.tsx
      AboutPreview.tsx     # about blurb + 4 service tiles
      FeaturedWork.tsx
      Testimonials.tsx
      HomeCTA.tsx          # "Let's create something amazing"
    about/
      AboutPage.tsx        # bio, journey, passion/vision/goals/values, education
      Skills.tsx           # animated bars + circles
    work/
      WorkPage.tsx
      CaseStudy.tsx
    services/
      ServicesPage.tsx
    contact/
      ContactPage.tsx
  data/
    portfolio.ts
```

## Matched from prototype

- Light / dark theme tokens and toggle
- Home hero, social icons (GitHub, LinkedIn, X, Dribbble), floating note
- About preview with service tiles
- Featured projects with mark banners
- Kind words carousel
- CTA band with contact details
- About: Values + Education sections
- Exact project/case study copy, skills levels, services list
