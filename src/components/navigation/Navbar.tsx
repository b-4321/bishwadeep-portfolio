"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

const menuVariants = {
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.035,
      delayChildren: 0.05
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.15 }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
  }
};

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Monitor scroll for glass styling and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Smooth scroll handler with offset for fixed navbar
  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.startsWith("#") ? href.substring(1) : href;

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const navbarOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-3 sm:px-5 lg:px-8 transition-all duration-300 pointer-events-none",
          isScrolled ? "py-2 sm:py-2.5" : "py-3 sm:py-4"
        )}
      >
        <motion.nav
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl xl:rounded-full transition-all duration-300 relative box-border",
            isScrolled
              ? "bg-zinc-950/90 border border-white/[0.12] backdrop-blur-2xl shadow-glass"
              : "bg-zinc-950/70 border border-white/[0.08] backdrop-blur-xl shadow-sm"
          )}
          aria-label="Main Navigation"
        >
          {/* LEFT: Initials / Logo & Name */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center gap-2.5 group cursor-pointer select-none min-w-0"
          >
            <div className="w-8 h-8 min-w-[32px] rounded-full bg-gradient-to-tr from-brand-500 to-emerald-300 flex items-center justify-center font-bold text-zinc-950 text-xs shadow-brand-glow flex-shrink-0">
              BK
            </div>
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-200 group-hover:text-white transition-colors truncate">
              {portfolioData.personal.name}
            </span>
          </motion.a>

          {/* CENTER: Desktop Navigation Links (xl+) */}
          <div className="hidden xl:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={cn(
                    "relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors select-none cursor-pointer",
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/[0.08] border border-white/[0.12] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* RIGHT: Desktop Action CTAs (xl+) */}
          <div className="hidden xl:flex items-center gap-2">
            <motion.a
              href={portfolioData.personal.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-full transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-brand-400" />
              <span>Resume</span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#contact");
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 bg-brand-500 hover:bg-brand-400 rounded-full transition-colors shadow-brand-glow cursor-pointer"
            >
              <Send className="w-3 h-3" />
              <span>Connect</span>
            </motion.a>
          </div>

          {/* RIGHT: Animated Hamburger Button (Mobile & Tablet: < xl) */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/40 select-none cursor-pointer flex-shrink-0"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between items-center pointer-events-none">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-5 h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="w-5 h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="w-5 h-0.5 bg-current rounded-full origin-center"
              />
            </div>
          </motion.button>
        </motion.nav>
      </header>

      {/* Mobile / Tablet Dropdown Menu & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Click outside backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
              aria-hidden="true"
            />

            {/* Dropdown Menu Container */}
            <motion.div
              id="mobile-navigation-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-3 sm:inset-x-5 top-[68px] sm:top-[74px] z-50 p-4 sm:p-5 rounded-2xl bg-zinc-950/95 border border-white/[0.1] backdrop-blur-2xl shadow-2xl xl:hidden max-h-[calc(100vh-85px)] overflow-y-auto"
              role="navigation"
              aria-label="Mobile Navigation Menu"
            >
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.href}
                      variants={itemVariants}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className={cn(
                        "flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl transition-all cursor-pointer select-none",
                        isActive
                          ? "bg-brand-500/10 text-brand-400 border border-brand-500/25 shadow-sm font-semibold"
                          : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                      )}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shadow-brand-glow" />
                      )}
                    </motion.a>
                  );
                })}

                {/* Quick actions for Resume and Contact */}
                <motion.div
                  variants={itemVariants}
                  className="pt-3 mt-2 border-t border-white/[0.08] grid grid-cols-2 gap-2"
                >
                  <a
                    href={portfolioData.personal.resumeDriveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-xl transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-400" />
                    <span>Resume</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick("#contact");
                    }}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-zinc-950 bg-brand-500 hover:bg-brand-400 rounded-xl transition-colors shadow-brand-glow cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>Connect</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
