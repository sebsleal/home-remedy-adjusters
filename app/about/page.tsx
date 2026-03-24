import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SectionHeading from '@/components/ui/SectionHeading'
import TrustBar from '@/components/sections/TrustBar'
import FinalCTA from '@/components/sections/FinalCTA'
import Button from '@/components/ui/Button'
import { buildMetadata } from '@/lib/metadata'
import { Shield, Users, Target, Heart } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'About Us — Florida Licensed Public Adjusters',
  description:
    'Meet the Claim Remedy Adjusters team. Licensed public adjusters based in Miami Lakes, FL fighting for homeowners across all of South Florida.',
  path: '/about',
})

const values = [
  { Icon: Shield, title: 'Integrity', body: 'We represent you honestly and transparently throughout every stage of the claim.' },
  { Icon: Users, title: 'Advocacy', body: 'Our sole job is to fight for your best interests — never the insurance company\'s.' },
  { Icon: Target, title: 'Results', body: 'We measure success by what we recover for you, not by how many claims we file.' },
  { Icon: Heart, title: 'Care', body: 'We treat your home and your claim with the same urgency and care we would our own.' },
]

const team = [
  { name: 'Eddy Gomez', title: 'Owner & Lead Adjuster', image: '/images/team/eddy-gomez.jpg' },
  { name: 'Andres Ferras', title: 'Senior Public Adjuster', image: '/images/team/andres-ferras.jpg' },
  { name: 'Brandon Ginarte', title: 'Field Adjuster', image: '/images/team/brandon-ginarte.jpg' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-teal-950 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/50 to-teal-950" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-800/30 blur-3xl" />
          </div>
          <div className="container-cra relative z-10">
            <span className="label">About Us</span>
            <h1 className="font-cormorant font-600 text-[clamp(36px,5vw,64px)] tracking-heading uppercase text-off-white leading-tight mt-3 max-w-2xl">
              Leveling The Playing Field For Florida Homeowners.
            </h1>
            <div className="block w-12 h-[2px] bg-gold mt-5 mb-6" />
            <p className="font-inter font-300 text-[16px] text-ivory leading-relaxed max-w-xl">
              Claim Remedy Adjusters was founded on a simple belief: every homeowner deserves the same quality of professional representation that insurance companies already have.
            </p>
            <div className="mt-8">
              <Button href="/free-inspection" variant="secondary" size="md">
                Book Free Consultation →
              </Button>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-pad bg-teal-900">
          <div className="container-cra">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-6">
                <SectionHeading label="Our Story" title="Founded To Fight For You" />
                <div className="flex flex-col gap-4 font-inter font-300 text-[14px] text-ivory leading-relaxed">
                  <p>
                    After witnessing homeowners repeatedly accept pennies on the dollar for legitimate claims, our founder Eddy Gomez set out to build a firm that changes the equation. As a licensed public adjuster with over a decade of experience, Eddy understood exactly what insurance companies were doing — and how to stop it.
                  </p>
                  <p>
                    Claim Remedy Adjusters was built around one mission: make sure every Florida homeowner has a licensed professional in their corner when it matters most. We handle the documentation, the negotiation, and the pushback — so you can focus on getting your life back to normal.
                  </p>
                  <p>
                    Today, our team serves all of South Florida and has recovered millions of dollars for hundreds of homeowners who would otherwise have been underpaid or denied.
                  </p>
                </div>
              </div>
              <div className="glass rounded-2xl p-8 flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: '$12M+', label: 'Total recovered' },
                    { value: '500+', label: 'Claims handled' },
                    { value: '98%', label: 'Satisfaction rate' },
                    { value: '10+', label: 'Years experience' },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-1">
                      <span className="font-cormorant font-600 text-[36px] text-gold leading-none">{value}</span>
                      <span className="font-inter font-300 text-[12px] text-ivory/50 uppercase tracking-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-pad bg-teal-950">
          <div className="container-cra">
            <SectionHeading label="Our Team" title="The Experts In Your Corner" align="center" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map(({ name, title, image }) => (
                <div key={name} className="glass rounded-2xl overflow-hidden group">
                  <div
                    className="h-64 bg-cover bg-center bg-teal-800 relative transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                  >
                    {/* Initials fallback — shows when photo is not yet available */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-cormorant font-600 text-[56px] text-gold/25 select-none">
                        {name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-cormorant font-600 text-[20px] tracking-heading uppercase text-off-white">{name}</h3>
                    <p className="font-inter font-300 text-[12px] text-gold/70 uppercase tracking-label mt-1">{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad bg-teal-900">
          <div className="container-cra">
            <SectionHeading label="Our Values" title="What We Stand For" align="center" className="mb-12" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ Icon, title, body }) => (
                <div key={title} className="glass rounded-2xl p-6 flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-cormorant font-600 text-[18px] tracking-heading uppercase text-off-white">{title}</h3>
                  <p className="font-inter font-300 text-[13px] text-ivory/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
