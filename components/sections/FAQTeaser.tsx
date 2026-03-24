'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import { fadeUp } from '@/lib/animations'
import { faqs } from '@/data/faqs'

const teaserFAQs = faqs.slice(0, 4).map(({ id, question, answer }) => ({ id, question, answer }))

export default function FAQTeaser() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-teal-950">
      <div className="container-cra">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            <SectionHeading
              label="FAQ"
              title="Common Questions Answered"
              subtitle="Everything you need to know about working with a public adjuster."
            />
            <Link
              href="/faq"
              data-cursor="magnetic"
              className="flex items-center gap-2 font-inter font-400 text-[12px] uppercase tracking-label text-gold hover:text-gold-light transition-colors duration-200 group self-start"
            >
              See all questions
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Accordion items={teaserFAQs} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
