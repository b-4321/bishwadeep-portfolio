"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const ProfilePhoto: React.FC = () => {
  const { personal } = portfolioData;

  // Floating technical badges placed outside the circular photo perimeter
  const floatingTags = [
    { name: "Flutter", pos: "-top-3 left-4 sm:-top-6 sm:left-14", delay: 0, mobile: true },
    { name: "Firebase", pos: "bottom-7 -left-1 sm:bottom-16 sm:-left-10", delay: 2, mobile: true },
    { name: "React", pos: "top-6 -right-1 sm:top-1/3 sm:-right-12", delay: 1.2, mobile: true },
    { name: "Python", pos: "top-1/4 -right-6 sm:top-1/3 sm:-right-12", delay: 1.6, mobile: false },
    { name: "Java", pos: "bottom-10 -right-5 sm:bottom-12 sm:-right-10", delay: 0.8, mobile: false },
  ];

  return (
    <div className="profile-wrapper relative flex items-center justify-center select-none py-4 sm:py-6">
      {/* Outer Rotating Gradient Ambient Glow */}
      <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-tr from-brand-500/30 via-emerald-400/20 to-blue-500/30 blur-xl opacity-70 animate-pulse-slow pointer-events-none" />

      {/* Rotating Thin Animated Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500/40 via-transparent to-emerald-400/50 p-[1.5px] pointer-events-none"
      />

      {/* 1. Main Profile Photo Container - Strictly contains ONLY the image (z-10) */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="profile-image relative z-10 h-[225px] w-[225px] min-[380px]:h-[265px] min-[380px]:w-[265px] sm:h-[320px] sm:w-[320px] max-w-[80vw] max-h-[80vw] overflow-hidden rounded-full border border-white/[0.12] shadow-2xl bg-zinc-950 flex items-center justify-center group"
      >
        <Image
          src="/images/profile.jpg"
          alt={personal.name}
          fill
          priority
          sizes="(max-width: 640px) 265px, 320px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* 2. Independent Availability Badge - Positioned completely OUTSIDE the circular image (z-20) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        className="availability-badge absolute -bottom-3 right-1 sm:-bottom-6 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-950/95 border border-brand-500/40 backdrop-blur-xl shadow-glass text-[11px] sm:text-xs font-mono text-zinc-100 hover:border-brand-400 transition-all cursor-default"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold text-[11px] sm:text-xs text-zinc-100 tracking-wide">Available</span>
      </motion.div>

      {/* 3. Floating Technology Tags (z-20) - Floating around outer perimeter */}
      {floatingTags.map((tag, idx) => (
        <motion.div
          key={tag.name}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0, 6, 0],
          }}
          whileHover={{ scale: 1.08 }}
          transition={{
            y: {
              duration: 4.8 + idx * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tag.delay,
            },
            opacity: { duration: 0.5, delay: 0.8 + idx * 0.08, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.5, delay: 0.8 + idx * 0.08, ease: [0.22, 1, 0.36, 1] },
          }}
          className={`absolute ${tag.pos} z-20 ${
            tag.mobile ? "flex" : "hidden sm:flex"
          } items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-zinc-950/90 border border-white/[0.1] hover:border-brand-500/50 hover:bg-zinc-950 backdrop-blur-xl shadow-glass text-[10px] sm:text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-default`}
        >
          <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-400" />
          <span>{tag.name}</span>
        </motion.div>
      ))}
    </div>
  );
};
