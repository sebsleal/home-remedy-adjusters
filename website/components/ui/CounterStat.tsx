'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type CounterStatProps = {
  target: number
  prefix?: string
  suffix?: string
  label: string
  decimals?: number
}

export default function CounterStat({
  target,
  prefix = '',
  suffix = '',
  label,
  decimals = 0,
}: CounterStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 2200, bounce: 0 })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (isInView) motionValue.set(target)
  }, [isInView, motionValue, target])

  useEffect(() => {
    const unsubscribe = spring.on('change', (v) => {
      setDisplay(
        decimals > 0
          ? v.toFixed(decimals)
          : Math.round(v).toString()
      )
    })
    return unsubscribe
  }, [spring, decimals])

  return (
    <div ref={ref} className="flex flex-col gap-1.5 text-center">
      <span className="font-cormorant font-600 text-[clamp(36px,4vw,56px)] leading-none text-off-white">
        {prefix}{display}{suffix}
      </span>
      <span className="font-inter font-400 text-[11px] uppercase tracking-label text-ivory/50">
        {label}
      </span>
    </div>
  )
}
