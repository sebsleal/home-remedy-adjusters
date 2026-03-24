'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Dot: snappy follow
  const dotX = useSpring(mouseX, { stiffness: 800, damping: 60 })
  const dotY = useSpring(mouseY, { stiffness: 800, damping: 60 })

  // Ring: tight follow — high stiffness prevents motion sickness
  const ringX = useSpring(mouseX, { stiffness: 600, damping: 50 })
  const ringY = useSpring(mouseY, { stiffness: 600, damping: 50 })

  useEffect(() => {
    // Only activate on pointer: fine devices (non-touch)
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) return

    setVisible(true)

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const enter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.closest('[data-cursor="magnetic"]') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setHovering(true)
      }
    }

    const leave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        !target.closest('[data-cursor="magnetic"]') &&
        !target.closest('a') &&
        !target.closest('button')
      ) {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    window.addEventListener('mouseover', enter)
    window.addEventListener('mouseout', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('mouseover', enter)
      window.removeEventListener('mouseout', leave)
    }
  }, [mouseX, mouseY])

  if (!visible) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        initial={{ width: 36, height: 36, opacity: 1, borderColor: 'rgba(216,183,121,0.5)' }}
        animate={{
          width: hovering ? 52 : clicking ? 28 : 36,
          height: hovering ? 52 : clicking ? 28 : 36,
          opacity: 1,
          borderColor: hovering ? 'rgba(216,183,121,0.9)' : 'rgba(216,183,121,0.5)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        {/* Fill: use opacity to avoid animating 'transparent' */}
        <motion.span
          className="absolute inset-0 rounded-full bg-gold/[0.08]"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
        }}
        animate={{ opacity: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </>
  )
}
