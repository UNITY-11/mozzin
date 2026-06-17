'use client'

import { useEffect, useRef, useState } from 'react'

const ScrollRevealParagraph = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  const pRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!pRef.current) return
      const rect = pRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Start revealing when top hits 85% of viewport
      // Fully revealed when top hits 40% of viewport
      const start = windowHeight * 0.85
      const end = windowHeight * 0.4

      const progress = Math.max(
        0,
        Math.min(1, (start - rect.top) / (start - end)),
      )

      // Map progress 0→1 to revealPct -20%→120%
      const revealPct = -20 + progress * 140
      pRef.current.style.setProperty('--reveal-pct', `${revealPct}%`)

      animationFrameId = requestAnimationFrame(handleScroll)
    }

    animationFrameId = requestAnimationFrame(handleScroll)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Render text with "Vijil Raj," bolded
  const renderText = () => {
    const boldPhrase = 'Vijil Raj,'
    const idx = text.indexOf(boldPhrase)
    if (idx === -1) return text
    return (
      <>
        {text.slice(0, idx)}
        <span className="font-semibold">{boldPhrase}</span>
        {text.slice(idx + boldPhrase.length)}
      </>
    )
  }

  return (
    <p
      ref={pRef}
      className={className || ''}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, white calc(var(--reveal-pct, -20%) - 20%), #1f2937 calc(var(--reveal-pct, -20%) + 20%))',
      }}
    >
      {renderText()}
    </p>
  )
}

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const topMarqueeRef = useRef<HTMLDivElement>(null)
  const bottomMarqueeRef = useRef<HTMLDivElement>(null)
  const extraOffsetTop = useRef(0)
  const extraOffsetBottom = useRef(0)
  const smoothVelocity = useRef(0)
  const lastScrollY = useRef(0)

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

  useEffect(() => {
    lastScrollY.current = window.scrollY
    let animationFrameId: number

    const updateScroll = () => {
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

      animationFrameId = requestAnimationFrame(updateScroll)
    }

    animationFrameId = requestAnimationFrame(updateScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="pointer-events-auto relative z-50 w-full overflow-hidden border-t border-white/10 bg-[#01030a]">
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
      </div>

      {/* Main About Content */}
      <div
        ref={sectionRef}
        className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:py-32"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
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

          {/* Right Content */}
          <div
            className={`flex transform flex-col gap-8 transition-all delay-200 duration-1000 lg:w-2/3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
          >
            <ScrollRevealParagraph
              text="I'm Vijil Raj, a Digital Marketing Professional, Social Media Expert, and Branding Consultant with a strong passion for helping businesses build impactful brands and meaningful digital presence."
              className="font-sans text-2xl leading-relaxed font-light bg-clip-text text-transparent md:text-3xl lg:text-[32px] lg:leading-[1.4]"
            />
            <ScrollRevealParagraph
              text="Over the years, I have worked with entrepreneurs, business leaders, creators, and growing brands across different industries, helping them improve visibility, strengthen their brand identity, and connect with the right audience."
              className="font-sans text-xl leading-relaxed font-light bg-clip-text text-transparent md:text-2xl lg:text-[24px] lg:leading-[1.5]"
            />
            <ScrollRevealParagraph
              text="As the founder of Mozz.in, I focus on combining branding, content strategy, social media marketing, and business growth to help brands stand out in competitive markets."
              className="mb-4 font-sans text-xl leading-relaxed font-light bg-clip-text text-transparent md:text-2xl lg:text-[24px] lg:leading-[1.5]"
            />

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

      {/* Client Logos Marquee */}
      <div className="flex w-full overflow-hidden border-t border-white/5 bg-white/[0.01] py-16 opacity-60">
        <div
          ref={bottomMarqueeRef}
          className="flex w-max"
          style={{ marginLeft: '-10%' }}
        >
          <div
            className="animate-marquee flex w-max whitespace-nowrap"
            style={{ animationDuration: '50s' }}
          >
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
      </div>
    </section>
  )
}
