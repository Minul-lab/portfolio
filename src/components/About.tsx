import { ABOUT_PARAGRAPHS } from "@/data/portfolioData";
import {
  GraduationCap,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Laptop,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: Cpu,
      title: "ECE Academic Foundation",
      subtitle: "Low-level logic & hardware awareness",
      description:
        "Studying Electronics & Communication Engineering provides a solid grasp of how computers process information, memory management, and structured procedural coding in C and C++.",
      color: "text-emerald-400",
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
    },
    {
      icon: Layers,
      title: "Modern Frontend Craft",
      subtitle: "Component architecture & responsive UX",
      description:
        "Specializing in React.js and Next.js (App Router). I design clean interfaces, maintainable component trees, and fast layouts with Tailwind CSS, ensuring accessibility and mobile fluidity.",
      color: "text-cyan-400",
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/5",
    },
    {
      icon: Sparkles,
      title: "Full-Stack & Emerging Tech",
      subtitle: "MERN learning & AI curiosity",
      description:
        "Actively expanding into backend development with Node.js, Express, and MongoDB, with an eager long-term goal of integrating machine learning models and IoT connectivity into web systems.",
      color: "text-indigo-400",
      border: "border-indigo-500/20",
      bg: "bg-indigo-500/5",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            An engineering background meets modern web craft.
          </h2>
          <p className="text-base text-slate-400 max-w-2xl">
            A genuine look at my education, technical journey, and continuous growth as an aspiring software engineer.
          </p>
        </div>

        {/* Narrative & Profile Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {ABOUT_PARAGRAPHS.map((para, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
              >
                <h3 className="text-sm font-semibold font-mono text-emerald-400 mb-2 flex items-center gap-2">
                  <span className="text-slate-600">0{index + 1}.</span> {para.heading}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {para.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Facts / Academic Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Academic Card */}
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-lg">
              <div className="flex items-center gap-3 mb-4 text-emerald-400">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-200">
                  Academic Background
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-mono text-slate-500 block">Degree</span>
                  <p className="font-medium text-slate-200">
                    B.Sc. in Electronics and Communication Engineering
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">Institution</span>
                  <p className="font-medium text-slate-200">
                    Hajee Mohammad Danesh Science and Technology University (HSTU)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Dinajpur, Bangladesh</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block">Core Coursework & Focus</span>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    Structured Programming (C/C++), Digital Logic Design, Microprocessors, Signals & Systems, Communication Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Profile Summary */}
            <div className="p-6 rounded-xl bg-slate-900/70 border border-slate-800">
              <h3 className="text-sm font-semibold font-mono uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-2">
                <Laptop className="w-4 h-4 text-cyan-400" />
                <span>Professional Snapshot</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100 font-medium">Primary Focus:</strong> Frontend Engineering (React, Next.js, Tailwind CSS)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100 font-medium">Full-Stack Path:</strong> Expanding MERN stack skills (Node.js, Express, MongoDB)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100 font-medium">Target Opportunities:</strong> Software Development Internships & Junior Developer roles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-100 font-medium">Freelance Availability:</strong> Custom responsive web applications and landing pages
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border ${pillar.border} ${pillar.bg} backdrop-blur-sm flex flex-col justify-between hover:translate-y-[-2px] transition-transform`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-300/90 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
