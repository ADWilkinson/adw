import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-white antialiased" lang="en">
      <Head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />

  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
