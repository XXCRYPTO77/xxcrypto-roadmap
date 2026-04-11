'use client';

const features = [
  { icon: '📊', zh: '实时行情', en: 'Market Data', descZh: '多维度行情数据聚合', descEn: 'Multi-dimensional market aggregation' },
  { icon: '🤖', zh: 'AI分析', en: 'AI Analysis', descZh: 'GPT-4级别智能分析', descEn: 'GPT-4 level intelligence' },
  { icon: '💰', zh: '自然语言交易', en: 'NL Trading', descZh: '一句话完成下单', descEn: 'Trade with one sentence' },
  { icon: '🛡️', zh: '安全风控', en: 'Risk Control', descZh: '多层安全防护', descEn: 'Multi-layer security' },
  { icon: '🧩', zh: 'Skills生态', en: 'Skills Ecosystem', descZh: '开放的技能市场', descEn: 'Open skill marketplace' },
  { icon: '📱', zh: 'Telegram Bot', en: 'Telegram Bot', descZh: '随时随地交互', descEn: 'Interact anywhere' },
];

const prices = [
  { coin: 'BTC', price: '$87,432', change: '+2.3%', up: true, icon: '₿', color: '#f7931a' },
  { coin: 'ETH', price: '$4,125', change: '+1.8%', up: true, icon: 'Ξ', color: '#627eea' },
  { coin: 'SOL', price: '$168.50', change: '+4.2%', up: true, icon: 'S', color: '#9945ff' },
  { coin: 'BNB', price: '$612', change: '+0.9%', up: true, icon: 'B', color: '#f3ba2f' },
  { coin: 'DOGE', price: '$0.182', change: '-1.2%', up: false, icon: 'D', color: '#c3a634' },
];

const stats = [
  { num: '10K+', zh: '活跃Agent', en: 'Active Agents' },
  { num: '50K+', zh: '用户', en: 'Users' },
  { num: '$100M+', zh: '交易量', en: 'Volume' },
  { num: '99.9%', zh: '正常运行', en: 'Uptime' },
];

interface Props { lang: string; onNavigate: (page: string) => void; }

