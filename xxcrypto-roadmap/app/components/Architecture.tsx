'use client';

export default function Architecture({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  return (
    <section className="section">
      <div className="reveal">
        <h2 className="sectionTitle">{zh ? '技术架构' : 'Architecture'}</h2>
        <p className="sectionSub">{zh ? '共享服务 + 用户上下文隔离' : 'Shared service + user context isolation'}</p>
      </div>

      {/* Flowchart */}
      <div className="reveal flowRow" style={{ marginBottom: '3rem' }}>
        <div className="flowBox glass" style={{ color: '#fff' }}>👤 {zh ? '用户' : 'User'}</div>
        <span className="flowArrow">→</span>
        <div className="flowBox glass" style={{ color: '#fff' }}>💬 TG Bot / Web</div>
        <span className="flowArrow">→</span>
        <div className="flowBox glass" style={{ color: 'var(--green)', border: '1px solid rgba(0,212,126,0.3)' }}>🧠 {zh ? '共享LLM服务' : 'Shared LLM'}</div>
        <span className="flowArrow">→</span>
        <div className="flowBox glass" style={{ color: '#f59e0b' }}>⚡ CoinW API</div>
      </div>

      {/* Pyramid */}
      <div className="reveal pyramid">
        {[
          { w: '60%', bg: 'rgba(0,212,126,0.1)', border: 'rgba(0,212,126,0.2)', zh: '🧠 复杂分析 → 大模型 (GPT-4 / Claude)', en: '🧠 Complex analysis → Large model (GPT-4 / Claude)' },
          { w: '75%', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)', zh: '⚙️ 简单指令 → 规则引擎 / 小模型', en: '⚙️ Simple commands → Rules / Small model' },
          { w: '90%', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)', zh: '📤 内容生成 → 一次生成，全局分发', en: '📤 Content gen → Generate once, distribute globally' },
        ].map((t, i) => (
          <div key={i} className="pyramidTier" style={{ width: t.w, background: t.bg, border: `1px solid ${t.border}`, fontSize: '0.85rem', fontWeight: 600 }}>
            {zh ? t.zh : t.en}
          </div>
        ))}
      </div>
    </section>
  );
}
