import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jebed-utara.vercel.app'
  const lastModified = new Date()

  // Base routes
  const routes = [
    '',
    '/profil',
    '/layanan',
    '/informasi',
    '/potensi',
    '/potensi/umkm',
    '/potensi/pertanian',
    '/potensi/peternakan',
    '/wilayah/batan',
    '/wilayah/jebed',
    '/wilayah/kebanyon',
    '/wilayah/sumurgesing',
    '/wilayah/watgalih-selatan',
    '/wilayah/watgalih-utara',
  ]

  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route.startsWith('/berita') || route === '/informasi'
      ? 'daily' as const
      : 'weekly' as const,
    priority: route === ''
      ? 1
      : route === '/profil' || route === '/layanan' || route === '/informasi'
        ? 0.8
        : route.startsWith('/potensi')
          ? 0.7
          : 0.5,
  }))

  return sitemapEntries
}
