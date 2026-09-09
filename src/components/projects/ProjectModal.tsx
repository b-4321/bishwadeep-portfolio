"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle2, Layers, Lightbulb, Target, Wrench } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { ProjectGraphic } from "./ProjectGraphic";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/[0.12] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Header */}
          <div className="pr-10 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
              Project Details &bull; {project.category}
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1">{project.subtitle}</p>
          </div>

          {/* Abstract Project Graphic */}
          <div className="mb-8">
            <ProjectGraphic project={project} />
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-semibold uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-400" />
              <span>Core Features</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs sm:text-sm text-zinc-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0 mt-2" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution & Outcome */}
          {project.contribution && (
            <div className="p-5 rounded-2xl bg-brand-500/5 border border-brand-500/20 mb-8 space-y-3">
              <div className="flex items-center gap-2 text-brand-400 text-xs font-semibold uppercase tracking-wider">
                <Wrench className="w-4 h-4" />
                <span>My Role &amp; Contribution</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.contribution}</p>
              {project.outcome && (
                <div className="pt-2 border-t border-brand-500/10 text-xs text-zinc-400">
                  <strong className="text-brand-300">Outcome:</strong> {project.outcome}
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400" />
              <span>Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-zinc-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] rounded-xl transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-brand-500 hover:bg-brand-400 rounded-xl transition-colors shadow-brand-glow cursor-pointer"
              >
                <span>{project.liveUrlLabel || "Visit Website →"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
