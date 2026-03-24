'use client'

import { useState } from 'react'
import { formatCurrency } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ClaimCalculator() {
  const [offer, setOffer] = useState(15000)

  const low = Math.round(offer * 2.1)
  const high = Math.round(offer * 3.8)

  return (
    <div className="glass-gold rounded-2xl p-7 md:p-9 flex flex-col gap-6">
      <div>
        <p className="label mb-3">Claim Value Estimator</p>
        <h3 className="font-cormorant font-600 text-[clamp(20px,2.5vw,28px)] tracking-heading uppercase text-off-white leading-tight">
          See What Your Claim Could Be Worth
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-inter font-300 text-[13px] text-ivory/60">
            Insurance offered you:
          </span>
          <span className="font-cormorant font-600 text-[22px] text-gold">
            {formatCurrency(offer)}
          </span>
        </div>
        <input
          type="range"
          min={1000}
          max={200000}
          step={1000}
          value={offer}
          onChange={(e) => setOffer(Number(e.target.value))}
          className="w-full h-1 rounded-full appearance-none cursor-none"
          style={{
            background: `linear-gradient(to right, #d8b779 0%, #d8b779 ${(offer / 200000) * 100}%, #11383d ${(offer / 200000) * 100}%, #11383d 100%)`,
          }}
        />
        <div className="flex justify-between font-inter font-300 text-[11px] text-ivory/30">
          <span>$1,000</span>
          <span>$200,000</span>
        </div>
      </div>

      <div className="bg-teal-850/60 rounded-xl p-5 flex flex-col gap-1">
        <p className="font-inter font-300 text-[12px] text-ivory/50 uppercase tracking-label">
          We typically recover
        </p>
        <p className="font-cormorant font-600 text-[clamp(28px,3.5vw,38px)] text-gold leading-none">
          {formatCurrency(low)} – {formatCurrency(high)}
        </p>
        <p className="font-inter font-300 text-[11px] text-ivory/30 mt-1">
          Based on real case results. Results vary by claim type and carrier.
        </p>
      </div>

      <Link
        href="/free-inspection"
        data-cursor="magnetic"
        className="flex items-center justify-center gap-2 font-inter font-500 text-[12px] uppercase tracking-label bg-gold text-teal-950 px-6 py-3 rounded-full hover:bg-gold-light transition-colors duration-200 group"
      >
        Start My Free Review
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  )
}
