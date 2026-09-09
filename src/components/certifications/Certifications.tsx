"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeading
        badge="Credentials"
        title="Certifications &amp; Specialized Programs"
        subtitle="Industry certifications and technical credentials validating software, cloud, and algorithmic expertise."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${index}`}
            variants={fadeIn}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="p-5 rounded-2xl bg-zinc-900/60 border border-white/[0.08] hover:border-brand-500/40 hover:bg-zinc-900/80 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:bg-brand-500/20 transition-colors">
                  <Award className="w-4 h-4" />
                </div>
                {cert.credentialId ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    Verified ID
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                    <CheckCircle2 className="w-3 h-3 text-brand-400" />
                    Completed
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-brand-400 transition-colors">
                {cert.title}
              </h3>

              <div className="text-xs text-brand-300 font-medium mt-1">
                {cert.issuer}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-zinc-400 font-mono">
              {cert.credentialId && (
                <span className="truncate max-w-[140px]" title={cert.credentialId}>
                  ID: {cert.credentialId}
                </span>
              )}
              {cert.date && <span>{cert.date}</span>}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
