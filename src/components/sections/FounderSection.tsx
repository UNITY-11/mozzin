'use client'

import { useEffect, useRef } from 'react'

const services = [
  {
    title: 'Brand Strategy',
    theme: 'white',
    desc: "We dive deep into your brand's DNA to craft unique identities that resonate with your target audience. We build comprehensive roadmaps that define your voice, positioning, and long-term vision.",
  },
  {
    title: 'Social Media Marketing',
    theme: 'blue',
    desc: 'Engaging campaigns designed to build a thriving community and drive measurable growth. We manage your presence across all platforms, fostering authentic connections with your followers.',
  },
  {
    title: 'Content Creation',
    theme: 'cyan',
    desc: 'Compelling visuals and persuasive copy tailored specifically for your audience. From high-quality production to engaging posts, we produce assets that capture attention and drive conversions.',
  },
  {
    title: 'Personal Branding',
    theme: 'white',
    desc: 'Elevating your professional profile and digital presence to establish you as an industry thought leader. We help you tell your unique story and unlock new opportunities.',
  },
  {
    title: 'Website Development',
    theme: 'blue',
    desc: 'High-performance, beautifully designed web experiences that serve as the digital storefront for your brand. We focus on fast speeds, seamless user experiences, and responsive layouts.',
  },
  {
    title: 'Marketing Consultation',
    theme: 'cyan',
    desc: 'Expert guidance and strategic insight to optimize your go-to-market plan. We analyze your performance, identify key bottlenecks, and provide actionable solutions to scale effectively.',
  },
  {
    title: 'Business Growth',
    theme: 'white',
    desc: 'Strategic operations and tactical execution to scale your revenue and expand your reach. We partner with you to streamline processes and ensure sustainable long-term success.',
  },
  {
    title: 'SEO & Analytics',
    theme: 'blue',
    desc: 'Data-driven insights and technical optimizations to dominate search rankings. We ensure your target audience finds you first while providing detailed analytics to measure your ROI.',
  },
]

