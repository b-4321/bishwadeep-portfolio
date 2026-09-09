"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-500 via-emerald-400 to-teal-300 z-[100] pointer-events-none shadow-[0_0_12px_rgba(16,185,129,0.7)]"
      aria-hidden="true"
    />
  );
};
