'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  external?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 font-inter font-medium tracking-wide rounded-full transition-all duration-300 cursor-none select-none'

const variants = {
  primary:
    'bg-gold text-teal-950 hover:bg-gold-light animate-pulseGlow focus-visible:ring-2 focus-visible:ring-gold/60',
  secondary:
    'border border-gold/60 text-gold hover:bg-gold/10 focus-visible:ring-2 focus-visible:ring-gold/40',
  ghost:
    'text-ivory hover:text-off-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-white/20',
}

const sizes = {
  sm: 'text-[12px] px-5 py-2',
  md: 'text-[13px] px-7 py-3',
  lg: 'text-[14px] px-9 py-4',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className,
  children,
  type = 'button',
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={classes}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          data-cursor="magnetic"
        >
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(classes, disabled && 'opacity-50 pointer-events-none')}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      data-cursor="magnetic"
    >
      {children}
    </motion.button>
  )
}
