'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SplitText from '@/components/ui/SplitText'
import { fadeUp } from '@/lib/animations'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="relative section-pad overflow-hidden">
      {/* Ken Burns background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenBurns"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-950/85 via-teal-950/80 to-teal-950/95" />
      </div>

      {/* Gold accent border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-cra relative z-10 flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="label mb-4">Get Started Today</p>
        </motion.div>

        <SplitText
          text="DON'T LEAVE MONEY ON THE TABLE."
          as="h2"
          className="font-cormorant font-600 text-[clamp(28px,4.5vw,60px)] tracking-heading text-off-white max-w-3xl leading-tight"
          delay={0.1}
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-inter font-300 text-[16px] text-ivory/70 max-w-lg leading-relaxed"
        >
          Insurance companies have experts working for them. Now you do too. Schedule your free inspection today — no obligation, no upfront cost.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/free-inspection"
            data-cursor="magnetic"
            className="inline-flex items-center gap-2 font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-300 animate-pulseGlow group"
          >
            Schedule Free Inspection
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <a
            href="tel:7862237867"
            data-cursor="magnetic"
            className="inline-flex items-center gap-2 font-inter font-400 text-[13px] uppercase tracking-label border border-gold/40 text-gold px-8 py-4 rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            <Phone size={14} />
            (786) 223-7867
          </a>
        </motion.div>

        {/* Miami Lakes address */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="font-inter font-300 text-[12px] text-ivory/30 uppercase tracking-label"
        >
          7900 Oak Ln #400, Miami Lakes, FL 33016 · Mon–Fri 9AM–5PM
        </motion.p>
      </div>
    </section>
  )
}
