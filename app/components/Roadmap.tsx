'use client'
import { useState, useEffect } from 'react'
import { useLang } from './LangContext'
import ScrollReveal from './ScrollReveal'
import s from './Roadmap.module.css'

const versions = [
  { id: 'v1.0', label: 'v1.0' },
  { id: 'v1.1', label: 'v1.1' },
  { id: 'v1.2', label: 'v1.2-1.4' },
  { id: 'v1.5', label: 'v1.5' },
  { id: 'v1.6', label: 'v1.6-1.9' },
  { id: 'v2.0', label: 'v2.0' },
]

function ChatMsg({ user, bot }: { user: string; bot: string }) {
  return (
    <div className={s.chatMock}>
      <div className={`${s.chatMsg} ${s.chatMsgUser}`}>
        <div className={`${s.chatAvatar} ${s.chatAvatarUser}`}>👤</div>
        <div className={`${s.chatBubble} ${s.chatBubbleUser}`}>{user}</div>
      </div>
      <div className={`${s.chatMsg} ${s.chatMsgBot}`}>
        <div className={`${s.chatAvatar} ${s.chatAvatarBot}`}>🤖</div>
        <div className={`${s.chatBubble} ${s.chatBubbleBot}`}>{bot}</div>
      </div>
    </div>
  )
}

