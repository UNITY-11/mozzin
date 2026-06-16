'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pointer-events-auto relative z-50 w-full overflow-hidden border-t border-white/10 bg-[#01030a]">
      {/* Top Marquee */}
      <div className="flex w-full overflow-hidden border-b border-white/5 bg-white/[0.02] py-6 backdrop-blur-md">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white md:text-2xl">
                6 YEARS EXPERIENCE
              </span>
              <span className="text-blue-500">✦</span>
              <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white md:text-2xl">
                299+ DELIVERIES
              </span>
              <span className="text-blue-500">✦</span>
              <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white md:text-2xl">
                99% POSITIVE REVIEWS
              </span>
              <span className="text-blue-500">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main About Content */}
      <div
        ref={sectionRef}
        className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:py-32"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
          {/* Left Title */}
          <div
            className={`flex transform items-center gap-4 transition-all duration-1000 lg:w-1/3 lg:items-start lg:pt-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <h3 className="font-syncopate text-sm font-bold tracking-widest text-white uppercase">
              About Me
            </h3>
            <div className="ml-4 h-[1px] w-24 bg-white/20 lg:w-48" />
          </div>

          {/* Right Content */}
          <div
            className={`transform transition-all delay-200 duration-1000 lg:w-2/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <p className="mb-12 font-sans text-2xl leading-relaxed font-light text-gray-300 md:text-4xl lg:text-[40px] lg:leading-[1.4]">
              Hey there, I&apos;m{' '}
              <span className="font-semibold text-white">Mozzin</span> — a web
              developer and UI/UX designer. I bridge the gap between aesthetic
              brilliance and technical precision. I don&apos;t just build sites
              that look expensive; I build systems designed to scale your
              business and dominate your niche.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-8">
              <button className="group font-syncopate relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-sm font-bold tracking-wider text-white transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <span>Start a Project</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 transition-transform group-hover:rotate-45">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
              </button>

              <button className="group font-syncopate flex cursor-pointer items-center gap-3 text-sm font-bold tracking-wider text-white transition-colors hover:text-blue-400">
                View My Work
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Marquee */}
      <div className="flex w-full overflow-hidden border-t border-white/5 bg-white/[0.01] py-16 opacity-60">
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="font-syncopate flex items-center gap-24 px-12 text-2xl font-black tracking-widest text-white/40"
            >
              <span className="cursor-pointer transition-colors hover:text-white">
                BLISTEX
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                DIXIE DOWNS
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                ROGUE
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                PERFECT
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                CD.PET
              </span>
              <span className="cursor-pointer transition-colors hover:text-white">
                TRAVA
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
