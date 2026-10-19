import React from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { CheckCircle2, ArrowUpRight, Lock, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Clean host display for the mockup browser bar
  const getDomainFromUrl = (url: string) => {
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return url;
    }
  };

  return (
    <div className="group rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/90 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Mockup Browser Window Header */}
        <div className="px-3.5 py-2.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-0.5 rounded bg-slate-900 hover:bg-slate-850 text-[11px] text-slate-300 font-mono flex items-center gap-1 transition-colors max-w-[200px] truncate"
            title={project.liveUrl}
          >
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainFromUrl(project.liveUrl)}</span>
          </a>

          <span className="text-[10px] text-slate-500 font-mono hidden sm:inline-block">
            Preview
          </span>
        </div>

        {/* Real Project Screenshot with Hover Zoom */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full aspect-[16/10] bg-slate-950 overflow-hidden group/img cursor-pointer"
          aria-label={`Open live demo for ${project.title}`}
        >
          <Image
            src={project.imageUrl}
            alt={`${project.title} application screenshot preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Subtle gradient overlay at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-20 transition-opacity" />

          {/* Hover Overlay with Live Demo Pill */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-slate-950 font-semibold text-xs shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
              <span>View Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </a>

        {/* Card Body Content */}
        <div className="p-5 sm:p-6">
          {/* Category Tag & Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700/80">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                {project.badge}
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-emerald-400/90 mb-4 line-clamp-2">
            {project.tagline}
          </p>

          {/* Problem & Solution Snippet */}
          <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/70 mb-4 space-y-2 text-xs">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block mb-0.5">
                Problem Addressed:
              </span>
              <p className="text-slate-300 leading-relaxed line-clamp-3">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="mb-5">
            <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold tracking-wider block mb-2">
              Key Features:
            </span>
            <ul className="space-y-1.5">
              {project.features.slice(0, 3).map((feat, fIdx) => (
                <li
                  key={fIdx}
                  className="flex items-start gap-2 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="line-clamp-2 leading-snug">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Tech Stack Tags */}
          <div className="mb-2">
            <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold tracking-wider block mb-1.5">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-400 text-[10px] font-mono">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/70 mt-2 flex items-center gap-3">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm transition-all group/btn"
        >
          <span>Live Demo</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-750 hover:text-white border border-slate-700 rounded-lg transition-all"
          aria-label={`View ${project.title} source code on GitHub`}
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
          <span>Code</span>
        </a>
      </div>
    </div>
  );
}
