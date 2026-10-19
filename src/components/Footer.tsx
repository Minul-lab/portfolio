import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#070b12] border-t border-slate-900 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/80">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-semibold text-sm text-slate-200 tracking-tight">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-slate-400 text-xs mt-1">
              Electronics & Communication Engineering @ HSTU • Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              aria-label="Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Dynamic Year & Closing Minimal Message */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-slate-400 font-mono">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Built with Next.js (App Router), TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
