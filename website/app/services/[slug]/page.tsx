import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/sections/FinalCTA'
import { buildMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  })
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative pt-32 pb-24 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-950/80 to-teal-950/50" />
          <div className="container-cra relative z-10">
            <span className="label">{service.shortTitle}</span>
            <h1 className="font-cormorant font-600 text-[clamp(32px,4.5vw,58px)] tracking-heading uppercase text-off-white leading-tight mt-3 max-w-2xl">
              {service.title}
            </h1>
            <div className="block w-10 h-px bg-gold mt-5 mb-5" />
            <p className="font-inter font-300 text-[15px] text-ivory leading-relaxed max-w-lg">
              {service.tagline}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/free-inspection"
                className="inline-flex items-center gap-2 font-inter font-500 text-[13px] uppercase tracking-label bg-gold text-teal-950 px-7 py-3.5 rounded-full hover:bg-gold-light transition-all duration-300 group"
              >
                Get Free Inspection
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* What Qualifies */}
        <section className="section-pad bg-teal-900">
          <div className="container-cra">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="label">Coverage Scope</span>
                <h2 className="font-cormorant font-600 text-[clamp(24px,3vw,38px)] tracking-heading uppercase text-off-white mt-3 mb-4 leading-tight">
                  What Qualifies For A Claim
                </h2>
                <div className="block w-10 h-px bg-gold mb-6" />
                <ul className="flex flex-col gap-3">
                  {service.qualifies.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-gold" />
                      </span>
                      <span className="font-inter font-300 text-[14px] text-ivory leading-snug">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <span className="label">Our Process</span>
                <h2 className="font-cormorant font-600 text-[clamp(24px,3vw,38px)] tracking-heading uppercase text-off-white leading-tight">
                  How We Handle Your Claim
                </h2>
                <div className="block w-10 h-px bg-gold" />
                <div className="flex flex-col gap-4 mt-2">
                  {service.process.map(({ step, body }, i) => (
                    <div key={step} className="glass rounded-xl p-5 flex gap-4">
                      <span className="font-cormorant font-600 text-[24px] text-gold/30 leading-none flex-shrink-0 w-8">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-cormorant font-600 text-[16px] tracking-wide uppercase text-off-white mb-1">{step}</h3>
                        <p className="font-inter font-300 text-[13px] text-ivory/60 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
