import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import Specializations from '@/components/sections/Specializations'
import Framework from '@/components/sections/Framework'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Testimonials from '@/components/sections/Testimonials'
import FAQTeaser from '@/components/sections/FAQTeaser'
import TrustBar from '@/components/sections/TrustBar'
import FinalCTA from '@/components/sections/FinalCTA'
import ClaimCalculator from '@/components/ui/ClaimCalculator'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Florida Public Adjusters — Maximize Your Insurance Claim',
  description:
    'Licensed public adjusters fighting for Florida homeowners. We maximize your insurance claim — storm, water, roof, fire damage. No upfront cost. Call (786) 223-7867.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Specializations />
        <Framework />
        <WhyChooseUs />
        <Testimonials />

        {/* Claim Calculator section */}
        <section className="section-pad bg-teal-900">
          <div className="container-cra">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-5">
                <span className="label">Free Estimator</span>
                <h2 className="font-cormorant font-600 text-[clamp(28px,3.5vw,46px)] tracking-heading uppercase text-off-white leading-tight">
                  What Is Your Claim Really Worth?
                </h2>
                <span className="block w-10 h-px bg-gold" />
                <p className="font-inter font-300 text-[15px] text-ivory leading-relaxed">
                  Insurance companies routinely underpay claims by 2–4× the actual damage value. Use our estimator to see what your settlement could realistically look like.
                </p>
              </div>
              <ClaimCalculator />
            </div>
          </div>
        </section>

        <FAQTeaser />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
