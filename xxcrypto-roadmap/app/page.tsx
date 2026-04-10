'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SkillStore from './components/SkillStore';
import TGBot from './components/TGBot';
import Trading from './components/Trading';
import Marketplace from './components/Marketplace';
import Onboarding from './components/Onboarding';

const pages = ['skills', 'bot', 'trading', 'marketplace', 'onboarding'] as const;
type Page = typeof pages[number];

export default function Home() {
  const [page, setPage] = useState<Page>('skills');
  const [lang, setLang] = useState('zh');

  return (
    <div className="appShell">
      <div className="bgGlow" />
      <Sidebar page={page} setPage={(p: string) => setPage(p as Page)} lang={lang} setLang={setLang} />
      <main className="mainContent">
        {page === 'skills' && <SkillStore lang={lang} />}
        {page === 'bot' && <TGBot lang={lang} />}
        {page === 'trading' && <Trading lang={lang} />}
        {page === 'marketplace' && <Marketplace lang={lang} />}
        {page === 'onboarding' && <Onboarding lang={lang} onDone={() => setPage('bot')} />}
      </main>
    </div>
  );
}
