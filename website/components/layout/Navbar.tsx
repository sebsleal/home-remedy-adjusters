'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Results', href: '/results' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.92])
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ backgroundColor: `rgba(5,25,26,${bgOpacity})` }}
      >
        {/* Gold border that fades in on scroll */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gold/40"
          style={{ opacity: borderOpacity }}
        />

        <div className="container-cra flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" data-cursor="magnetic">
            <span className="font-cormorant font-600 text-[22px] tracking-heading text-off-white group-hover:text-gold transition-colors duration-300 uppercase">
              CRA
            </span>
            <span className="hidden md:block w-px h-4 bg-gold/30" />
            <span className="hidden md:block font-inter font-300 text-[10px] uppercase tracking-label text-ivory/60 group-hover:text-gold/60 transition-colors duration-300">
              Claim Remedy Adjusters
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="magnetic"
                className={cn(
                  'font-inter font-400 text-[12px] uppercase tracking-label transition-colors duration-200 relative group',
                  pathname === link.href ? 'text-gold' : 'text-ivory hover:text-off-white'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="tel:7862237867"
              data-cursor="magnetic"
              className="hidden md:flex items-center gap-2 font-inter font-500 text-[12px] text-gold hover:text-gold-light transition-colors duration-200 uppercase tracking-label"
            >
              <Phone size={13} />
              (786) 223-7867
            </a>
            <Link
              href="/free-inspection"
              data-cursor="magnetic"
              className="hidden md:inline-flex items-center font-inter font-500 text-[12px] uppercase tracking-label bg-gold text-teal-950 px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-200 animate-pulseGlow"
            >
              Free Inspection
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-off-white p-1 cursor-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-16 left-0 right-0 z-40 glass border-b border-gold/20"
          >
            <nav className="container-cra py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'font-inter font-400 text-[14px] uppercase tracking-label transition-colors duration-200',
                    pathname === link.href ? 'text-gold' : 'text-ivory'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:7862237867"
                className="flex items-center gap-2 text-gold font-inter text-[13px] tracking-label uppercase mt-2"
              >
                <Phone size={14} />
                (786) 223-7867
              </a>
              <Link
                href="/free-inspection"
                className="inline-flex justify-center font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-6 py-3 rounded-full"
              >
                Free Inspection →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
