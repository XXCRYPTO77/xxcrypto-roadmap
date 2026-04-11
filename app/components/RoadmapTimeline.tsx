'use client';
import { useEffect, useState, useRef } from 'react';
import { T, useLang } from './LangContext';
import ScrollReveal from './ScrollReveal';

const versions = [
  { id: 'v1-0', label: 'v1.0' },
  { id: 'v1-1', label: 'v1.1' },
  { id: 'v1-2', label: 'v1.2-1.4' },
  { id: 'v1-5', label: 'v1.5' },
  { id: 'v1-6', label: 'v1.6-1.9' },
  { id: 'v2-0', label: 'v2.0' },
];

export default function RoadmapTimeline() {
  const { lang } = useLang();
  const zh = lang === 'zh';
  const [active, setActive] = useState('v1-0');
  const clicking = useRef(false);

  useEffect(() => {
    const els = versions.map(v => document.getElementById(v.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      entries => {
        if (clicking.current) return;
        for (const e of entries) {
          if (e.isIntersecting) { setActive(e.target.id); break; }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    clicking.current = true;
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { clicking.current = false; }, 1000);
  };

  return (
    <>
      <nav className="timelineNav">
        <div className="timelineInner">
          {versions.map(v => (
            <button key={v.id} className={`timelineBtn${active === v.id ? ' active' : ''}`} onClick={() => scrollTo(v.id)}>
              <span className="timelineDot" />{v.label}
            </button>
          ))}
        </div>
      </nav>

      {/* v1.0 */}
      <section id="v1-0" className="section">
        <ScrollReveal>
          <span className="badge badgeCurrent" style={{ marginBottom: 12, display: 'inline-block' }}><T zh="当前阶段" en="Current Phase" /></span>
          <h2 className="sectionTitle">v1.0 — <T zh="Landing + 基础 Skills" en="Landing + Basic Skills" /></h2>
          <p className="sectionSub"><T zh="基础信息Skills包装，一句话钩子触发" en="Basic info Skills, triggered by natural language" /></p>
        </ScrollReveal>
        <div className="grid2">
          {([
            { icon: '📊', zh: '实时行情查询', en: 'Market Data', dZh: '一句话查询任意币种实时价格、涨跌幅、交易量', dEn: 'Query real-time price, change, volume for any coin' },
            { icon: '📰', zh: '市场资讯', en: 'News Feed', dZh: '自动聚合加密市场最新新闻与热点事件', dEn: 'Auto-aggregate latest crypto news and trending events' },
            { icon: '📋', zh: 'AI日报', en: 'Daily Report', dZh: '每日自动生成市场总结与关键指标报告', dEn: 'Auto-generate daily market summary and key metrics' },
            { icon: '🔔', zh: '价格预警', en: 'Price Alert', dZh: '设置价格阈值，触发即时通知，不错过关键时刻', dEn: 'Set price thresholds, get instant alerts at key moments' },
          ] as const).map((s, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="glass" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{zh ? s.zh : s.en}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>{zh ? s.dZh : s.dEn}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* v1.1 */}
      <section id="v1-1" className="section">
        <ScrollReveal>
          <span className="badge badgeGreen" style={{ marginBottom: 12, display: 'inline-block' }}>v1.1</span>
          <h2 className="sectionTitle"><T zh="Telegram Bot + 在线 Agent" en="Telegram Bot + Online Agent" /></h2>
          <p className="sectionSub"><T zh="领养你的Bot，24小时在线AI助手" en="Adopt your Bot, 24/7 online AI assistant" /></p>
        </ScrollReveal>
        <div className="grid2">
          <ScrollReveal>
            <div className="chatBox">
              <div className="chatAvatar">👤 User</div>
              <div className="chatBubble chatUser"><T zh="帮我查BTC" en="Check BTC for me" /></div>
              <div className="chatAvatar">🤖 CoinW Agent</div>
              <div className="chatBubble chatBot">
                BTC/USDT: $87,432.50<br />
                24h: <span style={{ color: '#00d47e' }}>+2.34%</span><br />
                <T zh="24h量: $28.5B" en="24h Vol: $28.5B" />
              </div>
            </div>
            <div className="quickBtns" style={{ marginTop: 12 }}>
              {(zh ? ['市场行情', '我的持仓', '我的委托', '最近活动'] : ['Market', 'Holdings', 'Orders', 'Activity']).map((b, i) => (
                <span key={i} className="quickBtn">{b}</span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 12 }}><T zh="🐣 领养你的Bot" en="🐣 Adopt Your Bot" /></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {([
                { icon: '🎭', zh: '性格选择', en: 'Personality', dZh: '稳健/激进/均衡', dEn: 'Conservative / Aggressive / Balanced' },
                { icon: '🪙', zh: '关注币种', en: 'Focus Coins', dZh: '选择你关心的币种', dEn: 'Pick coins you care about' },
                { icon: '📏', zh: '风险等级', en: 'Risk Level', dZh: '设置风险偏好 1-10', dEn: 'Set risk preference 1-10' },
              ] as const).map((s, i) => (
                <div key={i} className="glass" style={{ padding: '0.8rem 1rem', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{zh ? s.zh : s.en}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{zh ? s.dZh : s.dEn}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* v1.2-1.4 */}
      <section id="v1-2" className="section">
        <ScrollReveal>
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.2-1.4</span>
          <h2 className="sectionTitle"><T zh="交易 Skills + API" en="Trading Skills + API" /></h2>
          <p className="sectionSub"><T zh="自然语言下单，AI替你执行交易" en="Natural language orders, AI executes trades for you" /></p>
        </ScrollReveal>
        <div className="grid2">
          <ScrollReveal>
            <div className="chatBox">
              <div className="chatAvatar">👤 User</div>
              <div className="chatBubble chatUser"><T zh="BTC跌到85000就帮我买入0.5 BTC" en="Buy 0.5 BTC when it drops to $85,000" /></div>
              <div className="chatAvatar">🤖 CoinW Agent</div>
              <div className="chatBubble chatBot">
                ✅ <T zh="已挂限价买单" en="Limit buy order placed" />:<br />
                BTC 85,000 USDT × 0.5 BTC<br />
                <T zh="预计花费: 42,500 USDT" en="Est. cost: 42,500 USDT" />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mockFrame">
              <div className="mockHeader">
                <div className="mockDot" style={{ background: '#ff5f57' }} />
                <div className="mockDot" style={{ background: '#febc2e' }} />
                <div className="mockDot" style={{ background: '#28c840' }} />
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', marginLeft: 8 }}>Portfolio</span>
              </div>
              <div className="mockBody">
                <table style={{ width: '100%', fontSize: '0.78rem', borderCollapse: 'collapse' }}>
                  <thead><tr style={{ color: 'var(--muted)', textAlign: 'left' }}>
                    <th style={{ padding: '6px 0' }}>{zh ? '币种' : 'Asset'}</th>
                    <th>{zh ? '数量' : 'Amount'}</th>
                    <th>{zh ? '价值' : 'Value'}</th>
                    <th>PnL</th>
                  </tr></thead>
                  <tbody>
                    {[
                      { coin: 'BTC', amt: '1.25', val: '$109,290', pnl: '+12.4%', c: '#00d47e' },
                      { coin: 'ETH', amt: '15.0', val: '$28,500', pnl: '+5.2%', c: '#00d47e' },
                      { coin: 'USDT', amt: '50,000', val: '$50,000', pnl: '—', c: 'var(--muted)' },
                    ].map((r, i) => (
                      <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                        <td style={{ padding: '8px 0', fontWeight: 600 }}>{r.coin}</td>
                        <td>{r.amt}</td>
                        <td>{r.val}</td>
                        <td style={{ color: r.c }}>{r.pnl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="glass" style={{ marginTop: 12, padding: '1rem', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: '1.3rem' }}>🔑</span>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>API Key <T zh="管理" en="Management" /></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}><T zh="安全绑定，权限可控，随时撤销" en="Secure binding, controlled permissions, revoke anytime" /></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* v1.5 */}
      <section id="v1-5" className="section">
        <ScrollReveal>
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.5</span>
          <h2 className="sectionTitle"><T zh="Agent Zone + Skill 市场" en="Agent Zone + Skill Marketplace" /></h2>
          <p className="sectionSub"><T zh="Agent对战，社区共建技能生态" en="Agent battles, community-driven skill ecosystem" /></p>
        </ScrollReveal>

        <ScrollReveal>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>⚔️ Agent PK Arena</h3>
        </ScrollReveal>
        <div className="grid2" style={{ maxWidth: 700, margin: '0 auto 3rem' }}>
          {([
            { name: zh ? '🛡️ 稳健派' : '🛡️ Conservative', roi: '+32.5%', win: '78%', dd: '-8.2%' },
            { name: zh ? '⚡ 激进派' : '⚡ Aggressive', roi: '+89.3%', win: '61%', dd: '-24.5%' },
          ] as const).map((a, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{a.name}</h4>
                {[
                  ['ROI (30d)', a.roi],
                  [zh ? '胜率' : 'Win Rate', a.win],
                  [zh ? '最大回撤' : 'Max DD', a.dd],
                ].map(([k, v], j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: '0.82rem', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--muted)' }}>{k}</span>
                    <span style={{ fontWeight: 600, color: typeof v === 'string' && v.startsWith('+') ? '#00d47e' : typeof v === 'string' && v.startsWith('-') ? '#ef4444' : 'var(--text)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16, textAlign: 'center' }}>🏪 Skill Marketplace</h3>
        </ScrollReveal>
        <div className="grid2">
          {([
            { icon: '📈', zh: 'K线形态识别', en: 'Chart Patterns', stars: '⭐ 4.8', cnt: '2.3k' },
            { icon: '🐋', zh: '鲸鱼追踪', en: 'Whale Tracker', stars: '⭐ 4.6', cnt: '1.8k' },
            { icon: '💎', zh: 'DeFi收益优化', en: 'DeFi Yield', stars: '⭐ 4.5', cnt: '1.2k' },
            { icon: '🔮', zh: '情绪分析', en: 'Sentiment', stars: '⭐ 4.7', cnt: '3.1k' },
          ] as const).map((s, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="glass" style={{ padding: '1rem', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{zh ? s.zh : s.en}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{s.stars} · {s.cnt} {zh ? '安装' : 'installs'}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <span className="glass" style={{ display: 'inline-block', padding: '10px 24px', fontWeight: 600, fontSize: '0.9rem', color: 'var(--green)', cursor: 'pointer' }}>
              🚀 <T zh="发布你的 Skill" en="Publish Your Skill" />
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* v1.6-1.9 */}
      <section id="v1-6" className="section">
        <ScrollReveal>
          <span className="badge badgeBlue" style={{ marginBottom: 12, display: 'inline-block' }}>v1.6-1.9</span>
          <h2 className="sectionTitle"><T zh="安全与基础设施" en="Security & Infrastructure" /></h2>
          <p className="sectionSub"><T zh="企业级安全保障，交易无忧" en="Enterprise-grade security for worry-free trading" /></p>
        </ScrollReveal>
        <div className="grid2">
          <ScrollReveal>
            <div className="glass" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 16 }}>🔒 <T zh="安全清单" en="Security Checklist" /></h3>
              {([
                { zh: 'API权限分级', en: 'API Permission Tiers' },
                { zh: '风控系统', en: 'Risk Control System' },
                { zh: '资金隔离', en: 'Fund Isolation' },
                { zh: '审计日志', en: 'Audit Logs' },
                { zh: '紧急熔断', en: 'Emergency Kill Switch' },
              ] as const).map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: '0.85rem' }}>
                  <span style={{ color: '#00d47e' }}>✅</span>
                  <span>{zh ? item.zh : item.en}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mockFrame">
              <div className="mockHeader">
                <div className="mockDot" style={{ background: '#ff5f57' }} />
                <div className="mockDot" style={{ background: '#febc2e' }} />
                <div className="mockDot" style={{ background: '#28c840' }} />
                <span style={{ fontSize: '0.7rem', color: 'var(--muted)', marginLeft: 8 }}>{zh ? '风控面板' : 'Risk Dashboard'}</span>
              </div>
              <div className="mockBody">
                {([
                  { label: zh ? '最大回撤限制' : 'Max Drawdown Limit', val: '15%', color: '#f59e0b' },
                  { label: zh ? '单笔仓位上限' : 'Position Limit', val: '10%', color: '#60a5fa' },
                  { label: zh ? '紧急熔断开关' : 'Kill Switch', val: zh ? '已启用 ✅' : 'Enabled ✅', color: '#00d47e' },
                ] as const).map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '0.82rem' }}>
                    <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                    <span style={{ fontWeight: 700, color: r.color }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* v2.0 */}
      <section id="v2-0" className="section">
        <ScrollReveal>
          <span className="badge badgeGold" style={{ marginBottom: 12, display: 'inline-block' }}>v2.0</span>
          <h2 className="sectionTitle"><T zh="Agent 市场" en="Agent Marketplace" /></h2>
          <p className="sectionSub"><T zh="万人共建，交易Agent生态" en="Community-powered trading Agent ecosystem" /></p>
        </ScrollReveal>
        <div className="grid3">
          {([
            { avatar: '🧠', zh: '量化先锋', en: 'Quant Pioneer', roi: '+156%', followers: '8.2k', rating: '4.9' },
            { avatar: '🎯', zh: '趋势猎手', en: 'Trend Hunter', roi: '+89%', followers: '5.6k', rating: '4.7' },
            { avatar: '🛡️', zh: '稳健理财', en: 'Steady Growth', roi: '+45%', followers: '12.1k', rating: '4.8' },
          ] as const).map((a, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="glass" style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{a.avatar}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{zh ? a.zh : a.en}</h4>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#00d47e', margin: '8px 0' }}>{a.roi}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', justifyContent: 'center', gap: 16 }}>
                  <span>👥 {a.followers}</span>
                  <span>⭐ {a.rating}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <div className="glass" style={{ display: 'inline-block', padding: '1rem 2rem', fontSize: '0.9rem' }}>
              <span style={{ fontWeight: 700, color: 'var(--green)' }}>10,000+ Agents</span>
              <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
              <span style={{ fontWeight: 700, color: 'var(--green)' }}>50,000+ Users</span>
              <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
              <span style={{ fontWeight: 700, color: 'var(--green)' }}>$100M+ Volume</span>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
