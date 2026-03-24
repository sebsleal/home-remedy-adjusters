'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, DollarSign, Clock } from 'lucide-react'
import { staggerContainer, scaleIn } from '@/lib/animations'

const pillars = [
  {
    Icon: Award,
    title: 'Licensed Public Adjusters',
    body: 'Fully licensed by the Florida Department of Financial Services. We carry E&O insurance and hold active public adjuster licenses.',
  },
  {
    Icon: DollarSign,
    title: 'No Upfront Cost',
    body: 'We work on a contingency basis. Our fee is a percentage of your final settlement — if you don\'t get paid, neither do we.',
  },
  {
    Icon: Clock,
    title: '10+ Years Experience',
    body: 'Over a decade of claim negotiation experience across Florida, with a proven record of maximizing settlements for homeowners.',
  },
]

export default function TrustBar() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-charcoal border-y border-teal-800">
      <div className="container-cra">
        <p className="label text-center mb-10">Trusted Florida Leaders</p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map(({ Icon, title, body }) => (
            <motion.div
              key={title}
              variants={scaleIn}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-cormorant font-600 text-[18px] tracking-heading uppercase text-off-white">
                {title}
              </h3>
              <p className="font-inter font-300 text-[13px] text-ivory/60 leading-relaxed max-w-[260px]">
                {body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