export default function FounderSection() {
  const containerRef = useRef<HTMLElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)

  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const line4Ref = useRef<HTMLDivElement>(null)

  const line1BlueRef = useRef<HTMLDivElement>(null)
  const line2BlueRef = useRef<HTMLDivElement>(null)
  const line3BlueRef = useRef<HTMLDivElement>(null)
  const line4BlueRef = useRef<HTMLDivElement>(null)

  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const searchBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      if (!stickyRef.current || !containerRef.current) {
        ticking = false
        return
      }

      const stickyRect = stickyRef.current.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()
      const centerY = window.innerHeight / 2

      // Continuous parallax for text (moves the entire time you scroll through the section)
      // Using containerRect.top ensures it doesn't freeze when the sticky container pins.
      // Slower multiplier for a much smoother drift
      const scrollProgress = -(containerRect.top + centerY)
      const offset = -scrollProgress * 0.45

      // Calculate responsive scroll fraction (0 to 1) for the entire section
      const maxScroll = Math.max(1, containerRect.height - window.innerHeight)
      const currentScroll = Math.max(0, -containerRect.top)
      const fraction = currentScroll / maxScroll

      if (line1Ref.current)
        line1Ref.current.style.transform = `translateX(${offset}px)`
      if (line2Ref.current)
        line2Ref.current.style.transform = `translateX(${-offset}px)`
      if (line3Ref.current)
        line3Ref.current.style.transform = `translateX(${offset}px)`
      if (line4Ref.current)
        line4Ref.current.style.transform = `translateX(${-offset}px)`

      if (line1BlueRef.current)
        line1BlueRef.current.style.transform = `translateX(${offset}px)`
      if (line2BlueRef.current)
        line2BlueRef.current.style.transform = `translateX(${-offset}px)`
      if (line3BlueRef.current)
        line3BlueRef.current.style.transform = `translateX(${offset}px)`
      if (line4BlueRef.current)
        line4BlueRef.current.style.transform = `translateX(${-offset}px)`

      // Search Box Animation:
      // Fades in during the last 15% of the section's scroll
      if (searchBoxRef.current) {
        // Starts fading in at 80% scroll, fully visible by 95%
        const searchOpacity = Math.max(0, Math.min(1, (fraction - 0.75) / 0.2))
        const searchScale = 0.8 + searchOpacity * 0.2 // scales from 0.8 to 1.0

        searchBoxRef.current.style.opacity = searchOpacity.toString()
        searchBoxRef.current.style.transform = `scale(${searchScale})`
        // Disable pointer events if not visible
        searchBoxRef.current.style.pointerEvents =
          searchOpacity > 0.5 ? 'auto' : 'none'
      }

      const isMobile = window.innerWidth < 768

      // Subtle parallax for cards (Desktop Only)
      cardsRef.current.forEach((el, i) => {
        if (!el) return
        if (!isMobile) {
          const elRect = el.getBoundingClientRect()
          const elCenterY = elRect.top + elRect.height / 2
          const dist = elCenterY - centerY

          // Even indices are bottom-aligned (mt-40), so they move UP faster (positive factor)
          // Odd indices are top-aligned (mt-0), so they move DOWN slower (negative factor)
          // Increased movement factor as requested
          const factor = i % 2 === 0 ? 0.12 : -0.12
          el.style.transform = `translateY(${dist * factor}px)`
        }
      })

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Initial setup

    // Mobile Intersection Observer for smooth fade-in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 768) {
            entry.target.classList.remove('opacity-0', 'translate-y-16')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#01030a] pt-32 md:pt-[25vh]"
    >
      {/* Top Intro Section - NORMAL SCROLLING */}
      <div className="relative z-20 mx-auto mb-24 max-w-7xl px-6 md:mb-56 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="flex flex-col gap-1 md:gap-2">
            <div className="flex items-center gap-4">
              <h3 className="font-syncopate text-sm font-bold tracking-widest text-white/80 uppercase md:text-base">
                FOUNDER OF
              </h3>
            </div>
            <h2 className="font-syncopate text-5xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
              MOZZ<span className="text-blue-500">.</span>IN
            </h2>
          </div>

          <p className="max-w-xl text-xl leading-relaxed font-light text-gray-400 md:text-2xl lg:text-[24px]">
            Mozz.in is a branding and digital marketing company dedicated to
            helping businesses create strong market presence.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Massive Parallax Typography - STICKY */}
        <div
          ref={stickyRef}
          className="pointer-events-none sticky top-0 -mt-24 flex h-screen w-full flex-col justify-center overflow-hidden md:-mt-32"
        >
          {/* Typography Wrapper with Cursor Effect */}
          <div
            className="pointer-events-auto relative flex w-full flex-col select-none"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty(
                '--mouse-x',
                `${e.clientX - rect.left}px`,
              )
              e.currentTarget.style.setProperty(
                '--mouse-y',
                `${e.clientY - rect.top}px`,
              )
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--mouse-x', `-500px`)
              e.currentTarget.style.setProperty('--mouse-y', `-500px`)
            }}
          >
            {/* BASE LAYER (White / Outline) */}
            <div className="flex w-full flex-col gap-2 px-6 md:gap-4 lg:px-8">
              {/* Line 1: Left aligned */}
              <div className="flex w-full justify-start">
                <div
                  ref={line1Ref}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-white will-change-transform md:text-[12vw] lg:text-[10vw]"
                >
                  WE BUILD
                </div>
              </div>

              {/* Line 2: Right aligned, Outline */}
              <div className="flex w-full justify-end">
                <div
                  ref={line2Ref}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-transparent will-change-transform md:text-[12vw] lg:text-[10vw]"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
                >
                  BRANDS
                </div>
              </div>

              {/* Line 3: Left aligned, Outline */}
              <div className="flex w-full justify-start">
                <div
                  ref={line3Ref}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-transparent will-change-transform md:text-[12vw] lg:text-[10vw]"
                  style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
                >
                  THAT MEAN
                </div>
              </div>

              {/* Line 4: Right aligned */}
              <div className="flex w-full justify-end">
                <div
                  ref={line4Ref}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-white will-change-transform md:text-[12vw] lg:text-[10vw]"
                >
                  BUSINESS
                </div>
              </div>
            </div>

            {/* BLUE HOVER MASK LAYER */}
            <div
              className="pointer-events-none absolute inset-0 flex w-full flex-col gap-2 px-6 transition-opacity duration-300 md:gap-4 lg:px-8"
              style={{
                maskImage:
                  'radial-gradient(circle 150px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 100%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(circle 150px at var(--mouse-x, -500px) var(--mouse-y, -500px), black 100%, transparent 100%)',
              }}
            >
              {/* Line 1 */}
              <div className="flex w-full justify-start">
                <div
                  ref={line1BlueRef}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-blue-500 will-change-transform md:text-[12vw] lg:text-[10vw]"
                >
                  WE BUILD
                </div>
              </div>

              {/* Line 2 */}
              <div className="flex w-full justify-end">
                <div
                  ref={line2BlueRef}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-transparent will-change-transform md:text-[12vw] lg:text-[10vw]"
                  style={{ WebkitTextStroke: '2px #3b82f6' }}
                >
                  BRANDS
                </div>
              </div>

              {/* Line 3 */}
              <div className="flex w-full justify-start">
                <div
                  ref={line3BlueRef}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-transparent will-change-transform md:text-[12vw] lg:text-[10vw]"
                  style={{ WebkitTextStroke: '2px #3b82f6' }}
                >
                  THAT MEAN
                </div>
              </div>

              {/* Line 4 */}
              <div className="flex w-full justify-end">
                <div
                  ref={line4BlueRef}
                  className="font-syncopate text-[15vw] leading-none font-black tracking-tighter whitespace-nowrap text-blue-500 will-change-transform md:text-[12vw] lg:text-[10vw]"
                >
                  BUSINESS
                </div>
              </div>
            </div>
          </div>

          {/* Centered Search Box - Fades in after text leaves */}
          <div
            ref={searchBoxRef}
            className="pointer-events-none absolute inset-0 z-30 flex h-full w-full flex-col items-center justify-center px-6 opacity-0"
          >
            {/* Huge Animated Background Text */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
              <style>
                {`
                  @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  .animate-gradient-text {
                    background-size: 200% auto;
                    animation: gradientShift 6s ease infinite;
                  }
                  @keyframes scrollLine {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(200%); }
                  }
                  .animate-scroll-line {
                    animation: scrollLine 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
                  }
                `}
              </style>
              <h1 className="font-syncopate animate-gradient-text bg-gradient-to-r from-[#050b1a] via-blue-600 to-[#050b1a] bg-clip-text text-[20vw] leading-none font-black tracking-tighter whitespace-nowrap text-transparent opacity-60 select-none md:text-[18vw] md:opacity-80">
                MOZZIN
              </h1>
            </div>

            <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
              {/* Ultra Premium Search Bar */}
              <div className="group relative flex h-16 w-full items-center overflow-hidden rounded-full border border-white/10 bg-[#050914]/80 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] sm:h-20 md:h-[90px]">
                {/* Glowing orb behind input */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                {/* Search Icon */}
                <div className="absolute left-6 text-gray-500 transition-colors duration-300 group-hover:text-blue-400 sm:left-12 md:left-14">
                  <svg
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  value="mozzin.in"
                  readOnly
                  className="font-syncopate h-full w-full cursor-default bg-transparent pr-28 pl-20 text-lg tracking-widest text-white outline-none sm:pr-32 sm:pl-28 sm:text-xl md:pr-48 md:pl-36 md:text-3xl"
                />

                {/* Go Button */}
                <button
                  onClick={() => window.open('https://mozzin.in', '_blank')}
                  className="font-syncopate absolute right-2 flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-black tracking-[0.2em] text-black shadow-lg transition-all duration-300 hover:bg-blue-600 hover:text-white sm:right-3 sm:h-14 sm:px-8 md:right-4 md:h-[68px] md:px-12 md:text-lg"
                >
                  GO
                </button>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-4 opacity-70 lg:bottom-12 lg:gap-6">
              <span className="font-syncopate text-[10px] tracking-[0.2em] whitespace-nowrap text-white/60 uppercase lg:text-xs">
                Keep Scrolling
              </span>
              <div className="relative h-12 w-[1px] overflow-hidden bg-white/10 lg:h-16">
                <div className="animate-scroll-line absolute top-0 left-0 h-1/2 w-full bg-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid - 4 Column Ladder */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 pt-[25vh] pb-32 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
            {services.map((service, idx) => {
              // Alternating zigzag stagger logic based on screenshot
              const getStaggerClass = (index: number) => {
                const mdStagger = index % 2 === 0 ? 'md:mt-24' : 'md:mt-0'
                const lgStagger = index % 2 === 0 ? 'lg:mt-40' : 'lg:mt-0'

                return `${mdStagger} ${lgStagger}`
              }

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[idx] = el
                  }}
                  className={`flex w-full justify-center ${getStaggerClass(idx)} translate-y-16 opacity-0 transition-all duration-[800ms] ease-out will-change-transform md:translate-y-0 md:opacity-100 md:duration-75`}
                >
                  <ServiceCard service={service} index={idx} />
                </div>
              )
            })}
          </div>
        </div>

        {/* Padding to allow scrolling far enough to trigger the search box and let text exit completely */}
        <div className="pointer-events-none h-[150vh]"></div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; theme: string; desc: string }
  index: number
}) {
  const isWhite = service.theme === 'white'
  const isBlue = service.theme === 'blue'

  const bgClass = isWhite
    ? 'bg-[#f4f4f5]'
    : isBlue
      ? 'bg-blue-600'
      : 'bg-cyan-400'
  const textClass = isWhite
    ? 'text-blue-600'
    : isBlue
      ? 'text-white'
      : 'text-white'
  const numClass = isWhite
    ? 'text-blue-600/30'
    : isBlue
      ? 'text-white/40'
      : 'text-white/40'
  const descClass = isWhite
    ? 'text-blue-600/70'
    : isBlue
      ? 'text-blue-100'
      : 'text-cyan-50'
  const patternDot = isWhite ? '#2563eb' : isBlue ? '#fff' : '#fff'
  const glowClass = isWhite
    ? 'hover:shadow-white/10'
    : isBlue
      ? 'hover:shadow-blue-500/20'
      : 'hover:shadow-cyan-400/20'

  return (
    <div
      className={`group relative aspect-square w-full ${bgClass} flex cursor-pointer flex-col justify-between overflow-hidden py-6 pr-6 pl-10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${glowClass}`}
      style={{
        clipPath:
          'polygon(0 10%, 5% 0, 72% 0, 76% 4%, 100% 4%, 100% 90%, 92% 100%, 0 100%, 0 65%, 5% 60%, 5% 35%, 0 30%)',
      }}
    >
      {/* Decorative dotted circular pattern in the top-right area */}
      <div
        className="pointer-events-none absolute top-2 right-2 h-32 w-32 overflow-hidden rounded-full opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, ${patternDot} 2px, transparent 2px)`,
          backgroundSize: '12px 12px',
        }}
      />

      {/* Top Header */}
      <div className="z-10 flex items-start justify-between">
        <div
          className={`font-syncopate text-sm font-bold ${numClass} tracking-widest uppercase`}
        >
          /{String(index + 1).padStart(2, '0')}
        </div>
        {/* Arrow icon removed as requested */}
      </div>

      {/* Hover Background Accent */}
      <div className="pointer-events-none absolute -bottom-[50%] -left-[50%] h-[200%] w-[200%] bg-[radial-gradient(circle_at_25%_75%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 mt-auto flex flex-col gap-2">
        <h3
          className={`font-syncopate text-xl font-bold md:text-2xl ${textClass} leading-snug tracking-tight transition-colors duration-300`}
        >
          {service.title}
        </h3>
        <div className="mt-2 opacity-100 transition-all duration-500">
          <p className={`text-sm ${descClass} font-light`}>{service.desc}</p>
        </div>
      </div>
    </div>
  )
}
