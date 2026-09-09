"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badge="Academic Background"
        title="Education &amp; Qualifications"
        subtitle="Rigorous foundational training in computer science, software design, and algorithms."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-6"
      >
        {education.map((item, index) => (
          <motion.div
            key={`${item.institution}-${index}`}
            variants={fadeIn}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border border-white/[0.08] hover:border-brand-500/30 hover:bg-zinc-900/80 transition-all backdrop-blur-md shadow-sm hover:shadow-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-medium text-brand-400 mt-0.5">
                    {item.institution}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">
                    {item.field}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {item.cgpa && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 shadow-sm font-mono"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.cgpa}</span>
                  </motion.div>
                )}
                {item.grade && (
                  <Badge variant="brand" size="sm">
                    <Award className="w-3.5 h-3.5 mr-1" />
                    {item.grade}
                  </Badge>
                )}
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>

            {item.details && item.details.length > 0 && (
              <ul className="space-y-1.5 pl-14 text-xs sm:text-sm text-zinc-400">
                {item.details.map((detail, dIdx) => (
                  <li key={dIdx} className="list-disc list-outside ml-2">
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
