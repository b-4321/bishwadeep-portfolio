"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, FileText, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { fadeIn } from "@/lib/animations";

export const ResumeCTA: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="resume" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-24">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-white/[0.1] p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
      >
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-500/10 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="space-y-3 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Want to know more about my journey?
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
            View my complete resume for my experience, education, skills and professional background.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
          {/* Primary View Resume button (Google Drive) */}
          <motion.a
            href={personal.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-xs sm:text-sm font-semibold text-zinc-950 bg-brand-500 hover:bg-brand-400 rounded-xl transition-colors shadow-brand-glow cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Resume</span>
          </motion.a>

          {/* Secondary Download Resume button (Google Drive Direct Download) */}
          <motion.a
            href={personal.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-xs sm:text-sm font-medium text-zinc-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-brand-400" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
