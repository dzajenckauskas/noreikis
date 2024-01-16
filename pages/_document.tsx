import { GoogleAnalytics } from '@next/third-parties/google'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <Html>
      <Head>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}