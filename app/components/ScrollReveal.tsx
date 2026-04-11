'use client'
import { useEffect, useRef, ReactNode } from 'react'

export default function ScrollReveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.transitionDelay = `${delay}ms`; el.classList.add('visible'); obs.unobserve(el) }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={`reveal ${className}`} style={{ opacity: 0, transform: 'translateY(30px)', transition: `opacity 0.7s ease, transform 0.7s ease` }}>{children}</div>
}
