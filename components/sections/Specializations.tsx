'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { CloudLightning, Droplets, Home, Flame, ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { staggerContainer, scaleIn } from '@/lib/animations'

const specializations = [
  {
    slug: 'storm',
    label: 'Hurricane',
    Icon: CloudLightning,
    image: '/images/services/storm.jpg',
    tagline: 'Wind, hail, and flood damage from tropical storms.',
  },
  {
    slug: 'water',
    label: 'Water',
    Icon: Droplets,
    image: '/images/services/water.jpg',
    tagline: 'Burst pipes, leaks, and flooding claims.',
  },
  {
    slug: 'roof',
    label: 'Roof',
    Icon: Home,
    image: '/images/services/roof.jpg',
    tagline: 'Full roof replacement negotiated.',
  },
  {
    slug: 'fire',
    label: 'Fire',
    Icon: Flame,
    image: '/images/services/fire.jpg',
    tagline: 'Fire, smoke, and suppression damage.',
  },
]

export default function Specializations() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-pad bg-teal-950">
      <div className="container-cra">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            label="What We Handle"
            title="Our Specializations"
            subtitle="From hurricane season to everyday water damage, we handle the full spectrum of Florida property claims."
          />
          <Link
            href="/services"
            className="flex-shrink-0 flex items-center gap-2 font-inter font-400 text-[12px] uppercase tracking-label text-gold hover:text-gold-light transition-colors duration-200 group"
            data-cursor="magnetic"
          >
            View all services
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {specializations.map(({ slug, label, Icon, image, tagline }) => (
            <motion.div key={slug} variants={scaleIn}>
              <Link
                href={`/services/${slug}`}
                data-cursor="magnetic"
                className="group relative block rounded-2xl overflow-hidden aspect-[3/4] cursor-none"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/30 to-transparent group-hover:from-teal-950/80 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between">
                  <div className="w-9 h-9 rounded-full glass flex items-center justify-center">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-cormorant font-600 text-[22px] tracking-heading uppercase text-off-white">
                      {label}
                    </p>
                    <p className="font-inter font-300 text-[12px] text-ivory/60 mt-1 leading-snug">
                      {tagline}
                    </p>
                    <div className="flex items-center gap-1.5 mt-3 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-inter font-400 text-[11px] uppercase tracking-label">Learn more</span>
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
