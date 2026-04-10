'use client';
const stories = [
  { icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5',
    zh: '信息驱动', en: 'Data Aggregation',
    descZh: 'Agent自动聚合行情、资讯、链上数据，生成日报/周报，辅助决策', descEn: 'Agent aggregates market data, news, on-chain data into daily/weekly reports',
    chatZh: '"帮我看看今天加密市场整体情况"', chatEn: '"Show me today\'s crypto market overview"' },
  { icon: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-6.364-6.364L4.5 8.494',
    zh: 'Agent自主发现', en: 'Auto-Discovery',
    descZh: '你的Agent通过MCP/GitHub自动发现CoinW Skills并接入', descEn: 'Your Agent discovers CoinW Skills via MCP/GitHub and auto-connects',
    chatZh: '"帮我找一些加密货币赚钱工具"', chatEn: '"Find me crypto money-making tools"' },
  { icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    zh: '交易执行', en: 'Trade Execution',
    descZh: 'Agent直接帮你下单，24小时监控市场，自动止盈止损', descEn: 'Agent places orders, monitors 24/7, auto TP/SL',
    chatZh: '"BTC跌到85000就帮我买0.5个"', chatEn: '"Buy 0.5 BTC when it drops to $85,000"' },
  { icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    zh: 'FOMO一键入局', en: 'One-Click Agent',
    descZh: '零技术门槛，一键生成专属AI交易助手，不错过发财机遇', descEn: 'Zero tech barrier, one-click to get your personal AI trader',
    chatZh: '"我要快速有一个agent帮我交易"', chatEn: '"I want an agent to trade for me ASAP"' },
  { icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21',
    zh: '站内用户引导', en: 'Exchange Users',
    descZh: '交易所内发现Agent Skills入口，生成API Key，一键对接', descEn: 'Discover Agent Skills inside CoinW, generate API Key, connect instantly',
    chatZh: '"在交易所看到Agent Skills入口"', chatEn: '"Found Agent Skills inside exchange"' },
];

export default function UserStories({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  return (
    <section className="section">
      <div className="reveal">
        <h2 className="sectionTitle">{zh ? '用户故事' : 'User Stories'}</h2>
        <p className="sectionSub">{zh ? '我们服务谁？解决什么问题？' : 'Who do we serve? What problems do we solve?'}</p>
      </div>
      <div className="grid5" style={{ gap: '1rem' }}>
        {stories.map((s, i) => (
          <div key={i} className="glass reveal" style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,212,126,0.1)', border: '1px solid rgba(0,212,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d47e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg>
            </div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{zh ? s.zh : s.en}</h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{zh ? s.descZh : s.descEn}</p>
            <div style={{ background: 'rgba(0,212,126,0.06)', borderRadius: 8, padding: '8px 10px', fontSize: '0.72rem', color: 'var(--green)', fontStyle: 'italic' }}>
              {zh ? s.chatZh : s.chatEn}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
