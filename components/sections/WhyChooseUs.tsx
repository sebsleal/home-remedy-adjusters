'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { slideLeft, slideRight, staggerContainer, fadeUp } from '@/lib/animations'

const reasons = [
  'We work for YOU — not the insurance company',
  'Licensed across all of Florida',
  'Zero out-of-pocket cost, ever',
  'Rapid response — we come to you within 24 hours',
  'Years of negotiation experience with all major carriers',
  'We handle denied and underpaid claims too',
  'Transparent communication at every stage',
]

export default function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-teal-950">
      <div className="container-cra">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left — image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/adjuster-inspecting.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 max-w-[200px]"
            >
              <p className="font-cormorant font-600 text-[36px] text-gold leading-none">10+</p>
              <p className="font-inter font-300 text-[12px] text-ivory/60 mt-1 leading-snug">
                Years of claim negotiation experience in Florida
              </p>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-8"
          >
            <SectionHeading
              label="Why Choose Us"
              title="Your Insurance Has A Team. Now You Do Too."
              subtitle="The insurance company sends their own adjuster to protect their bottom line. We send ours to protect yours."
            />

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="flex flex-col gap-3"
            >
              {reasons.map((reason, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <Check size={11} className="text-gold" />
                  </span>
                  <span className="font-inter font-300 text-[14px] text-ivory leading-snug">
                    {reason}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <Button href="/free-inspection" variant="primary" size="md" className="self-start">
              Get My Free Inspection
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
