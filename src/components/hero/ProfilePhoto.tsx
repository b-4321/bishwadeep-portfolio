"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const ProfilePhoto: React.FC = () => {
  const { personal } = portfolioData;

  // 4 Balanced Technology Pills orbiting along circular perimeter
  // Initial positions: Flutter (12 o'clock / top), Python (3 o'clock / right),
  // Java (lower-right / ~5.2 o'clock), Firebase (lower-left / ~8.2 o'clock)
  const orbitPills = [
    {
      name: "Flutter",
      top: "0%",
      left: "50%",
      floatDelay: "0s",
    },
    {
      name: "Python",
      top: "50%",
      left: "100%",
      floatDelay: "-1.1s",
    },
    {
      name: "Java",
      top: "95.3%",
      left: "71.1%",
      floatDelay: "-2.3s",
    },
    {
      name: "Firebase",
      top: "71.1%",
      left: "4.7%",
      floatDelay: "-3.4s",
    },
  ];

  return (
    <div className="profile-orbit-wrapper relative flex flex-col items-center justify-center select-none my-6 sm:my-8">
      {/* Central Orbit Frame (Stationary Photo Anchor + Revolving Track) */}
      <div className="relative flex items-center justify-center w-[220px] h-[220px] min-[380px]:w-[250px] min-[380px]:h-[250px] sm:w-[295px] sm:h-[295px] md:w-[335px] md:h-[335px]">
        {/* Primary Circular Orbit Ring - Thin subtle green/teal line */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/20 shadow-[0_0_16px_rgba(16,185,129,0.08)] pointer-events-none" />

        {/* Secondary Circular Orbit Ring - Faint dashed orbit with slow reverse rotation */}
        <div className="orbit-secondary-ring absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-teal-400/15 pointer-events-none" />

        {/* 1. Orbiting Track (Revolves 360° continuously, pauses on pill hover) */}
        <div className="orbit-track absolute inset-0 rounded-full pointer-events-none">
          {orbitPills.map((pill) => (
            <div
              key={pill.name}
              className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ top: pill.top, left: pill.left }}
            >
              {/* Counter-rotation ensures text remains 100% upright and readable at all orbital angles */}
              <div className="orbit-counter-rotate">
                {/* Micro-floating depth oscillation (±3px y, subtle breathing scale) */}
                <div
                  className="orbit-pill-float"
                  style={{ animationDelay: pill.floatDelay }}
                >
                  <div className="floating-tech-pill flex items-center gap-1 sm:gap-1.5 px-2 min-[380px]:px-2.5 sm:px-3 py-0.5 min-[380px]:py-1 sm:py-1.5 rounded-full bg-zinc-950/90 border border-white/[0.1] backdrop-blur-xl shadow-glass text-[10px] min-[380px]:text-[11px] sm:text-xs font-mono text-zinc-200 cursor-default">
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
            className="profile-image relative z-10 w-[176px] h-[176px] min-[380px]:w-[200px] min-[380px]:h-[200px] sm:w-[240px] sm:h-[240px] md:w-[275px] md:h-[275px] overflow-hidden rounded-full border border-white/[0.12] shadow-2xl bg-zinc-950 flex items-center justify-center group"
          >
            <Image
              src="/images/profile.jpg"
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 640px) 200px, 275px"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      {/* 3. Independent Stationary Availability Badge - Grounded below the orbit composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        className="availability-badge mt-6 sm:mt-8 z-20 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-950/95 border border-brand-500/40 backdrop-blur-xl shadow-glass text-[11px] sm:text-xs font-mono text-zinc-100 hover:border-brand-400 transition-all cursor-default whitespace-nowrap"
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-semibold text-[11px] sm:text-xs text-zinc-100 tracking-wide">Available</span>
      </motion.div>
    </div>
  );
};


