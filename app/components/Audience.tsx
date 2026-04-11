'use client'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'
import s from './Audience.module.css'

export default function Audience() {
  const { lang } = useLang()
  const zh = lang === 'zh'
  return (
    <section className={s.section} id="audience">
      <ScrollReveal>
        <h2 className={s.title}>{zh ? '目标用户' : 'Target Audience'}</h2>
        <p className={s.sub}>{zh ? '三层用户金字塔，全覆盖' : 'Three-tier user pyramid, full coverage'}</p>
      </ScrollReveal>
      <div className={s.pyramid}>
        <ScrollReveal delay={200}>
          <div className={`${s.tier} ${s.tier3}`}>
            <div className={s.tierTag}>Tier 3 — {zh ? '顶部' : 'Top'}</div>
            <div className={s.tierLabel}>{zh ? '🎯 资深用户' : '🎯 Power Users'}</div>
            <div className={s.tierDesc}>{zh ? '追求定制化，讨厌模板AI，最怕Bug损失资金' : 'Want customization, hate template AI, fear bugs losing money'}</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className={`${s.tier} ${s.tier2}`}>
            <div className={s.tierTag}>Tier 2 — {zh ? '中间' : 'Middle'}</div>
            <div className={s.tierLabel}>{zh ? '💰 轻量交易者' : '💰 Casual Traders'}</div>
            <div className={s.tierDesc}>{zh ? '有一定资金，偏保守，追求简单易用' : 'Some capital, conservative, want simplicity'}</div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className={`${s.tier} ${s.tier1}`}>
            <div className={s.tierTag}>Tier 1 — {zh ? '底部 / 最大群体' : 'Base / Largest'}</div>
            <div className={s.tierLabel}>{zh ? '🌱 圈外小白' : '🌱 Crypto Newcomers'}</div>
            <div className={s.tierDesc}>{zh ? '没有Agent，没有知识，FOMO想入场但不知从何下手' : 'No agent, no knowledge, FOMO but don\'t know where to start'}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
