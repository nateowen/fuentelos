export async function GET(): Promise<Response> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://fuentelos.com'

  // Paths shared across locales. English is served unprefixed, Spanish under /es.
  const pages = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/beverages', changeFrequency: 'monthly', priority: 0.9 },
    // { path: '/blog', changeFrequency: 'weekly', priority: 0.7 },
  ]

  const localeHref = (locale: 'en' | 'es', path: string) =>
    locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/es${path}`

  const lastmod = new Date().toISOString()

  const urls = pages
    .flatMap((page) =>
      (['en', 'es'] as const).map((locale) => {
        const alternates = (['en', 'es'] as const)
          .map(
            (alt) =>
              `<xhtml:link rel="alternate" hreflang="${alt === 'es' ? 'es-ES' : 'en'}" href="${localeHref(alt, page.path)}" />`
          )
          .join('')
        const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${localeHref('en', page.path)}" />`
        return `
    <url>
        <loc>${localeHref(locale, page.path)}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${page.changeFrequency}</changefreq>
        <priority>${page.priority}</priority>
        ${alternates}${xDefault}
    </url>`
      })
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}
    </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
