'use client'

import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

const P1_WORDS = [
  "I'm",
  { text: 'Vijil', bold: true },
  { text: 'Raj,', bold: true },
  'a',
  'Digital',
  'Marketing',
  'Professional,',
  'Social',
  'Media',
  'Expert,',
  'and',
  'Branding',
  'Consultant',
  'with',
  'a',
  'strong',
  'passion',
  'for',
  'helping',
  'businesses',
  'build',
  'impactful',
  'brands',
  'and',
  'meaningful',
  'digital',
  'presence.',
]
const P2_WORDS =
  'Over the years, I have worked with entrepreneurs, business leaders, creators, and growing brands across different industries, helping them improve visibility, strengthen their brand identity, and connect with the right audience.'.split(
    ' ',
  )
const P3_WORDS =
  'As the founder of Mozz.in, I focus on combining branding, content strategy, social media marketing, and business growth to help brands stand out in competitive markets.'.split(
    ' ',
  )

const renderWords = (words: (string | { text: string; bold: boolean })[]) => {
  return words.map((w, i) => {
    const isBold = typeof w === 'object' && w.bold
    const text = typeof w === 'object' ? w.text : w
    return (
      <span
        key={i}
        className="mr-[0.25em] inline-block"
        style={{ perspective: '800px' }}
      >
        <span
          className={`word-span inline-block ${isBold ? 'font-semibold uppercase' : ''}`}
          style={{
            color: '#1f2937',
            filter: 'blur(12px)',
            transform: 'rotateX(-60deg) rotate(5deg) translateY(40px)',
            transformOrigin: 'bottom center',
            willChange: 'color, filter, transform',
          }}
        >
          {text}
        </span>
      </span>
    )
  })
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const topMarqueeRef = useRef<HTMLDivElement>(null)
  const bottomMarqueeRef = useRef<HTMLDivElement>(null)

  const p1Ref = useRef<HTMLDivElement>(null)
  const p2Ref = useRef<HTMLDivElement>(null)
  const p3Ref = useRef<HTMLDivElement>(null)

  const topX = useRef(0)
  const bottomX = useRef(0)
  const smoothVelocity = useRef(0)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // We can use a simple intersection observer to trigger `isVisible` for the title/image section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (scrollContainerRef.current)
            observer.unobserve(scrollContainerRef.current)
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
    const isRunning = false

    const handleScrollUpdate = () => {
      const currentScroll = window.scrollY
      const delta = currentScroll - lastScrollY.current
      lastScrollY.current = currentScroll

      smoothVelocity.current += (delta - smoothVelocity.current) * 0.1

      const velocitySpeed = Math.abs(smoothVelocity.current) * 0.002

      let directionTop = -1
      let directionBottom = 1

      if (smoothVelocity.current > 1) {
        directionTop = -1
        directionBottom = 1
      } else if (smoothVelocity.current < -1) {
        directionTop = 1
        directionBottom = -1
      }

      const baseSpeedTop = 0.02
      const baseSpeedBottom = 0.015

      topX.current += (baseSpeedTop + velocitySpeed) * directionTop
      bottomX.current += (baseSpeedBottom + velocitySpeed) * directionBottom

      if (topX.current <= -25) topX.current += 25
      else if (topX.current > 0) topX.current -= 25

      if (bottomX.current <= -25) bottomX.current += 25
      else if (bottomX.current > 0) bottomX.current -= 25

      if (topMarqueeRef.current) {
        topMarqueeRef.current.style.transform = `translate3d(${topX.current}%, 0, 0)`
      }

      if (bottomMarqueeRef.current) {
        bottomMarqueeRef.current.style.transform = `translate3d(${bottomX.current}%, 0, 0)`
      }

      // Paragraph animation logic
      const isLargeScreen = window.innerWidth >= 1024
      if (isLargeScreen) {
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

          // Progress from 0 to 1 based on sticky container
          let activeIndex = 0
          if (progress >= 0.33 && progress < 0.66) activeIndex = 1
          else if (progress >= 0.66) activeIndex = 2

          const paras = [p1Ref.current, p2Ref.current, p3Ref.current]
          paras.forEach((para, idx) => {
            if (!para) return

            const isActive = idx === activeIndex
            const isPast = idx < activeIndex

            para.style.transition =
              'opacity 700ms ease-out, transform 700ms ease-out'
            para.style.opacity = isActive ? '1' : '0'
            para.style.transform = isActive
              ? 'translateY(0px)'
              : isPast
                ? 'translateY(-50px)'
                : 'translateY(50px)'

            const spans = para.querySelectorAll(
              '.word-span',
            ) as NodeListOf<HTMLElement>
            spans.forEach((span, i) => {
              if (isActive) {
                span.style.transition = `all 700ms ease-out ${i * 20}ms`
                span.style.color = 'white'
                span.style.filter = 'blur(0px)'
                span.style.transform =
                  'rotateX(0deg) rotate(0deg) translateY(0px)'
              } else {
                span.style.transition = 'all 300ms ease-out 0ms'
                span.style.color = '#1f2937'
                span.style.filter = 'blur(12px)'
                span.style.transform = isPast
                  ? 'translateY(-20px)'
                  : 'rotateX(-60deg) rotate(5deg) translateY(40px)'
              }
            })
          })
        }
      } else {
        // Mobile / Small Screen: Normal scrolling blur reveal
        ;[p1Ref, p2Ref, p3Ref].forEach((ref) => {
          if (!ref.current) return
          const rect = ref.current.getBoundingClientRect()
          const windowHeight = window.innerHeight

          const startReveal = windowHeight * 0.9
          const endReveal = windowHeight * 0.3

          let p = (startReveal - rect.top) / (startReveal - endReveal)
          p = Math.max(0, Math.min(1, p))

          const opacity = Math.min(1, p * 3)
          const translateY = 80 * (1 - p)
          const wordProgress = p

          ref.current.style.transition = 'none'
          ref.current.style.opacity = opacity.toString()
          ref.current.style.transform = `translateY(${translateY}px)`

          const spans = ref.current.querySelectorAll(
            '.word-span',
          ) as NodeListOf<HTMLElement>
          const total = spans.length
          spans.forEach((span, i) => {
            span.style.transition = 'none'

            const wordStart = i / total
            const wordEnd = Math.min(1, (i + 1) / total + 0.25)
            let wp = (wordProgress - wordStart) / (wordEnd - wordStart)
            wp = Math.max(0, Math.min(1, wp))

            const r = Math.round(31 + (255 - 31) * wp)
            const g = Math.round(41 + (255 - 41) * wp)
            const b = Math.round(55 + (255 - 55) * wp)
            span.style.color = `rgb(${r}, ${g}, ${b})`

            const blur = 12 * Math.pow(1 - wp, 1.5)
            span.style.filter = `blur(${blur}px)`

            const rotX = -60 * (1 - wp)
            const rotZ = 5 * (1 - wp)
            const ty = 40 * (1 - wp)
            span.style.transform = `rotateX(${rotX}deg) rotate(${rotZ}deg) translateY(${ty}px)`
          })
        })
      }

      animationFrameId = requestAnimationFrame(handleScrollUpdate)
    }

    // Let it run immediately and continuously
    handleScrollUpdate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="pointer-events-auto relative z-50 w-full border-t border-white/10 bg-[#01030a]">
      {/* Top Marquee */}
      <div className="mb-8 hidden w-full overflow-hidden border-b border-white/5 bg-white/[0.02] py-6 backdrop-blur-md md:mb-0 md:flex">
        <div ref={topMarqueeRef} className="flex w-max">
          <div className="flex w-max whitespace-nowrap">
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
        className="relative h-auto w-full lg:h-[400vh]"
      >
        <div className="relative flex h-auto w-full items-center justify-center px-6 py-24 md:px-10 lg:sticky lg:top-0 lg:h-screen lg:py-0">
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
              <div className="relative aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-lg bg-white/[0.03]">
                <Image
                  src="/images/amiz.webp"
                  alt="Vijil Raj"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#01030a] to-transparent" />
              </div>
            </div>

            {/* Right Content - Paragraphs & Buttons */}
            <div
              className={`flex transform flex-col justify-center transition-all delay-200 duration-1000 lg:w-2/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            >
              <div className="relative mb-8 flex w-full flex-col gap-10 lg:grid lg:gap-0">
                {/* Paragraph 1 */}
                <p
                  ref={p1Ref}
                  className="w-full text-xl leading-relaxed font-light tracking-wide opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-2xl lg:col-start-1 lg:row-start-1 lg:text-3xl"
                >
                  {renderWords(P1_WORDS)}
                </p>

                {/* Paragraph 2 */}
                <p
                  ref={p2Ref}
                  className="w-full text-xl leading-relaxed font-light tracking-wide opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-2xl lg:col-start-1 lg:row-start-1 lg:text-3xl"
                >
                  {renderWords(P2_WORDS)}
                </p>

                {/* Paragraph 3 */}
                <p
                  ref={p3Ref}
                  className="w-full text-xl leading-relaxed font-light tracking-wide opacity-0 transition-[opacity,transform] duration-500 ease-out md:text-2xl lg:col-start-1 lg:row-start-1 lg:text-3xl"
                >
                  {renderWords(P3_WORDS)}
                </p>
              </div>

              {/* Buttons */}
              <div className="-mt-2 flex flex-wrap items-center gap-8 md:mt-4 lg:mt-8">
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

                <button className="group font-syncopate hidden cursor-pointer items-center gap-3 text-sm font-bold tracking-wider text-white transition-colors hover:text-blue-400 md:flex">
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
          <div className="flex w-max whitespace-nowrap">
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
