import Head from 'next/head'
import { memo } from 'react'
import { Container } from '../components/Container'
import Link from 'next/link'
import useAudio from '../hooks/useAudio'

const linksData = [
  {
    href: 'https://galleonlabs.io',
    imgSrc: './logo-profile.png',
    title: 'Galleon',
    description: 'Crypto-native development studio.',
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
        className="h-5 w-5 translate-y-0.5"
        aria-hidden="true"
      >
        <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/davyjones0x',
    title: 'Twitter',
    svgIcon: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5 translate-y-0.5"
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
        className="h-5 w-5 translate-y-0.5"
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
        className="h-5 w-5 translate-y-0.5"
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
  {
    href: 'https://www.instagram.com/andydwilkinson/',
    title: 'Instagram',
    svgIcon: (
      <svg
        fill="currentColor"
        className="h-5 w-5 translate-y-0.5"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: 'https://www.threads.net/@andydwilkinson',
    title: 'Threads',
    svgIcon: (
      <svg
        fill="currentColor"
        className="h-5 w-5 translate-y-0.5"
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
    <div className="pt-0">
      <div className=" pt-6">
        <div>
          <span className="">
            <div className="flex">
              <img
                className=" h-24 w-auto rounded-sm border border-[#aeb3bc] bg-gray-50   shadow-[3px_3px_0px_#153c8a]  ring-black grayscale hover:border-[#1763fd] hover:bg-[#1763fd1a] hover:shadow-[1px_1px_0px_#153c8a] sm:h-24"
                src={imgSrc}
                alt=""
              />
              <div className="ml-8">
                <h3 className="text-md mt-6 text-left font-semibold tracking-tight text-gray-700">
                  {title}
                </h3>
                <p className="mt-1 text-left text-sm text-gray-600">
                  {description}
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </Link>
))

const IconLink = memo(({ href, svgIcon, title }) => (
  <Link href={href} target="_blank">
    <div className="mt-4 md:mt-0">
      <div className="flow-root rounded-sm border border-[#aeb3bc] bg-gray-50 px-6 py-1.5 shadow-[3px_3px_0px_#153c8a] hover:border-[#1763fd] hover:bg-[#1763fd1a] hover:shadow-[1px_1px_0px_#153c8a]">
        <div className="flex">
          {svgIcon}
          <h3 className="text-md ml-2 font-semibold tracking-tight text-gray-700">
            {title}
          </h3>
        </div>
      </div>
    </div>
  </Link>
))

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
          <div className="relative isolate  lg:px-8 ">
            <div className="mx-auto max-w-2xl py-8 sm:py-32 ">
              <div className="rounded-sm   border border-[#aeb3bc] p-4 text-center shadow-[3px_3px_0px_#153c8a] sm:p-8">
                <h1 className="text-left text-lg font-extrabold text-gray-700 ">
                  <span className="block">contact</span>
                </h1>
                <p className="text-md mx-auto  mt-2  pb-2 text-left text-gray-600 sm:max-w-3xl">
                  <a
                    className="text-[#1763fd]"
                    href="mailto:hello@andrewwilkinson.me"
                  >
                    hello@andrewwilkinson.me
                  </a>
                </p>

                <h2 className="mt-2 border-t border-[#aeb3bc] pt-2 text-left text-lg font-extrabold text-gray-700">
                  <span className="block">work</span>
                </h2>
                <div className="">
                  <div className="pb-2">
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

                <h2 className="mt-4 border-t border-[#aeb3bc] pt-2 text-left text-lg font-extrabold text-gray-700">
                  <span className="block">links</span>
                </h2>
                <div className="sm:pt-2">
                  <div className="grid grid-cols-1 gap-0  sm:grid-cols-2 sm:gap-2 sm:pt-2 lg:grid-cols-3">
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

                <div className={playing ? 'animate-pulse pt-4' : 'pt-4'}>
                  <h2 className="mt-2 border-t border-[#aeb3bc] pt-2 text-left text-lg font-extrabold text-gray-700">
                    <span
                      className={playing ? 'block text-[#1763fd]' : 'block'}
                    >
                      vibe
                    </span>
                  </h2>
                  <p
                    onClick={toggleMusic}
                    className=" text-md mx-auto mt-1 cursor-pointer text-left text-gray-600 hover:text-[#1763fd]"
                  >
                    Adhesive Wombat - 8 Bit Adventure
                    <button
                      className={
                        playing ? 'mt-2 animate-bounce md:mt-0' : 'mt-2 md:mt-0'
                      }
                    >
                      <img
                        src={playing ? '/sound_on.png' : '/sound_off.png'}
                        className=" ml-1.5 mr-4 inline-flex h-5 w-5 -translate-y-0.5   grayscale "
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
