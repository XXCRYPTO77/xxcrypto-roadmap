import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CoinW AI Agent — Make AI Trading for Every Trader',
  description: 'Interactive product roadmap for CoinW AI Agent platform. 普惠AI交易，人人皆可轻松入局。',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
