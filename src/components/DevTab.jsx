import React from "react";
import { ExternalLink } from 'lucide-react';
import GithubIcon from '../icons/GithubIcon';
import { heroSubtitles } from '../config/theme';
import { devProjects } from '../data/works';
import { career, techStack } from '../data/career';
import { githubUrl } from '../data/socials';

export default function DevTab({ theme }) {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 pt-20">
        <div className="text-center relative w-full max-w-lg mx-auto">

          {/* Catchphrase */}
          <div className="mb-12 sm:mb-16" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest leading-relaxed" style={{ color: 'rgba(110,231,160,0.85)' }}>
              創ることが、好き。
            </p>
            <p className="text-xs sm:text-sm tracking-widest mt-2" style={{ color: theme.muted }}>{heroSubtitles.dev}</p>
            <div className="mt-4 mx-auto" style={{ width: '40px', height: '1px', background: 'linear-gradient(to right, transparent, rgba(110,231,160,0.4), transparent)' }} />
          </div>

          {/* Decoration */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm" style={{ background: 'rgba(110,231,160,0.5)' }} />
              <div className="w-8 sm:w-12 h-px" style={{ background: `linear-gradient(to right, ${theme.accent}, transparent)` }} />
            </div>
            <span className="text-xs sm:text-sm tracking-widest" style={{ color: theme.muted }}>Development</span>
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-12 h-px" style={{ background: `linear-gradient(to left, ${theme.accent}, transparent)` }} />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm" style={{ background: 'rgba(110,231,160,0.5)' }} />
            </div>
          </div>

          {/* Name */}
          <div className="relative mb-8">
            <p className="text-base sm:text-lg tracking-widest" style={{ color: theme.muted }}>YOUR NAME</p>
            <div className="absolute -left-8 top-1/2 w-6 h-px hidden md:block" style={{ background: 'rgba(110,231,160,0.3)' }} />
            <div className="absolute -right-8 top-1/2 w-6 h-px hidden md:block" style={{ background: 'rgba(110,231,160,0.3)' }} />
          </div>

          <p className="text-sm sm:text-base mb-10 tracking-widest" style={{ color: theme.muted }}>
            UI開発 / データ分析 / AI活用
          </p>

          <div className="max-w-sm mx-auto mb-10 px-4">
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.muted }}>
              クリエイティブ制作の傍ら、<br />
              業務でもコードとデータに向き合ってきました。<br />
              このポートフォリオサイト自体も、その制作物のひとつです
            </p>
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="group p-3 rounded transition-all duration-300"
              style={{ border: `1px solid ${theme.border}` }}>
              <GithubIcon size={18} className="transition-all duration-300 group-hover:scale-110" style={{ color: theme.muted }} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-widest" style={{ color: theme.subtle }}>SCROLL</span>
          <div className="relative w-px h-10 sm:h-16" style={{ background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />
        </div>
      </section>

      {/* 01 Projects */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-widest block mb-2" style={{ color: theme.subtle }}>01</span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider" style={{ color: theme.accent }}>Projects</h2>
          </div>
          <div className="flex flex-col gap-4">
            {devProjects.map((project, i) => (
              <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer"
                className="group block p-5 sm:p-6 transition-all duration-300 hover:scale-[1.01]"
                style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: '0.25rem', animation: `fadeIn 0.5s ease-out forwards`, animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-light tracking-wider mb-2 group-hover:underline" style={{ color: theme.accent }}>{project.title}</h3>
                    <p className="text-xs sm:text-sm mb-3" style={{ color: theme.muted }}>{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1" style={{ color: theme.accent, border: `1px solid ${theme.border}`, borderRadius: '0.125rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink size={16} className="flex-shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: theme.subtle }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Career */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10" style={{ background: 'rgba(110,231,160,0.03)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-widest block mb-2" style={{ color: theme.subtle }}>02</span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider" style={{ color: theme.accent }}>Career</h2>
          </div>
          <div className="flex flex-col gap-6">
            {career.map((item, i) => (
              <div key={i} className="p-5 transition-all duration-300"
                style={{ background: theme.card, border: `1px solid ${theme.border}`, borderRadius: '0.25rem', animation: `fadeIn 0.5s ease-out forwards`, animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-2">
                  <h3 className="text-sm sm:text-base font-light tracking-wider" style={{ color: theme.accent }}>{item.role}</h3>
                  <span className="text-xs tracking-widest flex-shrink-0" style={{ color: theme.subtle }}>{item.period}</span>
                </div>
                <p className="text-xs sm:text-sm mb-2" style={{ color: theme.muted }}>{item.desc}</p>
                <p className="text-xs" style={{ color: theme.subtle }}>{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Tech Stack */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-xs tracking-widest block mb-2" style={{ color: theme.subtle }}>03</span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-wider" style={{ color: theme.accent }}>Tech Stack</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {techStack.map(({ label, value }) => (
              <div key={label}>
                <h4 className="text-xs tracking-widest mb-3" style={{ color: theme.muted }}>{label}</h4>
                <p className="text-sm leading-relaxed" style={{ color: theme.text }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center relative z-10" style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="flex justify-center gap-4 mb-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2">
            <GithubIcon size={16} style={{ color: theme.subtle }} strokeWidth={1.5} />
          </a>
        </div>
        <p className="text-xs tracking-widest" style={{ color: theme.subtle }}>© 2024 YOUR NAME</p>
      </footer>
    </>
  );
}
