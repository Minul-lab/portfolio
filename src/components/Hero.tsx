"use client";

import React from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowRight,
  FileText,
  Mail,
  MapPin,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden tech-grid-bg"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                {PERSONAL_INFO.status}
              </span>
              <span className="text-slate-600 text-xs font-mono">|</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Dinajpur, BD
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.1]">
              <span className="text-slate-100">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Professional Headline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-emerald-400/90 mb-5 tracking-tight">
              {PERSONAL_INFO.headline}
            </p>

            {/* Authentic Narrative Bio */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6 max-w-2xl">
              Studying{" "}
              <span className="text-white font-medium">
                Electronics & Communication Engineering
              </span>{" "}
              at Hajee Mohammad Danesh Science and Technology University (HSTU).
              I specialize in creating clean, fast, and responsive web applications with{" "}
              <span className="text-white font-medium">React, Next.js, and Tailwind CSS</span>,
              while actively expanding my full-stack MERN foundation and exploring AI integrations.
            </p>

            {/* Academic & Engineering Context Badge */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 border border-slate-800/80 rounded-lg p-2.5 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">HSTU:</span>
              </div>
              <span>B.Sc in Electronics & Communication Engineering</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400/90">Dinajpur, Bangladesh</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-8 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all group"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-lg shadow-sm transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-all group"
              >
                <FileText className="w-4 h-4 text-emerald-400 group-hover:scale-105 transition-transform" />
                <span>Resume</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300" />
              </a>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full max-w-xl">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Minul-lab</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                aria-label="Email Mohaiminul"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Outer decorative border framing */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-emerald-500/20 via-slate-700/20 to-cyan-500/20 rounded-2xl blur-sm" />

              <div className="relative rounded-2xl bg-slate-900 border border-slate-800/90 overflow-hidden shadow-2xl">
                {/* Image Window Header */}
                <div className="px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="ml-1 text-[11px] text-slate-500">mohaiminul.profile</span>
                  </div>
                  <span className="text-[11px] text-emerald-400/80 font-mono">HSTU // ECE</span>
                </div>

                {/* Portrait Image Container */}
                <div className="relative w-full aspect-[4/5] bg-slate-950 overflow-hidden">
                  <Image
                    src={PERSONAL_INFO.photoUrl}
                    alt="MD. Mohaiminul - Frontend & Software Developer"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                    priority
                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Portrait Card Footer Context */}
                <div className="p-4 bg-slate-900/95 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">MD. MOHAIMINUL</span>
                    <span className="font-mono text-emerald-400 text-[11px]">B.Sc Candidate</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Engineering mindset combining rigorous fundamentals with modern web development.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                      React 19
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                      Next.js
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                      Tailwind
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                      C / C++
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                      MERN Path
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
