'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, DollarSign, MapPin } from 'lucide-react'
import Link from 'next/link'
import SplitText from '@/components/ui/SplitText'
import Badge from '@/components/ui/Badge'
import { fadeUp, scaleIn, staggerContainer } from '@/lib/animations'

const trustItems = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: DollarSign, label: 'No Upfront Cost' },
  { icon: MapPin, label: 'Florida Statewide' },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax on background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  // Fade out content as user scrolls
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.6], [0, -40])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Animated teal gradient mesh background */}
      <div
        className="absolute inset-0 animate-gradientShift bg-300%"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(11,40,44,0.9) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(5,25,26,0.8) 0%, transparent 60%),
            linear-gradient(135deg, #05191a 0%, #082326 50%, #0c2d31 100%)
          `,
        }}
      />

      {/* Hero background image with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-950/70 to-teal-900/40" />
      </motion.div>

      {/* Noise texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Gold accent line — left edge */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      {/* Content */}
      <motion.div
        className="container-cra relative z-10 w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="grid lg:grid-cols-[1.45fr_1fr] gap-12 lg:gap-16 items-center py-20 lg:py-28">

          {/* Left column */}
          <motion.div
            className="flex flex-col gap-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <Badge variant="gold" pulse>
                Florida&apos;s Trusted Public Adjusters
              </Badge>
            </motion.div>

            {/* Headline — SplitText char animation */}
            <div>
              <SplitText
                text="YOUR REMEDY FOR"
                as="h1"
                className="font-cormorant font-600 text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-heading text-off-white"
                delay={0.1}
              />
              <SplitText
                text="INSURANCE COMPLEXITY."
                as="h1"
                className="font-cormorant font-600 text-[clamp(36px,4.5vw,64px)] leading-[1.05] tracking-heading text-gold"
                delay={0.25}
              />
            </div>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="font-inter font-300 text-[16px] md:text-[17px] text-ivory leading-[1.6] max-w-lg"
            >
              Your insurance company has a team of experts working against you.
              Now you have one working for you. Licensed public adjusters — no upfront cost, ever.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/free-inspection"
                data-cursor="magnetic"
                className="inline-flex items-center gap-2 font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 animate-pulseGlow group"
              >
                Book Free Claim Review
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:7862237867"
                data-cursor="magnetic"
                className="inline-flex items-center gap-2 font-inter font-400 text-[13px] uppercase tracking-label border border-gold/40 text-gold px-7 py-3.5 rounded-full hover:bg-gold/10 transition-all duration-300"
              >
                Call (786) 223-7867
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={staggerContainer}
              className="flex flex-wrap gap-6 pt-2 border-t border-teal-800"
            >
              {trustItems.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  <Icon size={14} className="text-gold" />
                  <span className="font-inter font-400 text-[12px] uppercase tracking-label text-ivory/70">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — glass card over image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              {/* Property image */}
              <div
                className="absolute inset-0 bg-cover bg-center animate-kenBurns"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />

              {/* Glass overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5">
                <p className="font-inter font-300 text-[11px] uppercase tracking-label text-gold mb-2">
                  Average Recovery Increase
                </p>
                <p className="font-cormorant font-600 text-[42px] text-off-white leading-none">
                  3.2×
                </p>
                <p className="font-inter font-300 text-[12px] text-ivory/60 mt-1">
                  more than the initial insurance offer
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <span className="font-inter font-300 text-[10px] uppercase tracking-label text-ivory/30">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
