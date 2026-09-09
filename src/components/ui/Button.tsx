"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-brand-500 text-zinc-950 font-semibold hover:bg-brand-400 border border-brand-400/50 shadow-brand-glow hover:shadow-brand-glow",
      secondary:
        "bg-zinc-800/90 text-zinc-100 font-medium hover:bg-zinc-700/90 border border-zinc-700/80 shadow-sm",
      outline:
        "bg-transparent text-zinc-200 font-medium hover:bg-zinc-800/50 border border-zinc-700 hover:border-zinc-500",
      ghost:
        "bg-transparent text-zinc-400 font-medium hover:text-zinc-100 hover:bg-white/[0.05]"
    };

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg",
      md: "text-sm px-5 py-2.5 rounded-xl",
      lg: "text-base px-7 py-3 rounded-xl"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 transition-colors cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/80 disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