export default function Homepage({ lang, onNavigate }: Props) {
  const zh = lang === 'zh';

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* ===== HERO ===== */}
      <section style={{ padding: '5rem 2rem 3rem', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'var(--green)', filter: 'blur(200px)', opacity: 0.06, pointerEvents: 'none' }} />
        
        <div style={{ display: 'inline-block', padding: '6px 16px', borderRadius: 20, background: 'rgba(0,212,126,0.08)', border: '1px solid rgba(0,212,126,0.2)', fontSize: '0.78rem', color: 'var(--green)', fontWeight: 600, marginBottom: 20 }}>
          🚀 {zh ? '下一代AI交易Agent平台' : 'Next-Gen AI Trading Agent Platform'}
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: 16, letterSpacing: '-1px' }}>
          {zh ? (
            <>Make <span className="greenText">AI Trading</span><br />for Every Trader</>
          ) : (
            <>Make <span className="greenText">AI Trading</span><br />for Every Trader</>
          )}
        </h1>

        <p style={{ fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 560, margin: '0 auto 2rem', lineHeight: 1.7 }}>
          {zh
            ? '让每一个交易者都拥有自己的AI Agent — 从信息聚合到自动交易，一站式赋能你的加密货币之旅'
            : 'Give every trader their own AI Agent — from data aggregation to automated trading, your all-in-one crypto companion'}
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => onNavigate('onboarding')} style={{
            padding: '14px 32px', borderRadius: 12, border: 'none', background: 'var(--green)',
            color: '#000', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', transition: 'all 0.2s'
          }}>
            🐣 {zh ? '立即领养你的Bot' : 'Adopt Your Bot Now'}
          </button>
          <button onClick={() => onNavigate('skills')} style={{
            padding: '14px 32px', borderRadius: 12, border: '1px solid var(--border)', background: 'transparent',
            color: 'var(--text)', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', transition: 'all 0.2s'
          }}>
            🧩 {zh ? '探索Skills' : 'Explore Skills'}
          </button>
        </div>
      </section>

      {/* ===== TICKER ===== */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, padding: '16px 2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {prices.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem' }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: p.color + '22', color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800 }}>{p.icon}</div>
            <span style={{ fontWeight: 600 }}>{p.coin}</span>
            <span>{p.price}</span>
            <span style={{ color: p.up ? 'var(--green)' : 'var(--danger)', fontWeight: 600 }}>{p.change}</span>
          </div>
        ))}
      </div>

      {/* ===== BENTO DASHBOARD ===== */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem 3rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, textAlign: 'center', marginBottom: 8 }}>
          {zh ? '🎯 一站式AI交易面板' : '🎯 All-in-One AI Trading Dashboard'}
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', marginBottom: '2rem', fontSize: '0.88rem' }}>
          {zh ? '你的Agent已经准备好了以下能力' : 'Your Agent is equipped with these capabilities'}
        </p>

        {/* Bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14, gridAutoRows: 'minmax(140px, auto)' }}>
          
          {/* Market Overview — large */}
          <div className="glass glassClickable" onClick={() => onNavigate('bot')} style={{ gridColumn: 'span 8', padding: '1.4rem', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 4 }}>📊 {zh ? '市场概览' : 'Market Overview'}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800 }}>$87,432<span style={{ fontSize: '0.85rem', color: 'var(--green)', marginLeft: 8 }}>+2.3%</span></div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>BTC/USDT</div>
              </div>
              <span className="badge badgeGreen">LIVE</span>
            </div>
            {/* Mini chart (SVG) */}
            <svg viewBox="0 0 300 60" width="100%" height="60" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00d47e" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#00d47e" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,45 L30,40 L60,42 L90,35 L120,38 L150,25 L180,28 L210,15 L240,18 L270,10 L300,12" fill="none" stroke="#00d47e" strokeWidth="2" />
              <path d="M0,45 L30,40 L60,42 L90,35 L120,38 L150,25 L180,28 L210,15 L240,18 L270,10 L300,12 L300,60 L0,60 Z" fill="url(#chartGrad)" />
            </svg>
          </div>

          {/* Sentiment */}
          <div className="glass" style={{ gridColumn: 'span 4', padding: '1.4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8 }}>😊 {zh ? '市场情绪' : 'Sentiment'}</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--green)' }}>68</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--green)', fontWeight: 600 }}>{zh ? '贪婪' : 'Greed'}</div>
            <div style={{ width: '80%', height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', marginTop: 10 }}>
              <div style={{ width: '68%', height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #f59e0b, #00d47e)' }} />
            </div>
          </div>

          {/* Portfolio */}
          <div className="glass glassClickable" onClick={() => onNavigate('trading')} style={{ gridColumn: 'span 4', padding: '1.4rem', cursor: 'pointer' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8 }}>📁 {zh ? '我的持仓' : 'Portfolio'}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 4 }}>$152,847</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--green)', fontWeight: 600, marginBottom: 12 }}>+$3,218 (+2.1%)</div>
            {['BTC 1.25', 'ETH 15.8', 'SOL 120'].map((h, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', padding: '3px 0', color: 'var(--muted)' }}>
                <span>{h.split(' ')[0]}</span><span>{h.split(' ')[1]}</span>
              </div>
            ))}
          </div>

          {/* TG Bot */}
          <div className="glass glassClickable" onClick={() => onNavigate('bot')} style={{ gridColumn: 'span 4', padding: '1.4rem', cursor: 'pointer' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8 }}>💬 TG Bot</div>
            <div style={{ background: '#111', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ padding: '6px 10px', borderRadius: 8, background: 'rgba(0,212,126,0.12)', fontSize: '0.72rem', alignSelf: 'flex-end', color: '#fff' }}>
                {zh ? '帮我查BTC' : 'Check BTC'}
              </div>
              <div style={{ padding: '6px 10px', borderRadius: 8, background: 'rgba(255,255,255,0.05)', fontSize: '0.72rem', alignSelf: 'flex-start', color: 'var(--text)' }}>
                📊 BTC $87,432 (+2.3%)
              </div>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--green)', marginTop: 8, fontWeight: 600 }}>● {zh ? '在线' : 'Online'}</div>
          </div>

          {/* Agent Skills */}
          <div className="glass glassClickable" onClick={() => onNavigate('skills')} style={{ gridColumn: 'span 4', padding: '1.4rem', cursor: 'pointer' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 8 }}>🧩 Agent Skills</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {['📊 行情', '📰 资讯', '📋 日报', '🔔 预警'].map((s, i) => (
                <div key={i} style={{ padding: '6px 8px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border)', fontSize: '0.7rem', textAlign: 'center' }}>
                  {zh ? s : ['📊 Data', '📰 News', '📋 Report', '🔔 Alert'][i]}
                </div>
              ))}
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: 8 }}>8 skills {zh ? '可用' : 'available'}</div>
          </div>

          {/* Whale tracker */}
          <div className="glass" style={{ gridColumn: 'span 6', padding: '1.4rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 10 }}>🐋 {zh ? '巨鲸动态' : 'Whale Activity'}</div>
            {[
              { zh: '某地址从Binance提取 2,000 BTC ($174M)', en: 'Address withdrew 2,000 BTC ($174M) from Binance', time: '12min' },
              { zh: '稳定币净流入交易所 $320M', en: 'Stablecoin net inflow $320M to exchanges', time: '35min' },
              { zh: '巨鲸地址买入 50,000 SOL', en: 'Whale bought 50,000 SOL', time: '1h' },
            ].map((w, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: '0.78rem' }}>
                <span>{zh ? w.zh : w.en}</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--muted)', whiteSpace: 'nowrap', marginLeft: 12 }}>{w.time}</span>
              </div>
            ))}
          </div>

          {/* Hot sectors */}
          <div className="glass" style={{ gridColumn: 'span 6', padding: '1.4rem' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: 10 }}>🔥 {zh ? '热门板块' : 'Hot Sectors'}</div>
            {[
              { name: 'L2', change: '+5.8%' },
              { name: 'AI', change: '+3.2%' },
              { name: 'RWA', change: '+2.1%' },
              { name: 'DeFi', change: '+1.5%' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--green)', fontWeight: 600 }}>{s.change}</span>
                  <div style={{ width: 50, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ width: `${parseFloat(s.change) * 12}%`, height: '100%', borderRadius: 2, background: 'var(--green)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section style={{ padding: '2rem 2rem 3rem', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff' }}>{s.num}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{zh ? s.zh : s.en}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURES GRID ===== */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 2rem 3rem' }}>
        <h2 style={{ fontSize: '1.3rem', fontWeight: 800, textAlign: 'center', marginBottom: '2rem' }}>
          {zh ? '✨ 为什么选择 CoinW AI Agent' : '✨ Why CoinW AI Agent'}
        </h2>
        <div className="grid3">
          {features.map((f, i) => (
            <div key={i} className="glass glassClickable" style={{ padding: '1.4rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{f.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', marginBottom: 4 }}>{zh ? f.zh : f.en}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{zh ? f.descZh : f.descEn}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '3rem 2rem 4rem', textAlign: 'center', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>
          {zh ? '🚀 准备好开始了吗？' : '🚀 Ready to get started?'}
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          {zh ? '30秒创建你的专属AI交易Agent' : 'Create your personalized AI trading Agent in 30 seconds'}
        </p>
        <button onClick={() => onNavigate('onboarding')} style={{
          padding: '14px 36px', borderRadius: 12, border: 'none', background: 'var(--green)',
          color: '#000', fontWeight: 700, fontSize: '1rem', cursor: 'pointer'
        }}>
          {zh ? '🐣 立即开始' : '🐣 Get Started'}
        </button>
      </section>
    </div>
  );
}
