import Link from 'next/link'
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

const serviceLinks = [
  { label: 'Storm Damage', href: '/services/storm' },
  { label: 'Water Damage', href: '/services/water' },
  { label: 'Roof Damage', href: '/services/roof' },
  { label: 'Fire Damage', href: '/services/fire' },
  { label: 'Policy Revision', href: '/services' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Results', href: '/results' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Free Inspection', href: '/free-inspection' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-teal-800">
      <div className="container-cra py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <span className="font-cormorant font-600 text-[28px] tracking-heading text-off-white uppercase">
                CRA
              </span>
            </Link>
            <p className="font-inter font-300 text-[13px] text-ivory/60 leading-relaxed max-w-[220px]">
              Florida&apos;s trusted public adjusters. We fight for the settlement you deserve.
            </p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://facebook.com/cradjusters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-teal-800 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-colors duration-200"
                aria-label="Facebook"
              >
                <ExternalLink size={12} />
              </a>
              <a
                href="https://instagram.com/claimremedyadjusters"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-teal-800 flex items-center justify-center text-ivory/40 hover:text-gold hover:border-gold/40 transition-colors duration-200"
                aria-label="Instagram"
              >
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter font-500 text-[11px] uppercase tracking-label text-gold">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-inter font-300 text-[13px] text-ivory/60 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter font-500 text-[11px] uppercase tracking-label text-gold">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-inter font-300 text-[13px] text-ivory/60 hover:text-gold transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-inter font-500 text-[11px] uppercase tracking-label text-gold">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:7862237867"
                  className="flex items-start gap-3 font-inter font-300 text-[13px] text-ivory/60 hover:text-gold transition-colors duration-200"
                >
                  <Phone size={13} className="mt-0.5 flex-shrink-0" />
                  (786) 223-7867
                </a>
              </li>
              <li>
                <a
                  href="mailto:craadmin@gmail.com"
                  className="flex items-start gap-3 font-inter font-300 text-[13px] text-ivory/60 hover:text-gold transition-colors duration-200"
                >
                  <Mail size={13} className="mt-0.5 flex-shrink-0" />
                  craadmin@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-inter font-300 text-[13px] text-ivory/60">
                  <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                  <span>
                    7900 Oak Ln #400<br />
                    Miami Lakes, FL 33016
                  </span>
                </div>
              </li>
              <li className="font-inter font-300 text-[12px] text-ivory/40">
                Mon–Fri: 9:00 AM – 5:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-teal-800">
        <div className="container-cra py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter font-300 text-[11px] text-ivory/30 text-center md:text-left">
            © {new Date().getFullYear()} Claim Remedy Adjusters. All rights reserved.
          </p>
          <p className="font-inter font-300 text-[11px] text-ivory/30">
            Licensed Public Adjusters — State of Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
