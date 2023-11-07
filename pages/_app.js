import '../styles/tailwind.css'
import 'focus-visible'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ADW | Tech, Crypto & AI</title>
        <meta name="title" content="ADW: Tech & Crypto" />
        <meta
          name="description"
          content="Investing, building & consulting within Tech & Crypto."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
