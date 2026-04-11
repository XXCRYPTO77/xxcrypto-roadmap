'use client';

// Reusable glass morphism icon component with neon glow
// All icons are inline SVG with glass bg + neon border

const icons: Record<string, { svg: string; color?: string }> = {
  chart: { svg: '<path d="M3 17l4-4 4 4 8-10" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 7h5v5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  globe: { svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 12h18M12 3c2.5 3 4 6 4 9s-1.5 6-4 9c-2.5-3-4-6-4-9s1.5-6 4-9z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  news: { svg: '<rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  report: { svg: '<rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 7h8M8 11h8M8 15h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  bell: { svg: '<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21a2 2 0 01-3.46 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  whale: { svg: '<path d="M4 14c0-4 3-8 8-8s8 4 8 8c0 3-2 5-4 5H8c-2 0-4-2-4-5z" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="9" cy="12" r="1" fill="currentColor"/><path d="M16 8c1-2 3-3 4-2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  trade: { svg: '<path d="M12 2v20M17 7l-5-5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 17l5 5 5-5" stroke="currentColor" stroke-width="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.4"/>' },
  folder: { svg: '<path d="M3 7v12a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  bot: { svg: '<rect x="3" y="7" width="18" height="14" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="9" cy="14" r="1.5" fill="currentColor"/><circle cx="15" cy="14" r="1.5" fill="currentColor"/><path d="M12 3v4M9 3h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  egg: { svg: '<path d="M12 3C8 3 5 8.5 5 13a7 7 0 0014 0C19 8.5 16 3 12 3z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 13h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  shop: { svg: '<path d="M3 9l1.5-5h15L21 9M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 21V14h6v7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M3 9c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3c0 1.5 1.5 3 3 3s3-1.5 3-3" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  key: { svg: '<circle cx="15" cy="9" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M11.5 12.5L4 20M7 17l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  gear: { svg: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  home: { svg: '<path d="M3 12l9-9 9 9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  shield: { svg: '<path d="M12 2l8 4v6c0 5.5-3.8 10-8 11-4.2-1-8-5.5-8-11V6l8-4z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  fire: { svg: '<path d="M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 18a2 2 0 002-2c0-2-2-3-2-5 0 2-2 3-2 5a2 2 0 002 2z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  data: { svg: '<rect x="2" y="12" width="4" height="8" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="10" y="6" width="4" height="14" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="18" y="2" width="4" height="18" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  lightning: { svg: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>' },
  brain: { svg: '<path d="M12 2a5 5 0 00-5 5c0 1.5.5 2.5 1.5 3.5L7 12a4 4 0 000 6l1 1a4 4 0 004 3 4 4 0 004-3l1-1a4 4 0 000-6l-1.5-1.5c1-1 1.5-2 1.5-3.5a5 5 0 00-5-5z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 2v20" stroke="currentColor" stroke-width="1" fill="none" opacity="0.3"/>' },
  search: { svg: '<circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M15 15l6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  puzzle: { svg: '<path d="M4 7h3a2 2 0 100-4h0a2 2 0 100 4h3v3a2 2 0 104 0V7h3a1 1 0 011 1v3a2 2 0 100 4H17v3a1 1 0 01-1 1h-3a2 2 0 10-4 0H6a1 1 0 01-1-1v-3a2 2 0 100-4H4V8a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  user: { svg: '<circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  star: { svg: '<path d="M12 2l3 6.5L22 9.5l-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/>' },
  target: { svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="12" r="1" fill="currentColor"/>' },
  smile: { svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/>' },
  wink: { svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><path d="M14 10h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  rocket: { svg: '<path d="M12 2c-3 4-4 8-4 12l4 4 4-4c0-4-1-8-4-12z" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5 17l3-1M19 17l-3-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="11" r="2" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  download: { svg: '<path d="M12 3v12M7 11l5 5 5-5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>' },
  crown: { svg: '<path d="M2 17l3-10 5 5 2-8 2 8 5-5 3 10z" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linejoin="round"/><path d="M2 17h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  money: { svg: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M12 6v12M9 9h4.5a1.5 1.5 0 010 3H9h5a1.5 1.5 0 010 3H9" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  chat: { svg: '<path d="M21 12c0 4.4-4 8-9 8a9.9 9.9 0 01-4-.8L3 21l1.8-5A7.5 7.5 0 013 12c0-4.4 4-8 9-8s9 3.6 9 8z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  stop: { svg: '<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="8" y="8" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5" fill="none"/>', color: '#ef4444' },
  check: { svg: '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
};

interface Props {
  name: string;
  size?: number;
  color?: string;
  glow?: boolean;
}

export default function GlassIcon({ name, size = 40, color, glow = true }: Props) {
  const icon = icons[name] || icons.star;
  const c = color || icon.color || 'var(--primary)';
  const svgSize = Math.round(size * 0.5);

  return (
    <div style={{
      width: size,
      height: size,
      minWidth: size,
      borderRadius: size * 0.3,
      background: `linear-gradient(135deg, rgba(82,39,255,0.08), rgba(82,39,255,0.02))`,
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      border: '1px solid rgba(82,39,255,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: glow ? `0 0 12px rgba(82,39,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05)` : 'inset 0 1px 0 rgba(255,255,255,0.05)',
      transition: 'all 0.3s',
      flexShrink: 0,
    }}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        style={{ color: c }}
        dangerouslySetInnerHTML={{ __html: icon.svg }}
      />
    </div>
  );
}

export { icons };
