"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, MapPin, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { fadeIn } from "@/lib/animations";

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeading
        badge="Career Path"
        title="Professional Experience & Leadership"
        subtitle="Chronological track record of digital engineering, open source contributions, and leadership."
      />

      <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-4">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${index}`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Animated Timeline Node with subtle ping for current position */}
            <div className="absolute -left-[17px] top-1.5 flex items-center justify-center">
              <span className="relative w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center group-hover:border-brand-500 transition-colors shadow-sm">
                {item.current && (
                  <span className="animate-ping absolute inset-0 rounded-full bg-brand-400 opacity-30" />
                )}
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500 group-hover:scale-125 transition-transform" />
              </span>
            </div>

            {/* Date Tag on Desktop (Left aligned) */}
            <div className="md:absolute md:-left-36 md:top-2 text-left md:text-right md:w-28 mb-2 md:mb-0">
              <span className="text-xs font-mono font-medium text-zinc-400 block group-hover:text-brand-400 transition-colors">
                {item.period}
              </span>
            </div>

            {/* Card Content with subtle hover elevation */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-brand-500/30 hover:bg-zinc-900/80 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>{item.role}</span>
                    {item.current && (
                      <Badge variant="brand" size="sm">Present</Badge>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-brand-400 font-medium mt-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{item.company}</span>
                    {item.location && (
                      <>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono bg-white/[0.03] px-3 py-1 rounded-full border border-white/[0.06]">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2 mb-5">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-normal">
                    <CheckCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tag Pills & External Action Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.companyUrl && (
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-zinc-950 bg-brand-500 hover:bg-brand-400 rounded-lg transition-colors shadow-sm"
                  >
                    <span>Visit {item.company}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
