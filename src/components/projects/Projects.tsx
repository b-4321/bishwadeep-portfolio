"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Sparkles, ExternalLink, FolderGit2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ProjectItem } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectGraphic } from "./ProjectGraphic";
import { ProjectModal } from "./ProjectModal";
import { cn } from "@/lib/utils";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All Projects");

  const filters = [
    "All Projects",
    "Mobile",
    "Travel Platform",
    "Full Stack",
    "Software / Utility",
  ];

  // JavaScript-level filtering (no CSS display tricks)
  const projects = portfolioData.projects || [];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
      <SectionHeading
        badge="Featured Work"
        title="Engineering Projects & Systems"
        subtitle="Selected mobile and full-stack software implementations solving real problems with verified architectures."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((filterName) => {
          const isSelected = activeFilter === filterName;
          return (
            <button
              key={filterName}
              onClick={() => setActiveFilter(filterName)}
              className={cn(
                "relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                isSelected
                  ? "text-zinc-950 font-semibold shadow-brand-glow"
                  : "text-zinc-400 hover:text-zinc-200 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08]"
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="activeProjectFilter"
                  className="absolute inset-0 bg-brand-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filterName}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid Container - Normal Document Flow, Full Width, Explicit Top Margin */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.38,
                  delay: Math.min(index * 0.05, 0.25),
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl bg-zinc-900/60 border border-white/[0.08] hover:border-brand-500/40 p-6 sm:p-7 flex flex-col justify-between cursor-pointer backdrop-blur-md transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Corner hover glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-brand-500/5 group-hover:bg-brand-500/15 rounded-full blur-3xl pointer-events-none transition-all duration-300" />

                <div>
                  {/* Abstract Visual Wireframe Preview */}
                  <div className="mb-5 overflow-hidden rounded-2xl group-hover:scale-[1.01] transition-transform duration-300">
                    <ProjectGraphic project={project} />
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <Badge variant="subtle" size="sm">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full border border-brand-500/20">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-brand-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Meta, Tech Stack & Quick Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 max-w-[65%] sm:max-w-[70%]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-500 text-zinc-950 text-xs font-semibold hover:bg-brand-400 transition-colors shadow-sm cursor-pointer"
                      >
                        <span>{project.liveUrlLabel || "Visit →"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.a>
                    )}

                    {project.githubUrl && !project.liveUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            /* STEP 13: Clean empty state if a filter genuinely has 0 projects */
            <div className="col-span-full py-16 text-center text-zinc-400 font-mono text-sm border border-white/[0.06] rounded-2xl bg-zinc-900/30">
              <FolderGit2 className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
              <p>No projects in this category yet.</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
