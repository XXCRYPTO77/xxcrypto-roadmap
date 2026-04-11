'use client';
import { T, useLang } from './LangContext';
import ScrollReveal from './ScrollReveal';

export default function Architecture() {
  const { lang } = useLang();
  const zh = lang === 'zh';
  return (
    <section className="section" id="architecture">
      <ScrollReveal>
        <h2 className="sectionTitle"><T zh="系统架构" en="Architecture" /></h2>
        <p className="sectionSub"><T zh="共享服务 + 用户上下文隔离" en="Shared service + user context isolation" /></p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flowRow" style={{ marginBottom: 16 }}>
          {([
            { icon: '👤', label: zh ? '用户' : 'User' },
            { icon: '🤖', label: 'TG Bot / Web' },
            { icon: '🧠', label: zh ? '共享 LLM 服务' : 'Shared LLM Service' },
            { icon: '🔗', label: 'CoinW API' },
          ] as const).map((box, i, arr) => (
            <span key={i} style={{ display: 'contents' }}>
              <div className="flowBox glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <span style={{ fontSize: '1.3rem' }}>{box.icon}</span>
                <span>{box.label}</span>
              </div>
              {i < arr.length - 1 && <span className="flowArrow">→</span>}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div style={{ marginTop: 48 }}>
          <h3 style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 700, marginBottom: 20 }}>
            <T zh="🏗️ 智能分层调度" en="🏗️ Intelligent Tiered Routing" />
          </h3>
          <div className="pyramid">
            {([
              { w: '50%', bg: 'rgba(0,212,126,0.15)', border: 'rgba(0,212,126,0.3)', zh: '复杂分析 → 大模型 (GPT-4 / Claude)', en: 'Complex Analysis → LLM (GPT-4 / Claude)' },
              { w: '70%', bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)', zh: '简单指令 → 规则 / 小模型', en: 'Simple Commands → Rules / Small Models' },
              { w: '90%', bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.2)', zh: '内容生成 → 一次生成，全局分发', en: 'Content Gen → Generate once, distribute globally' },
            ] as const).map((t, i) => (
              <div key={i} className="pyramidTier" style={{ width: t.w, maxWidth: 600, background: t.bg, border: `1px solid ${t.border}`, fontSize: '0.85rem', fontWeight: 600 }}>
                {zh ? t.zh : t.en}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
