'use client';
import { useState } from 'react';

const skills = [
  { id: 'market', icon: '📊', zh: '实时行情查询', en: 'Market Data', descZh: '价格、K线、深度、成交记录 — 实时聚合多维度行情数据', descEn: 'Price, K-line, depth, trades — real-time multi-dimensional market data', free: true, installs: '12.5k', hook: '"帮我查BTC" / "BTC现在多少钱"' },
  { id: 'overview', icon: '🌐', zh: '市场概览', en: 'Market Overview', descZh: '热门币种、资金流向、板块轮动 — 一句话掌握市场全貌', descEn: 'Hot coins, fund flow, sector rotation — market snapshot in one sentence', free: true, installs: '9.8k', hook: '"今天加密市场怎么样"' },
  { id: 'news', icon: '📰', zh: '资讯聚合', en: 'News Aggregator', descZh: '项目动态、链上异动、宏观事件 — AI筛选整理', descEn: 'Project updates, on-chain alerts, macro events — AI curated', free: true, installs: '8.2k', hook: '"最近有什么大新闻"' },
  { id: 'report', icon: '📋', zh: 'AI日报/周报', en: 'AI Daily Report', descZh: '每日自动生成市场摘要，定时推送，不再错过重要信息', descEn: 'Auto-generated market summary, scheduled delivery', free: true, installs: '15.1k', hook: '"每天9点给我发日报"' },
  { id: 'alert', icon: '🔔', zh: '价格预警', en: 'Price Alert', descZh: '自定义价格触发提醒，24小时盯盘不漏一个信号', descEn: 'Custom price triggers, 24/7 monitoring', free: true, installs: '11.3k', hook: '"BTC跌破85000提醒我"' },
  { id: 'whale', icon: '🐋', zh: '巨鲸追踪', en: 'Whale Tracker', descZh: '监控大户地址异动、大额转账、聪明钱流向', descEn: 'Monitor whale movements, large transfers, smart money flow', free: false, installs: '4.6k', hook: '"最近有巨鲸在动吗"' },
  { id: 'spot', icon: '💰', zh: '现货交易', en: 'Spot Trading', descZh: '自然语言下单 — 限价、市价、止盈止损一句话搞定', descEn: 'Natural language orders — limit, market, TP/SL in one sentence', free: false, installs: '7.9k', hook: '"帮我买0.5个BTC"' },
  { id: 'portfolio', icon: '📁', zh: '持仓查询', en: 'Portfolio', descZh: '实时查看持仓、余额、盈亏 — 随时掌握账户状态', descEn: 'Real-time holdings, balance, PnL — account status at a glance', free: false, installs: '6.4k', hook: '"我的持仓怎么样了"' },
];

export default function SkillStore({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [installed, setInstalled] = useState<Set<string>>(new Set(['market', 'overview', 'news', 'report']));
  const [tab, setTab] = useState<'all' | 'info' | 'trade'>('all');
  const [search, setSearch] = useState('');

  const filtered = skills.filter(s => {
    if (tab === 'info' && ['spot', 'portfolio'].includes(s.id)) return false;
    if (tab === 'trade' && !['spot', 'portfolio'].includes(s.id)) return false;
    if (search) {
      const q = search.toLowerCase();
      return s.zh.includes(q) || s.en.toLowerCase().includes(q) || s.descZh.includes(q);
    }
    return true;
  });

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h1 className="pageTitle">🧩 Agent Skills</h1>
        <p className="pageSub">{zh ? '安装Skills，让你的Agent获得加密货币超能力' : 'Install Skills to give your Agent crypto superpowers'}</p>
      </div>

      <div className="searchBar">
        <span className="searchIcon">🔍</span>
        <input className="searchInput" placeholder={zh ? '搜索Skills...' : 'Search Skills...'} value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="tabs">
        {([['all', zh ? '全部' : 'All'], ['info', zh ? '信息类' : 'Info'], ['trade', zh ? '交易类' : 'Trading']] as const).map(([id, label]) => (
          <button key={id} className={`tab ${tab === id ? 'active' : ''}`} onClick={() => setTab(id as 'all' | 'info' | 'trade')}>{label}</button>
        ))}
      </div>

      <div className="grid2">
        {filtered.map(s => (
          <div key={s.id} className="glass glassClickable skillCard">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="skillCardIcon">{s.icon}</span>
              <span className={`badge ${s.free ? 'badgeFree' : 'badgePro'}`}>{s.free ? 'Free' : 'Pro'}</span>
            </div>
            <div className="skillCardTitle">{zh ? s.zh : s.en}</div>
            <div className="skillCardDesc">{zh ? s.descZh : s.descEn}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--primary)', fontStyle: 'italic', opacity: 0.7 }}>{s.hook}</div>
            <div className="skillCardFooter">
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>📥 {s.installs}</span>
              <button
                className={`installBtn ${installed.has(s.id) ? 'installed' : ''}`}
                onClick={() => { const n = new Set(installed); if (n.has(s.id)) n.delete(s.id); else n.add(s.id); setInstalled(n); }}
              >
                {installed.has(s.id) ? (zh ? '✓ 已安装' : '✓ Installed') : (zh ? '安装' : 'Install')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
