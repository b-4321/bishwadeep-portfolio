import { Variants, Transition } from "framer-motion";

// Global Motion Tokens
export const EASING_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const TRANSITION_FAST: Transition = {
  duration: 0.2,
  ease: EASING_PREMIUM
};

export const TRANSITION_NORMAL: Transition = {
  duration: 0.35,
  ease: EASING_PREMIUM
};

export const TRANSITION_ENTRANCE: Transition = {
  duration: 0.6,
  ease: EASING_PREMIUM
};

export const TRANSITION_CINEMATIC: Transition = {
  duration: 0.85,
  ease: EASING_PREMIUM
};

// Standard Entrance Animations
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITION_ENTRANCE
  }
};

export const fadeInWithBlur: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: TRANSITION_ENTRANCE
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITION_NORMAL
  }
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_ENTRANCE
  }
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITION_ENTRANCE
  }
};
