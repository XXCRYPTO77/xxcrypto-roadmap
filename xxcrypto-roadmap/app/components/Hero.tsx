'use client';
export default function Hero({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  return (
    <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6rem 1.5rem 4rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 800 }}>
        <div className="badge badgeCurrent" style={{ marginBottom: 20 }}>
          {zh ? '产品路线图 · 2025-2026' : 'Product Roadmap · 2025-2026'}
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-1px' }}>
          <span className="greenText">CoinW AI Agent</span>
          <br />
          {zh ? '普惠AI交易，人人皆可轻松入局' : 'Make AI Trading for Every Trader'}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 600, margin: '0 auto 2rem' }}>
          {zh
            ? '从信息聚合到智能交易，从个人Agent到生态市场 — 一步步构建未来交易基础设施'
            : 'From data aggregation to smart trading, from personal Agent to ecosystem marketplace — building the future of trading infrastructure'}
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: '⚡', zh: '最简单 · 小白一键用', en: 'Simplest · One-click setup' },
            { icon: '🧠', zh: '最懂我 · AI记住习惯', en: 'Smartest · AI learns your style' },
            { icon: '🔒', zh: '最安心 · 资金零风险', en: 'Safest · Zero risk to funds' },
          ].map((v, i) => (
            <div key={i} className="glass" style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.2rem' }}>{v.icon}</span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{zh ? v.zh : v.en}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
