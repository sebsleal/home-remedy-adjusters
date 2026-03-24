import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { buildMetadata } from '@/lib/metadata'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata = buildMetadata({
  title: 'Contact Us — Free Property Damage Consultation',
  description:
    'Contact Claim Remedy Adjusters for a free property damage consultation. Call (786) 223-7867 or fill out our form. Serving all of South Florida.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-6 bg-teal-950 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-teal-800/30 blur-3xl" />
          </div>
          <div className="container-cra relative z-10">
            <span className="label">Get In Touch</span>
            <h1 className="font-cormorant font-600 text-[clamp(32px,4.5vw,58px)] tracking-heading uppercase text-off-white leading-tight mt-3 max-w-xl">
              Let&apos;s Talk About Your Claim.
            </h1>
            <div className="block w-12 h-[2px] bg-gold mt-5" />
          </div>
        </section>

        {/* Trust stats */}
        <div className="bg-teal-950 pb-2">
          <div className="container-cra">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border border-teal-800 rounded-2xl p-6">
              {[
                { value: '$12M+', label: 'Total Recovered' },
                { value: '500+', label: 'Claims Handled' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '10+', label: 'Years Experience' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-cormorant font-600 text-[28px] text-gold leading-none">{value}</p>
                  <p className="font-inter font-300 text-[11px] text-ivory/50 uppercase tracking-label mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="section-pad bg-teal-900">
          <div className="container-cra">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
              {/* Form */}
              <ContactForm />

              {/* Info */}
              <div className="flex flex-col gap-8">
                <div className="glass rounded-2xl p-7 flex flex-col gap-5">
                  <h3 className="font-cormorant font-600 text-[20px] tracking-heading uppercase text-off-white">Contact Info</h3>
                  <div className="block w-8 h-px bg-gold" />
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="tel:7862237867" className="flex items-start gap-3 group">
                        <Phone size={15} className="text-gold mt-0.5" />
                        <div>
                          <p className="font-inter font-300 text-[11px] uppercase tracking-label text-ivory/40 mb-0.5">Phone</p>
                          <p className="font-inter font-400 text-[14px] text-off-white group-hover:text-gold transition-colors">(786) 223-7867</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:craadmin@gmail.com" className="flex items-start gap-3 group">
                        <Mail size={15} className="text-gold mt-0.5" />
                        <div>
                          <p className="font-inter font-300 text-[11px] uppercase tracking-label text-ivory/40 mb-0.5">Email</p>
                          <p className="font-inter font-400 text-[14px] text-off-white group-hover:text-gold transition-colors">craadmin@gmail.com</p>
                        </div>
                      </a>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin size={15} className="text-gold mt-0.5" />
                      <div>
                        <p className="font-inter font-300 text-[11px] uppercase tracking-label text-ivory/40 mb-0.5">Address</p>
                        <p className="font-inter font-400 text-[14px] text-off-white">7900 Oak Ln #400<br />Miami Lakes, FL 33016</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock size={15} className="text-gold mt-0.5" />
                      <div>
                        <p className="font-inter font-300 text-[11px] uppercase tracking-label text-ivory/40 mb-0.5">Hours</p>
                        <p className="font-inter font-400 text-[14px] text-off-white">Mon–Fri: 9:00 AM – 5:00 PM</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Google Maps embed */}
                <div className="rounded-2xl overflow-hidden h-64 border border-teal-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.6!2d-80.3101!3d25.9085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzMwLjYiTiA4MMKwMTgnMzYuNCJX!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Claim Remedy Adjusters location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
