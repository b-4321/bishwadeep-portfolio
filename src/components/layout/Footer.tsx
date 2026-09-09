"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Globe } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Tagline */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-500 text-zinc-950 font-bold text-xs flex items-center justify-center">
              BK
            </span>
            <span className="text-base font-bold text-white tracking-tight">
              {personal.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm">
            {personal.tagline}
          </p>
        </div>

        {/* Links & Social Icons */}
        <div className="flex items-center gap-3 text-zinc-400">
          <motion.a
            href="https://soultechies.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] text-xs transition-colors cursor-pointer"
            title="Soultechies.com Agency & Web Development"
          >
            <Globe className="w-3.5 h-3.5 text-brand-400" />
            <span>Soultechies.com</span>
          </motion.a>

          <motion.a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-blue-400 transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </motion.a>
          <motion.a
            href={personal.socials.email}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:text-brand-400 transition-colors cursor-pointer"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </motion.a>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-white/[0.03] hover:bg-brand-500/10 border border-transparent hover:border-brand-500/20 text-zinc-400 hover:text-brand-400 transition-colors ml-2 cursor-pointer shadow-sm"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
        <p>&copy; {currentYear} {personal.name}. All rights reserved.</p>
        <p className="font-mono text-[11px]">Crafted with Next.js &bull; Tailwind CSS &bull; Framer Motion</p>
      </div>
    </footer>
  );
};
