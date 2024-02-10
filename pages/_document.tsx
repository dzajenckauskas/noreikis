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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}