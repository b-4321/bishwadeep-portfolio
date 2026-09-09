"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const ProfilePhoto: React.FC = () => {
  const { personal } = portfolioData;

  // 4 Balanced Floating Technology Pills with deliberate desktop & mobile coordinates
  const floatingPills = [
    {
      name: "Flutter",
      floatClass: "pill-float-flutter",
      // Centered directly above the profile circle
      pos: "-top-8 sm:-top-11 left-1/2",
      style: { x: "-50%" },
      delay: 0.8,
    },
    {
      name: "Python",
      floatClass: "pill-float-python",
      // Positioned upper-right, snug to the profile image, never out near screen edge
      pos: "top-[28%] left-[calc(100%-24px)] sm:top-[30%] sm:left-[calc(100%-14px)]",
      style: {},
      delay: 0.88,
    },
    {
      name: "Firebase",
      floatClass: "pill-float-firebase",
      // Positioned lower-left along the curved perimeter
      pos: "bottom-[20%] right-[calc(100%-24px)] sm:bottom-[18%] sm:right-[calc(100%-14px)]",
      style: {},
      delay: 0.96,
    },
    {
      name: "Java",
      floatClass: "pill-float-java",
      // Positioned lower-right along inward diagonal curve, separate from Available badge
      pos: "bottom-[8%] left-[calc(100%-42px)] sm:bottom-[10%] sm:left-[calc(100%-38px)]",
      style: {},
      delay: 1.04,
    },
  ];

  return (
    <div className="profile-wrapper relative inline-flex items-center justify-center select-none w-[215px] h-[215px] min-[380px]:w-[250px] min-[380px]:h-[250px] sm:w-[320px] sm:h-[320px] my-8 sm:my-10">
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
        className="profile-image relative z-10 w-full h-full overflow-hidden rounded-full border border-white/[0.12] shadow-2xl bg-zinc-950 flex items-center justify-center group"
      >
        <Image
          src="/images/profile.jpg"
          alt={personal.name}
          fill
          priority
          sizes="(max-width: 640px) 250px, 320px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

      {/* 2. Independent Availability Badge - Positioned cleanly BELOW the circular image (z-20) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        style={{ x: "-50%" }}
        className="availability-badge absolute -bottom-5 sm:-bottom-7 left-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-950/95 border border-brand-500/40 backdrop-blur-xl shadow-glass text-[11px] sm:text-xs font-mono text-zinc-100 hover:border-brand-400 transition-all cursor-default whitespace-nowrap"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold text-[11px] sm:text-xs text-zinc-100 tracking-wide">Available</span>
      </motion.div>

      {/* 3. 4 Balanced Floating Technology Pills (z-20) */}
      {floatingPills.map((pill) => (
        <motion.div
          key={pill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: pill.delay, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute ${pill.pos} z-20 pointer-events-auto`}
          style={pill.style}
        >
          <div className={`pill-float-wrapper ${pill.floatClass}`}>
            <div className="floating-tech-pill flex items-center gap-1 sm:gap-1.5 px-2 min-[380px]:px-2.5 sm:px-3 py-0.5 min-[380px]:py-1 sm:py-1.5 rounded-full bg-zinc-950/90 border border-white/[0.1] backdrop-blur-xl shadow-glass text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono text-zinc-200 cursor-default">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-400 shrink-0" />
              <span className="font-medium tracking-tight whitespace-nowrap">{pill.name}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

