'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { blurUp, staggerFast } from '@/lib/animations'
import { cn } from '@/lib/utils'

type SplitTextProps = {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  delay?: number
  once?: boolean
}

export default function SplitText({
  text,
  as: Tag = 'h1',
  className,
  delay = 0,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-80px' })

  const words = text.split(' ')

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement>}
      className={cn('overflow-hidden', className)}
      aria-label={text}
    >
      <motion.span
        className="inline-flex flex-wrap gap-x-[0.25em]"
        variants={staggerFast}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ transitionDelay: `${delay}s` }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-flex overflow-hidden">
            {word.split('').map((char, ci) => (
              <motion.span
                key={ci}
                variants={blurUp}
                className="inline-block"
                custom={(wi * 5 + ci) * 0.02 + delay}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
