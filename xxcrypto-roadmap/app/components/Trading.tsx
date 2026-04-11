'use client';

const holdings = [
  { coin: 'BTC', icon: '₿', color: '#f7931a', amount: '1.25', value: '$109,290', avg: '$82,100', pnl: '+$6,665', pnlPct: '+6.5%', up: true },
  { coin: 'ETH', icon: 'Ξ', color: '#627eea', amount: '15.80', value: '$65,175', avg: '$3,850', pnl: '+$4,345', pnlPct: '+7.1%', up: true },
  { coin: 'SOL', icon: 'S', color: '#9945ff', amount: '120', value: '$20,220', avg: '$155.2', pnl: '+$1,596', pnlPct: '+8.6%', up: true },
  { coin: 'BNB', icon: 'B', color: '#f3ba2f', amount: '8.5', value: '$5,202', avg: '$625', pnl: '-$102', pnlPct: '-1.9%', up: false },
];

const orders = [
  { pair: 'BTC/USDT', side: 'Buy', sideColor: 'var(--green)', type: '限价', price: '$85,000', amount: '0.5 BTC', status: '⏳' },
  { pair: 'ETH/USDT', side: 'Sell', sideColor: 'var(--danger)', type: '限价', price: '$4,500', amount: '5 ETH', status: '⏳' },
  { pair: 'SOL/USDT', side: 'Buy', sideColor: 'var(--green)', type: '市价', price: '$165.3', amount: '20 SOL', status: '✅' },
];

import { useState } from 'react';

export default function Trading({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [killed, setKilled] = useState(false);
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <h1 className="pageTitle">📈 {zh ? '交易面板' : 'Trading Dashboard'}</h1>
        <p className="pageSub">{zh ? '自然语言下单，AI帮你24小时盯盘' : 'Natural language trading, AI watches 24/7'}</p>
      </div>

      {/* Stats row */}
      <div className="grid4" style={{ marginBottom: '1.5rem' }}>
        {[
          { label: zh ? '总资产' : 'Total Assets', value: '$152,847', change: '+2.1%', up: true },
          { label: zh ? '今日盈亏' : 'Today PnL', value: '+$3,218', change: '+2.1%', up: true },
          { label: zh ? '挂单数' : 'Open Orders', value: '2', change: '', up: true },
          { label: zh ? 'API状态' : 'API Status', value: zh ? '已连接' : 'Connected', change: '****-7f3a', up: true },
        ].map((s, i) => (
          <div key={i} className="glass statCard">
            <div className="statLabel">{s.label}</div>
            <div className="statValue" style={{ color: i === 3 ? 'var(--green)' : '#fff' }}>{s.value}</div>
            {s.change && <div className={`statChange ${s.up ? 'statUp' : 'statDown'}`}>{s.change}</div>}
          </div>
        ))}
      </div>

      {/* Holdings */}
      <div className="glass" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: '0.9rem' }}>
          📁 {zh ? '我的持仓' : 'My Holdings'}
        </div>
        <table className="dataTable">
          <thead>
            <tr>
              <th>{zh ? '币种' : 'Asset'}</th>
              <th>{zh ? '数量' : 'Amount'}</th>
              <th>{zh ? '市值' : 'Value'}</th>
              <th>{zh ? '均价' : 'Avg Price'}</th>
              <th>PnL</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((h, i) => (
              <tr key={i}>
                <td>
                  <div className="coinCell">
                    <div className="coinIcon" style={{ background: h.color + '22', color: h.color }}>{h.icon}</div>
                    {h.coin}
                  </div>
                </td>
                <td>{h.amount}</td>
                <td>{h.value}</td>
                <td style={{ color: 'var(--muted)' }}>{h.avg}</td>
                <td style={{ color: h.up ? 'var(--green)' : 'var(--danger)', fontWeight: 600 }}>
                  {h.pnl} <span style={{ fontSize: '0.72rem' }}>({h.pnlPct})</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Orders */}
      <div className="glass" style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: '0.9rem' }}>
          📋 {zh ? '我的委托' : 'My Orders'}
        </div>
        <table className="dataTable">
          <thead>
            <tr>
              <th>{zh ? '交易对' : 'Pair'}</th>
              <th>{zh ? '方向' : 'Side'}</th>
              <th>{zh ? '类型' : 'Type'}</th>
              <th>{zh ? '价格' : 'Price'}</th>
              <th>{zh ? '数量' : 'Amount'}</th>
              <th>{zh ? '状态' : 'Status'}</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{o.pair}</td>
                <td style={{ color: o.sideColor, fontWeight: 600 }}>{o.side}</td>
                <td>{zh ? o.type : (o.type === '限价' ? 'Limit' : 'Market')}</td>
                <td>{o.price}</td>
                <td>{o.amount}</td>
                <td>{o.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Risk control */}
      <div className="glass" style={{ padding: '1.2rem' }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: 14 }}>🛡️ {zh ? '风控设置' : 'Risk Control'}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            { label: zh ? '最大回撤限制' : 'Max Drawdown', value: '-10%', pct: 40, color: 'var(--gold)' },
            { label: zh ? '单笔限额' : 'Per-Trade Limit', value: '5,000 USDT', pct: 25, color: 'var(--blue)' },
            { label: zh ? '日亏损上限' : 'Daily Loss Cap', value: '-2%', pct: 20, color: 'var(--danger)' },
          ].map((r, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: 4 }}>
                <span>{r.label}</span><span style={{ fontWeight: 700 }}>{r.value}</span>
              </div>
              <div className="progressBar">
                <div className="progressFill" style={{ width: `${r.pct}%`, background: r.color }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <button onClick={() => setKilled(!killed)} style={{
            padding: '8px 24px', borderRadius: 8, border: '1px solid',
            borderColor: killed ? 'rgba(82,39,255,0.3)' : 'rgba(239,68,68,0.3)',
            background: killed ? 'rgba(82,39,255,0.1)' : 'rgba(239,68,68,0.1)',
            color: killed ? 'var(--green)' : 'var(--danger)', fontWeight: 700,
            fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.3s'
          }}>
            {killed ? (zh ? '✓ 已停止 — 点击恢复' : '✓ Stopped — Click to Resume') : (zh ? '🛑 紧急熔断 — 停止所有Agent' : '🛑 KILL SWITCH — Stop All Agents')}
          </button>
        </div>
      </div>
    </div>
  );
}
