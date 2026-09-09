import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import { BackgroundEffect } from "@/components/layout/BackgroundEffect";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import "./globals.css";

const { personal } = portfolioData;

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.role}`,
  description: `${personal.name} - ${personal.role}. ${personal.tagline}`,
  keywords: [
    "Bishwadeep Khanra",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Java",
    "Python",
    "MongoDB",
    "Firebase",
    "Node.js",
    "Kolkata",
    "Portfolio"
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/b-4321",
    title: `${personal.name} | ${personal.role}`,
    description: personal.headline,
    siteName: `${personal.name} Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | ${personal.role}`,
    description: personal.headline
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.role,
    description: personal.headline,
    url: personal.socials.github,
    sameAs: [personal.socials.github, personal.socials.linkedin],
    knowsAbout: [
      "Java",
      "Python",
      "React",
      "Node.js",
      "MongoDB",
      "Firebase",
      "C++",
      "Full-Stack Development",
      "Data Structures & Algorithms"
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Techno Main Salt Lake"
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Acharya Prafulla Chandra College"
      }
    ]
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#09090b] text-zinc-100 antialiased font-sans selection:bg-brand-500/30 selection:text-brand-300">
        <ScrollProgress />
        <BackgroundEffect />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
