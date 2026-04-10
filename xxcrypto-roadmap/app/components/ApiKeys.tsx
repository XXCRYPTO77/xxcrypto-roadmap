'use client';
import { useState } from 'react';

const initialKeys = [
  { id: 1, name: 'Trading Bot', key: 'ck_****...7f3a', permissions: ['读取', '现货交易'], created: '2025-01-10', status: true },
  { id: 2, name: 'Data Agent', key: 'ck_****...2b91', permissions: ['读取'], created: '2025-01-12', status: true },
];

export default function ApiKeys({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [keys, setKeys] = useState(initialKeys);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState('');
  const [perms, setPerms] = useState<Set<string>>(new Set(['读取']));

  const allPerms = [
    { id: '读取', zh: '📖 读取 (行情/持仓/订单)', en: '📖 Read (Market/Portfolio/Orders)' },
    { id: '现货交易', zh: '💰 现货交易', en: '💰 Spot Trading' },
    { id: '合约交易', zh: '📊 合约交易', en: '📊 Futures Trading' },
    { id: '提现', zh: '⚠️ 提现 (高风险)', en: '⚠️ Withdraw (High Risk)' },
  ];

  const createKey = () => {
    if (!newName.trim()) return;
    const hex = Math.random().toString(16).slice(2, 6);
    setKeys([...keys, { id: Date.now(), name: newName, key: `ck_****...${hex}`, permissions: Array.from(perms), created: '2025-01-15', status: true }]);
    setNewName('');
    setPerms(new Set(['读取']));
    setShowCreate(false);
  };

  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h1 className="pageTitle">🔑 API Keys</h1>
        <p className="pageSub">{zh ? '管理你的Agent API密钥和权限' : 'Manage your Agent API keys and permissions'}</p>
      </div>

      {/* Security notice */}
      <div className="glass" style={{ padding: '14px 18px', marginBottom: '1.5rem', display: 'flex', gap: 12, alignItems: 'flex-start', borderColor: 'rgba(0,212,126,0.15)' }}>
        <span style={{ fontSize: '1.2rem' }}>🛡️</span>
        <div style={{ fontSize: '0.82rem' }}>
          <div style={{ fontWeight: 700, marginBottom: 4 }}>{zh ? '安全提示' : 'Security Notice'}</div>
          <div style={{ color: 'var(--muted)' }}>{zh ? 'API Key 仅在创建时显示一次。Agent无法直接提现，所有交易操作均有风控审核。' : 'API Key is shown only once at creation. Agents cannot withdraw directly. All trades are risk-checked.'}</div>
        </div>
      </div>

      {/* Existing keys */}
      <div className="glass" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{zh ? '我的密钥' : 'My Keys'}</span>
          <button onClick={() => setShowCreate(!showCreate)} style={{
            padding: '6px 14px', borderRadius: 8, border: '1px solid var(--green)', background: showCreate ? 'var(--green)' : 'transparent',
            color: showCreate ? '#000' : 'var(--green)', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'
          }}>
            {showCreate ? '✕' : (zh ? '+ 创建密钥' : '+ Create Key')}
          </button>
        </div>
        <table className="dataTable">
          <thead><tr>
            <th>{zh ? '名称' : 'Name'}</th>
            <th>Key</th>
            <th>{zh ? '权限' : 'Permissions'}</th>
            <th>{zh ? '创建日期' : 'Created'}</th>
            <th>{zh ? '操作' : 'Actions'}</th>
          </tr></thead>
          <tbody>
            {keys.map(k => (
              <tr key={k.id}>
                <td style={{ fontWeight: 600 }}>{k.name}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: 'var(--muted)' }}>{k.key}</td>
                <td>{k.permissions.map((p, i) => (
                  <span key={i} className="badge badgeGreen" style={{ marginRight: 4 }}>{zh ? p : (p === '读取' ? 'Read' : p === '现货交易' ? 'Spot' : p)}</span>
                ))}</td>
                <td style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{k.created}</td>
                <td>
                  <button onClick={() => setKeys(keys.map(x => x.id === k.id ? { ...x, status: !x.status } : x))} style={{
                    padding: '4px 10px', borderRadius: 6, border: 'none', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer',
                    background: k.status ? 'rgba(0,212,126,0.1)' : 'rgba(239,68,68,0.1)',
                    color: k.status ? 'var(--green)' : 'var(--danger)',
                  }}>
                    {k.status ? (zh ? '已启用' : 'Active') : (zh ? '已禁用' : 'Disabled')}
                  </button>
                  <button onClick={() => setKeys(keys.filter(x => x.id !== k.id))} style={{
                    marginLeft: 8, padding: '4px 10px', borderRadius: 6, border: 'none',
                    background: 'rgba(239,68,68,0.1)', color: 'var(--danger)', fontSize: '0.72rem', fontWeight: 600, cursor: 'pointer'
                  }}>
                    {zh ? '删除' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create key form */}
      {showCreate && (
        <div className="glass" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 16 }}>{zh ? '创建新密钥' : 'Create New Key'}</h3>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: 6 }}>{zh ? '名称' : 'Name'}</label>
            <input value={newName} onChange={e => setNewName(e.target.value)} placeholder={zh ? '例如: My Trading Bot' : 'e.g. My Trading Bot'} style={{
              width: '100%', padding: '10px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)',
              color: 'var(--text)', fontSize: '0.85rem', outline: 'none'
            }} />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: '0.78rem', color: 'var(--muted)', display: 'block', marginBottom: 8 }}>{zh ? '权限（点击选择）' : 'Permissions (click to select)'}</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {allPerms.map(p => (
                <div key={p.id} className={`glass optionCard ${perms.has(p.id) ? 'selected' : ''}`}
                  onClick={() => { const n = new Set(perms); if (n.has(p.id) && p.id !== '读取') n.delete(p.id); else n.add(p.id); setPerms(n); }}
                  style={{ padding: '10px 14px', cursor: 'pointer' }}>
                  <span style={{ fontSize: '0.85rem' }}>{zh ? p.zh : p.en}</span>
                </div>
              ))}
            </div>
          </div>
          <button onClick={createKey} style={{
            padding: '10px 24px', borderRadius: 10, border: 'none', background: 'var(--green)',
            color: '#000', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', opacity: newName.trim() ? 1 : 0.4
          }}>
            {zh ? '🔑 生成密钥' : '🔑 Generate Key'}
          </button>
        </div>
      )}
    </div>
  );
}
