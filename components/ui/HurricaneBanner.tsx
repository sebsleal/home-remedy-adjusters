'use client'

import { motion } from 'framer-motion'
import { CloudLightning, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

interface HurricaneBannerProps {
  onDismiss?: () => void
}

export default function HurricaneBanner({ onDismiss }: HurricaneBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  const month = new Date().getMonth() + 1
  const inSeason = month >= 6 && month <= 11

  const message = inSeason
    ? 'Hurricane Season Active — Document Your Damage Before It\'s Too Late'
    : 'Storm Damage? Don\'t Leave Money On The Table — Get A Free Review'

  if (dismissed) return null

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div className="relative bg-gradient-to-r from-danger/90 via-red-700/90 to-danger/90 py-2.5 pl-4 pr-10 flex items-center justify-center gap-3 text-white overflow-hidden">
      <motion.div
        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ repeat: Infinity, duration: 3, repeatDelay: 2 }}
        className="flex-shrink-0"
      >
        <CloudLightning size={15} className="text-yellow-300" />
      </motion.div>
      <p className="font-inter font-400 text-[12px] text-center min-w-0">{message}</p>
      <Link
        href="/free-inspection"
        className="hidden sm:inline-flex flex-shrink-0 bg-white text-danger text-[11px] font-inter font-500 uppercase tracking-label px-3 py-1 rounded-full hover:bg-yellow-50 transition-colors duration-200"
      >
        Free Inspection →
      </Link>
      <button
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors cursor-none"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  )
}
