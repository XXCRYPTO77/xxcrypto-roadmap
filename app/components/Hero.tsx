'use client'
import { T } from './LangContext'
import s from './Hero.module.css'

const badges = [
  { icon: '⚡', titleZh: '最简单', titleEn: 'Simplest', descZh: '小白也能一键用', descEn: 'Zero barrier, one-click setup' },
  { icon: '🧠', titleZh: '最懂我', titleEn: 'Smartest', descZh: '我的交易习惯AI全记住', descEn: 'Personalized AI that learns your style' },
  { icon: '🛡️', titleZh: '最安心', titleEn: 'Safest', descZh: '绝不拿我的钱测试BUG', descEn: 'Security-first, no experiments with your money' },
]

export default function Hero() {
  return (
    <section className={s.hero} id="hero">
      <h1 className={s.logo}>CoinW AI Agent</h1>
      <p className={s.subtitle}>Make AI Trading for Every Trader</p>
      <p className={s.subtitleCn}>普惠AI交易，人人皆可轻松入局</p>
      <div className={s.badges}>
        {badges.map((b, i) => (
          <div key={i} className={s.badge}>
            <div className={s.badgeIcon}>{b.icon}</div>
            <div className={s.badgeTitle}><T zh={b.titleZh} en={b.titleEn} /></div>
            <div className={s.badgeDesc}><T zh={b.descZh} en={b.descEn} /></div>
          </div>
        ))}
      </div>
      <div className={s.scrollHint}>↓</div>
    </section>
  )
}
