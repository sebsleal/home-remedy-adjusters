'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

type AccordionItem = {
  id: string
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
  light?: boolean
}

export default function Accordion({ items, light = false }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex flex-col divide-y divide-teal-800">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className={cn(
                'w-full flex items-center justify-between gap-4 py-5 text-left cursor-none',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/30',
                'group'
              )}
            >
              <span
                className={cn(
                  'font-inter font-400 text-[14px] leading-snug transition-colors duration-200',
                  isOpen ? 'text-gold' : light ? 'text-teal-950' : 'text-off-white',
                  'group-hover:text-gold'
                )}
              >
                {item.question}
              </span>
              <span className="flex-shrink-0 text-gold">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="font-inter font-300 text-[13px] text-ivory leading-relaxed pb-5 pr-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
