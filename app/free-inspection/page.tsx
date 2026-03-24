import InspectionForm from '@/components/forms/InspectionForm'
import { buildMetadata } from '@/lib/metadata'
import { Shield, DollarSign, Clock, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Free Property Inspection — Get Your Claim Reviewed',
  description:
    'Schedule a free property inspection with Claim Remedy Adjusters. Licensed public adjusters serving South Florida. No obligation, no upfront cost.',
  path: '/free-inspection',
})

const trust = [
  { Icon: Shield, label: 'Licensed & Insured' },
  { Icon: DollarSign, label: 'No Upfront Cost' },
  { Icon: Clock, label: '24hr Response' },
]

export default function FreeInspectionPage() {
  return (
    <div className="min-h-screen bg-teal-950 flex flex-col">
      {/* Minimal nav */}
      <header className="border-b border-teal-800 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-cormorant font-600 text-[22px] tracking-heading uppercase text-off-white hover:text-gold transition-colors duration-200">
          CRA
        </Link>
        <a href="tel:7862237867" className="flex items-center gap-2 font-inter font-400 text-[12px] uppercase tracking-label text-gold hover:text-gold-light transition-colors duration-200">
          <Phone size={13} />
          (786) 223-7867
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-5xl grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* Left copy */}
          <div className="flex flex-col gap-7">
            <div>
              <span className="label">100% Free — No Obligation</span>
              <h1 className="font-cormorant font-600 text-[clamp(32px,4vw,54px)] tracking-heading uppercase text-off-white leading-tight mt-3">
                Get Your Free Property Inspection Today.
              </h1>
              <div className="block w-10 h-px bg-gold mt-5" />
            </div>
            <p className="font-inter font-300 text-[15px] text-ivory leading-relaxed">
              One of our licensed adjusters will visit your property, assess all damage, review your policy, and give you an honest estimate of what your claim could be worth — completely free, with zero obligation.
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-inter font-500 text-[12px] uppercase tracking-label text-gold">What happens next:</p>
              {['We contact you within 24 hours to schedule', 'A licensed adjuster visits your property', 'Full damage assessment + policy review', 'You receive a free estimate of your claim value'].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="font-cormorant font-600 text-[18px] text-gold/40 leading-none w-6 flex-shrink-0">{i + 1}</span>
                  <span className="font-inter font-300 text-[13px] text-ivory/70 leading-snug">{step}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-5 pt-2 border-t border-teal-800">
              {trust.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={13} className="text-gold" />
                  <span className="font-inter font-400 text-[11px] uppercase tracking-label text-ivory/50">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <InspectionForm />
        </div>
      </main>
    </div>
  )
}
