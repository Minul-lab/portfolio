import React from "react";
import {
  SKILL_CATEGORIES,
  CURRENTLY_LEARNING,
  SkillCategory,
  LearningItem,
} from "@/data/portfolioData";
import {
  Code,
  Server,
  Database,
  Terminal,
  Wrench,
  TrendingUp,
} from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Server className="w-5 h-5 text-cyan-400" />;
      case 2:
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 3:
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Wrench className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>03 // Technical Stack</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Technologies I build with & discuss in depth.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A grounded overview of my technical capabilities—distinguishing between core frontend strengths and active full-stack learning. No arbitrary percentage bars.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {SKILL_CATEGORIES.map((cat: SkillCategory, idx: number) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/70">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.skills.map((skill) => {
                    const isProficient = skill.level === "Proficient";
                    return (
                      <div
                        key={skill.name}
                        className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center justify-between text-xs"
                      >
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                            isProficient
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section F: Currently Learning / Growth Focus */}
        <div id="learning" className="pt-10 border-t border-slate-800/80">
          <div className="flex flex-col items-start mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>04 // Growth Trajectory</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
              Currently Learning & Deepening
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              Deliberate, structured study to evolve from a frontend specialist into an adaptable full-stack engineer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CURRENTLY_LEARNING.map((item: LearningItem, i: number) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/90 hover:border-slate-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">#{i + 1}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-100 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/70">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-1">
                    Current Milestone:
                  </span>
                  <p className="text-[11px] text-slate-300 font-medium">
                    {item.currentMilestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
