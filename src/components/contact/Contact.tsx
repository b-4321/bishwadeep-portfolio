"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Phone, MapPin, Copy, Check } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/lib/animations";

export const Contact: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all fields before sending.");
      return;
    }

    // Graceful fallback to client email client without pretending fake backend success
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setStatusMessage("Opening your email client to dispatch message...");
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <SectionHeading
        badge="Get in Touch"
        title="Let's build something meaningful."
        subtitle="Have a project in mind, an engineering role to fill, or want to collaborate? Reach out directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Channels */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Direct Contact
            </h3>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              I am open to full-time engineering roles, high-impact freelance projects, and technical collaborations.
            </p>

            <div className="space-y-4">
              {/* Email Card with Copy Button */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-zinc-400 font-mono block">Email</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-medium text-zinc-200 hover:text-brand-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-brand-400" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>

              {/* Phone Card */}
              {personal.phone && (
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-mono block">Phone</span>
                    <a
                      href={`tel:${personal.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-medium text-zinc-200 hover:text-blue-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Location Card */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 font-mono block">Location</span>
                  <span className="text-sm font-medium text-zinc-200">{personal.location}</span>
                </div>
              </div>
            </div>

            {/* Social Network Pills */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
              <motion.a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Interactive Message Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/[0.08] backdrop-blur-md">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-zinc-400 mb-6">
              Complete the form below to open your preferred mail client with your inquiry pre-structured.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.1] text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.1] text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or open role..."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-white/[0.1] text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
              </div>

              {statusMessage && (
                <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300">
                  {statusMessage}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
