'use client'

import HeroBoxes from './HeroBoxes'

export default function HeroContent() {
  return (
    <>
      {/* Header - hidden on mobile, shown in top image section instead */}
      <header className="pointer-events-auto hidden items-center justify-between md:flex">
        <div className="flex flex-1">
          <div
            onClick={() => window.dispatchEvent(new Event('toggle-navigation'))}
            className="group flex cursor-pointer flex-col gap-2.5"
          >
            <div className="h-0.5 w-12 bg-white transition-transform group-hover:translate-x-2 md:w-14 lg:w-16" />
            <div className="h-0.5 w-12 bg-white transition-transform group-hover:-translate-x-2 md:w-14 lg:w-16" />
          </div>
        </div>

        <div className="font-syncopate flex items-center justify-center text-xl font-bold tracking-widest text-white md:text-3xl">
          AMOZZ
        </div>

        <div className="flex flex-1 items-center justify-end">
          <div className="hidden items-center gap-4 md:flex md:gap-6">
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:border-blue-500 hover:bg-transparent">
              <svg
                className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:border-blue-500 hover:bg-transparent">
              <svg
                className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:border-blue-500 hover:bg-transparent">
              <svg
                className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Areas that space themselves out vertically */}
      <div className="mt-12 flex flex-1 flex-col justify-between gap-16 md:mt-16 md:gap-0">
        {/* Top Row: Headings */}
        <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-start lg:px-4">
          {/* Left Text */}
          <div className="pointer-events-auto w-full max-w-[300px] md:max-w-md">
            <h1 className="mb-4 font-sans text-3xl leading-[1] font-semibold tracking-wide text-white md:mb-6 md:text-4xl lg:text-3xl">
              <span className="font-syncopate font-bold text-white drop-shadow-md">
                I&apos;m helping
                <br />
                Brands To Grow
                <br />
                In The Digital Era
              </span>
            </h1>
          </div>

          {/* Right Text */}
          <div className="pointer-events-auto md:text-right">
            <h2 className="font-syncopate text-3xl leading-[1] font-bold tracking-wide text-white md:text-4xl lg:text-3xl">
              CREATIVE
              <br />
              BRANDING
              <br />
              STUDIO
            </h2>
          </div>
        </div>

        {/* Bottom Row: Hero Boxes */}
        <HeroBoxes />
      </div>
    </>
  )
}
