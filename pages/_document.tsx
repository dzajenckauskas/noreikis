import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { GoogleAnalytics } from "@next/third-parties/google";

export default function Document() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <Html>
      <Head>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gaId}');
                    `}
        </Script>

        <link
          href={"favicon-white.ico"}
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          href={"favicon-black.ico"}
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}