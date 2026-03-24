import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import PageWrapper from '@/components/layout/PageWrapper'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Claim Remedy Adjusters | Florida Public Adjusters',
    template: '%s | Claim Remedy Adjusters',
  },
  description:
    'Licensed public adjusters fighting for Florida homeowners. We maximize your insurance claim — storm, water, roof, fire damage. No upfront cost. Call (786) 223-7867.',
  metadataBase: new URL('https://claimremedyadjusters.com'),
  openGraph: {
    siteName: 'Claim Remedy Adjusters',
    locale: 'en_US',
    type: 'website',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Claim Remedy Adjusters',
  description: 'Licensed public adjusters serving Florida homeowners.',
  telephone: '(786) 223-7867',
  email: 'craadmin@gmail.com',
  url: 'https://claimremedyadjusters.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7900 Oak Ln #400',
    addressLocality: 'Miami Lakes',
    addressRegion: 'FL',
    postalCode: '33016',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.9085,
    longitude: -80.3101,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    'Miami-Dade County',
    'Broward County',
    'Palm Beach County',
    'Monroe County',
    'Collier County',
    'Lee County',
  ],
  sameAs: [
    'https://facebook.com/cradjusters',
    'https://instagram.com/claimremedyadjusters',
  ],
  priceRange: 'Free consultation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-inter text-off-white bg-teal-950 antialiased">
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
