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
    description: 'Tech & crypto consulting',
  },
  {
    href: 'https://blackflag.ventures',
    imgSrc: './blackflag.png',
    title: 'Black Flag Ventures',
    description: 'Liquid & angel investing',
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
    href: 'https://blog.andrewwilkinson.me/',
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
  // {
  //   href: 'https://andrewwilkinson.substack.com/',
  //   title: 'Substack',
  //   svgIcon: (
  //     <svg
  //       fill="currentColor"
  //       className="h-6 w-6 translate-y-1.5"
  //       aria-hidden="true"
  //       viewBox="0 0 32 32"
  //     >
  //       <title>Substack</title>
  //       <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  //     </svg>
  //   ),
  // },
  {
    href: 'https://www.instagram.com/andydwilkinson/',
    title: 'Instagram',
    svgIcon: (
      <svg
        fill="currentColor"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
        viewBox="0 0 16 16"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
      </svg>
    ),
  },
  {
    href: 'https://www.threads.net/@andydwilkinson',
    title: 'Threads',
    svgIcon: (
      <svg
        fill="currentColor"
        className="h-6 w-6 translate-y-0.5"
        aria-hidden="true"
        viewBox="0 0 192 192"
      >
        <path
          className="x19hqcy"
          d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
        ></path>
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
                  <span className="block">/about</span>
                </h1>
                <p className="mx-auto mt-4  text-left text-lg text-gray-600 sm:max-w-3xl">
                  &gt; Andrew Wilkinson
                  <br></br>
                  &gt; Working within tech/crypto, software engineering &
                  investing.
                  <br></br>
                  &gt; Enjoyer of writing, travel, music production & gaming.
                </p>
                <h2 className="mt-4 text-left text-2xl font-extrabold text-gray-700">
                  <span className="block">/work</span>
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
                </div>

                <h2 className="mt-8 text-left text-2xl font-extrabold text-gray-700">
                  <span className="block">/links</span>
                </h2>
                <div className="">
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
                      text="DeFi org (founder)"
                    />
                    <br />
                    &gt; Cursed Pirates -{' '}
                    <ProjectLink
                      href="https://twitter.com/cursedpirates"
                      text="NFT collection"
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
                      text="AI chord progressions"
                    />
                    <br />
                    &gt; TradingView Scripts -{' '}
                    <ProjectLink
                      href="https://www.tradingview.com/u/Tradespot/#published-scripts"
                      text="Technical indicators"
                    />
                    <br />
                    &gt; Cursed Fund -{' '}
                    <ProjectLink
                      href="https://www.cursed.fund"
                      text="Trading experiments"
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
