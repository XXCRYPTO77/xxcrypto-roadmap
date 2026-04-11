'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Lang = 'zh' | 'en'
const Ctx = createContext<{ lang: Lang; toggle: () => void }>({ lang: 'zh', toggle: () => {} })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('zh')
  return <Ctx.Provider value={{ lang, toggle: () => setLang(l => l === 'zh' ? 'en' : 'zh') }}>{children}</Ctx.Provider>
}

export function useLang() { return useContext(Ctx) }
export function T({ zh, en }: { zh: string; en: string }) {
  const { lang } = useLang()
  return <>{lang === 'zh' ? zh : en}</>
}
