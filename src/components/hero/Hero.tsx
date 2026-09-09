"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles, Terminal, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ProfilePhoto } from "./ProfilePhoto";

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COLUMN: Narrative & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* 1. Status Badge (0.2s) */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-400 text-xs font-medium mb-6 shadow-sm select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            <span>{personal.status}</span>
          </motion.div>

          {/* 2. Name Intro */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-zinc-400 text-base md:text-lg font-medium mb-3"
          >
            <Terminal className="w-4 h-4 text-brand-400" />
            <span>Hi, I&apos;m <span className="text-zinc-100 font-semibold">{personal.name}</span></span>
          </motion.div>

          {/* 3. Strong Headline Reveal (0.35s) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15] max-w-2xl"
          >
            Building digital experiences that{" "}
            <span className="bg-gradient-to-r from-brand-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
              solve real problems.
            </span>
          </motion.h1>

          {/* 4. Concise Introduction (0.48s) */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed"
          >
            {personal.tagline} Experienced in building cross-platform apps and full-stack software with{" "}
            <span className="text-zinc-200 font-medium">Flutter</span>,{" "}
            <span className="text-zinc-200 font-medium">React</span>,{" "}
            <span className="text-zinc-200 font-medium">Java</span>,{" "}
            <span className="text-zinc-200 font-medium">Python</span>, and{" "}
            <span className="text-zinc-200 font-medium">Firebase</span>.
          </motion.p>

          {/* 5. Action Buttons (0.6s) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={() => handleScrollTo("projects")}
              className="group w-full sm:w-auto min-h-[44px]"
            >
              <Sparkles className="w-4 h-4 text-zinc-950 transition-transform group-hover:rotate-12" />
              <span>View My Work</span>
            </Button>

            <motion.a
              href={personal.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 text-sm md:text-base font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 rounded-xl transition-colors shadow-sm group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-brand-400 transition-transform group-hover:-translate-y-0.5" />
              <span>View Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
            </motion.a>
          </motion.div>

          {/* 6. Social Links (0.72s) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="mt-7 sm:mt-8 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-zinc-400"
          >
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Connect:</span>
            
            <motion.a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-brand-500/40 text-zinc-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-brand-500/40 text-zinc-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>

            <motion.a
              href={personal.socials.email}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-brand-500/40 text-zinc-400 hover:text-brand-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Profile Photo (0.45s) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <ProfilePhoto />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="mt-12 flex flex-col items-center gap-1.5 cursor-pointer text-zinc-500 hover:text-zinc-300 transition-colors"
        onClick={() => handleScrollTo("about")}
      >
        <span className="text-[11px] font-mono tracking-wider uppercase">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </motion.div>
    </section>
  );
};
