'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import TestimonialMarquee from '@/components/ui/TestimonialMarquee'
import { fadeUp } from '@/lib/animations'

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-teal-900 overflow-hidden">
      <div className="container-cra mb-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <SectionHeading
            label="Client Stories"
            title="Hear From Homeowners Like You"
            subtitle="Real results. Real clients. Real recoveries."
            align="center"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <TestimonialMarquee />
      </motion.div>
    </section>
  )
}
