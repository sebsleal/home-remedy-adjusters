import { MetadataRoute } from 'next'
import { services } from '@/data/services'

const BASE_URL = 'https://claimremedyadjusters.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/results', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/free-inspection', priority: 0.9, changeFrequency: 'weekly' as const },
  ]

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticRoutes, ...serviceRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
