// テーマ設定 — 色やフォントを変えたいときはここだけ編集

export const themeStyles = {
  illustration: {
    bg: '#080808', text: '#e0e0e0', accent: '#fff', muted: '#888',
    subtle: '#555', card: '#111', border: 'rgba(255,255,255,0.1)',
  },
  handmade: {
    bg: '#FFF9F5', text: '#5D4E4E', accent: '#E8A0A0', muted: '#9D8585',
    subtle: '#C4B0B0', card: '#FFFFFF', border: 'rgba(232,160,160,0.3)',
  },
  dev: {
    bg: '#0A0F0D', text: '#C8D6CF', accent: '#6EE7A0', muted: '#6B8F7B',
    subtle: '#3D5C4A', card: '#111916', border: 'rgba(110,231,160,0.15)',
  },
};

export const fontFamilies = {
  dev: '"SF Mono", "Fira Code", "Consolas", monospace',
  handmade: '"Helvetica Neue", sans-serif',
  illustration: 'Georgia, serif',
};

export const heroSubtitles = {
  dev: '—— コードで形にする、もうひとつの創作',
  handmade: '—— 手のぬくもりを、糸にのせて',
  illustration: '—— 静寂の中に、線と動きを灯す',
};
