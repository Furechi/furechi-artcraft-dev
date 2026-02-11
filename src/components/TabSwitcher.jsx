import React from "react";
import { Palette, Heart, Code } from 'lucide-react';

const tabs = [
  { key: 'dev', label: 'Dev', icon: Code, activeColor: '#6EE7A0', activeText: '#0A0F0D' },
  { key: 'illustration', label: 'イラスト・アニメ', icon: Palette, activeColor: '#fff', activeText: '#000' },
  { key: 'handmade', label: '編み物', icon: Heart, activeColor: '#E8A0A0', activeText: '#fff' },
];

export default function TabSwitcher({ activeTab, setActiveTab, theme }) {
  const isDev = activeTab === 'dev';
  const isHandmade = activeTab === 'handmade';
  const bg = isDev ? 'rgba(10,15,13,0.95)' : isHandmade ? 'rgba(255,255,255,0.9)' : 'rgba(20,20,20,0.9)';

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex rounded-full p-1"
      style={{ background: bg, border: `1px solid ${theme.border}`, backdropFilter: 'blur(10px)' }}>
      {tabs.map(({ key, label, icon: Icon, activeColor, activeText }) => (
        <button key={key} onClick={() => setActiveTab(key)}
          className="flex items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-3 rounded-full transition-all duration-300"
          style={{ background: activeTab === key ? activeColor : 'transparent', color: activeTab === key ? activeText : theme.muted }}>
          <Icon size={14} />
          <span className="text-xs tracking-wider">{label}</span>
        </button>
      ))}
    </div>
  );
}
