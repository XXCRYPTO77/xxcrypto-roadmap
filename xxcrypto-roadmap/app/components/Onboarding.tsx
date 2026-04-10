'use client';
import { useState } from 'react';

const steps = [
  {
    titleZh: '选择你的Agent性格', titleEn: 'Choose Agent Personality',
    options: [
      { emoji: '🎯', labelZh: '专业严谨', labelEn: 'Professional', descZh: '数据驱动，简洁直接，像专业分析师', descEn: 'Data-driven, concise, like a pro analyst' },
      { emoji: '😊', labelZh: '轻松友好', labelEn: 'Friendly', descZh: '温和耐心，详细解释，像朋友一样交流', descEn: 'Patient, detailed, talks like a friend' },
      { emoji: '😏', labelZh: '犀利幽默', labelEn: 'Witty', descZh: '一针见血，偶尔开玩笑，让交易更有趣', descEn: 'Sharp, occasional humor, makes trading fun' },
    ],
  },
  {
    titleZh: '你关注哪些币种？', titleEn: 'Which coins do you follow?',
    options: [
      { emoji: '₿', labelZh: 'BTC + ETH 主流', labelEn: 'BTC + ETH Majors', descZh: '稳扎稳打，聚焦主流资产', descEn: 'Focus on major assets' },
      { emoji: '🚀', labelZh: 'SOL / BNB / 热门L1', labelEn: 'SOL / BNB / Hot L1s', descZh: '关注高增长公链生态', descEn: 'High-growth L1 ecosystem' },
      { emoji: '💎', labelZh: '全部 — 什么都想知道', labelEn: 'Everything — I want it all', descZh: '不放过任何机会', descEn: 'Don\'t miss any opportunity' },
    ],
  },
  {
    titleZh: '你的风险偏好？', titleEn: 'Your risk preference?',
    options: [
      { emoji: '🛡️', labelZh: '保守', labelEn: 'Conservative', descZh: '稳定收益优先，严格止损', descEn: 'Steady returns, strict stop-loss' },
      { emoji: '⚖️', labelZh: '均衡', labelEn: 'Balanced', descZh: '风险与收益平衡', descEn: 'Balance risk and reward' },
      { emoji: '🔥', labelZh: '激进', labelEn: 'Aggressive', descZh: '追求高回报，接受高波动', descEn: 'High returns, accept high volatility' },
    ],
  },
];

export default function Onboarding({ lang, onDone }: { lang: string; onDone: () => void }) {
  const zh = lang === 'zh';
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState<(number | null)[]>([null, null, null]);
  const [done, setDone] = useState(false);

  const current = steps[step];
  const selected = selections[step];

  const next = () => {
    if (step < 2) setStep(step + 1);
    else {
      setDone(true);
      setTimeout(onDone, 2000);
    }
  };

  if (done) {
    return (
      <div className="onboardContainer" style={{ paddingTop: '5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎉</div>
        <h2 className="onboardTitle">{zh ? '你的Agent已准备就绪！' : 'Your Agent is Ready!'}</h2>
        <p className="onboardSub">{zh ? '正在跳转到聊天界面...' : 'Redirecting to chat...'}</p>
        <div className="typing" style={{ justifyContent: 'center', marginTop: 20 }}>
          <span /><span /><span />
        </div>
      </div>
    );
  }

  return (
    <div className="onboardContainer">
      {/* Step dots */}
      <div className="stepDots">
        {[0, 1, 2].map(i => (
          <div key={i} className={`stepDot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
        ))}
      </div>

      <div className="onboardStep">Step {step + 1} / 3</div>
      <h2 className="onboardTitle">{zh ? current.titleZh : current.titleEn}</h2>
      <p className="onboardSub">{zh ? '点击选择，30秒完成配置' : 'Click to select, done in 30 seconds'}</p>

      <div className="optionGrid">
        {current.options.map((opt, i) => (
          <div
            key={i}
            className={`glass optionCard ${selected === i ? 'selected' : ''}`}
            onClick={() => { const n = [...selections]; n[step] = i; setSelections(n); }}
          >
            <span className="optionEmoji">{opt.emoji}</span>
            <div>
              <div className="optionLabel">{zh ? opt.labelZh : opt.labelEn}</div>
              <div className="optionDesc">{zh ? opt.descZh : opt.descEn}</div>
            </div>
          </div>
        ))}
      </div>

      <button className="onboardBtn" disabled={selected === null} onClick={next}>
        {step < 2 ? (zh ? '下一步 →' : 'Next →') : (zh ? '🚀 生成我的Agent' : '🚀 Create My Agent')}
      </button>
    </div>
  );
}
