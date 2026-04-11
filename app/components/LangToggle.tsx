'use client'
import { useLang } from './LangContext'
import s from './LangToggle.module.css'

export default function LangToggle() {
  const { lang, toggle } = useLang()
  return <button className={s.toggle} onClick={toggle}>{lang === 'zh' ? '🌐 English' : '🌐 中文'}</button>
}
