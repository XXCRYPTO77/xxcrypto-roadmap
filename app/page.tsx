'use client';
import { LangProvider } from './components/LangContext';
import LangToggle from './components/LangToggle';
import Hero from './components/Hero';
import UserStories from './components/UserStories';
import RoadmapTimeline from './components/RoadmapTimeline';
import Architecture from './components/Architecture';

export default function Page() {
  return (
    <LangProvider>
      <LangToggle />
      <div className="bgOrbs" />
      <Hero />
      <UserStories />
      <RoadmapTimeline />
      <Architecture />
    </LangProvider>
  );
}
