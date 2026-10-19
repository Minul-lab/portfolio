"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, Project } from "@/data/portfolioData";
import ProjectCard from "./ProjectCard";
import { FolderGit2, ArrowRight } from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");

  const categories = [
    { label: "All Projects", count: PROJECTS_DATA.length },
    {
      label: "Full Stack",
      count: PROJECTS_DATA.filter((p) => p.category === "Full Stack").length,
    },
    {
      label: "Frontend App",
      count: PROJECTS_DATA.filter((p) => p.category === "Frontend App").length,
    },
    {
      label: "Web Tool",
      count: PROJECTS_DATA.filter((p) => p.category === "Web Tool").length,
    },
  ];

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0b101c] border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 // Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              Production web applications & tools.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Each project is built with real-world technologies, verified live deployments, and accessible GitHub repositories.
            </p>
          </div>

          {/* Interactive Filter Pills including "All Projects" */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(cat.label)}
                  className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-emerald-400 text-slate-950 font-semibold shadow-sm shadow-emerald-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/70"
                  }`}
                  aria-pressed={isActive}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-emerald-950/20 text-emerald-950 font-bold"
                        : "bg-slate-800 text-slate-500"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer Bar with "All Projects" Button & Extensibility Indicator */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400 font-mono text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              Showing {filteredProjects.length} of {PROJECTS_DATA.length} verified projects. More applications currently in development.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {activeCategory !== "All Projects" && (
              <button
                onClick={() => setActiveCategory("All Projects")}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 font-mono text-xs border border-slate-700 transition-colors"
              >
                Reset to All Projects
              </button>
            )}

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-all shadow-sm"
            >
              <span>All Projects Archive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
