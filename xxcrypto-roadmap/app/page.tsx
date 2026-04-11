'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import SkillStore from './components/SkillStore';
import TGBot from './components/TGBot';
import Trading from './components/Trading';
import Marketplace from './components/Marketplace';
import Onboarding from './components/Onboarding';
import ApiKeys from './components/ApiKeys';
import Settings from './components/Settings';

const pages = ['home', 'skills', 'bot', 'trading', 'marketplace', 'onboarding', 'apikeys', 'settings'] as const;
type Page = typeof pages[number];

export default function Home() {
  const [page, setPage] = useState<Page>('home');
  const [lang, setLang] = useState('zh');

  return (
    <div className="appShell">
      <div className="bgGlow" />
      <Sidebar page={page} setPage={(p: string) => setPage(p as Page)} lang={lang} setLang={setLang} />
      <main className="mainContent">
        {page === 'home' && <Homepage lang={lang} onNavigate={(p: string) => setPage(p as Page)} />}
        {page === 'skills' && <SkillStore lang={lang} />}
        {page === 'bot' && <TGBot lang={lang} />}
        {page === 'trading' && <Trading lang={lang} />}
        {page === 'marketplace' && <Marketplace lang={lang} />}
        {page === 'onboarding' && <Onboarding lang={lang} onDone={() => setPage('bot')} />}
        {page === 'apikeys' && <ApiKeys lang={lang} />}
        {page === 'settings' && <Settings lang={lang} />}
      </main>
    </div>
  );
}
