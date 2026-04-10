'use client';
import { useState } from 'react';

const agents = [
  { avatar: '🤖', name: { zh: 'Alpha猎手', en: 'Alpha Hunter' }, strategy: { zh: '趋势跟踪 + AI情绪分析', en: 'Trend Following + AI Sentiment' }, roi: '+156.3%', period: '90d', followers: '8.2k', rating: '4.9', risk: { zh: '高风险', en: 'High Risk' }, riskColor: 'var(--danger)' },
  { avatar: '🧠', name: { zh: '稳定收益', en: 'Steady Yield' }, strategy: { zh: 'DCA + 网格 + 对冲', en: 'DCA + Grid + Hedge' }, roi: '+42.1%', period: '90d', followers: '15.1k', rating: '4.8', risk: { zh: '低风险', en: 'Low Risk' }, riskColor: 'var(--green)' },
  { avatar: '⚡', name: { zh: '闪电套利', en: 'Flash Arb' }, strategy: { zh: '跨所套利 + MEV捕获', en: 'Cross-DEX Arb + MEV' }, roi: '+89.7%', period: '90d', followers: '5.6k', rating: '4.7', risk: { zh: '中风险', en: 'Med Risk' }, riskColor: 'var(--gold)' },
  { avatar: '🐋', name: { zh: '聪明钱跟单', en: 'Smart Money Copy' }, strategy: { zh: '巨鲸地址追踪 + 延迟复制', en: 'Whale tracking + delayed copy' }, roi: '+68.2%', period: '90d', followers: '12.3k', rating: '4.6', risk: { zh: '中风险', en: 'Med Risk' }, riskColor: 'var(--gold)' },
  { avatar: '📊', name: { zh: '量化网格', en: 'Grid Master' }, strategy: { zh: '多币种网格 + 自动调参', en: 'Multi-pair grid + auto-tune' }, roi: '+31.5%', period: '90d', followers: '9.7k', rating: '4.5', risk: { zh: '低风险', en: 'Low Risk' }, riskColor: 'var(--green)' },
  { avatar: '🔮', name: { zh: '链上先知', en: 'On-chain Oracle' }, strategy: { zh: '链上数据分析 + 提前布局', en: 'On-chain analytics + early entry' }, roi: '+112.8%', period: '90d', followers: '6.8k', rating: '4.8', risk: { zh: '高风险', en: 'High Risk' }, riskColor: 'var(--danger)' },
];

const communitySkills = [
  { icon: '🐋', name: { zh: '巨鲸追踪Pro', en: 'Whale Tracker Pro' }, author: 'crypto_dev', rating: '4.8', installs: '2.3k' },
  { icon: '💡', name: { zh: '情绪分析', en: 'Sentiment AI' }, author: 'ai_trader', rating: '4.6', installs: '1.8k' },
  { icon: '🔍', name: { zh: 'MEV监控', en: 'MEV Monitor' }, author: 'defi_lab', rating: '4.5', installs: '956' },
  { icon: '📐', name: { zh: '套利信号', en: 'Arb Signals' }, author: 'quant_team', rating: '4.7', installs: '3.1k' },
];

export default function Marketplace({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [tab, setTab] = useState<'agents' | 'skills'>('agents');
  const [following, setFollowing] = useState<Set<number>>(new Set());
  const [installedSkills, setInstalledSkills] = useState<Set<number>>(new Set());

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h1 className="pageTitle">🏪 Marketplace</h1>
        <p className="pageSub">{zh ? '发现优秀Agent和社区Skills' : 'Discover top Agents and community Skills'}</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginBottom: '2rem', flexWrap: 'wrap' }}>
        {[
          { num: '10,000+', label: 'Agents' },
          { num: '50,000+', label: zh ? '用户' : 'Users' },
          { num: '$100M+', label: zh ? '交易量' : 'Volume' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold)' }}>{s.num}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="tabs">
        <button className={`tab ${tab === 'agents' ? 'active' : ''}`} onClick={() => setTab('agents')}>
          🤖 {zh ? 'Agent排行' : 'Top Agents'}
        </button>
        <button className={`tab ${tab === 'skills' ? 'active' : ''}`} onClick={() => setTab('skills')}>
          🧩 {zh ? '社区Skills' : 'Community Skills'}
        </button>
      </div>

      {tab === 'agents' && (
        <div className="grid3">
          {agents.map((a, i) => (
            <div key={i} className="glass glassClickable agentCard">
              <div className="agentAvatar">{a.avatar}</div>
              <div className="agentName">{zh ? a.name.zh : a.name.en}</div>
              <div className="agentStrategy">{zh ? a.strategy.zh : a.strategy.en}</div>
              <div style={{ marginBottom: 4 }}>
                <span style={{ fontSize: '0.65rem', color: a.riskColor, border: `1px solid ${a.riskColor}33`, padding: '2px 8px', borderRadius: 10 }}>
                  {zh ? a.risk.zh : a.risk.en}
                </span>
              </div>
              <div className="agentROI">{a.roi}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 8 }}>{a.period}</div>
              <div className="agentMeta">
                <span>👥 {a.followers}</span>
                <span>⭐ {a.rating}</span>
              </div>
              <button className="followBtn" onClick={() => { const n = new Set(following); if (n.has(i)) n.delete(i); else n.add(i); setFollowing(n); }}
                style={following.has(i) ? { background: 'var(--green)', color: '#000', borderColor: 'var(--green)' } : {}}>
                {following.has(i) ? (zh ? '✓ 已跟单' : '✓ Following') : (zh ? '跟单' : 'Follow')}
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === 'skills' && (
        <>
          <div className="grid2">
            {communitySkills.map((s, i) => (
              <div key={i} className="glass glassClickable" style={{ padding: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{zh ? s.name.zh : s.name.en}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>by {s.author}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.8rem' }}>⭐ {s.rating}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>📥 {s.installs}</div>
                  </div>
                  <button className={`installBtn ${installedSkills.has(i) ? 'installed' : ''}`}
                    onClick={() => { const n = new Set(installedSkills); if (n.has(i)) n.delete(i); else n.add(i); setInstalledSkills(n); }}>
                    {installedSkills.has(i) ? '✓' : (zh ? '安装' : 'Install')}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="glass glassClickable" style={{ padding: '12px 28px', fontWeight: 700, fontSize: '0.88rem', color: 'var(--green)', border: '1px solid rgba(0,212,126,0.2)', cursor: 'pointer', background: 'rgba(0,212,126,0.04)' }}>
              🚀 {zh ? '发布你的Skill' : 'Publish Your Skill'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
