'use client';
import { T, useLang } from './LangContext';
import ScrollReveal from './ScrollReveal';

const stories = [
  { icon: '📊', zh: '信息驱动', en: 'Data Aggregation', descZh: 'Agent自动聚合行情、资讯、链上数据，生成日报/周报，辅助决策', descEn: 'Agent aggregates market data, news, on-chain data into daily/weekly reports', chatZh: '"帮我看看今天加密市场整体情况"', chatEn: '"Show me today\'s crypto market overview"' },
  { icon: '🔗', zh: 'Agent自主发现', en: 'Auto-Discovery', descZh: '你的Agent通过MCP/GitHub自动发现CoinW Skills并接入', descEn: 'Your Agent discovers CoinW Skills via MCP/GitHub and auto-connects', chatZh: '"帮我找一些加密货币赚钱工具"', chatEn: '"Find me crypto money-making tools"' },
  { icon: '📈', zh: '交易执行', en: 'Trade Execution', descZh: 'Agent直接帮你下单，24小时监控市场，自动止盈止损', descEn: 'Agent places orders, monitors 24/7, auto TP/SL', chatZh: '"BTC跌到85000就帮我买0.5个"', chatEn: '"Buy 0.5 BTC when it drops to $85,000"' },
  { icon: '🚀', zh: 'FOMO一键入局', en: 'One-Click Agent', descZh: '零技术门槛，一键生成专属AI交易助手，不错过发财机遇', descEn: 'Zero tech barrier, one-click to get your personal AI trader', chatZh: '"我要快速有一个agent帮我交易"', chatEn: '"I want an agent to trade for me ASAP"' },
  { icon: '🏢', zh: '站内用户引导', en: 'Exchange Users', descZh: '交易所内发现Agent Skills入口，生成API Key，一键对接', descEn: 'Discover Agent Skills inside CoinW, generate API Key, connect instantly', chatZh: '"在交易所看到Agent Skills入口"', chatEn: '"Found Agent Skills inside exchange"' },
];

export default function UserStories() {
  const { lang } = useLang();
  const zh = lang === 'zh';
  return (
    <section className="section" id="stories">
      <ScrollReveal>
        <h2 className="sectionTitle"><T zh="用户故事" en="User Stories" /></h2>
        <p className="sectionSub"><T zh="我们服务谁？解决什么问题？" en="Who do we serve? What problems do we solve?" /></p>
      </ScrollReveal>
      <div className="grid5" style={{ gap: '1rem' }}>
        {stories.map((s, i) => (
          <ScrollReveal key={i} delay={i * 80}>
            <div className="glass" style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: 10, height: '100%' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,212,126,0.1)', border: '1px solid rgba(0,212,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{zh ? s.zh : s.en}</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.5 }}>{zh ? s.descZh : s.descEn}</p>
              <div style={{ background: 'rgba(0,212,126,0.06)', borderRadius: 8, padding: '8px 10px', fontSize: '0.72rem', color: 'var(--green)', fontStyle: 'italic', marginTop: 'auto' }}>
                {zh ? s.chatZh : s.chatEn}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
