import { useEffect, useState } from 'react'

const HIDE_AFTER_MS = 980

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function CrtBootOverlay() {
  const [visible, setVisible] = useState(() => !prefersReducedMotion())

  useEffect(() => {
    if (!visible) return
    const id = window.setTimeout(() => setVisible(false), HIDE_AFTER_MS)
    return () => window.clearTimeout(id)
  }, [visible])

  if (!visible) return null

  return (
    <div className="crt-shell" aria-hidden>
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgb(245 246 252 / 0.16) 2px, rgb(245 246 252 / 0.16) 4px)',
        }}
      />
      <div className="pointer-events-none absolute inset-[10%] bg-linear-to-br from-secondary/55 via-transparent to-primary/45 blur-[60px]" />
      <div className="pointer-events-none absolute inset-[12%] rounded-[clamp(48px,8vw,120px)] border border-white/12 bg-linear-to-b from-white/8 to-transparent opacity-95 shadow-[0_0_120px_rgb(79_70_229/0.45)]" />
    </div>
  )
}
