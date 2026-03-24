'use client'

import { useEffect, useRef } from 'react'
import { createLenis } from '@/lib/lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<ReturnType<typeof createLenis> | null>(null)

  useEffect(() => {
    // Disable on touch/reduced-motion devices
    const isTouch = window.matchMedia('(hover: none)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReduced) return

    const lenis = createLenis()
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
