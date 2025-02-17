import Head from 'next/head'

const SEO: React.FC<{ title: string; desc: string; path: string }> = ({
  title,
  desc,
  path,
}) => {
  return (
    <Head>
      <link rel="icon" type="image/png" href="/images/icon.png" />
      <title>{`${title} - Vignette`}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={`${title} - Vignette`} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://vignetteapp.org${path}`} />
      <meta property="og:image" content="/images/banner.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#BE58CB" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />

      {/* Cloudflare Web Analytics */}
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "5d442ef7fdc747cab81b66d66bbd9c06"}'
      ></script>
    </Head>
  )
}

export default SEO
