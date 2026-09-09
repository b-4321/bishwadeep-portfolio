"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechItem } from "@/types/portfolio";
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiC,
  SiKotlin,
  SiDart,
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Sparkles } from "lucide-react";

interface TechCardProps {
  tech: TechItem;
  index: number;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, index }) => {
  // Map tech id to its official vector icon
  const renderIcon = () => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover:scale-110";

    switch (tech.id) {
      case "java":
        return <FaJava className={iconClass} style={{ color: "#EA2D2E" }} />;
      case "python":
        return <SiPython className={iconClass} style={{ color: "#3776AB" }} />;
      case "javascript":
        return <SiJavascript className={iconClass} style={{ color: "#F7DF1E" }} />;
      case "cpp":
        return <SiCplusplus className={iconClass} style={{ color: "#00599C" }} />;
      case "c":
        return <SiC className={iconClass} style={{ color: "#A8B9CC" }} />;
      case "kotlin":
        return <SiKotlin className={iconClass} style={{ color: "#7F52FF" }} />;
      case "dart":
        return <SiDart className={iconClass} style={{ color: "#0175C2" }} />;
      case "react":
        return <SiReact className={iconClass} style={{ color: "#61DAFB" }} />;
      case "flutter":
        return <SiFlutter className={iconClass} style={{ color: "#02569B" }} />;
      case "nodejs":
        return <SiNodedotjs className={iconClass} style={{ color: "#5FA04E" }} />;
      case "express":
        return <SiExpress className={iconClass} style={{ color: "#E0E0E0" }} />;
      case "firebase":
        return <SiFirebase className={iconClass} style={{ color: "#FFCA28" }} />;
      case "mongodb":
        return <SiMongodb className={iconClass} style={{ color: "#47A248" }} />;
      case "tailwindcss":
        return <SiTailwindcss className={iconClass} style={{ color: "#06B6D4" }} />;
      case "git":
        return <SiGit className={iconClass} style={{ color: "#F05032" }} />;
      case "github":
        return <SiGithub className={iconClass} style={{ color: "#E6EDF3" }} />;
      case "androidstudio":
        return <SiAndroidstudio className={iconClass} style={{ color: "#3DDC84" }} />;
      default:
        return null;
    }
  };

  const isLanguage = tech.category === "language";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.35,
        delay: Math.min(index * 0.03, 0.3),
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ y: -4 }}
      className={`group relative p-4 sm:p-5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900/90 border transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl ${
        isLanguage
          ? "border-emerald-500/20 hover:border-emerald-400/50"
          : "border-white/[0.08] hover:border-brand-500/40"
      }`}
      aria-label={`${tech.name} - ${tech.categoryLabel}`}
    >
      {/* Subtle Radial Glow on Hover */}
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: tech.accentColor }}
      />

      <div>
        {/* Top Bar: Icon & Type Tag */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div
            className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] group-hover:border-white/[0.2] flex items-center justify-center transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]"
          >
            {renderIcon()}
          </div>

          {tech.core && (
            <span
              className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 shrink-0"
              title="Currently active in production projects"
            >
              <span className="w-1 h-1 rounded-full bg-brand-400 animate-pulse" />
              Core
            </span>
          )}
        </div>

        {/* Tech Title */}
        <h4 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors flex items-center gap-1.5">
          <span>{tech.name}</span>
        </h4>

        {/* Category Pill */}
        <div className="mt-1">
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full border inline-block ${
              isLanguage
                ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-300 font-semibold"
                : "bg-white/[0.03] border-white/[0.08] text-zinc-400 group-hover:text-zinc-300"
            }`}
          >
            {tech.categoryLabel}
          </span>
        </div>

        {/* Practical Description */}
        <p className="text-[11px] sm:text-xs text-zinc-400 mt-2.5 leading-relaxed line-clamp-2">
          {tech.description}
        </p>
      </div>

      {/* Subtle Bottom Accent Indicator */}
      <div className="mt-3.5 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-500">
        <span className="uppercase tracking-wider">
          {isLanguage ? "Language" : tech.category}
        </span>
        <span
          className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: tech.accentColor }}
        />
      </div>
    </motion.div>
  );
};
