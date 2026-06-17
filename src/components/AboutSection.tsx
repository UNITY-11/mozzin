'use client'

import { useEffect, useRef, useState } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const topMarqueeRef = useRef<HTMLDivElement>(null)
  const bottomMarqueeRef = useRef<HTMLDivElement>(null)
  
  const p1Ref = useRef<HTMLParagraphElement>(null)
  const p2Ref = useRef<HTMLParagraphElement>(null)
  const p3Ref = useRef<HTMLParagraphElement>(null)

  const extraOffsetTop = useRef(0)
  const extraOffsetBottom = useRef(0)
  const smoothVelocity = useRef(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // We can use a simple intersection observer to trigger `isVisible` for the title/image section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (scrollContainerRef.current) observer.unobserve(scrollContainerRef.current)
        }
      },
      { threshold: 0.1 },
    )

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    lastScrollY.current = window.scrollY
    let animationFrameId: number

    const handleScroll = () => {
      const currentScroll = window.scrollY
      const delta = currentScroll - lastScrollY.current
      lastScrollY.current = currentScroll

      smoothVelocity.current += (delta - smoothVelocity.current) * 0.1

      extraOffsetTop.current -= smoothVelocity.current * 0.8
      extraOffsetBottom.current += smoothVelocity.current * 0.4

      if (topMarqueeRef.current) {
        topMarqueeRef.current.style.transform = `translateX(${extraOffsetTop.current}px)`
      }
      if (bottomMarqueeRef.current) {
        bottomMarqueeRef.current.style.transform = `translateX(${extraOffsetBottom.current}px)`
      }

      // Paragraph animation logic
      if (scrollContainerRef.current) {
        const rect = scrollContainerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const containerHeight = rect.height
        const scrollableDistance = containerHeight - windowHeight

        // Progress from 0 to 1 based on sticky container
        const progress = Math.max(
          0,
          Math.min(1, -rect.top / scrollableDistance),
        )

        // Helper to compute reveal and fade for a paragraph
        // p1: 0 -> 0.33
        // p2: 0.33 -> 0.66
        // p3: 0.66 -> 1.0
        const animateParagraph = (
          ref: React.RefObject<HTMLParagraphElement | null>,
          start: number,
          end: number,
          isLast: boolean
        ) => {
          if (!ref.current) return

          let opacity = 0
          let translateY = 50
          let revealPct = -20

          const range = end - start
          const p = (progress - start) / range

          if (progress >= start && progress < end) {
            // Intro: 0 to 0.2 of its range
            if (p < 0.2) {
              const inP = p / 0.2
              opacity = inP
              translateY = 50 * (1 - inP)
              revealPct = -20
            } 
            // Reveal: 0.2 to 0.8 of its range
            else if (p >= 0.2 && p < 0.8) {
              opacity = 1
              translateY = 0
              revealPct = -20 + ((p - 0.2) / 0.6) * 140
            } 
            // Outro: 0.8 to 1.0 of its range
            else {
              if (isLast) {
                // Last paragraph stays visible
                opacity = 1
                translateY = 0
                revealPct = 120
              } else {
                const outP = (p - 0.8) / 0.2
                opacity = 1 - outP
                translateY = -50 * outP
                revealPct = 120
              }
            }
          } else if (progress >= end) {
            if (isLast) {
              opacity = 1
              translateY = 0
              revealPct = 120
            } else {
              opacity = 0
              translateY = -50
              revealPct = 120
            }
          }

          ref.current.style.opacity = opacity.toString()
          ref.current.style.transform = `translateY(${translateY}px)`
          ref.current.style.setProperty('--reveal-pct', `${revealPct}%`)
        }

        // Adjust progress range so animations finish before 1.0, leaving time to read the last paragraph
        animateParagraph(p1Ref, 0, 0.25, false)
        animateParagraph(p2Ref, 0.25, 0.50, false)
        animateParagraph(p3Ref, 0.50, 0.75, true)
      }

      animationFrameId = requestAnimationFrame(handleScroll)
    }

    animationFrameId = requestAnimationFrame(handleScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="pointer-events-auto relative z-50 w-full border-t border-white/10 bg-[#01030a]">
      {/* Top Marquee */}
      <div className="flex w-full overflow-hidden border-b border-white/5 bg-white/[0.02] py-6 backdrop-blur-md">
        <div ref={topMarqueeRef} className="flex w-max">
          <div
            className="animate-marquee flex w-max whitespace-nowrap"
            style={{ animationDuration: '50s' }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white md:text-2xl">
                  10+ YEARS EXPERIENCE
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
      </div>

      {/* Main About Content with Sticky Scroll */}
      <div
        ref={scrollContainerRef}
        className="relative h-[400vh] w-full"
      >
        <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 md:px-10">
          <div className="flex w-full max-w-[1500px] flex-col gap-12 lg:flex-row lg:gap-24">
            
            {/* Left Title + Person Image */}
            <div
              className={`flex transform flex-col gap-8 transition-all duration-1000 lg:w-1/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="flex items-center gap-4 lg:pt-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                <h3 className="font-syncopate text-sm font-bold tracking-widest text-white uppercase">
                  About Me
                </h3>
                <div className="ml-4 h-[1px] w-24 bg-white/20 lg:w-48" />
              </div>

              {/* Person Image */}
              <div className="relative w-full max-w-[400px] overflow-hidden rounded-lg bg-white/[0.03]">
                <img
                  src="/images/amiz.webp"
                  alt="Vijil Raj"
                  className="h-auto w-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#01030a] to-transparent" />
              </div>
            </div>

            {/* Right Content - Paragraphs & Buttons */}
            <div
              className={`flex transform flex-col justify-center transition-all delay-200 duration-1000 lg:w-2/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="relative mb-8 grid w-full">
                {/* Paragraph 1 */}
                <p
                  ref={p1Ref}
                  className="col-start-1 row-start-1 w-full bg-clip-text text-2xl leading-relaxed font-light text-transparent opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-3xl lg:text-4xl uppercase"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, white calc(var(--reveal-pct, -20%) - 20%), #1f2937 calc(var(--reveal-pct, -20%) + 20%))',
                  }}
                >
                  I'm <span className="font-semibold text-white">Vijil Raj,</span> a Digital Marketing Professional, Social Media Expert, and Branding Consultant with a strong passion for helping businesses build impactful brands and meaningful digital presence.
                </p>

                {/* Paragraph 2 */}
                <p
                  ref={p2Ref}
                  className="col-start-1 row-start-1 w-full bg-clip-text text-2xl leading-relaxed font-light text-transparent opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-3xl lg:text-4xl uppercase"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, white calc(var(--reveal-pct, -20%) - 20%), #1f2937 calc(var(--reveal-pct, -20%) + 20%))',
                  }}
                >
                  Over the years, I have worked with entrepreneurs, business leaders, creators, and growing brands across different industries, helping them improve visibility, strengthen their brand identity, and connect with the right audience.
                </p>

                {/* Paragraph 3 */}
                <p
                  ref={p3Ref}
                  className="col-start-1 row-start-1 w-full bg-clip-text text-2xl leading-relaxed font-light text-transparent opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-3xl lg:text-4xl uppercase"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, white calc(var(--reveal-pct, -20%) - 20%), #1f2937 calc(var(--reveal-pct, -20%) + 20%))',
                  }}
                >
                  As the founder of Mozz.in, I focus on combining branding, content strategy, social media marketing, and business growth to help brands stand out in competitive markets.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-8 mt-4 lg:mt-8">
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
                  View My Services
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
      </div>

      {/* Bottom Marquee */}
      <div className="flex w-full overflow-hidden border-t border-white/5 bg-[#01030a] py-6">
        <div ref={bottomMarqueeRef} className="flex w-max">
          <div
            className="animate-marquee flex w-max whitespace-nowrap"
            style={{ animationDuration: '40s', animationDirection: 'reverse' }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white/50 md:text-2xl">
                  BRAND STRATEGY
                </span>
                <span className="text-white/20">✦</span>
                <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white/50 md:text-2xl">
                  SOCIAL MEDIA
                </span>
                <span className="text-white/20">✦</span>
                <span className="font-syncopate mx-8 text-xl font-bold tracking-wider text-white/50 md:text-2xl">
                  CONTENT MARKETING
                </span>
                <span className="text-white/20">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
