'use client'

import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/sections/FinalCTA'
import Accordion from '@/components/ui/Accordion'
import { buildMetadata } from '@/lib/metadata'
import { faqs, faqCategories } from '@/data/faqs'
import { Search } from 'lucide-react'

export default function FAQPage() {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? faqs.filter(
        (f) =>
          f.question.toLowerCase().includes(query.toLowerCase()) ||
          f.answer.toLowerCase().includes(query.toLowerCase())
      )
    : faqs

  const grouped = faqCategories
    .map((cat) => ({
      category: cat,
      items: filtered.filter((f) => f.category === cat),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-teal-950">
          <div className="container-cra">
            <span className="label">FAQ</span>
            <h1 className="font-cormorant font-600 text-[clamp(32px,4.5vw,58px)] tracking-heading uppercase text-off-white leading-tight mt-3 max-w-2xl">
              Frequently Asked Questions
            </h1>
            <div className="block w-10 h-px bg-gold mt-5 mb-8" />
            {/* Search */}
            <div className="relative max-w-md">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ivory/30" />
              <input
                type="text"
                placeholder="Search questions..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-base pl-10"
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-teal-900">
          <div className="container-cra max-w-3xl">
            {grouped.length === 0 ? (
              <p className="font-inter font-300 text-[14px] text-ivory/50 text-center py-10">
                No questions found for &ldquo;{query}&rdquo;
              </p>
            ) : (
              <div className="flex flex-col gap-12">
                {grouped.map(({ category, items }) => (
                  <div key={category}>
                    <h2 className="font-cormorant font-600 text-[22px] tracking-heading uppercase text-off-white mb-1">
                      {category}
                    </h2>
                    <div className="block w-8 h-px bg-gold mb-4" />
                    <Accordion items={items} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
