"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { TechItem } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechCard } from "./TechCard";
import { cn } from "@/lib/utils";
import { Code2, Layers, Server, Wrench, Sparkles, Terminal, Box } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const techStack = portfolioData.techStack;

  const tabs = [
    { key: "all", label: "All Stack", icon: Layers },
    { key: "core", label: "Core Stack", icon: Sparkles },
    { key: "language", label: "Programming Languages", icon: Code2 },
    { key: "framework", label: "Frameworks & Libs", icon: Box },
    { key: "database", label: "Cloud & Database", icon: Server },
    { key: "tool", label: "Developer Tools", icon: Wrench },
  ];

  // Filtered list based on active tab
  const getFilteredItems = (): TechItem[] => {
    if (activeTab === "all") return techStack;
    if (activeTab === "core") return techStack.filter((t) => t.core);
    if (activeTab === "language") return techStack.filter((t) => t.category === "language");
    if (activeTab === "framework") return techStack.filter((t) => t.category === "framework");
    if (activeTab === "database") return techStack.filter((t) => t.category === "database");
    if (activeTab === "tool") return techStack.filter((t) => t.category === "tool");
    return techStack;
  };

  const filteredItems = getFilteredItems();

  // Distinct groups for structured display when "All" is active
  const coreStack = techStack.filter((t) => t.core);
  const languages = techStack.filter((t) => t.category === "language");
  const frameworksAndTools = techStack.filter((t) => t.category !== "language");

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative scroll-mt-24">
      {/* Subtle Floating Ambient Background Particles / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-brand-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-5 w-[350px] h-[280px] bg-emerald-400/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[220px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <SectionHeading
        badge="Tech Stack"
        title="Languages & Technologies"
        subtitle="Production-proven programming languages, engineering frameworks, and developer tools verified by my background."
      />

      {/* Filter Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                isSelected
                  ? "text-zinc-950 font-semibold shadow-brand-glow"
                  : "text-zinc-400 hover:text-zinc-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08]"
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeTechCategory"
                  className="absolute inset-0 bg-brand-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-zinc-950" : "text-brand-400")} />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Tech Showcase */}
      {activeTab === "all" ? (
        <div className="space-y-14">
          {/* GROUP 1: Currently Relevant / Core Production Stack */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Currently Relevant Stack
                </h3>
                <span className="hidden sm:inline text-xs font-mono text-zinc-500">
                  • Primary technologies actively utilized in client &amp; freelance projects
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                Core Focus
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {coreStack.map((tech, idx) => (
                <TechCard key={tech.id} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* GROUP 2: Programming Languages (Strictly Distinct) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Programming Languages
                </h3>
                <span className="hidden sm:inline text-xs font-mono text-zinc-500">
                  • Computer Science &amp; MCA verified language fundamentals
                </span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                Languages Only
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {languages.map((tech, idx) => (
                <TechCard key={tech.id} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* GROUP 3: Frameworks, Platforms & Tools */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-blue-400" />
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Frameworks, Cloud &amp; Ecosystem
                </h3>
                <span className="hidden sm:inline text-xs font-mono text-zinc-500">
                  • Libraries, NoSQL storage, backend runtimes &amp; developer toolchains
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] text-zinc-400 border border-white/[0.08]">
                Frameworks &amp; Tools
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {frameworksAndTools.map((tech, idx) => (
                <TechCard key={tech.id} tech={tech} index={idx} />
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        /* Filtered Grid View */
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3.5 sm:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech, idx) => (
              <TechCard key={tech.id} tech={tech} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
};
