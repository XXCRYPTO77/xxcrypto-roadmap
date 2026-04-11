'use client';
import { useState } from 'react';

export default function Settings({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [personality, setPersonality] = useState(0);
  const [coins, setCoins] = useState<Set<string>>(new Set(['BTC', 'ETH']));
  const [risk, setRisk] = useState(1);
  const [notifications, setNotifications] = useState({ daily: true, price: true, trade: true, whale: false });
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const personalities = [
    { emoji: '🎯', zh: '专业严谨', en: 'Professional' },
    { emoji: '😊', zh: '轻松友好', en: 'Friendly' },
    { emoji: '😏', zh: '犀利幽默', en: 'Witty' },
  ];
  const riskLevels = [
    { emoji: '🛡️', zh: '保守', en: 'Conservative' },
    { emoji: '⚖️', zh: '均衡', en: 'Balanced' },
    { emoji: '🔥', zh: '激进', en: 'Aggressive' },
  ];
  const allCoins = ['BTC', 'ETH', 'SOL', 'BNB', 'DOGE', 'ADA', 'AVAX', 'MATIC'];

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h1 className="pageTitle">⚙️ {zh ? '偏好设置' : 'Preferences'}</h1>
        <p className="pageSub">{zh ? '自定义你的Agent行为和推送偏好' : 'Customize your Agent behavior and notifications'}</p>
      </div>

      {/* Personality */}
      <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>🎭 {zh ? 'Agent性格' : 'Agent Personality'}</h3>
        <div style={{ display: 'flex', gap: 10 }}>
          {personalities.map((p, i) => (
            <div key={i} className={`glass optionCard ${personality === i ? 'selected' : ''}`}
              onClick={() => setPersonality(i)}
              style={{ padding: '12px 18px', cursor: 'pointer', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.3rem' }}>{p.emoji}</span>
              <span className="optionLabel">{zh ? p.zh : p.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Coins */}
      <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>🪙 {zh ? '关注币种' : 'Focus Coins'}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {allCoins.map(c => (
            <button key={c} onClick={() => { const n = new Set(coins); if (n.has(c)) n.delete(c); else n.add(c); setCoins(n); }}
              style={{
                padding: '8px 18px', borderRadius: 10, border: '1px solid',
                borderColor: coins.has(c) ? 'var(--green)' : 'var(--border)',
                background: coins.has(c) ? 'rgba(82,39,255,0.08)' : 'transparent',
                color: coins.has(c) ? 'var(--green)' : 'var(--muted)',
                fontWeight: 600, fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.2s'
              }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Risk level */}
      <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>⚖️ {zh ? '风险偏好' : 'Risk Preference'}</h3>
        <div style={{ display: 'flex', gap: 10 }}>
          {riskLevels.map((r, i) => (
            <div key={i} className={`glass optionCard ${risk === i ? 'selected' : ''}`}
              onClick={() => setRisk(i)}
              style={{ padding: '12px 18px', cursor: 'pointer', flex: 1, textAlign: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.3rem' }}>{r.emoji}</span>
              <span className="optionLabel">{zh ? r.zh : r.en}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: 14 }}>🔔 {zh ? '推送设置' : 'Notifications'}</h3>
        {[
          { key: 'daily', zh: '每日市场日报', en: 'Daily Market Report' },
          { key: 'price', zh: '价格预警', en: 'Price Alerts' },
          { key: 'trade', zh: '交易通知', en: 'Trade Notifications' },
          { key: 'whale', zh: '巨鲸动态', en: 'Whale Alerts' },
        ].map(n => (
          <div key={n.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
            <span style={{ fontSize: '0.85rem' }}>{zh ? n.zh : n.en}</span>
            <button onClick={() => setNotifications({ ...notifications, [n.key]: !notifications[n.key as keyof typeof notifications] })}
              style={{
                width: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer', position: 'relative', transition: 'all 0.3s',
                background: notifications[n.key as keyof typeof notifications] ? 'var(--green)' : 'rgba(255,255,255,0.1)',
              }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%', background: '#fff', position: 'absolute', top: 3, transition: 'all 0.3s',
                left: notifications[n.key as keyof typeof notifications] ? 23 : 3,
              }} />
            </button>
          </div>
        ))}
      </div>

      {/* Save */}
      <button onClick={save} style={{
        padding: '12px 32px', borderRadius: 10, border: 'none',
        background: saved ? 'rgba(82,39,255,0.15)' : 'var(--green)',
        color: saved ? 'var(--green)' : '#000', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s'
      }}>
        {saved ? (zh ? '✓ 已保存' : '✓ Saved') : (zh ? '💾 保存设置' : '💾 Save Settings')}
      </button>
    </div>
  );
}
