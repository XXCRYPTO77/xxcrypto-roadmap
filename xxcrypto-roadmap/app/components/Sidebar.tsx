'use client';
import GlassIcon from './GlassIcon';

const nav = [
  { id: 'home', icon: 'home', zh: '首页', en: 'Home' },
  { id: 'skills', icon: 'puzzle', zh: 'Agent Skills', en: 'Agent Skills', badge: 'v1.0' },
  { id: 'bot', icon: 'chat', zh: 'TG Bot', en: 'TG Bot', badge: 'v1.1' },
  { id: 'trading', icon: 'chart', zh: '交易面板', en: 'Trading', badge: 'v1.2' },
  { id: 'marketplace', icon: 'shop', zh: 'Marketplace', en: 'Marketplace', badge: 'v2.0' },
  { id: 'onboarding', icon: 'egg', zh: '领养Bot', en: 'Adopt Bot' },
];

interface Props {
  page: string;
  setPage: (p: string) => void;
  lang: string;
  setLang: (l: string) => void;
}

export default function Sidebar({ page, setPage, lang, setLang }: Props) {
  const zh = lang === 'zh';
  return (
    <aside className="sidebar">
      <div className="sidebarLogo">
        <img src="/coinw-logo.png" alt="CoinW" style={{ height: 24 }} />
        <span style={{ flex: 1 }}><span className="greenText">AI Agent</span></span>
        <button className="langToggle" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
          {lang === 'zh' ? 'EN' : '中文'}
        </button>
      </div>
      <nav className="sidebarNav">
        <div className="navSection">{zh ? '产品' : 'Product'}</div>
        {nav.map(n => (
          <button key={n.id} className={`navItem ${page === n.id ? 'active' : ''}`} onClick={() => setPage(n.id)}>
            <GlassIcon name={n.icon} size={28} glow={page === n.id} />
            <span>{zh ? n.zh : n.en}</span>
            {n.badge && <span className="navBadge">{n.badge}</span>}
          </button>
        ))}
        <div className="navSection" style={{ marginTop: 16 }}>{zh ? '设置' : 'Settings'}</div>
        <button className={`navItem ${page === 'apikeys' ? 'active' : ''}`} onClick={() => setPage('apikeys')}>
          <GlassIcon name="key" size={28} glow={page === 'apikeys'} />
          <span>API Keys</span>
        </button>
        <button className={`navItem ${page === 'settings' ? 'active' : ''}`} onClick={() => setPage('settings')}>
          <GlassIcon name="gear" size={28} glow={page === 'settings'} />
          <span>{zh ? '偏好设置' : 'Preferences'}</span>
        </button>
      </nav>
      <div className="sidebarFooter">
        <span>CoinW © 2025</span>
      </div>
    </aside>
  );
}
