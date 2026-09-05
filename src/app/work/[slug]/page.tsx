import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import { PROJECTS, getProjectBySlug, SITE } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} – Case Study`,
    description: project.blurb,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.name} | Olivia – Full Stack Developer`,
      description: project.blurb,
      url: `/work/${project.slug}`,
      images: project.mark.startsWith("/")
        ? [{ url: project.mark, alt: `${project.name} preview` }]
        : undefined,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.slug === slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.blurb,
    url: `${SITE.url}/work/${project.slug}`,
    dateCreated: project.year,
    creator: {
      "@type": "Person",
      name: "Omeje Olivia",
      url: SITE.url,
    },
    keywords: [project.kind, "web development", "Olivia"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudy projectIndex={index} />
    </>
  );
}
