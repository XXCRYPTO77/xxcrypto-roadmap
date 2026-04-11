'use client'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'
import s from './CTA.module.css'

export default function CTA() {
  const { lang } = useLang()
  const zh = lang === 'zh'
  return (
    <section className={s.section} id="cta">
      <ScrollReveal>
        <h2 className={s.title}>{zh ? '准备好构建AI交易的未来了吗？' : 'Ready to Build the Future of AI Trading?'}</h2>
        <p className={s.sub}>{zh ? 'CoinW AI Agent — 让每个交易者都拥有自己的AI' : 'CoinW AI Agent — An AI for every trader'}</p>
        <a href="mailto:contact@coinw.com" className={s.btn}>{zh ? '了解更多' : 'Contact Us'}</a>
      </ScrollReveal>
      <div className={s.footer}>© 2026 CoinW AI Agent. All rights reserved.</div>
    </section>
  )
}
