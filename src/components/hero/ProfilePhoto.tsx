"use client";

import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Sparkles } from "lucide-react";

export const ProfilePhoto: React.FC = () => {
  const { personal } = portfolioData;

  // Desktop subtle mouse parallax offset for the orbital ecosystem
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    // Subtle 3.5px max parallax shift
    setParallax({
      x: Math.max(-1, Math.min(1, normX)) * 3.5,
      y: Math.max(-1, Math.min(1, normY)) * 3.5,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setParallax({ x: 0, y: 0 });
  }, []);

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
      depthDelay: "0s",
    },
    {
      name: "Python",
      top: "25%",
      left: "93.3%",
      floatDelay: "-0.7s",
      depthDelay: "-2.67s",
    },
    {
      name: "Java",
      top: "75%",
      left: "93.3%",
      floatDelay: "-1.4s",
      depthDelay: "-5.33s",
    },
    {
      name: "MongoDB",
      top: "100%",
      left: "50%",
      floatDelay: "-2.1s",
      depthDelay: "-8s",
    },
    {
      name: "Firebase",
      top: "75%",
      left: "6.7%",
      floatDelay: "-2.8s",
      depthDelay: "-10.67s",
    },
    {
      name: "React",
      top: "25%",
      left: "6.7%",
      floatDelay: "-3.5s",
      depthDelay: "-13.33s",
    },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="profile-orbit-wrapper relative flex flex-col items-center justify-center select-none my-6 sm:my-8"
    >
      {/* Central Circular Orbit System (Stationary Center Photo + Dynamic Orbital Ecosystem) */}
      <div className="relative flex items-center justify-center w-[214px] h-[214px] min-[380px]:w-[240px] min-[380px]:h-[240px] sm:w-[285px] sm:h-[285px] md:w-[330px] md:h-[330px]">
        {/* Orbital System Sub-container (receives subtle desktop parallax shift) */}
        <div
          className="absolute inset-0 pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
          }}
        >
          {/* 1. Primary Circular Orbit Ring - Thin crisp emerald line with soft aura */}
          <div className="absolute inset-0 rounded-full border border-emerald-500/25 shadow-[0_0_18px_rgba(16,185,129,0.12)] pointer-events-none" />

          {/* 2. Secondary Circular Orbit Ring - Faint dashed celestial line rotating in reverse */}
          <div className="orbit-secondary-ring absolute inset-[-8px] sm:inset-[-12px] rounded-full border border-dashed border-teal-400/20 pointer-events-none" />

          {/* 3. Orbit Arc / Glowing Energy Trail - ~25% partial arc with gradient fade traveling the orbit path */}
          <div className="orbit-energy-trail absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="orbitEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
                  <stop offset="25%" stopColor="#10b981" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
                </linearGradient>
                <filter id="orbitEnergyGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <circle
                cx="50"
                cy="50"
                r="49"
                fill="none"
                stroke="url(#orbitEnergyGrad)"
                strokeWidth="2.2"
                strokeDasharray="75 233"
                strokeLinecap="round"
                filter="url(#orbitEnergyGlow)"
              />
            </svg>
          </div>

          {/* 4. Orbit Nodes - 4 tiny pulsing telemetry data points moving along the path */}
          <div className="orbit-nodes-track absolute inset-0 pointer-events-none">
            {/* Node 1: 1 o'clock (top 6.7%, left 75%) */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "6.7%", left: "75%" }}>
              <div className="orbit-node w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400" />
            </div>
            {/* Node 2: 5 o'clock (top 93.3%, left 75%) */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "93.3%", left: "75%" }}>
              <div className="orbit-node w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-teal-300" style={{ animationDelay: "-0.7s" }} />
            </div>
            {/* Node 3: 7 o'clock (top 93.3%, left 25%) */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "93.3%", left: "25%" }}>
              <div className="orbit-node w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-300" style={{ animationDelay: "-1.4s" }} />
            </div>
            {/* Node 4: 11 o'clock (top 6.7%, left 25%) */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: "6.7%", left: "25%" }}>
              <div className="orbit-node w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" style={{ animationDelay: "-2.1s" }} />
            </div>
          </div>

          {/* 5. Orbiting Pills Track (Revolves 360° continuously, pauses on pill hover) */}
          <div className="orbit-track absolute inset-0 rounded-full pointer-events-none">
            {orbitPills.map((pill) => (
              <div
                key={pill.name}
                className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                style={{ top: pill.top, left: pill.left }}
              >
                {/* Counter-rotation ensures text/icons remain 100% upright and readable at all angles */}
                <div className="orbit-counter-rotate">
                  {/* 3D Depth breathing illusion: larger/brighter at front, subtler at back */}
                  <div
                    className="orbit-depth-wrap"
                    style={{ animationDelay: pill.depthDelay }}
                  >
                    {/* Secondary micro-floating motion */}
                    <div
                      className="orbit-pill-float"
                      style={{ animationDelay: pill.floatDelay }}
                    >
                      <div className="floating-tech-pill flex items-center gap-1 sm:gap-1.5 px-2 min-[380px]:px-2.5 sm:px-3 py-0.5 min-[380px]:py-1 sm:py-1.5 rounded-full bg-zinc-950/90 border border-white/[0.12] backdrop-blur-xl shadow-glass text-[9.5px] min-[380px]:text-[10.5px] sm:text-xs font-mono text-zinc-200 cursor-default select-none">
                        <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-400 shrink-0" />
                        <span className="font-medium tracking-tight whitespace-nowrap">{pill.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Stationary Profile Image Container (Center Anchor - Strictly NEVER Rotates) */}
        <div className="profile-image-container relative z-10 flex items-center justify-center">
          {/* Outer Ambient Radial Glow */}
          <div className="absolute inset-0 -m-3 sm:-m-4 rounded-full bg-gradient-to-tr from-brand-500/30 via-emerald-400/20 to-teal-500/25 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

          {/* Rotating Thin Animated Gradient Border Sweep (10s duration) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 sm:-inset-1.5 rounded-full bg-gradient-to-tr from-emerald-500/50 via-teal-400/70 to-transparent p-[1.5px] sm:p-[2px] pointer-events-none"
          />

          {/* Profile Photo Element (Stationary Anchor - Grayscale circular crop with emerald rim) */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="profile-image relative z-10 w-[170px] h-[170px] min-[380px]:w-[190px] min-[380px]:h-[190px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] overflow-hidden rounded-full border border-emerald-500/30 shadow-2xl bg-zinc-950 flex items-center justify-center group"
          >
            <Image
              src="/images/profile.jpg"
              alt={personal.name}
              fill
              priority
              sizes="(max-width: 640px) 190px, 270px"
              className="object-cover object-center grayscale contrast-105 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
            />
          </motion.div>
        </div>
      </div>

      {/* 7. Separate Stationary Available Status Pill - Permanent child directly below composition */}
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


