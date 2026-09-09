"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { EASING_PREMIUM } from "@/lib/animations";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}`}
    >
      {/* 1. Badge enters first (0ms delay) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: EASING_PREMIUM }}
        className="mb-3"
      >
        <Badge variant="brand">{badge}</Badge>
      </motion.div>

      {/* 2. Main heading enters next with subtle blur-to-sharp fade (100ms delay) */}
      <motion.h2
        initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.1, ease: EASING_PREMIUM }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100"
      >
        {title}
      </motion.h2>

      {/* 3. Subtitle enters last (200ms delay) */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2, ease: EASING_PREMIUM }}
          className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
