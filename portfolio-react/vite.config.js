import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import portfolioData from './src/data/portfolioData.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const configuredUrl = (env.VITE_SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL)
    ?.trim()
    .replace(/\/+$/, '')
  const siteUrl = configuredUrl || 'https://m-coder05.github.io/portfolio'
  const isGitHubPages = configuredUrl ? new URL(configuredUrl).hostname.endsWith('github.io') : false
  const base = isGitHubPages ? '/portfolio/' : '/'

  const metadata = {
    name: portfolioData.personal.name,
    description: portfolioData.seo.description,
    url: configuredUrl ? `${configuredUrl}/` : undefined,
    image: new URL(
      portfolioData.seo.image.replace(/^\//, ''),
      configuredUrl ? `${new URL(siteUrl).origin}${base}` : `${siteUrl}/`
    ).toString(),
    jobTitle: portfolioData.personal.title,
    email: `mailto:${portfolioData.personal.email}`,
    sameAs: portfolioData.personal.sameAs
  }

  const metadataPlugin = {
    name: 'portfolio-metadata',
    transformIndexHtml(html) {
      const canonical = metadata.url ? `<link rel="canonical" href="${metadata.url}">` : ''
      const tags = [
        canonical,
        '<meta property="og:type" content="website">',
        `<meta property="og:url" content="${metadata.url || `${siteUrl}/`}">`,
        `<meta property="og:title" content="${portfolioData.seo.title}">`,
        `<meta property="og:description" content="${portfolioData.seo.description}">`,
        `<meta property="og:image" content="${metadata.image}">`,
        '<meta name="twitter:card" content="summary_large_image">',
        `<meta name="twitter:title" content="${portfolioData.seo.title}">`,
        `<meta name="twitter:description" content="${portfolioData.seo.description}">`,
        `<meta name="twitter:image" content="${metadata.image}">`,
        `<script type="application/ld+json">${JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: metadata.name,
          jobTitle: metadata.jobTitle,
          email: metadata.email,
          sameAs: metadata.sameAs,
          ...(metadata.url ? { url: metadata.url } : {}),
          image: metadata.image,
          description: metadata.description
        })}</script>`
      ].filter(Boolean).join('\n    ')
      return html.replace('<!-- PORTFOLIO_DYNAMIC_METADATA -->', tags)
    },
    async closeBundle() {
      for (const fileName of ['robots.txt', 'sitemap.xml', '404.html']) {
        const path = resolve(process.cwd(), 'dist', fileName)
        const contents = await readFile(path, 'utf8')
        await writeFile(
          path,
          contents.replaceAll('__SITE_URL__', siteUrl).replaceAll('__BASE_URL__', base)
        )
      }
    }
  }

  return {
    base,
    plugins: [react(), { ...metadataPlugin, apply: 'build' }]
  }
})
