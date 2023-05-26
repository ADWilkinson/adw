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
        <title>ADW | Web3/Crypto & AI</title>
        <meta name="title" content="Andrew Wilkinson: Web3/Crypto & AI" />
        <meta
          name="description"
          content="Investing, Building & Consulting within Web3/Crypto & AI."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
