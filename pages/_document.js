/* eslint-disable @next/next/no-document-import-in-page */
import { PreloadFonts } from 'components/preload-fonts'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <PreloadFonts
          fonts={[
            '/fonts/kh-interference/KHInterference-Light.woff2',
            '/fonts/kh-interference/KHInterference-Regular.woff2',
            '/fonts/pp-fraktion/PPFraktionMono-Regular.woff2',
          ]}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
