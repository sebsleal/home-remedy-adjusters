'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, Camera, Calculator, Handshake, DollarSign } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { fadeUp, staggerContainer } from '@/lib/animations'

const steps = [
  {
    number: '01',
    title: 'Policy Review & Revision',
    body: 'We analyze your policy in detail to identify all applicable coverages, exclusions, and limits before filing a single document.',
    Icon: Search,
  },
  {
    number: '02',
    title: 'Damage Documentation',
    body: 'Our adjusters photograph and document every inch of damage — including hidden and latent damage the insurance adjuster will miss.',
    Icon: Camera,
  },
  {
    number: '03',
    title: 'Estimation & Reporting',
    body: 'We prepare a comprehensive scope of loss with accurate, current market pricing for all repairs and replacements.',
    Icon: Calculator,
  },
  {
    number: '04',
    title: 'Insurer Negotiation',
    body: 'We handle all communication with your carrier and push back firmly against lowball offers and bad-faith tactics.',
    Icon: Handshake,
  },
  {
    number: '05',
    title: 'Maximized Settlement',
    body: 'You receive the full settlement your policy entitles you to. We only get paid when you do — at no upfront cost.',
    Icon: DollarSign,
  },
]

export default function Framework() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-teal-900">
      <div className="container-cra">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp} className="mb-12">
            <SectionHeading
              label="Our Process"
              title="Framework For Success"
              subtitle="A proven, 5-step process that has recovered millions for Florida homeowners."
              align="center"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map(({ number, title, body, Icon }, i) => (
              <motion.div
                key={number}
                variants={fadeUp}
                custom={i}
                className="relative group"
              >
                {/* Connector line (not on last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/20 to-transparent z-0" />
                )}

                <div className="glass rounded-2xl p-5 h-full flex flex-col gap-4 group-hover:border-gold/40 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <span className="font-cormorant font-600 text-[28px] text-gold/20 leading-none">
                      {number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-cormorant font-600 text-[16px] tracking-wide text-off-white uppercase leading-snug mb-2">
                      {title}
                    </h3>
                    <p className="font-inter font-300 text-[12px] text-ivory/60 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
