'use client';
import { useState, useRef, useEffect } from 'react';

interface Msg { sender: 'user' | 'bot'; text: string; }

const quickBtns = {
  zh: ['市场行情概览', '我的持仓', '我的委托', '最近活动', '帮我查BTC', '今天日报'],
  en: ['Market Overview', 'My Holdings', 'My Orders', 'Recent Activity', 'Check BTC', 'Daily Report'],
};

const botReplies: Record<string, { zh: string; en: string }> = {
  'btc': {
    zh: '📊 BTC/USDT 实时行情\n\n💰 价格: $87,432.50\n📈 24h涨跌: +2.3%\n📈 24h最高: $88,100\n📉 24h最低: $84,920\n📊 24h成交量: 12.5B USDT\n💹 资金流入: +$320M\n\n🔔 关键位: 支撑 $85,000 | 阻力 $89,500',
    en: '📊 BTC/USDT Real-time\n\n💰 Price: $87,432.50\n📈 24h Change: +2.3%\n📈 24h High: $88,100\n📉 24h Low: $84,920\n📊 24h Volume: 12.5B USDT\n💹 Net Inflow: +$320M\n\n🔔 Key levels: Support $85,000 | Resistance $89,500',
  },
  'market': {
    zh: '🌐 市场概览 (更新于 14:30)\n\n📊 主流币\n• BTC $87,432 (+2.3%) | ETH $4,125 (+1.8%)\n• SOL $168.5 (+4.2%) | BNB $612 (+0.9%)\n\n🔥 热门板块\n• L2概念 +5.8% | AI概念 +3.2% | RWA +2.1%\n\n🐋 巨鲸动态\n• 某地址从Binance提取 2,000 BTC ($1.74亿)\n• 稳定币净流入交易所 $3.2亿\n\n📰 要闻: 某L2项目宣布主网上线，代币涨幅15%+',
    en: '🌐 Market Overview (updated 14:30)\n\n📊 Major Coins\n• BTC $87,432 (+2.3%) | ETH $4,125 (+1.8%)\n• SOL $168.5 (+4.2%) | BNB $612 (+0.9%)\n\n🔥 Hot Sectors\n• L2 +5.8% | AI +3.2% | RWA +2.1%\n\n🐋 Whale Activity\n• Address withdrew 2,000 BTC ($174M) from Binance\n• Stablecoin net inflow to exchanges: $320M\n\n📰 News: L2 project mainnet launch, token +15%',
  },
  'holdings': {
    zh: '📁 我的持仓\n\n| 币种 | 数量 | 均价 | 盈亏 |\n• BTC: 1.25 | $82,100 | +$6,665 (+6.5%)\n• ETH: 15.8 | $3,850 | +$4,345 (+7.1%)\n• SOL: 120 | $155.2 | +$1,596 (+8.6%)\n\n💰 总资产: $152,847 USDT\n📈 今日盈亏: +$3,218 (+2.1%)',
    en: '📁 My Holdings\n\n• BTC: 1.25 | Avg $82,100 | +$6,665 (+6.5%)\n• ETH: 15.8 | Avg $3,850 | +$4,345 (+7.1%)\n• SOL: 120 | Avg $155.2 | +$1,596 (+8.6%)\n\n💰 Total: $152,847 USDT\n📈 Today PnL: +$3,218 (+2.1%)',
  },
  'orders': {
    zh: '📋 我的委托\n\n⏳ 挂单中:\n• 限价买入 BTC @ $85,000 × 0.5 BTC\n• 限价卖出 ETH @ $4,500 × 5 ETH\n\n✅ 最近成交:\n• 市价买入 SOL × 20 @ $165.3 (10分钟前)\n• 限价卖出 BNB × 2 @ $615 (2小时前)',
    en: '📋 My Orders\n\n⏳ Open:\n• Limit Buy BTC @ $85,000 × 0.5 BTC\n• Limit Sell ETH @ $4,500 × 5 ETH\n\n✅ Recent Fills:\n• Market Buy SOL × 20 @ $165.3 (10min ago)\n• Limit Sell BNB × 2 @ $615 (2h ago)',
  },
  'report': {
    zh: '📋 加密日报 — 2025年1月15日\n\n📊 市场总览\n总市值: $3.45T (+1.8%) | BTC占比: 52.3%\n恐惧贪婪指数: 68 (贪婪)\n\n🏆 涨幅榜 Top3\n1. RENDER +18.5% | 2. FET +12.3% | 3. SOL +4.2%\n\n📉 跌幅榜 Top3\n1. DOGE -3.2% | 2. SHIB -2.8% | 3. ADA -1.5%\n\n🔮 今日关注\n• 美联储会议纪要公布\n• BTC ETF单日净流入$245M\n• Ethereum Pectra升级测试网进展顺利',
    en: '📋 Crypto Daily — Jan 15, 2025\n\n📊 Market\nTotal Cap: $3.45T (+1.8%) | BTC Dom: 52.3%\nFear & Greed: 68 (Greed)\n\n🏆 Top Gainers\n1. RENDER +18.5% | 2. FET +12.3% | 3. SOL +4.2%\n\n📉 Top Losers\n1. DOGE -3.2% | 2. SHIB -2.8% | 3. ADA -1.5%\n\n🔮 Watch Today\n• Fed meeting minutes release\n• BTC ETF net inflow $245M\n• Ethereum Pectra testnet progress',
  },
  'trade': {
    zh: '✅ 已创建限价买单\n\n📌 交易对: BTC/USDT\n💰 价格: $85,000\n📦 数量: 0.5 BTC\n💵 金额: $42,500 USDT\n⏳ 状态: 等待成交\n📋 订单号: #ORD-2025-8842\n\n⚠️ 风控提示: 此单占总资产 27.8%，请注意仓位管理\n🔔 触发后将立即通知你',
    en: '✅ Limit Buy Order Created\n\n📌 Pair: BTC/USDT\n💰 Price: $85,000\n📦 Amount: 0.5 BTC\n💵 Value: $42,500 USDT\n⏳ Status: Pending\n📋 Order ID: #ORD-2025-8842\n\n⚠️ Risk note: This order is 27.8% of your total assets\n🔔 Will notify you when filled',
  },
  'default': {
    zh: '🤖 我是你的 CoinW AI Agent！\n\n我可以帮你：\n📊 查询实时行情和市场动态\n📋 生成每日/每周市场报告\n💰 自然语言下单交易\n📁 查看持仓和账户状态\n🔔 设置价格预警\n\n试试对我说："帮我查BTC" 或 "今天市场怎么样"',
    en: '🤖 I\'m your CoinW AI Agent!\n\nI can help you:\n📊 Real-time market data & analysis\n📋 Daily/weekly market reports\n💰 Natural language trading\n📁 Portfolio & account status\n🔔 Price alerts\n\nTry: "Check BTC" or "How\'s the market today"',
  },
};

