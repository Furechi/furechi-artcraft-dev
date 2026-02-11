import React from "react";
import { useState, useRef } from 'react';
import { ShoppingBag, Palette, Heart } from 'lucide-react';
import { heroSubtitles } from '../config/theme';
import { illustrationWorks, handmadeWorks } from '../data/works';
import { illustrationSocials, handmadeSocials, contactEmail, minneUrl } from '../data/socials';

export default function CreativeTab({ activeTab, theme, setActiveTab }) {
  const [hoveredWork, setHoveredWork] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [avatarHovered, setAvatarHovered] = useState(false);
  const videoRefs = useRef({});

  const isHandmade = activeTab === 'handmade';
  const socials = isHandmade ? handmadeSocials : illustrationSocials;
  const filteredWorks = activeFilter === 'all' ? illustrationWorks : illustrationWorks.filter(w => w.category === activeFilter);
  const displayWorks = isHandmade ? handmadeWorks : filteredWorks;

  const c = isHandmade ? {
    subtitle: heroSubtitles.handmade,
    role: '手編みのぬくもりを届ける',
    quote: '糸を選び、編み目をひとつひとつ重ねる。\nそんな穏やかな時間を大切にしています',
    worksTitle: '作品',
    aboutCatch: <>ひと目ひと目、<br />丁寧に想いを編む。</>,
    aboutText1: '素材の手触りや色合いを大切に、ひとつひとつ手編みで制作しています。使ってくださる方の日常にそっと馴染むような、あたたかみのある作品を心がけています。',
    aboutText2: '帽子、マフラー、バッグ、コースターなど、暮らしに寄り添う小物を中心に制作中です。オーダーメイドのご相談もお気軽にどうぞ。',
    aboutFooter: '作品はminneにて販売中です。オーダーメイドもお受けしています。',
    skills: ['帽子・ベレー帽', 'マフラー・スヌード', 'コースター・小物', 'オーダーメイド'],
    skillsLabel: 'つくれるもの',
    ctaTitle: 'ご購入・オーダー',
    ctaDesc: '作品はminneにて販売中です。\nオーダーメイドのご相談もお気軽にどうぞ。',
  } : {
    subtitle: heroSubtitles.illustration,
    role: 'イラスト / アニメーション',
    quote: '日常の中にある小さな美しさを\n白と黒の世界で表現しています',
    worksTitle: 'イラスト・アニメーション',
    aboutCatch: <>光と影の境界に立ち、<br />その曖昧な美しさを捉える。</>,
    aboutText1: '2023年よりイラスト・アニメーション制作を始めました。モノクロームの世界に惹かれ、余白と陰影の間に潜む感情を探り続けています。',
    aboutText2: '言葉にならない感覚を、一本の線や一秒の動きに託す。まだ未熟ですが、観る人の心の奥に静かに触れる作品を目指しています。',
    aboutFooter: 'イラスト・アイコン・挿絵・ショートアニメなど、ご依頼をお受けしています。',
    skills: ['イラストレーション', 'アイコン・挿絵', 'ショートアニメーション', 'コンセプトアート'],
    skillsLabel: '表現領域',
    ctaTitle: 'ご依頼・ご相談',
    ctaDesc: 'あなたの想いを、静かな線と動きに落とし込みます。\n小さなご依頼からお気軽にご相談ください。',
  };

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 pt-20">
        <div className="text-center relative w-full max-w-lg mx-auto">
          <div className="mb-12 sm:mb-16" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest leading-relaxed"
              style={{ color: isHandmade ? theme.text : 'rgba(255,255,255,0.85)' }}>
              創ることが、好き。
            </p>
            <p className="text-xs sm:text-sm tracking-widest mt-2" style={{ color: theme.muted }}>{c.subtitle}</p>
            <div className="mt-4 mx-auto" style={{ width: '40px', height: '1px', background: isHandmade ? `linear-gradient(to right, transparent, ${theme.accent}, transparent)` : 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)' }} />
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: isHandmade ? theme.accent : 'rgba(255,255,255,0.5)' }} />
              <div className="w-8 sm:w-12 h-px" style={{ background: `linear-gradient(to right, ${theme.accent}, transparent)` }} />
            </div>
            <span className="text-xs sm:text-sm tracking-widest" style={{ color: theme.muted }}>作品集</span>
            <div className="flex items-center gap-2">
              <div className="w-8 sm:w-12 h-px" style={{ background: `linear-gradient(to left, ${theme.accent}, transparent)` }} />
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: isHandmade ? theme.accent : 'rgba(255,255,255,0.5)' }} />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-widest mb-3 sm:mb-4" style={{ color: theme.accent }}>あなたの名前</h1>
          <p className="text-base sm:text-lg tracking-widest mb-6" style={{ color: theme.muted }}>YOUR NAME</p>
          <p className="text-sm sm:text-base mb-10 tracking-widest" style={{ color: theme.muted }}>{c.role}</p>

          <div className="max-w-sm mx-auto mb-10 px-4">
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: theme.muted }}>{c.quote}</p>
          </div>

          <div className="flex gap-4 sm:gap-6 justify-center">
            {socials.map((social) => (
              <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
                className="group p-3 rounded-full transition-all duration-300"
                style={{ background: isHandmade ? 'rgba(232,160,160,0.2)' : 'transparent', border: `1px solid ${theme.border}` }}>
                <social.icon size={18} className="transition-all duration-300 group-hover:scale-110" style={{ color: theme.muted }} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs tracking-widest" style={{ color: theme.subtle }}>SCROLL</span>
          <div className="relative w-px h-10 sm:h-16" style={{ background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }} />
        </div>
      </section>

      {/* 01 Works */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-xs tracking-widest block mb-2" style={{ color: theme.subtle }}>01</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wider" style={{ color: theme.accent }}>{c.worksTitle}</h2>
            <span className="text-sm tracking-widest mt-2 block" style={{ color: theme.muted }}>WORKS</span>
          </div>

          {!isHandmade && (
            <div className="flex gap-4 sm:gap-8 mb-10 border-b pb-4 justify-center" style={{ borderColor: theme.border }}>
              {[{ key: 'all', label: 'すべて' }, { key: 'illustration', label: 'イラスト' }, { key: 'animation', label: 'アニメ' }].map(filter => (
                <button key={filter.key} onClick={() => setActiveFilter(filter.key)} className="py-2">
                  <span className="text-sm tracking-wider transition-colors" style={{ color: activeFilter === filter.key ? theme.accent : theme.subtle }}>{filter.label}</span>
                </button>
              ))}
            </div>
          )}

          <div className={`grid gap-4 ${isHandmade ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {displayWorks.map((work, i) => (
              <div key={work.id} className="group relative cursor-pointer"
                style={{ animation: `fadeIn 0.6s ease-out forwards`, animationDelay: `${i * 0.1}s`, opacity: 0 }}
                onMouseEnter={() => { setHoveredWork(work.id); if (work.videoUrl) { setPlayingVideo(work.id); videoRefs.current[work.id]?.play(); } }}
                onMouseLeave={() => { setHoveredWork(null); if (work.videoUrl) { setPlayingVideo(null); videoRefs.current[work.id]?.pause(); } }}>
                <div className={`relative overflow-hidden transition-all duration-300 group-hover:scale-105 ${isHandmade ? 'aspect-square rounded-2xl' : 'aspect-video'}`}
                  style={{ background: theme.card, boxShadow: isHandmade ? '0 8px 30px rgba(0,0,0,0.08)' : 'none' }}>
                  {work.thumbnail && (
                    <img src={work.thumbnail} alt={work.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                      style={{ filter: isHandmade ? 'none' : (playingVideo === work.id ? 'none' : 'grayscale(100%) contrast(1.1)'), opacity: playingVideo === work.id ? 0 : 1 }} />
                  )}
                  {work.videoUrl && (
                    <video ref={el => videoRefs.current[work.id] = el} src={work.videoUrl}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: playingVideo === work.id ? 1 : 0, filter: 'grayscale(100%)' }} muted loop playsInline />
                  )}
                  <div className="absolute inset-0" style={{ background: isHandmade ? 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)' }} />
                  {isHandmade && work.color && <div className="absolute top-3 right-3 w-4 h-4 rounded-full shadow-lg" style={{ background: work.color }} />}
                  {work.videoUrl && playingVideo !== work.id && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center bg-black/30">
                        <div className="ml-1" style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '14px solid rgba(255,255,255,0.8)' }} />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className={`font-light tracking-wider mb-1 ${isHandmade ? 'text-sm text-white' : 'text-lg'}`}>{work.title}</h3>
                    {work.desc && <p className="text-xs" style={{ color: isHandmade ? 'rgba(255,255,255,0.8)' : theme.muted }}>{work.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isHandmade && (
            <div className="mt-12 text-center">
              <a href={minneUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: theme.accent, color: '#fff' }}>
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="text-sm tracking-widest">minneで購入する</span>
              </a>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-xs tracking-widest mb-4" style={{ color: theme.subtle }}>FOLLOW</p>
            <div className="flex gap-3 justify-center">
              {socials.map((social) => (
                <a key={`works-${social.name}`} href={social.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300"
                  style={{ background: isHandmade ? 'rgba(232,160,160,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${theme.border}` }}>
                  <social.icon size={14} style={{ color: theme.muted }} strokeWidth={1.5} />
                  <span className="text-xs tracking-widest" style={{ color: theme.muted }}>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 About */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative z-10"
        style={{ background: isHandmade ? 'rgba(232,160,160,0.08)' : 'rgba(255,255,255,0.02)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 sm:mb-16 text-center">
            <span className="text-xs tracking-widest block mb-2" style={{ color: theme.subtle }}>02</span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wider" style={{ color: theme.accent }}>私について</h2>
            <span className="text-sm tracking-widest mt-2 block" style={{ color: theme.muted }}>ABOUT</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
            <div className="flex-shrink-0">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 cursor-pointer"
                onMouseEnter={() => setAvatarHovered(true)} onMouseLeave={() => setAvatarHovered(false)}>
                <div className="absolute inset-0 overflow-hidden transition-all duration-300"
                  style={{ borderRadius: isHandmade ? '2rem' : '0.5rem', border: `2px solid ${theme.border}` }}>
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" alt="Profile"
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ filter: avatarHovered ? (isHandmade ? 'brightness(0.7)' : 'grayscale(100%) brightness(0.3)') : (isHandmade ? 'none' : 'grayscale(100%) contrast(1.1)') }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                  style={{ borderRadius: isHandmade ? '2rem' : '0.5rem', background: avatarHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)', opacity: avatarHovered ? 1 : 0 }}>
                  <div className="text-center px-6">
                    <p className="text-lg font-light tracking-wider mb-2 text-white">Creator</p>
                    <p className="text-xs leading-relaxed text-white/80">
                      {isHandmade ? '手編みのぬくもりを届ける' : '白と黒の世界で\n日常の美しさを描く'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:pt-4 text-center">
              <p className="text-xl sm:text-2xl font-light leading-relaxed mb-6" style={{ color: theme.accent }}>{c.aboutCatch}</p>
              <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: theme.muted }}>{c.aboutText1}</p>
              <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: theme.muted }}>{c.aboutText2}</p>
              <div className="pt-6" style={{ borderTop: `1px solid ${theme.border}` }}>
                <p className="text-xs sm:text-sm" style={{ color: theme.subtle }}>{c.aboutFooter}</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16 text-center">
            <h4 className="text-sm tracking-widest mb-6 flex items-center justify-center gap-4" style={{ color: theme.muted }}>
              <div className="w-12 h-px" style={{ background: theme.border }} />
              <span>{c.skillsLabel}</span>
              <div className="w-12 h-px" style={{ background: theme.border }} />
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-2xl mx-auto">
              {c.skills.map((skill) => (
                <div key={skill} className="p-3 transition-all duration-300 hover:scale-105"
                  style={{ background: isHandmade ? 'rgba(232,160,160,0.1)' : 'rgba(255,255,255,0.03)', borderRadius: isHandmade ? '1rem' : '0.25rem', border: `1px solid ${theme.border}` }}>
                  <span className="text-xs sm:text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-16 text-center">
            <h4 className="text-sm tracking-widest mb-6 flex items-center justify-center gap-4" style={{ color: theme.muted }}>
              <div className="w-12 h-px" style={{ background: theme.border }} />
              <span>お問い合わせ</span>
              <div className="w-12 h-px" style={{ background: theme.border }} />
            </h4>
            <div className="flex flex-col items-center gap-4">
              <a href={`mailto:${contactEmail}`} className="inline-block text-sm sm:text-lg pb-1 transition-colors"
                style={{ color: theme.accent, borderBottom: `1px solid ${theme.accent}` }}>
                {contactEmail}
              </a>
              <div className="flex gap-3 justify-center">
                {socials.map((social) => (
                  <a key={`about-${social.name}`} href={social.url} target="_blank" rel="noopener noreferrer"
                    className="p-3 transition-all duration-300 hover:scale-110"
                    style={{ background: isHandmade ? 'rgba(232,160,160,0.15)' : 'rgba(255,255,255,0.05)', borderRadius: isHandmade ? '1rem' : '0.25rem', border: `1px solid ${theme.border}` }}>
                    <social.icon size={16} style={{ color: theme.muted }} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 Contact CTA */}
      <section className="py-16 sm:py-24 px-4 text-center relative z-10">
        <span className="text-xs tracking-widest block mb-4" style={{ color: theme.subtle }}>03</span>
        <h2 className="text-2xl sm:text-3xl font-light tracking-wider mb-8" style={{ color: theme.accent }}>{c.ctaTitle}</h2>
        <p className="text-sm sm:text-base mb-10 max-w-md mx-auto" style={{ color: theme.muted }}>{c.ctaDesc}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300 hover:scale-105"
            style={{ background: isHandmade ? 'transparent' : theme.accent, color: isHandmade ? theme.accent : '#000', border: `2px solid ${theme.accent}`, borderRadius: isHandmade ? '2rem' : '0' }}>
            <span className="tracking-widest text-sm">CONTACT</span>
          </a>
          {isHandmade && (
            <a href={minneUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              style={{ background: theme.accent, color: '#fff' }}>
              <ShoppingBag size={18} />
              <span className="tracking-widest text-sm">minne SHOP</span>
            </a>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center relative z-10" style={{ borderTop: `1px solid ${theme.border}` }}>
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((social) => (
            <a key={`footer-${social.name}`} href={social.url} target="_blank" rel="noopener noreferrer" className="p-2">
              <social.icon size={16} style={{ color: theme.subtle }} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="text-xs tracking-widest" style={{ color: theme.subtle }}>© 2024 YOUR NAME</p>
      </footer>

      {/* Bottom Tab Hint */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button onClick={() => setActiveTab(isHandmade ? 'illustration' : 'handmade')}
          className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          style={{ background: isHandmade ? 'rgba(20,20,20,0.9)' : 'rgba(232,160,160,0.9)', color: '#fff', backdropFilter: 'blur(10px)' }}>
          {isHandmade ? <Palette size={14} /> : <Heart size={14} />}
          <span className="text-xs tracking-wider">{isHandmade ? 'イラスト・アニメを見る' : '編み物を見る'}</span>
        </button>
      </div>
    </>
  );
}