export default function Roadmap() {
  const { lang } = useLang()
  const zh = lang === 'zh'
  const [active, setActive] = useState('v1.0')

  useEffect(() => {
    const els = versions.map(v => document.getElementById(v.id))
    const obs = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { setActive(e.target.id); break }
      }
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' })
    els.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={s.section} id="roadmap">
      <ScrollReveal>
        <h2 className={s.title}>{zh ? '产品路线图' : 'Product Roadmap'}</h2>
        <p className={s.sub}>{zh ? '从信息聚合到全Agent生态' : 'From data aggregation to full Agent ecosystem'}</p>
      </ScrollReveal>

      <div className={s.timelineNav}>
        {versions.map(v => (
          <button key={v.id} className={`${s.navBtn} ${active === v.id ? s.navBtnActive : ''}`} onClick={() => scrollTo(v.id)}>
            {v.label}
          </button>
        ))}
      </div>

      {/* v1.0 */}
      <div className={s.phase} id="v1.0">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V1.0</span>
            <span className={s.phaseTitle}>{zh ? 'Landing + 基础Skills' : 'Landing + Basic Skills'}</span>
            <span className={s.phaseTag}>{zh ? '当前阶段' : 'Current Phase'}</span>
          </div>
          <p className={s.phaseDesc}>{zh ? '基础信息Skills包装，一句话钩子触发。用户通过Landing Page了解并使用基础市场数据Skills。' : 'Basic info Skills packaging with one-line hook triggers. Users discover and use basic market data Skills via Landing Page.'}</p>
          <div className={s.mockups}>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? 'Skills 卡片' : 'Skills Cards'}</div>
              <div className={s.skillsGrid}>
                {[{ i: '📈', n: zh ? '市场数据' : 'Market Data' }, { i: '📰', n: zh ? '新闻聚合' : 'News Feed' }, { i: '📋', n: zh ? '每日报告' : 'Daily Report' }, { i: '🔔', n: zh ? '价格提醒' : 'Price Alert' }].map((sk, j) => (
                  <div key={j} className={s.skillCard}><div className={s.skillIcon}>{sk.i}</div><div className={s.skillName}>{sk.n}</div></div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* v1.1 */}
      <div className={s.phase} id="v1.1">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V1.1</span>
            <span className={s.phaseTitle}>{zh ? 'Telegram Bot + 在线Agent' : 'Telegram Bot + Online Agent'}</span>
          </div>
          <p className={s.phaseDesc}>{zh ? '通过Telegram Bot提供7×24在线AI Agent服务，支持领养个性化Bot。' : 'Provide 24/7 AI Agent service via Telegram Bot with personalized bot adoption.'}</p>
          <div className={s.mockups}>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? 'TG Bot 对话' : 'TG Bot Chat'}</div>
              <ChatMsg user={zh ? '帮我看看今天加密市场整体情况' : 'How\'s the crypto market today?'} bot={zh ? 'BTC $87,200 (+2.3%), ETH $4,100 (+1.8%). 热点: L2项目主网上线，AI板块持续走强 📈' : 'BTC $87,200 (+2.3%), ETH $4,100 (+1.8%). Hot: L2 mainnet launches, AI sector surging 📈'} />
              <div className={s.quickActions}>
                {(zh ? ['市场行情', '我的持仓', '我的委托', '最近活动'] : ['Market', 'Holdings', 'Orders', 'Activity']).map((b, i) => (
                  <span key={i} className={s.quickBtn}>{b}</span>
                ))}
              </div>
            </div>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? '领养你的Bot' : 'Adopt Your Bot'}</div>
              <div className={s.steps}>
                {[{ n: '1', l: zh ? '选择性格' : 'Personality' }, { n: '2', l: zh ? '关注币种' : 'Focus Coins' }, { n: '3', l: zh ? '风险偏好' : 'Risk Level' }].map((st, i) => (
                  <div key={i} className={s.step}><div className={s.stepNum}>{st.n}</div><div className={s.stepLabel}>{st.l}</div></div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* v1.2-1.4 */}
      <div className={s.phase} id="v1.2">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V1.2-1.4</span>
            <span className={s.phaseTitle}>{zh ? '交易Skills + API集成' : 'Trading Skills + API Integration'}</span>
          </div>
          <p className={s.phaseDesc}>{zh ? '自然语言交易、持仓管理、API Key绑定，让Agent真正帮你交易。' : 'Natural language trading, portfolio management, API key binding — let Agent trade for you.'}</p>
          <div className={s.mockups}>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? '自然语言下单' : 'Natural Language Trading'}</div>
              <ChatMsg user={zh ? 'BTC跌到85000就帮我买入0.5 BTC' : 'Buy 0.5 BTC when it drops to $85,000'} bot={zh ? '已挂限价买单: 0.5 BTC @ $85,000\n订单号 #A7X92K ✅' : 'Limit buy placed: 0.5 BTC @ $85,000\nOrder #A7X92K ✅'} />
            </div>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? '持仓概览' : 'Portfolio Overview'}</div>
              <div className={s.portfolio}>
                {[
                  { coin: 'BTC', val: '2.35', pnl: '+12.4%', green: true },
                  { coin: 'ETH', val: '18.5', pnl: '+8.2%', green: true },
                  { coin: 'SOL', val: '150', pnl: '-3.1%', green: false },
                ].map((p, i) => (
                  <div key={i} className={s.portfolioRow}>
                    <div className={s.portfolioAsset}><span className={s.portfolioCoin}>{p.coin}</span><span className={s.portfolioVal}>{p.val}</span></div>
                    <span className={`${s.portfolioPnl} ${p.green ? s.pnlGreen : s.pnlRed}`}>{p.pnl}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? 'API Key 管理' : 'API Key Management'}</div>
              <div className={s.secList}>
                <div className={s.secItem}><span className={s.secCheck}>🔑</span> CoinW Main API — ****7x9K <span style={{color:'var(--accent)',marginLeft:'auto',fontSize:'.75rem'}}>Active</span></div>
                <div className={s.secItem}><span className={s.secCheck}>🔒</span> {zh ? '权限: 只读 + 交易 (无提现)' : 'Permissions: Read + Trade (No Withdraw)'}</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* v1.5 */}
      <div className={s.phase} id="v1.5">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V1.5</span>
            <span className={s.phaseTitle}>{zh ? 'Agent Zone + Skill商店' : 'Agent Zone + Skill Marketplace'}</span>
          </div>
          <p className={s.phaseDesc}>{zh ? 'Agent对战竞技、Skill开放市场、社区创作者分成。' : 'Agent PK arena, open Skill marketplace, creator revenue sharing.'}</p>
          <div className={s.mockups}>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? 'Agent PK 竞技场' : 'Agent PK Arena'}</div>
              <div className={s.pkArena}>
                <div className={s.pkCard}>
                  <div className={s.pkName}>🐂 BullBot Pro</div>
                  <div className={s.pkWinRate}>67.3%</div>
                  <div className={s.pkStat}>{zh ? '趋势跟踪 | 月化 12.4%' : 'Trend Following | 12.4% Monthly'}</div>
                </div>
                <div className={s.pkVs}>VS</div>
                <div className={s.pkCard}>
                  <div className={s.pkName}>🦊 GridFox</div>
                  <div className={s.pkWinRate}>72.1%</div>
                  <div className={s.pkStat}>{zh ? '网格策略 | 月化 8.7%' : 'Grid Strategy | 8.7% Monthly'}</div>
                </div>
              </div>
            </div>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? 'Skill 商店' : 'Skill Marketplace'}</div>
              <div className={s.marketGrid}>
                {[
                  { n: zh ? '智能止盈' : 'Smart TP', r: '⭐ 4.8', m: '2.3k installs' },
                  { n: zh ? 'DCA定投' : 'DCA Bot', r: '⭐ 4.6', m: '1.8k installs' },
                  { n: zh ? '新闻情绪' : 'News Sentiment', r: '⭐ 4.5', m: '950 installs' },
                  { n: zh ? '链上监控' : 'On-Chain Watch', r: '⭐ 4.7', m: '1.2k installs' },
                ].map((mk, i) => (
                  <div key={i} className={s.marketCard}>
                    <div className={s.marketName}>{mk.n}</div>
                    <div className={s.marketMeta}><span className={s.marketRating}>{mk.r}</span><span>{mk.m}</span></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* v1.6-1.9 */}
      <div className={s.phase} id="v1.6">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V1.6-1.9</span>
            <span className={s.phaseTitle}>{zh ? '安全与基础设施' : 'Security & Infrastructure'}</span>
          </div>
          <p className={s.phaseDesc}>{zh ? '全面安全审计、风控仪表盘、合规认证，确保用户资金安全。' : 'Comprehensive security audit, risk management dashboard, compliance certification.'}</p>
          <div className={s.mockups}>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? '安全清单' : 'Security Checklist'}</div>
              <div className={s.secList}>
                {(zh
                  ? ['端到端加密通信', 'API Key 加密存储', '多重签名授权', '智能合约审计', '24/7 异常监控']
                  : ['End-to-end encrypted', 'API Key encrypted storage', 'Multi-sig authorization', 'Smart contract audit', '24/7 anomaly monitoring']
                ).map((item, i) => (
                  <div key={i} className={s.secItem}><span className={s.secCheck}>✅</span>{item}</div>
                ))}
              </div>
            </div>
            <div className={s.mockup}>
              <div className={s.mockupLabel}>{zh ? '风控仪表盘' : 'Risk Dashboard'}</div>
              <div className={s.riskGrid}>
                <div className={s.riskCard}><div className={s.riskLabel}>{zh ? '最大回撤' : 'Max Drawdown'}</div><div className={`${s.riskValue} ${s.riskGreen}`}>-5.2%</div></div>
                <div className={s.riskCard}><div className={s.riskLabel}>{zh ? '仓位上限' : 'Position Limit'}</div><div className={`${s.riskValue} ${s.riskYellow}`}>80%</div></div>
                <div className={s.riskCard}><div className={s.riskLabel}>{zh ? '紧急熔断' : 'Kill Switch'}</div><div className={`${s.riskValue} ${s.riskGreen}`}>Ready</div></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* v2.0 */}
      <div className={s.phase} id="v2.0">
        <ScrollReveal>
          <div className={s.phaseHeader}>
            <span className={s.phaseVersion}>V2.0</span>
            <span className={s.phaseTitle}>{zh ? 'Agent 市场' : 'Agent Marketplace'}</span>
          </div>
          <div className={s.grandLaunch}>
            <div className={s.grandTitle}>🎉 GRAND LAUNCH</div>
            <p style={{ color: 'var(--text-sec)', fontSize: '.95rem' }}>{zh ? '全开放Agent市场，任何人可发布、复制、组合策略' : 'Fully open Agent marketplace — publish, copy, compose strategies'}</p>
            <div className={s.grandStats}>
              <div className={s.grandStat}><div className={s.grandStatNum}>10,000+</div><div className={s.grandStatLabel}>Agents</div></div>
              <div className={s.grandStat}><div className={s.grandStatNum}>50,000+</div><div className={s.grandStatLabel}>Users</div></div>
              <div className={s.grandStat}><div className={s.grandStatNum}>$100M+</div><div className={s.grandStatLabel}>Volume</div></div>
            </div>
          </div>
          <div className={s.agentGrid}>
            {[
              { n: '🐂 BullBot Pro', d: zh ? '趋势跟踪，高胜率' : 'Trend following, high win rate', stars: '⭐⭐⭐⭐⭐' },
              { n: '🦊 GridFox', d: zh ? '网格策略，稳定收益' : 'Grid strategy, steady returns', stars: '⭐⭐⭐⭐⭐' },
              { n: '🐋 WhaleWatch', d: zh ? '大户跟单，链上分析' : 'Whale tracking, on-chain analysis', stars: '⭐⭐⭐⭐' },
              { n: '🎯 SnipeAlpha', d: zh ? '新币狙击，高风险高回报' : 'New token sniper, high risk/reward', stars: '⭐⭐⭐⭐' },
            ].map((a, i) => (
              <div key={i} className={s.agentCard}>
                <div className={s.agentName}>{a.n}</div>
                <div className={s.agentDesc}>{a.d}</div>
                <div className={s.agentBottom}>
                  <span className={s.agentStars}>{a.stars}</span>
                  <button className={s.agentCopy}>{zh ? '复制策略' : 'Copy'}</button>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
