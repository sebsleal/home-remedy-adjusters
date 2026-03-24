'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/sections/FinalCTA'
import { caseResults, CaseResult } from '@/data/results'
import { formatCurrency, percentIncrease } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp } from 'lucide-react'

type FilterType = 'All' | 'Storm' | 'Water' | 'Roof' | 'Fire'
const filters: FilterType[] = ['All', 'Storm', 'Water', 'Roof', 'Fire']

function ResultCard({ result, index, featured }: { result: CaseResult; index: number; featured?: boolean }) {
  const increase = percentIncrease(result.insuranceOffer, result.finalSettlement)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`glass rounded-2xl p-6 flex flex-col gap-4 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="label">{result.type} Damage</span>
        <span className="font-inter font-300 text-[11px] text-ivory/40">{result.location}</span>
      </div>

      {/* Large settlement amount — Reportage-style editorial type */}
      <div>
        <p className="font-inter font-300 text-[11px] text-ivory/40 uppercase tracking-label mb-1">
          We Recovered
        </p>
        <p
          className="font-cormorant font-600 leading-none text-gold"
          style={{ fontSize: featured ? 'clamp(48px, 7vw, 88px)' : 'clamp(32px, 4vw, 52px)' }}
        >
          {formatCurrency(result.finalSettlement)}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-1 border-t border-teal-800">
        <div>
          <p className="font-inter font-300 text-[11px] text-ivory/40 uppercase tracking-label">Insurance Offered</p>
          <p className="font-inter font-400 text-[14px] text-ivory/70 line-through">
            {result.insuranceOffer === 0 ? 'Denied' : formatCurrency(result.insuranceOffer)}
          </p>
        </div>
        <div className="ml-auto flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
          <TrendingUp size={12} className="text-gold" />
          <span className="font-inter font-500 text-[12px] text-gold">
            {result.insuranceOffer === 0 ? 'Denied → Approved' : `+${increase}%`}
          </span>
        </div>
      </div>

      {featured && result.description && (
        <p className="font-inter font-300 text-[13px] text-ivory/50 leading-relaxed">
          {result.description}
        </p>
      )}
    </motion.div>
  )
}

export default function ResultsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')

  const filtered = activeFilter === 'All'
    ? caseResults
    : caseResults.filter((r) => r.type === activeFilter)

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-12 bg-teal-950">
          <div className="container-cra">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="label">Track Record</span>
                <h1 className="font-cormorant font-600 text-[clamp(40px,6vw,80px)] tracking-heading uppercase text-off-white leading-[0.95] mt-3">
                  CASE<br />RESULTS.
                </h1>
                <div className="block w-10 h-px bg-gold mt-5" />
              </div>
              {/* Filter bar */}
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`font-inter font-400 text-[11px] uppercase tracking-label px-4 py-2 rounded-full border transition-all duration-200 cursor-none ${
                      activeFilter === f
                        ? 'bg-gold text-teal-950 border-gold'
                        : 'border-teal-800 text-ivory/60 hover:border-gold/40 hover:text-gold'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Editorial grid */}
        <section className="section-pad bg-teal-950">
          <div className="container-cra">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((result, i) => (
                  <ResultCard
                    key={result.id}
                    result={result}
                    index={i}
                    featured={result.featured && activeFilter === 'All'}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