function getReply(input: string, lang: string): string {
  const q = input.toLowerCase();
  const l = lang === 'zh' ? 'zh' : 'en';
  if (q.includes('btc') && !q.includes('市场') && !q.includes('market') && !q.includes('买') && !q.includes('buy'))
    return botReplies.btc[l];
  if (q.includes('市场') || q.includes('market') || q.includes('概览') || q.includes('overview') || q.includes('动态'))
    return botReplies.market[l];
  if (q.includes('持仓') || q.includes('holding') || q.includes('余额') || q.includes('balance'))
    return botReplies.holdings[l];
  if (q.includes('委托') || q.includes('order') || q.includes('挂单'))
    return botReplies.orders[l];
  if (q.includes('日报') || q.includes('report') || q.includes('周报') || q.includes('daily'))
    return botReplies.report[l];
  if (q.includes('买') || q.includes('buy') || q.includes('卖') || q.includes('sell') || q.includes('下单') || q.includes('交易'))
    return botReplies.trade[l];
  return botReplies.default[l];
}

export default function TGBot({ lang }: { lang: string }) {
  const zh = lang === 'zh';
  const [messages, setMessages] = useState<Msg[]>([
    { sender: 'bot', text: zh ? '🤖 嗨！我是你的 CoinW AI Agent 🎉\n\n我已经装备好了行情查询、市场分析、交易执行等Skills，随时为你服务！\n\n试试点击下方快捷按钮，或者直接跟我说话~' : '🤖 Hey! I\'m your CoinW AI Agent 🎉\n\nI\'m equipped with market data, analysis, trading Skills and ready to help!\n\nTry the quick buttons below or just talk to me~' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: getReply(text, lang) }]);
    }, 800 + Math.random() * 700);
  };

  return (
    <div className="chatContainer">
      {/* Header */}
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(17,17,19,0.6)' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(0,212,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>🤖</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>CoinW AI Agent</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--green)' }}>● {zh ? '在线' : 'Online'}</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <span className="badge badgeGreen">4 Skills</span>
        </div>
      </div>

      {/* Messages */}
      <div className="chatMessages">
        {messages.map((m, i) => (
          <div key={i} className={`chatBubbleWrap ${m.sender}`}>
            <div className="chatSender">{m.sender === 'user' ? '👤 You' : '🤖 CoinW Agent'}</div>
            <div className={`chatBubble ${m.sender}`}>{m.text}</div>
          </div>
        ))}
        {typing && (
          <div className="chatBubbleWrap bot">
            <div className="chatSender">🤖 CoinW Agent</div>
            <div className="chatBubble bot">
              <div className="typing"><span /><span /><span /></div>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Quick buttons */}
      <div className="chatQuickBtns">
        {(zh ? quickBtns.zh : quickBtns.en).map((b, i) => (
          <button key={i} className="chatQuickBtn" onClick={() => send(b)}>{b}</button>
        ))}
      </div>

      {/* Input */}
      <div className="chatInputBar">
        <input
          className="chatInput"
          placeholder={zh ? '跟你的Agent说点什么...' : 'Say something to your Agent...'}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send(input)}
        />
        <button className="chatSendBtn" onClick={() => send(input)}>↑</button>
      </div>
    </div>
  );
}
