import Head from 'next/head'
import { memo } from 'react'
import { Container } from '../components/Container'
import Link from 'next/link'
import useAudio from '../hooks/useAudio'

const linksData = [
  {
    href: 'https://galleon.ventures',
    imgSrc: './logo-profile.png',
    title: 'Galleon Ventures',
    description: 'Tech & Crypto Consulting',
  },
  {
    href: 'https://blackflag.ventures',
    imgSrc: './blackflag.png',
    title: 'Black Flag Ventures',
    description: 'Liquid & Angel Investing',
  },
]

const socialLinksData = [
  {
    href: 'https://www.linkedin.com/in/andrew-d-wilkinson/',
    title: 'LinkedIn',
    svgIcon: (
      <svg
        fill="currentColor"
        viewBox="0 0 30 30"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/andrew_eth',
    title: 'Twitter',
    svgIcon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
      </svg>
    ),
  },
  {
    href: 'https://github.com/adwilkinson',
    title: 'Github',
    svgIcon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
  {
    href: 'https://medium.com/@andrew-eth',
    title: 'Medium',
    svgIcon: (
      <svg
        fill="currentColor"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
        viewBox="0 -55 256 256"
      >
        <g>
          <path
            d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
            fill="#000000"
          ></path>
        </g>
      </svg>
    ),
  },
]

const CardLink = memo(({ href, imgSrc, title, description }) => (
  <Link href={href} target="_blank">
    <div className="pt-6">
      <div className="flow-root rounded-sm border border-[#aeb3bc] bg-gray-50 px-6 pb-6 shadow-[3px_3px_0px_#153c8a] hover:border-[#1763fd] hover:bg-[#1763fd1a] hover:shadow-[1px_1px_0px_#153c8a]">
        <div className="pt-6">
          <div>
            <span className="inline-flex items-center justify-center">
              <div className="mx-auto w-auto justify-center text-center">
                <img
                  className="mx-auto inline-flex h-16 w-auto justify-center rounded-full text-center ring-1 ring-black grayscale sm:h-16"
                  src={imgSrc}
                  alt=""
                />
              </div>
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-700">
            {title}
          </h3>
          <p className="mt-1 text-base text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </Link>
))

const IconLink = memo(({ href, svgIcon, title }) => (
  <Link href={href} target="_blank">
    <div className="pt-6">
      <div className="flow-root rounded-sm border border-[#aeb3bc] bg-gray-50 px-6 py-2 shadow-[3px_3px_0px_#153c8a] hover:border-[#1763fd] hover:bg-[#1763fd1a] hover:shadow-[1px_1px_0px_#153c8a]">
        <div className="flex">
          {svgIcon}
          <h3 className="ml-2 text-lg font-semibold tracking-tight text-gray-700">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </Link>
))

const ProjectLink = memo(({ href, text }) => {
  return (
    <a
      className="text-[#1763fd] underline underline-offset-4"
      target="_blank"
      href={href}
    >
      {text}
    </a>
  )
})

export default function Home() {
  const [playing, toggle] = useAudio('/wombat.mp3')

  const toggleMusic = (e) => {
    e.preventDefault()
    // @ts-ignore
    toggle()
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/davy.png" />
      </Head>
      <div className="pb-12 sm:pb-4 ">
        <Container>
          <div className="relative isolate px-6  lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="text-center">
                <h1 className="text-left text-2xl font-extrabold text-gray-700">
                  <span className="block">/adw</span>
                </h1>
                <p className="mx-auto mt-4  text-left text-lg text-gray-600 sm:max-w-3xl">
                  &gt; Tech founder, software engineer, investor & evangelist.
                </p>
                <h2 className="mt-4 text-left text-2xl font-extrabold text-gray-700">
                  <span className="block">/links</span>
                </h2>
                <div className="">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2">
                    {linksData.map((link, index) => (
                      <CardLink
                        key={index}
                        href={link.href}
                        imgSrc={link.imgSrc}
                        title={link.title}
                        description={link.description}
                      />
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-0 pt-4 sm:grid-cols-2 sm:gap-4 sm:pt-0 lg:grid-cols-4">
                    {socialLinksData.map((link, index) => (
                      <IconLink
                        key={index}
                        href={link.href}
                        title={link.title}
                        svgIcon={link.svgIcon}
                      />
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <h2 className="mt-4 text-left text-2xl font-extrabold text-gray-700">
                    <span className="block">/projects</span>
                  </h2>
                  <p className="text-md mx-auto mt-4 text-left text-gray-600 sm:max-w-3xl sm:text-lg">
                    &gt; Galleon DAO -{' '}
                    <ProjectLink
                      href="https://twitter.com/galleondao"
                      text="DeFi Organisation"
                    />
                    <br />
                    &gt; Cursed Pirates -{' '}
                    <ProjectLink
                      href="https://twitter.com/cursedpirates"
                      text="NFT Collection"
                    />
                    <br />
                    &gt; Royal Fortune Studios -{' '}
                    <ProjectLink
                      href="https://twitter.com/RoyalFortune0x"
                      text="Music NFTs"
                    />
                    <br />
                    &gt; ChordCraft -{' '}
                    <ProjectLink
                      href="https://chordcraft.io"
                      text="AI Chord Generator"
                    />
                    <br />
                    &gt; Technical Analysis Scripts -{' '}
                    <ProjectLink
                      href="https://www.tradingview.com/u/Tradespot/#published-scripts"
                      text="TradingView"
                    />
                  </p>
                </div>

                <div className={playing ? 'animate-pulse pt-4' : 'pt-4'}>
                  <h2 className="mt-2  text-left text-2xl font-extrabold text-gray-700">
                    <span
                      className={playing ? 'block text-[#1763fd]' : 'block'}
                    >
                      /vibe
                    </span>
                  </h2>
                  <p
                    onClick={toggleMusic}
                    className=" text-md mx-auto mt-4 cursor-pointer text-left text-gray-600 sm:max-w-3xl sm:text-lg"
                  >
                    &gt; Adhesive Wombat - 8 Bit Adventure
                    <button
                      className={
                        playing ? 'mt-2 animate-bounce md:mt-0' : 'mt-2 md:mt-0'
                      }
                    >
                      <img
                        src={playing ? '/sound_on.png' : '/sound_off.png'}
                        className=" ml-3 mr-4 inline-flex h-8 w-8 -translate-y-0.5   grayscale "
                      />
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
