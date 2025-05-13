export default function Head() {
  return (
    <>
      <title>Allan IO Blog</title>
      <meta
        name="description"
        content="Explore developer-focused blog posts generated with AI."
      />

      {/* Open Graph tags */}
      <meta property="og:title" content="Allan IO Blog" />
      <meta
        property="og:description"
        content="Explore developer-focused blog posts generated with AI."
      />
      <meta
        property="og:image"
        content="https://allan-io-blog.vercel.app/images/og-cover.png"
      />
      <meta property="og:url" content="https://allan-io-blog.vercel.app/" />
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Allan IO Blog" />
      <meta
        name="twitter:description"
        content="Explore developer-focused blog posts generated with AI."
      />
      <meta
        name="twitter:image"
        content="https://allan-io-blog.vercel.app/images/og-cover.png"
      />
    </>
  );
}
