import React from "react";
import { useState, useRef } from 'react';
import { themeStyles, fontFamilies } from './config/theme';
import TabSwitcher from './components/TabSwitcher';
import DevTab from './components/DevTab';
import CreativeTab from './components/CreativeTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('illustration');
  const containerRef = useRef(null);

  const theme = themeStyles[activeTab];
  const fontFamily = fontFamilies[activeTab];
  const isHandmade = activeTab === 'handmade';
  const isDev = activeTab === 'dev';

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden relative transition-all duration-700"
      style={{ background: theme.bg, color: theme.text, fontFamily }}>

      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      {/* Decorative: Handmade floating circles */}
      {isHandmade && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="absolute rounded-full opacity-20" style={{
              width: `${100 + i * 50}px`, height: `${100 + i * 50}px`,
              background: ['#FFB5BA', '#B5D8FF', '#C5FFB5', '#FFE5B5', '#E5B5FF', '#B5FFE5'][i],
              left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 30}%`,
              animation: `float ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s`,
            }} />
          ))}
        </div>
      )}

      {/* Decorative: Illustration grain texture */}
      {activeTab === 'illustration' && (
        <div className="fixed inset-0 pointer-events-none opacity-20 z-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }} />
      )}

      {isDev ? <DevTab theme={theme} /> : <CreativeTab activeTab={activeTab} theme={theme} setActiveTab={setActiveTab} />}
    </div>
  );
}
