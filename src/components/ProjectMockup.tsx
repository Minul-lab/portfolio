import React from "react";
import {
  TrendingUp,
  TrendingDown,
  Dumbbell,
  Clock,
  Flame,
  CheckCircle,
  Code2,
  Lock,
} from "lucide-react";

interface MockupProps {
  projectId: string;
}

export default function ProjectMockup({ projectId }: MockupProps) {
  if (projectId === "bazar-dor") {
    return (
      <div className="w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col font-sans select-none text-left">
        {/* Mock Browser Header */}
        <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="px-2.5 py-0.5 rounded bg-slate-950 text-[11px] text-slate-300 font-mono flex items-center gap-1">
            <Lock className="w-2.5 h-2.5 text-emerald-400" />
            bazar-dor-2-avum.vercel.app
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">Live API</span>
        </div>

        {/* Live Ticker Marquee Bar */}
        <div className="bg-emerald-950/40 border-b border-emerald-900/40 px-3 py-1.5 flex items-center justify-between text-[11px] font-mono overflow-hidden">
          <div className="flex items-center gap-2 text-emerald-300 whitespace-nowrap">
            <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase text-[9px]">
              Live
            </span>
            <span>চাল (Miniket Rice) ৳64/kg</span>
            <span className="text-emerald-400 flex items-center text-[10px]">
              <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +1.2%
            </span>
            <span className="text-slate-600">|</span>
            <span>আলু (Potato) ৳38/kg</span>
            <span className="text-rose-400 flex items-center text-[10px]">
              <TrendingDown className="w-2.5 h-2.5 mr-0.5" /> -2.5%
            </span>
            <span className="text-slate-600">|</span>
            <span>সয়াবিন তেল ৳185/L</span>
            <span className="text-emerald-400 flex items-center text-[10px]">
              <TrendingUp className="w-2.5 h-2.5 mr-0.5" /> +0.8%
            </span>
          </div>
        </div>

        {/* Mock Application Body */}
        <div className="p-4 space-y-3.5 bg-slate-950/90 text-xs">
          {/* Filter Bar */}
          <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-900">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="text-[11px] text-slate-400 font-mono">Division:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-white border border-slate-700">
                Dhaka
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 text-[11px] text-slate-400">
                Dinajpur
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 text-[11px] text-slate-400">
                Chittagong
              </span>
            </div>
            <div className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] border border-emerald-500/20">
              BetterAuth • MongoDB Verified
            </div>
          </div>

          {/* Commodity Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-slate-400">Grains / চাল</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-mono flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +1.2%
                </span>
              </div>
              <h4 className="font-semibold text-slate-100 text-xs">মিনিকেট চাল (১ কেজি)</h4>
              <div className="mt-2 flex items-baseline justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">Today&apos;s Price</span>
                  <span className="text-base font-bold text-emerald-400">৳ 64</span>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-400">
                  <span>Range: ৳62 - ৳68</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-rose-500/40 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-slate-400">Vegetables / আলু</span>
                <span className="px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[9px] font-mono flex items-center gap-0.5">
                  <TrendingDown className="w-2.5 h-2.5" /> -2.5%
                </span>
              </div>
              <h4 className="font-semibold text-slate-100 text-xs">গোল আলু (১ কেজি)</h4>
              <div className="mt-2 flex items-baseline justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block font-mono">Today&apos;s Price</span>
                  <span className="text-base font-bold text-slate-100">৳ 38</span>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-400">
                  <span>Range: ৳36 - ৳42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Comparison Preview Footer */}
          <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Comparing 8 wholesale & retail bazaars
            </span>
            <span className="text-emerald-400 font-mono text-[10px]">Low-to-High Sorting Active</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "fitlog") {
    return (
      <div className="w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col font-sans select-none text-left">
        {/* Mock Browser Header */}
        <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
          </div>
          <div className="px-2.5 py-0.5 rounded bg-slate-950 text-[11px] text-slate-300 font-mono flex items-center gap-1">
            <Lock className="w-2.5 h-2.5 text-cyan-400" />
            fit-log-by-minul.vercel.app
          </div>
          <span className="text-[10px] text-cyan-400 font-mono">Next.js 15</span>
        </div>

        {/* Dashboard Header & Real-time Metrics */}
        <div className="p-4 bg-slate-950 space-y-3.5 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-100 text-xs">Today&apos;s Workout Plan</h4>
                <p className="text-[10px] text-slate-400 font-mono">3 of 5 exercises added</p>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono border border-cyan-500/20">
              Active Routine
            </span>
          </div>

          {/* Metric Computation Pills */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase flex items-center justify-center gap-1">
                <Clock className="w-2.5 h-2.5 text-cyan-400" /> Total Time
              </span>
              <span className="text-sm font-bold text-white font-mono mt-0.5 block">45 min</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase flex items-center justify-center gap-1">
                <Flame className="w-2.5 h-2.5 text-rose-400" /> Calories
              </span>
              <span className="text-sm font-bold text-rose-400 font-mono mt-0.5 block">340 kcal</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/80 text-center">
              <span className="text-[9px] font-mono text-slate-400 uppercase flex items-center justify-center gap-1">
                <CheckCircle className="w-2.5 h-2.5 text-emerald-400" /> Done
              </span>
              <span className="text-sm font-bold text-emerald-400 font-mono mt-0.5 block">2 / 3</span>
            </div>
          </div>

          {/* Workout Items List */}
          <div className="space-y-2">
            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <div>
                  <h5 className="font-medium text-slate-200 text-xs">Dumbbell Bench Press</h5>
                  <span className="text-[10px] font-mono text-slate-400">Chest • 12 mins • 95 kcal</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Completed
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">
                  •
                </div>
                <div>
                  <h5 className="font-medium text-slate-200 text-xs">Barbell Back Squats</h5>
                  <span className="text-[10px] font-mono text-slate-400">Legs • 18 mins • 150 kcal</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                In Progress
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // devstack
  return (
    <div className="w-full rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl flex flex-col font-sans select-none text-left">
      {/* Mock Browser Header */}
      <div className="px-3.5 py-2 bg-slate-900 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80" />
        </div>
        <div className="px-2.5 py-0.5 rounded bg-slate-950 text-[11px] text-slate-300 font-mono flex items-center gap-1">
          <Lock className="w-2.5 h-2.5 text-indigo-400" />
          devstack-by-minul.netlify.app
        </div>
        <span className="text-[10px] text-indigo-400 font-mono">React 19 + Vite</span>
      </div>

      {/* DevStack Application Mockup */}
      <div className="p-4 bg-slate-950 space-y-3.5 text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-slate-900">
          <div>
            <h4 className="font-semibold text-slate-100 text-xs flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technology Stack Builder</span>
            </h4>
            <span className="text-[10px] text-slate-400 font-mono">Explore & assemble web tooling</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono text-[10px] border border-indigo-500/20">
            Stack: 5 Selected
          </span>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-white">React 19</span>
              <span className="text-[9px] font-mono text-emerald-400">✓ In Stack</span>
            </div>
            <p className="text-[10px] text-slate-400">UI Component Library & Virtual DOM</p>
          </div>

          <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-500/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold text-white">Tailwind CSS v4</span>
              <span className="text-[9px] font-mono text-emerald-400">✓ In Stack</span>
            </div>
            <p className="text-[10px] text-slate-400">Utility-first modern styling engine</p>
          </div>
        </div>

        {/* React Mental Models Accordion Item */}
        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-[11px]">
          <div className="flex items-center justify-between text-slate-300 font-mono text-[10px] mb-1">
            <span className="text-indigo-400 font-semibold">Q: Props vs State in React</span>
            <span>mental-model.md</span>
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed">
            &ldquo;Props are immutable data passed down from parents. State is local mutable data managed internally by the component with hooks.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}
