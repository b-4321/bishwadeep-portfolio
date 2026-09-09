"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Code, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { SiFlutter, SiFirebase, SiGooglecloud } from "react-icons/si";

export const About: React.FC = () => {
  const { personal, certifications } = portfolioData;

  const verifiedStats = [
    {
      label: "Development Experience",
      value: "3+ Years",
      subtext: "Freelance & Soultechies since 2021",
      icon: Briefcase,
      color: "text-emerald-400"
    },
    {
      label: "Undergraduate Distinction",
      value: "9.00 CGPA",
      subtext: "B.Sc. Computer Science (Hons)",
      icon: GraduationCap,
      color: "text-blue-400"
    },
    {
      label: "Competitive State Rank",
      value: "Rank 251",
      subtext: "WB JECA MCA Examination",
      icon: Award,
      color: "text-amber-400"
    },
    {
      label: "Accredited Certifications",
      value: `${certifications.length}+ Credentials`,
      subtext: "Coding Ninjas, AWS, Google, EC-Council",
      icon: Code,
      color: "text-purple-400"
    }
  ];

  const currentFocusTags = [
    { name: "Flutter", icon: SiFlutter, color: "text-[#54C5F8]" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    { name: "Cloud Firestore", icon: SiGooglecloud, color: "text-[#4285F4]" },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeading
        badge="About Me"
        title="Engineering Solutions with Purpose & Precision"
        subtitle="A closer look at my background, academic foundation, and technical philosophy."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Visual Brand Card */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 border border-white/[0.08] relative overflow-hidden group">
            {/* Ambient Corner Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-500/15 rounded-full blur-3xl pointer-events-none transition-all group-hover:bg-brand-500/25" />

            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Software Engineer Profile
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
              Building robust systems from fundamental principles.
            </h3>

            <div className="space-y-3 text-sm text-zinc-400 leading-relaxed">
              <p>
                Based in <span className="text-zinc-200 font-medium">Kolkata, India</span>, I focus on building high-performance web software, writing clean object-oriented code, and architecting data workflows that hold up under scale.
              </p>
              <p>
                Whether designing REST APIs, modeling schemas in MongoDB, or creating fluid reactive frontends in React, I value clarity, performance, and maintainability over shortcuts.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{personal.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Detailed Narrative */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/[0.06] backdrop-blur-md space-y-4">
            <h4 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
              <Code className="w-4 h-4 text-brand-400" />
              <span>Developer Mindset &amp; Experience</span>
            </h4>
            {personal.bio.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Current Focus</p>
              <p className="text-sm font-semibold text-zinc-200 mt-1">Flutter App Development, Firebase &amp; Cloud Firestore</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {currentFocusTags.map((tag) => {
                const Icon = tag.icon;
                return (
                  <motion.span
                    key={tag.name}
                    layout
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-md bg-zinc-800/90 hover:bg-zinc-800 text-zinc-200 border border-white/[0.06] hover:border-brand-500/30 font-mono shadow-sm transition-colors cursor-default"
                  >
                    <Icon className={`w-3.5 h-3.5 ${tag.color}`} />
                    <span>{tag.name}</span>
                  </motion.span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Verified Metrics Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {verifiedStats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={fadeIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="p-5 flex flex-col justify-between h-full bg-zinc-900/50 hover:bg-zinc-900/80 transition-all shadow-sm hover:shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-zinc-400">{stat.label}</span>
                  <div className={`p-2 rounded-xl bg-white/[0.04] ${stat.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.subtext}</div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
