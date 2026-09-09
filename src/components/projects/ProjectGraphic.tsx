import React from "react";
import { ProjectItem } from "@/types/portfolio";
import { ScanFace, Receipt, Layout, Sparkles, Car, Terminal, CheckCircle, Bus, MapPin, Calendar, ArrowRight, Search, Ticket } from "lucide-react";

interface ProjectGraphicProps {
  project: ProjectItem;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ project }) => {
  const getVisual = () => {
    switch (project.id) {
      case "face-recognition-attendance":
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <ScanFace className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-mono text-zinc-300">face-attendance.flutter</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Biometric Scan
              </span>
            </div>

            {/* Mobile Biometric Face Recognition Mockup Frame */}
            <div className="flex items-center justify-center gap-4 my-2">
              {/* Abstract Mobile Phone Frame */}
              <div className="w-44 h-32 rounded-2xl border-2 border-zinc-700 bg-zinc-950 p-2 relative flex flex-col justify-between shadow-2xl">
                {/* Phone Speaker Notch */}
                <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto" />

                {/* Facial Scan Framing Target */}
                <div className="relative w-20 h-20 mx-auto rounded-xl border-2 border-dashed border-emerald-400/80 flex items-center justify-center bg-emerald-500/5">
                  <ScanFace className="w-10 h-10 text-emerald-400 animate-pulse" />
                  {/* Scan line effect */}
                  <div className="absolute inset-x-0 h-0.5 bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                </div>

                {/* Verified Pill */}
                <div className="flex items-center justify-center gap-1 text-[9px] font-mono text-emerald-300 bg-emerald-500/15 py-0.5 rounded-md border border-emerald-500/30">
                  <CheckCircle className="w-2.5 h-2.5" />
                  <span>Employee Verified</span>
                </div>
              </div>

              {/* Status Mini Panel */}
              <div className="hidden sm:flex flex-col gap-2 flex-1">
                <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <span className="text-[9px] font-mono text-zinc-400 uppercase">Attendance Status</span>
                  <div className="text-xs font-bold text-white">Present &bull; 09:15 AM</div>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-0.5">
                  <span className="text-[9px] font-mono text-emerald-400">Firebase Synced</span>
                  <div className="text-[10px] text-zinc-300">Attendance Logged</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
              <span>Flutter Mobile App</span>
              <span className="text-emerald-400">Firebase Cloud</span>
            </div>
          </div>
        );

      case "billing-system":
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-blue-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-blue-400" />
                <span className="text-[11px] font-mono text-zinc-300">billing-invoice.flutter</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                GST Ready
              </span>
            </div>

            {/* Abstract Invoice Card Structure */}
            <div className="my-2 p-3 rounded-xl bg-zinc-950/80 border border-white/[0.08] space-y-2">
              {/* Business Header Info */}
              <div className="flex justify-between items-start text-[10px] font-mono text-zinc-400 pb-2 border-b border-zinc-800">
                <div>
                  <div className="font-bold text-zinc-200">BUSINESS INVOICE</div>
                  <div className="text-[9px] text-zinc-400">Address &bull; Phone &bull; Customer Info</div>
                </div>
                <div className="text-right">
                  <div className="text-blue-400 font-bold">GSTIN: 19ABCDE1234F1Z5</div>
                  <div className="text-[9px] text-zinc-400">Bill Totals Calculated</div>
                </div>
              </div>

              {/* Itemized lines */}
              <div className="space-y-1 text-[10px] font-mono">
                <div className="flex justify-between text-zinc-300 bg-white/[0.02] px-2 py-1 rounded">
                  <span>Product / Service Item A</span>
                  <span>₹ 4,500.00</span>
                </div>
                <div className="flex justify-between text-zinc-300 bg-white/[0.02] px-2 py-1 rounded">
                  <span>Product / Service Item B</span>
                  <span>₹ 2,200.00</span>
                </div>
              </div>

              {/* Totals Calculation */}
              <div className="flex justify-between items-center pt-1.5 border-t border-zinc-800 text-[10px] font-mono">
                <span className="text-zinc-400">Subtotal + GST Breakdown</span>
                <span className="font-bold text-blue-400 text-xs">Total: ₹ 7,906.00</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
              <span>Flutter Invoice Engine</span>
              <span className="text-blue-400">Automated Totals</span>
            </div>
          </div>
        );

      case "hopzy-in":
        return (
          <div className="w-full h-full flex flex-col justify-between p-3.5 sm:p-4 bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden select-none">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar: Brand, Tagline & Live Status */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                  <Bus className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-white tracking-tight">Hopzy.in</span>
                  <span className="text-[10px] font-mono text-zinc-400">• Book Your Bus Journey</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Travel Portal
              </span>
            </div>

            {/* Bus Search & Booking Panel */}
            <div className="my-1.5 p-2 rounded-xl bg-zinc-950/85 border border-white/[0.08] shadow-sm">
              <div className="grid grid-cols-12 gap-1.5 items-center text-[10px] font-mono">
                {/* FROM */}
                <div className="col-span-4 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col">
                  <span className="text-[8.5px] text-zinc-500 font-semibold tracking-wider uppercase">FROM</span>
                  <div className="flex items-center gap-1 text-zinc-200 font-medium truncate mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate text-[9.5px]">Kolkata</span>
                  </div>
                </div>

                {/* TO */}
                <div className="col-span-4 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col">
                  <span className="text-[8.5px] text-zinc-500 font-semibold tracking-wider uppercase">TO</span>
                  <div className="flex items-center gap-1 text-zinc-200 font-medium truncate mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate text-[9.5px]">Siliguri</span>
                  </div>
                </div>

                {/* DATE */}
                <div className="col-span-4 p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] flex flex-col">
                  <span className="text-[8.5px] text-zinc-500 font-semibold tracking-wider uppercase">DATE</span>
                  <div className="flex items-center gap-1 text-zinc-200 font-medium truncate mt-0.5">
                    <Calendar className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate text-[9.5px]">Tomorrow</span>
                  </div>
                </div>
              </div>

              {/* Search Bar Sub-strip */}
              <div className="mt-1.5 flex items-center justify-between pt-1 border-t border-white/[0.04]">
                <span className="text-[8.5px] font-mono text-zinc-500">Popular: Kolkata • Durgapur • Siliguri</span>
                <span className="text-[8.5px] font-mono px-2 py-0.5 rounded-md bg-emerald-500 text-zinc-950 font-bold flex items-center gap-1 shadow-sm">
                  <Search className="w-2.5 h-2.5" />
                  Search Buses
                </span>
              </div>
            </div>

            {/* Bus Results Showcase */}
            <div className="space-y-1.5">
              {/* Card 1: AC Sleeper */}
              <div className="p-1.5 px-2 rounded-xl bg-zinc-900/90 border border-emerald-500/25 flex items-center justify-between gap-2 shadow-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Bus className="w-3 h-3 text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10.5px] font-bold text-white truncate">Royal Express</span>
                      <span className="text-[8.5px] font-mono px-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        AC Sleeper
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-400">
                      <span className="text-zinc-200 font-medium">08:30 PM</span>
                      <span className="text-zinc-600">→</span>
                      <span className="text-zinc-200 font-medium">06:30 AM</span>
                      <span className="text-zinc-500">• 10h</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-emerald-400 font-mono">₹1,299</span>
                  <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 border border-white/[0.1] font-medium">
                    View Seats
                  </span>
                </div>
              </div>

              {/* Card 2: AC Seater */}
              <div className="p-1.5 px-2 rounded-xl bg-zinc-900/60 border border-white/[0.06] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <Bus className="w-3 h-3 text-zinc-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10.5px] font-bold text-zinc-200 truncate">Greenline Travels</span>
                      <span className="text-[8.5px] font-mono px-1 rounded bg-white/[0.05] text-zinc-300 border border-white/[0.1]">
                        AC Seater
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-400">
                      <span className="text-zinc-300 font-medium">09:15 PM</span>
                      <span className="text-zinc-600">→</span>
                      <span className="text-zinc-300 font-medium">06:45 AM</span>
                      <span className="text-zinc-500">• 9h 30m</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-zinc-300 font-mono">₹949</span>
                  <span className="text-[8.5px] font-mono px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-white/[0.08] font-medium">
                    View Seats
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="flex items-center justify-between text-[9.5px] font-mono text-zinc-500 pt-1.5 border-t border-white/[0.04]">
              <span className="flex items-center gap-1 text-zinc-400">
                <Ticket className="w-3 h-3 text-emerald-400" />
                Bus Booking &amp; Travel Service
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                hopzy.in
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        );

      case "car-rental-system":
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-purple-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-purple-400" />
                <span className="text-[11px] font-mono text-zinc-300">car-rental-platform</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Fleet Engine
              </span>
            </div>

            {/* Abstract Car Listing & Booking Cards */}
            <div className="my-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-purple-300 font-bold">Sedan Fleet</span>
                    <span className="text-zinc-400">₹ 2,400/day</span>
                  </div>
                  <div className="w-full h-1 bg-purple-500/40 rounded-full" />
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-zinc-300 font-bold">SUV Luxury</span>
                    <span className="text-zinc-400">₹ 3,800/day</span>
                  </div>
                  <div className="w-full h-1 bg-zinc-700/50 rounded-full" />
                </div>
              </div>

              <div className="p-2 rounded-lg bg-zinc-950/70 border border-white/[0.06] flex justify-between items-center text-[10px] font-mono text-zinc-400">
                <span>Duration: 3 Days Booking</span>
                <span className="text-purple-400 font-bold">Automated Pricing</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
              <span>Vehicle Catalog &amp; Booking</span>
              <span className="text-purple-400">Duration Pricing</span>
            </div>
          </div>
        );

      case "ai-resume-builder":
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Layout className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-mono text-zinc-300">resume-studio.react</span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            </div>

            {/* Abstract resume UI wireframe */}
            <div className="grid grid-cols-12 gap-3 my-2">
              <div className="col-span-4 bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 space-y-2">
                <div className="w-12 h-1.5 rounded bg-cyan-400/70" />
                <div className="w-full h-1 rounded bg-zinc-700/60" />
                <div className="w-3/4 h-1 rounded bg-zinc-700/40" />
                <div className="pt-2 space-y-1">
                  <div className="w-10 h-1.5 rounded bg-zinc-600/70" />
                  <div className="w-full h-1 rounded bg-zinc-800" />
                </div>
              </div>
              <div className="col-span-8 bg-white/[0.04] border border-white/[0.07] rounded-lg p-3 space-y-2">
                <div className="w-24 h-2 rounded bg-zinc-200/80" />
                <div className="w-36 h-1.5 rounded bg-cyan-400/50" />
                <div className="w-full h-1 rounded bg-zinc-700/40" />
                <div className="flex gap-1.5 pt-1">
                  <span className="w-8 h-3 rounded bg-cyan-500/20 border border-cyan-500/30" />
                  <span className="w-8 h-3 rounded bg-cyan-500/20 border border-cyan-500/30" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
              <span>Real-Time PDF Generation</span>
              <span className="text-cyan-400">ATS Optimized</span>
            </div>
          </div>
        );

      case "expense-tracker":
      default:
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 bg-gradient-to-br from-pink-950/40 via-zinc-900 to-zinc-950 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-[11px] font-mono text-zinc-300">expense-analytics.cloud</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                Firebase DB
              </span>
            </div>

            <div className="my-2 space-y-2">
              <div className="flex items-end gap-2 h-16 pt-2 px-3 border-b border-zinc-800">
                <div className="w-full bg-pink-500/30 rounded-t h-[40%]" />
                <div className="w-full bg-pink-500/50 rounded-t h-[75%]" />
                <div className="w-full bg-pink-500/70 rounded-t h-[55%]" />
                <div className="w-full bg-pink-400 rounded-t h-[95%]" />
                <div className="w-full bg-pink-500/40 rounded-t h-[60%]" />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-zinc-400 px-1">
                <span>Budget Logged</span>
                <span className="text-pink-300">Live Sync</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.04]">
              <span>Dynamic Visualizer</span>
              <span className="text-pink-400">Realtime Sync</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/[0.08] shadow-inner bg-zinc-950">
      {getVisual()}
    </div>
  );
};
