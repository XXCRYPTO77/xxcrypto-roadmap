'use client';
import { useState, useEffect } from 'react';

const versions = [
  { id: 'v1_0', label: 'v1.0', zh: 'v1.0 基础Skills', en: 'v1.0 Basic Skills' },
  { id: 'v1_1', label: 'v1.1', zh: 'v1.1 TG Bot', en: 'v1.1 TG Bot' },
  { id: 'v1_2', label: 'v1.2-1.4', zh: 'v1.2-1.4 交易', en: 'v1.2-1.4 Trading' },
  { id: 'v1_5', label: 'v1.5', zh: 'v1.5 Agent Zone', en: 'v1.5 Agent Zone' },
  { id: 'v1_6', label: 'v1.6-1.9', zh: 'v1.6-1.9 安全', en: 'v1.6-1.9 Security' },
  { id: 'v2_0', label: 'v2.0', zh: 'v2.0 Marketplace', en: 'v2.0 Marketplace' },
];

export default function RoadmapTimeline({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [active, setActive] = useState('v1_0');

  useEffect(() => {
    const secs = versions.map(v => document.getElementById(v.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    secs.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Sticky Timeline Nav */}
      <nav className="timelineNav">
        <div className="timelineInner">
          {versions.map(v => (
            <button key={v.id} className={`timelineBtn ${active === v.id ? 'active' : ''}`} onClick={() => scrollTo(v.id)}>
              <span className="timelineDot" />{v.label}
            </button>
          ))}
        </div>
      </nav>

      {/* v1.0 */}
      <section id="v1_0" className="section">
        <div className="reveal">
          <span className="badge badgeCurrent" style={{ marginBottom: 12, display: 'inline-block' }}>{zh ? '当前阶段' : 'Current Phase'}</span>
          <h2 className="sectionTitle">v1.0 — {zh ? '落地页 + 基础Skills' : 'Landing + Basic Skills'}</h2>
          <p className="sectionSub">{zh ? '基础信息Skills包装，一句话钩子触发' : 'Basic info Skills, triggered by natural language'}</p>
        </div>
        <div className="grid2">
          {[
            { emoji: '📈', zh: '实时行情查询', en: 'Market Data', dZh: '价格/K线/深度/资金流向，实时聚合', dEn: 'Price, K-line, depth, fund flow — real-time aggregation' },
            { emoji: '📰', zh: '市场资讯', en: 'News Feed', dZh: '热门新闻、项目动态、链上异动监控', dEn: 'Hot news, project updates, on-chain alerts' },
            { emoji: '📋', zh: 'AI日报', en: 'Daily Report', dZh: 'AI自动生成每日/每周市场报告', dEn: 'AI-generated daily/weekly market reports' },
            { emoji: '🔔', zh: '价格预警', en: 'Price Alert', dZh: '自定义价格触发提醒，24小时监控', dEn: 'Custom price triggers, 24/7 monitoring' },
          ].map((s, i) => (
            <div key={i} className="glass reveal" style={{ padding: '1.5rem', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ fontSize: '2rem', lineHeight: 1 }}>{s.emoji}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{zh ? s.zh : s.en}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{zh ? s.dZh : s.dEn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* v1.1 */}
      <section id="v1_1" className="section">
        <div className="reveal">
          <span className="badge badgeGreen" style={{ marginBottom: 12, display: 'inline-block' }}>v1.1</span>
          <h2 className="sectionTitle">{zh ? 'Telegram Bot · 在线Agent' : 'Telegram Bot · Online Agent'}</h2>
          <p className="sectionSub">{zh ? '领养你的Bot，一键开始AI交易之旅' : 'Adopt your Bot, start your AI trading journey'}</p>
        </div>

        <div className="grid2 reveal">
          {/* Chat mockup */}
          <div>
            <div className="chatBox">
              <div className="chatAvatar">👤 You</div>
              <div className="chatBubble chatUser">{zh ? '帮我查BTC' : 'Check BTC for me'}</div>
              <div className="chatAvatar">🤖 CoinW Agent</div>
              <div className="chatBubble chatBot">
                {zh
                  ? '📊 BTC/USDT\n💰 $87,432.50 (+2.3%)\n📈 24h高: $88,100\n📉 24h低: $84,920\n📊 24h量: 12.5B USDT'
                  : '📊 BTC/USDT\n💰 $87,432.50 (+2.3%)\n📈 24h High: $88,100\n📉 24h Low: $84,920\n📊 24h Vol: 12.5B USDT'}
              </div>
              <div className="quickBtns">
                {(zh ? ['市场行情', '我的持仓', '我的委托', '最近活动'] : ['Market', 'Holdings', 'Orders', 'Activity']).map((b, i) => (
                  <span key={i} className="quickBtn">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Onboarding steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{zh ? '🐣 领养你的Bot' : '🐣 Adopt Your Bot'}</h3>
            {[
              { step: 1, emoji: '🎭', zh: '选择性格: 专业严谨 / 轻松友好 / 犀利幽默', en: 'Pick personality: Professional / Friendly / Witty' },
              { step: 2, emoji: '🪙', zh: '关注币种: BTC, ETH, SOL...', en: 'Focus coins: BTC, ETH, SOL...' },
              { step: 3, emoji: '⚖️', zh: '风险偏好: 保守 / 均衡 / 激进', en: 'Risk level: Conservative / Balanced / Aggressive' },
            ].map((s, i) => (
              <div key={i} className="glass" style={{ padding: '1rem', display: 'flex', gap: 12, alignItems: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,212,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: 'var(--green)', fontSize: '0.85rem', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <span style={{ fontSize: '1rem', marginRight: 6 }}>{s.emoji}</span>
                  <span style={{ fontSize: '0.82rem' }}>{zh ? s.zh : s.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* v1.2-1.4 */}
      <section id="v1_2" className="section">
        <div className="reveal">
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.2-1.4</span>
          <h2 className="sectionTitle">{zh ? '交易Skills + API对接' : 'Trading Skills + API'}</h2>
          <p className="sectionSub">{zh ? '自然语言下单，AI帮你24小时盯盘' : 'Natural language trading, AI watches 24/7'}</p>
        </div>

        <div className="grid2 reveal">
          {/* Trade chat mockup */}
          <div className="chatBox">
            <div className="chatAvatar">👤 You</div>
            <div className="chatBubble chatUser">{zh ? 'BTC跌到85000就帮我买入0.5 BTC' : 'Buy 0.5 BTC when it drops to 85,000'}</div>
            <div className="chatAvatar">🤖 CoinW Agent</div>
            <div className="chatBubble chatBot">
              {zh
                ? '✅ 已挂限价买单\n📌 BTC/USDT\n💰 价格: 85,000 USDT\n📦 数量: 0.5 BTC\n⏳ 状态: 等待成交'
                : '✅ Limit order placed\n📌 BTC/USDT\n💰 Price: 85,000 USDT\n📦 Amount: 0.5 BTC\n⏳ Status: Pending'}
            </div>
          </div>

          {/* Portfolio mockup */}
          <div className="mockFrame">
            <div className="mockHeader">
              <div className="mockDot" style={{ background: '#ff5f57' }} />
              <div className="mockDot" style={{ background: '#ffbd2e' }} />
              <div className="mockDot" style={{ background: '#28ca42' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 8 }}>{zh ? '我的持仓' : 'Portfolio'}</span>
            </div>
            <div className="mockBody">
              <table style={{ width: '100%', fontSize: '0.8rem', borderCollapse: 'collapse' }}>
                <thead><tr style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '6px 0', fontWeight: 600 }}>{zh ? '币种' : 'Asset'}</th>
                  <th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 600 }}>{zh ? '数量' : 'Amount'}</th>
                  <th style={{ textAlign: 'right', padding: '6px 0', fontWeight: 600 }}>PnL</th>
                </tr></thead>
                <tbody>
                  {[
                    { coin: 'BTC', amt: '1.25', pnl: '+12.4%', color: '#00d47e' },
                    { coin: 'ETH', amt: '15.8', pnl: '+5.2%', color: '#00d47e' },
                    { coin: 'SOL', amt: '120', pnl: '-3.1%', color: '#ef4444' },
                    { coin: 'USDT', amt: '25,000', pnl: '—', color: 'var(--muted)' },
                  ].map((r, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '8px 0', fontWeight: 600 }}>{r.coin}</td>
                      <td style={{ padding: '8px 0', textAlign: 'right' }}>{r.amt}</td>
                      <td style={{ padding: '8px 0', textAlign: 'right', color: r.color, fontWeight: 600 }}>{r.pnl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="glass" style={{ marginTop: 12, padding: '10px 14px', fontSize: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>🔑 API Key: ****-****-7f3a</span>
                <span style={{ color: 'var(--green)' }}>{zh ? '已连接' : 'Connected'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* v1.5 */}
      <section id="v1_5" className="section">
        <div className="reveal">
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.5</span>
          <h2 className="sectionTitle">{zh ? 'Agent Zone · Skill市场' : 'Agent Zone · Skill Marketplace'}</h2>
          <p className="sectionSub">{zh ? 'Agent对决、技能分享、社区共建' : 'Agent battles, skill sharing, community building'}</p>
        </div>

        {/* Agent PK */}
        <div className="grid2 reveal" style={{ marginBottom: '2rem' }}>
          {[
            { name: zh ? '🛡️ 稳健派' : '🛡️ Conservative', roi: '+18.5%', win: '72%', dd: '-4.2%', style: 'DCA + 网格' },
            { name: zh ? '🔥 激进派' : '🔥 Aggressive', roi: '+47.3%', win: '58%', dd: '-15.8%', style: zh ? '趋势追踪 + 杠杆' : 'Trend + Leverage' },
          ].map((a, i) => (
            <div key={i} className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{a.name}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--green)', marginBottom: 8 }}>{a.roi}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, fontSize: '0.78rem', color: 'var(--muted)' }}>
                <span>{zh ? '胜率' : 'Win'} {a.win}</span>
                <span>{zh ? '回撤' : 'DD'} {a.dd}</span>
              </div>
              <div style={{ marginTop: 8, fontSize: '0.75rem', color: 'var(--muted)' }}>{a.style}</div>
            </div>
          ))}
        </div>

        {/* Skill marketplace */}
        <h3 className="reveal" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 12, textAlign: 'center' }}>🏪 {zh ? 'Skill 市场' : 'Skill Marketplace'}</h3>
        <div className="grid2 reveal">
          {[
            { name: zh ? '巨鲸追踪' : 'Whale Tracker', author: 'crypto_dev', rating: '⭐ 4.8', installs: '2.3k' },
            { name: zh ? '情绪分析' : 'Sentiment AI', author: 'ai_trader', rating: '⭐ 4.6', installs: '1.8k' },
            { name: zh ? 'MEV监控' : 'MEV Monitor', author: 'defi_lab', rating: '⭐ 4.5', installs: '956' },
            { name: zh ? '套利信号' : 'Arb Signals', author: 'quant_team', rating: '⭐ 4.7', installs: '3.1k' },
          ].map((s, i) => (
            <div key={i} className="glass" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{s.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>by {s.author}</div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '0.75rem' }}>
                <div>{s.rating}</div>
                <div style={{ color: 'var(--muted)' }}>📥 {s.installs}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <span className="glass" style={{ padding: '10px 24px', fontWeight: 700, fontSize: '0.85rem', color: 'var(--green)', cursor: 'pointer', display: 'inline-block' }}>
            🚀 {zh ? '发布你的Skill' : 'Publish Your Skill'}
          </span>
        </div>
      </section>

      {/* v1.6-1.9 */}
      <section id="v1_6" className="section">
        <div className="reveal">
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.6-1.9</span>
          <h2 className="sectionTitle">{zh ? '安全与基础设施' : 'Security & Infrastructure'}</h2>
          <p className="sectionSub">{zh ? '安全是底线，风控是核心' : 'Security is the baseline, risk control is the core'}</p>
        </div>

        <div className="grid2 reveal">
          {/* Security checklist */}
          <div className="glass" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>🔒 {zh ? '安全清单' : 'Security Checklist'}</h3>
            {[
              { zh: 'API权限分级 — 只读/交易/提现分离', en: 'API permission tiers — read/trade/withdraw separation' },
              { zh: '风控系统 — 实时监控异常操作', en: 'Risk control — real-time anomaly detection' },
              { zh: '资金隔离 — Agent无法直接提现', en: 'Fund isolation — Agent cannot withdraw' },
              { zh: '审计日志 — 所有操作可追溯', en: 'Audit logs — all actions traceable' },
              { zh: '紧急熔断 — 一键停止所有Agent', en: 'Kill switch — stop all Agents instantly' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10, fontSize: '0.82rem' }}>
                <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span>{zh ? c.zh : c.en}</span>
              </div>
            ))}
          </div>

          {/* Risk dashboard mockup */}
          <div className="mockFrame">
            <div className="mockHeader">
              <div className="mockDot" style={{ background: '#ff5f57' }} />
              <div className="mockDot" style={{ background: '#ffbd2e' }} />
              <div className="mockDot" style={{ background: '#28ca42' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 8 }}>{zh ? '风控面板' : 'Risk Dashboard'}</span>
            </div>
            <div className="mockBody" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: zh ? '最大回撤' : 'Max Drawdown', value: '-10%', bar: 40, color: '#f59e0b' },
                { label: zh ? '单笔限额' : 'Position Limit', value: '5,000 USDT', bar: 25, color: '#3b82f6' },
                { label: zh ? '日亏损上限' : 'Daily Loss Cap', value: '-2%', bar: 20, color: '#ef4444' },
              ].map((r, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: 4 }}>
                    <span>{r.label}</span><span style={{ fontWeight: 700 }}>{r.value}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)' }}>
                    <div style={{ height: '100%', borderRadius: 3, width: `${r.bar}%`, background: r.color }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 8, textAlign: 'center' }}>
                <span style={{ display: 'inline-block', padding: '6px 20px', borderRadius: 8, background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontWeight: 700, fontSize: '0.8rem' }}>
                  🛑 {zh ? '紧急熔断' : 'KILL SWITCH'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* v2.0 */}
      <section id="v2_0" className="section">
        <div className="reveal">
          <span className="badge badgeGold" style={{ marginBottom: 12, display: 'inline-block' }}>v2.0</span>
          <h2 className="sectionTitle">{zh ? 'Agent Marketplace · 正式上线' : 'Agent Marketplace · Launch'}</h2>
          <p className="sectionSub">{zh ? '万人共建，生态起飞' : 'Community-driven ecosystem takes flight'}</p>
        </div>

        {/* Stats */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: '2rem', flexWrap: 'wrap' }}>
          {[
            { num: '10,000+', label: 'Agents' },
            { num: '50,000+', label: zh ? '用户' : 'Users' },
            { num: '$100M+', label: zh ? '交易量' : 'Volume' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b' }}>{s.num}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Marketplace agents */}
        <div className="grid3 reveal">
          {[
            { avatar: '🤖', name: zh ? 'Alpha猎手' : 'Alpha Hunter', strategy: zh ? '趋势跟踪 + AI情绪' : 'Trend + AI Sentiment', roi: '+156%', followers: '8.2k', rating: '4.9' },
            { avatar: '🧠', name: zh ? '稳定收益' : 'Steady Yield', strategy: zh ? 'DCA + 网格 + 对冲' : 'DCA + Grid + Hedge', roi: '+42%', followers: '15.1k', rating: '4.8' },
            { avatar: '⚡', name: zh ? '闪电套利' : 'Flash Arb', strategy: zh ? '跨所套利 + MEV' : 'Cross-DEX Arb + MEV', roi: '+89%', followers: '5.6k', rating: '4.7' },
          ].map((a, i) => (
            <div key={i} className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{a.avatar}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{a.name}</h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: 10 }}>{a.strategy}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--green)', marginBottom: 8 }}>{a.roi}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, fontSize: '0.75rem', color: 'var(--muted)' }}>
                <span>👥 {a.followers}</span>
                <span>⭐ {a.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
