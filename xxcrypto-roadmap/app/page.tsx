'use client';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import UserStories from './components/UserStories';
import RoadmapTimeline from './components/RoadmapTimeline';
import Architecture from './components/Architecture';

export default function Home() {
  const [lang, setLang] = useState('zh');

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Re-observe after lang change
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.1 });
      document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <>
      <div className="bgOrbs" />
      <button className="langToggle" onClick={() => setLang(l => l === 'zh' ? 'en' : 'zh')}>
        {lang === 'zh' ? 'EN' : '中文'}
      </button>
      <Hero lang={lang} />
      <UserStories lang={lang} />
      <RoadmapTimeline lang={lang} />
      <Architecture lang={lang} />
    </>
  );
}
