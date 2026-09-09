"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const ProfilePhoto: React.FC = () => {
  const { personal } = portfolioData;

  // Exactly 6 Technology Pills evenly spaced at 60-degree intervals around the circular orbit
  // 1. Flutter   (12 o'clock / Top: 0%, Left: 50%)
  // 2. Python    (2 o'clock  / Upper-Right: 25%, Left: 93.3%)
  // 3. Java      (4 o'clock  / Lower-Right: 75%, Left: 93.3%)
  // 4. MongoDB   (6 o'clock  / Bottom: 100%, Left: 50%)
  // 5. Firebase  (8 o'clock  / Lower-Left: 75%, Left: 6.7%)
  // 6. React     (10 o'clock / Upper-Left: 25%, Left: 6.7%)
  const orbitPills = [
    {
      name: "Flutter",
      top: "0%",
      left: "50%",
      floatDelay: "0s",
    },
    {
      name: "Python",
      top: "25%",
      left: "93.3%",
      floatDelay: "-0.7s",
    },
    {
      name: "Java",
      top: "75%",
      left: "93.3%",
      floatDelay: "-1.4s",
    },
    {
      name: "MongoDB",
      top: "100%",
      left: "50%",
      floatDelay: "-2.1s",
    },
    {
      name: "Firebase",
      top: "75%",
      left: "6.7%",
      floatDelay: "-2.8s",
    },
    {
      name: "React",
      top: "25%",
      left: "6.7%",
      floatDelay: "-3.5s",
    },
  ];

  return (
    <div className="profile-orbit-wrapper relative flex flex-col items-center justify-center select-none my-6 sm:my-8">
      {/* Central Circular Orbit System (Stationary Center Photo + Revolving Orbit Track) */}
      <div className="relative flex items-center justify-center w-[214px] h-[214px] min-[380px]:w-[240px] min-[380px]:h-[240px] sm:w-[285px] sm:h-[285px] md:w-[330px] md:h-[330px]">
        {/* Primary Circular Orbit Ring - Thin subtle green/teal line (15-30px outside profile border) */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/20 shadow-[0_0_16px_rgba(16,185,129,0.08)] pointer-events-none" />

        {/* Secondary Circular Orbit Ring - Faint dashed celestial line with slow reverse rotation */}
        <div className="orbit-secondary-ring absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-teal-400/15 pointer-events-none" />

        {/* 1. Orbiting Track (Revolves 360° continuously, pauses on pill hover) */}
        <div className="orbit-track absolute inset-0 rounded-full pointer-events-none">
          {orbitPills.map((pill) => (
            <div
              key={pill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ top: pill.top, left: pill.left }}
            >
              {/* Counter-rotation ensures text/icons remain 100% upright and readable at all angles */}
              <div className="orbit-counter-rotate">
                {/* Secondary micro-floating depth motion (±3px y, subtle breathing scale) */}
                <div
                  className="orbit-pill-float"
                  style={{ animationDelay: pill.floatDelay }}
                >
                  <div className="floating-tech-pill flex items-center gap-1 sm:gap-1.5 px-2 min-[380px]:px-2.5 sm:px-3 py-0.5 min-[380px]:py-1 sm:py-1.5 rounded-full bg-zinc-950/90 border border-white/[0.1] backdrop-blur-xl shadow-glass text-[9.5px] min-[380px]:text-[10.5px] sm:text-xs font-mono text-zinc-200 cursor-default">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
                    <span className="font-medium tracking-tight whitespace-nowrap">{pill.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Stationary Profile Image Container (Center Anchor - Strictly NEVER Rotates) */}
        <div className="profile-image-container relative z-10 flex items-center justify-center">
          {/* Outer Ambient Glow */}
          <div className="absolute inset-0 -m-3 rounded-full bg-gradient-to-tr from-brand-500/30 via-emerald-400/20 to-blue-500/30 blur-xl opacity-70 animate-pulse-slow pointer-events-none" />

          {/* Rotating Thin Animated Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500/40 via-transparent to-emerald-400/50 p-[1.5px] pointer-events-none"
          />

          {/* Profile Photo Element */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="profile-image relative z-10 w-[170px] h-[170px] min-[380px]:w-[190px] min-[380px]:h-[190px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] overflow-hidden rounded-full border border-white/[0.12] shadow-2xl bg-zinc-950 flex items-center justify-center group"
          >
            <Image
              src="/images/profile.jpg"
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 640px) 190px, 270px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      {/* 3. Separate Stationary Available Status Pill - Permanent child directly below composition */}
      <div className="availability-badge mt-7 sm:mt-9 z-20 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-950/95 border border-brand-500/40 backdrop-blur-xl shadow-glass text-[11px] sm:text-xs font-mono text-zinc-100 transition-colors cursor-default whitespace-nowrap">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold text-[11px] sm:text-xs text-zinc-100 tracking-wide">Available</span>
      </div>
    </div>
  );
};


