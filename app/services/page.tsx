import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FinalCTA from '@/components/sections/FinalCTA'
import SectionHeading from '@/components/ui/SectionHeading'
import { buildMetadata } from '@/lib/metadata'
import { services } from '@/data/services'
import { CloudLightning, Droplets, Home, Flame, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Property Damage Claims — Storm, Water, Roof, Fire',
  description:
    'Expert public adjusters for all property damage types in Florida. Storm, water, roof, and fire damage claims handled with no upfront cost.',
  path: '/services',
})

const icons = { storm: CloudLightning, water: Droplets, roof: Home, fire: Flame }

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-teal-950">
          <div className="container-cra">
            <span className="label">Our Services</span>
            <h1 className="font-cormorant font-600 text-[clamp(32px,4.5vw,58px)] tracking-heading uppercase text-off-white leading-tight mt-3 max-w-2xl">
              Every Type Of Property Damage. Fully Covered.
            </h1>
            <div className="block w-10 h-px bg-gold mt-5" />
          </div>
        </section>

        <section className="section-pad bg-teal-900">
          <div className="container-cra flex flex-col gap-20">
            {services.map((service, i) => {
              const Icon = icons[service.slug]
              const isEven = i % 2 === 0
              return (
                <div
                  key={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[&>*:first-child]:order-last' : ''}`}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden aspect-video bg-teal-800 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.heroImage}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full glass flex items-center justify-center">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <span className="label">{service.shortTitle}</span>
                    </div>
                    <SectionHeading title={service.title} subtitle={service.description} />
                    <ul className="flex flex-col gap-2">
                      {service.qualifies.slice(0, 3).map((q) => (
                        <li key={q} className="flex items-start gap-2 font-inter font-300 text-[13px] text-ivory/70">
                          <span className="text-gold mt-0.5">—</span> {q}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      data-cursor="magnetic"
                      className="flex items-center gap-2 font-inter font-500 text-[12px] uppercase tracking-label text-gold hover:text-gold-light transition-colors duration-200 group self-start"
                    >
                      Learn more
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
