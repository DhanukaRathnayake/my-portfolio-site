import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags for SEO */}
        <meta charSet="utf-8" />

        {/* Dynamic Meta Tags from Environment Variables */}
        <meta
          name="description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION || ""}
        />
        <meta
          name="keywords"
          content={process.env.SEO_PUBLIC_SITE_KEYWORDS || ""}
        />
        <meta
          name="author"
          content={process.env.SEO_PUBLIC_SITE_AUTHOR || ""}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content={process.env.SEO_PUBLIC_SITE_TITLE || ""}
        />
        <meta
          property="og:description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION || ""}
        />
        <meta
          property="og:image"
          content={process.env.SEO_PUBLIC_SITE_IMAGE || ""}
        />
        <meta
          property="og:url"
          content={process.env.SEO_PUBLIC_SITE_URL || ""}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={process.env.SEO_PUBLIC_SITE_TITLE || ""}
        />
        <meta
          name="twitter:description"
          content={process.env.SEO_PUBLIC_SITE_DESCRIPTION || ""}
        />
        <meta
          name="twitter:image"
          content={process.env.SEO_PUBLIC_TWITTER_IMAGE || ""}
        />

        {/* Optional: Google Analytics */}
        {process.env.SEO_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.SEO_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          />
        )}
        {process.env.SEO_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.SEO_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `,
            }}
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
