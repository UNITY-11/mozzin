'use client'

import { useEffect, useRef } from 'react'

import Image from 'next/image'

const items = [
  'BRAND IDENTITY',
  'SOCIAL MEDIA MARKETING',
  'CONTENT STRATEGY',
  'WEB DESIGN',
]

const P1_WORDS =
  'I believe successful brands are not built through random marketing efforts, but through a calculated mix of strategy, creativity, and consistency.'.split(
    ' ',
  )
const P2_WORDS =
  'I don’t just create content. I help businesses understand their audience, craft compelling narratives, and execute strategies that drive real growth.'.split(
    ' ',
  )

const renderWords = (words: string[]) => {
  return words.map((text, i) => (
    <span
      key={i}
      className="mr-[0.25em] inline-block"
      style={{ perspective: '800px' }}
    >
      <span
        className="word-span inline-block"
        style={{
          color: '#1f2937',
          filter: 'blur(12px)',
          transform: 'rotateX(-60deg) rotate(5deg) translateY(40px)',
          transformOrigin: 'bottom center',
          willChange: 'color, filter, transform',
          transition: 'none',
        }}
      >
        {text}
      </span>
    </span>
  ))
}

export default function ApproachSection() {
  const containerRef = useRef<HTMLElement>(null)

  // Phase 1: Rolling Text
  const rollingTextContainerRef = useRef<HTMLDivElement>(null)
  const whiteWrapperRef = useRef<HTMLDivElement>(null)
  const blueWrapperRef = useRef<HTMLDivElement>(null)

  // Phase 2: Paragraphs Text Reveal
  const paragraphsRef = useRef<HTMLDivElement>(null)
  const p1Ref = useRef<HTMLParagraphElement>(null)
  const p2Ref = useRef<HTMLParagraphElement>(null)
  const mobileP1Ref = useRef<HTMLParagraphElement>(null)
  const mobileP2Ref = useRef<HTMLParagraphElement>(null)

  // Phase 3 & 4: Blue Stack and Flip
  const blueStackContainerRef = useRef<HTMLDivElement>(null)
  const stackHeaderRef = useRef<HTMLHeadingElement>(null)
  const blueCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScrollUpdate = () => {
      if (window.innerWidth < 768) {
        // Mobile text reveal logic
        const windowHeight = window.innerHeight
        const container = mobileP1Ref.current?.parentElement
        if (!container) {
          ticking = false
          return
        }

        const rect = container.getBoundingClientRect()
        const startReveal = windowHeight * 0.9
        const endReveal = windowHeight * 0.2

        let overallProgress =
          (startReveal - rect.top) / (startReveal - endReveal)
        overallProgress = Math.max(0, Math.min(1, overallProgress))
        ;[mobileP1Ref, mobileP2Ref].forEach((ref, idx) => {
          if (!ref.current) return

          let p = 0
          if (idx === 0) {
            // Paragraph 1 animates from overall progress 0 to 0.5
            p = Math.min(1, overallProgress / 0.5)
          } else {
            // Paragraph 2 animates from overall progress 0.5 to 1.0
            p = Math.max(0, (overallProgress - 0.5) / 0.5)
          }

          const spans = ref.current.querySelectorAll(
            '.word-span',
          ) as NodeListOf<HTMLElement>
          const total = spans.length
          spans.forEach((span, i) => {
            const wordStart = i / total
            const wordEnd = Math.min(1, (i + 1) / total + 0.25)
            let wp = (p - wordStart) / (wordEnd - wordStart)
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

        ticking = false
        return
      }

      if (!containerRef.current) {
        ticking = false
        return
      }
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Scroll distance is container height minus viewport height
      const totalScroll = rect.height - windowHeight
      let progress = -rect.top / totalScroll
      progress = Math.max(0, Math.min(1, progress))

      // ===== PHASE 1: Rolling Text (0.0 to 0.3) =====
      let wordIndex = 0
      if (progress >= 0.1 && progress < 0.2) wordIndex = 1
      else if (progress >= 0.2 && progress < 0.3) wordIndex = 2
      else if (progress >= 0.3) wordIndex = 3

      // Apply to rolling text wrappers (the snapping effect)
      const translateY = `translateY(-${(Math.min(2, wordIndex) * 100) / 3}%)`
      if (whiteWrapperRef.current)
        whiteWrapperRef.current.style.transform = translateY
      if (blueWrapperRef.current)
        blueWrapperRef.current.style.transform = translateY

      // Fade out rolling text between 0.25 and 0.3
      if (rollingTextContainerRef.current) {
        if (progress >= 0.28) {
          rollingTextContainerRef.current.style.opacity = Math.max(
            0,
            1 - (progress - 0.28) / 0.02,
          ).toString()
          rollingTextContainerRef.current.style.pointerEvents = 'none'
        } else {
          rollingTextContainerRef.current.style.opacity = '1'
          rollingTextContainerRef.current.style.pointerEvents = 'auto'
        }
      }

      // ===== PHASE 2: Paragraphs Text Reveal (0.3 to 0.65) =====
      if (paragraphsRef.current) {
        let pOpacity = 0
        if (progress >= 0.3 && progress < 0.32) {
          pOpacity = (progress - 0.3) / 0.02
        } else if (progress >= 0.32 && progress < 0.6) {
          pOpacity = 1
        } else if (progress >= 0.6 && progress <= 0.65) {
          pOpacity = 1 - (progress - 0.6) / 0.05
        }
        paragraphsRef.current.style.opacity = pOpacity.toString()
        paragraphsRef.current.style.pointerEvents =
          pOpacity > 0.5 ? 'auto' : 'none'
      }

      let activeIndex = -1
      if (progress >= 0.3 && progress < 0.48) activeIndex = 0
      else if (progress >= 0.48 && progress < 0.6) activeIndex = 1

      const paras = [p1Ref.current, p2Ref.current]
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
            span.style.transition = `all 700ms ease-out ${i * 15}ms`
            span.style.color = 'white'
            span.style.filter = 'blur(0px)'
            span.style.transform = 'rotateX(0deg) rotate(0deg) translateY(0px)'
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

      // ===== PHASE 3 & 4: Blue Stack (0.65 to 1.0) =====
      // Slide in from bottom between 0.65 and 0.75
      let stackTranslateY = windowHeight
      if (progress >= 0.65 && progress < 0.75) {
        const slideP = (progress - 0.65) / 0.1
        stackTranslateY = windowHeight * (1 - slideP)
      } else if (progress >= 0.75) {
        stackTranslateY = 0
      }

      // Map 0.75 to 1.0 for gap expansion and flip
      const flipProgress = Math.max(0, Math.min(1, (progress - 0.75) / 0.25))

      if (blueStackContainerRef.current) {
        blueStackContainerRef.current.style.transform = `translateY(${stackTranslateY}px)`
        blueStackContainerRef.current.style.opacity =
          progress >= 0.65 ? '1' : '0'
        blueStackContainerRef.current.style.pointerEvents =
          progress >= 0.65 ? 'auto' : 'none'

        // Expand gap: 0px to 2rem (32px)
        blueStackContainerRef.current.style.setProperty(
          '--stack-gap',
          `${flipProgress * 32}px`,
        )
      }

      if (backdropRef.current) {
        backdropRef.current.style.opacity = flipProgress > 0.01 ? '0' : '1'
      }

      // Move header up as cards flip
      if (stackHeaderRef.current) {
        // Stop moving it out of the container, just fade it out smoothly as cards flip
        const headerOpacity = Math.max(0, 1 - flipProgress * 2)
        stackHeaderRef.current.style.opacity = headerOpacity.toString()
        stackHeaderRef.current.style.transform = 'translateY(0px)'
      }

      // Flip cards sequentially
      // NOTE: Using ts-ignore for the ref array to bypass type errors for quick indexing
      // Flip cards simultaneously with spread
      // NOTE: Using ts-ignore for the ref array to bypass type errors for quick indexing

      const isMobile = window.innerWidth < 768

      blueCardsRef.current.forEach((card, i) => {
        if (!card) return

        // Simultaneous flip progress
        const cardP = flipProgress

        // Spread calculation (gap without shrinking cards)
        // 4 cards: indices 0, 1, 2, 3 -> multipliers -1.5, -0.5, 0.5, 1.5
        const spreadMax = 16 // px
        const translate = (i - 1.5) * (cardP * spreadMax)

        // RotateX from 0 to -180deg for simultaneous venetian blind effect
        if (isMobile) {
          card.style.transform = `translateY(${translate}px) rotateX(${cardP * -180}deg)`
        } else {
          card.style.transform = `translateX(${translate}px) rotateX(${cardP * -180}deg)`
        }
      })

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(handleScrollUpdate)
        ticking = true
      }
    }

    // Initial call
    onScroll()

    // Add event listener
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative w-full border-t border-white/10 bg-black md:h-[800vh]"
    >
      {/* =========================================
          MOBILE NATIVE LAYOUT (< 768px)
          ========================================= */}
      <div className="flex w-full flex-col gap-20 overflow-hidden px-6 py-24 md:hidden">
        {/* Main Heading */}
        <div className="flex w-full justify-center">
          <h2 className="font-syncopate text-lg font-black tracking-widest text-blue-500 uppercase">
            WHY WORK WITH ME
          </h2>
        </div>

        {/* Phase 1 Statically */}
        <div className="flex w-full flex-col gap-10">
          {['Strategy.', 'Creativity.', 'Consistency.'].map((word, i) => (
            <h3
              key={i}
              className="font-syncopate text-left text-[22vw] leading-[0.85] font-black tracking-tighter break-all whitespace-normal text-white sm:text-[18vw]"
            >
              {word}
            </h3>
          ))}
        </div>

        {/* Phase 2 Statically */}
        <div className="flex w-full flex-col items-center gap-12">
          <div className="relative aspect-square w-full max-w-sm">
            <Image
              src="/gif/animate.gif"
              alt="Approach Animation"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="flex w-full flex-col gap-8">
            <p
              ref={mobileP1Ref}
              className="text-xl leading-relaxed font-light tracking-wide"
            >
              {renderWords(P1_WORDS)}
            </p>
            <p
              ref={mobileP2Ref}
              className="text-xl leading-relaxed font-light tracking-wide"
            >
              {renderWords(P2_WORDS)}
            </p>
          </div>
        </div>

        {/* Phase 3 & 4: Static Cards */}
        <div className="mt-4 flex w-full flex-col items-center gap-12">
          <h4 className="font-syncopate w-full text-center text-3xl font-black text-white uppercase">
            What I&apos;ve Been
            <br />
            Working On
          </h4>

          <div className="flex w-full flex-col gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative flex min-h-[220px] w-full flex-col items-start justify-end overflow-hidden rounded-[32px] bg-blue-600 p-8 pt-16 shadow-[0_20px_40px_rgba(37,99,235,0.15)] transition-colors hover:bg-blue-500"
              >
                {/* Animated Background Dots */}
                <svg
                  className="absolute inset-0 z-0 h-full w-full text-white/10"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id={`dots-mobile-${i}`}
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                      <animate
                        attributeName="x"
                        from="0"
                        to="24"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="y"
                        from="0"
                        to="24"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="100%"
                    height="100%"
                    fill={`url(#dots-mobile-${i})`}
                  />
                </svg>

                {/* --- TRENDING S-CURVE NOTCH --- */}
                <div className="absolute top-0 right-0 z-10 h-20 w-20 rounded-bl-[28px] bg-black before:absolute before:top-0 before:-left-6 before:h-6 before:w-6 before:rounded-tr-[24px] before:bg-transparent before:shadow-[12px_-12px_0_12px_black] before:content-[''] after:absolute after:right-0 after:-bottom-6 after:h-6 after:w-6 after:rounded-tr-[24px] after:bg-transparent after:shadow-[12px_-12px_0_12px_black] after:content-['']" />

                {/* Floating Icon inside the Notch Area */}
                <div className="absolute top-3 right-3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="relative z-20 w-full pr-8">
                  <h3 className="text-xl leading-relaxed font-medium text-white">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP ANIMATED LAYOUT (>= 768px)
          ========================================= */}
      <div className="sticky top-0 hidden h-screen w-full flex-col items-center justify-center overflow-hidden px-6 md:flex lg:px-8">
        {/* Main Heading (Static Top) */}
        <div className="pointer-events-none absolute top-12 z-50 flex w-full justify-center md:top-16 lg:top-20">
          <h2 className="font-syncopate text-lg font-black tracking-widest text-blue-500 uppercase md:text-2xl lg:text-3xl">
            WHY WORK WITH ME
          </h2>
        </div>

        {/* PHASE 1: ROLLING TEXT (Mask + Blue Fill) */}
        <div
          ref={rollingTextContainerRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center"
        >
          <div
            className="pointer-events-auto relative h-[100vw] w-full max-w-[100vw] overflow-hidden select-none sm:h-[40vw] md:h-[12vw] lg:h-[10vw]"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              e.currentTarget.style.setProperty('--cursor-x', `${x}px`)
              e.currentTarget.style.setProperty('--cursor-y', `${y}px`)
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty('--cursor-x', `-100px`)
              e.currentTarget.style.setProperty('--cursor-y', `-100px`)
            }}
          >
            {/* White Base Layer (Moving) */}
            <div
              ref={whiteWrapperRef}
              className="absolute inset-x-0 top-0 flex w-full flex-col items-center justify-start transition-transform duration-500 ease-out"
            >
              {['Strategy.', 'Creativity.', 'Consistency.'].map((word, i) => (
                <div
                  key={i}
                  className="flex h-[100vw] w-full shrink-0 items-center justify-start px-4 sm:h-[40vw] md:h-[12vw] md:justify-center md:px-0 lg:h-[10vw]"
                >
                  <h3 className="font-syncopate text-left text-[28vw] leading-[0.85] font-black tracking-tighter break-all whitespace-normal text-white sm:text-[18vw] md:text-center md:text-[9vw] md:leading-none md:whitespace-nowrap lg:text-[7vw] xl:text-[8vw]">
                    {word}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stationary Mask Container */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                maskImage:
                  'radial-gradient(circle 8vw at var(--cursor-x, -100px) var(--cursor-y, -100px), black 100%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(circle 8vw at var(--cursor-x, -100px) var(--cursor-y, -100px), black 100%, transparent 100%)',
              }}
            >
              {/* Blue Hover Layer (Moving inside Mask) */}
              <div
                ref={blueWrapperRef}
                className="absolute inset-x-0 top-0 flex w-full flex-col items-center justify-start transition-transform duration-500 ease-out"
                aria-hidden="true"
              >
                {['Strategy.', 'Creativity.', 'Consistency.'].map((word, i) => (
                  <div
                    key={i}
                    className="flex h-[100vw] w-full shrink-0 items-center justify-start px-4 sm:h-[40vw] md:h-[12vw] md:justify-center md:px-0 lg:h-[10vw]"
                  >
                    <h3 className="font-syncopate text-left text-[28vw] leading-[0.85] font-black tracking-tighter break-all whitespace-normal text-blue-500 sm:text-[18vw] md:text-center md:text-[9vw] md:leading-none md:whitespace-nowrap lg:text-[7vw] xl:text-[8vw]">
                      {word}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PHASE 2: PARAGRAPHS & GIF */}
        <div
          ref={paragraphsRef}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 opacity-0 transition-opacity duration-300 lg:px-16"
        >
          <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row lg:gap-16">
            {/* Left Side GIF */}
            <div className="relative aspect-square w-full max-w-sm shrink-0 md:w-1/2 md:max-w-md lg:max-w-lg">
              <Image
                src="/gif/animate.gif"
                alt="Approach Animation"
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Right-aligned text container using CSS grid to automatically size to the text height */}
            <div className="grid w-full max-w-2xl md:w-1/2">
              {/* Paragraph 1 */}
              <p
                ref={p1Ref}
                className="col-start-1 row-start-1 w-full text-xl leading-relaxed font-light tracking-wide md:text-2xl lg:text-3xl"
              >
                {renderWords(P1_WORDS)}
              </p>

              {/* Paragraph 2 */}
              <p
                ref={p2Ref}
                className="col-start-1 row-start-1 w-full text-xl leading-relaxed font-light tracking-wide md:text-2xl lg:text-3xl"
              >
                {renderWords(P2_WORDS)}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            PHASE 3 & 4: BLUE STACK & CARD FLIP
            ========================================= */}
        <div
          ref={blueStackContainerRef}
          className="pointer-events-none absolute inset-0 z-40 flex flex-col items-center justify-center opacity-0"
        >
          <div
            className="relative flex h-[50vh] max-h-[500px] min-h-[300px] w-full max-w-6xl flex-col px-6 md:flex-row"
            style={{ gap: '0px', perspective: '5000px' }}
          >
            {/* Solid blue backdrop to hide any sub-pixel rendering gaps before the flip starts */}
            <div
              ref={backdropRef}
              className="pointer-events-none absolute top-0 right-6 bottom-0 left-6 rounded-lg bg-blue-600 transition-opacity duration-75"
            />

            {items.map((item, i) => (
              <div
                key={i}
                className="relative h-full flex-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  ref={(el) => {
                    blueCardsRef.current[i] = el
                  }}
                  className="absolute inset-0 h-full w-full ease-out"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(0deg)',
                  }}
                >
                  {/* Front Face: Solid Blue with Sliced Text */}
                  <div
                    className={`absolute inset-0 h-full w-full overflow-hidden bg-blue-600 ${i === 0 ? 'rounded-t-lg md:rounded-t-none md:rounded-l-lg' : ''} ${i === items.length - 1 ? 'rounded-b-lg md:rounded-r-lg md:rounded-b-none' : ''}`}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div
                      className="pointer-events-none absolute top-[calc(-100%*var(--card-index))] left-0 flex h-[calc(100%*4)] w-full items-center justify-center md:top-0 md:left-[calc(-100%*var(--card-index))] md:h-full md:w-[calc(100%*4)]"
                      style={{ '--card-index': i } as React.CSSProperties}
                    >
                      <h4 className="font-syncopate w-full px-4 text-center text-2xl font-black text-black uppercase md:text-4xl lg:text-5xl xl:text-6xl">
                        What I&apos;ve Been
                        <br />
                        Working On
                      </h4>
                    </div>
                  </div>

                  {(i === 0 || i === 2) && (
                    <svg
                      viewBox="0 0 160 32"
                      className="pointer-events-none absolute -top-[1px] left-1/2 z-50 hidden h-6 w-48 -translate-x-1/2 md:block md:h-8 md:w-64"
                      preserveAspectRatio="none"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <path
                        d="M 0 0 L 33 0 Q 36.3 0, 38 4 L 48 28 Q 49.7 32, 54 32 L 106 32 Q 110.3 32, 112 28 L 122 4 Q 123.7 0, 127 0 L 160 0 Z"
                        fill="#01030a"
                      />
                    </svg>
                  )}
                  {(i === 1 || i === 3) && (
                    <svg
                      viewBox="0 0 160 32"
                      className="pointer-events-none absolute -bottom-[1px] left-1/2 z-50 hidden h-6 w-48 -translate-x-1/2 md:block md:h-8 md:w-64"
                      preserveAspectRatio="none"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <path
                        d="M 0 32 L 33 32 Q 36.3 32, 38 28 L 48 4 Q 49.7 0, 54 0 L 106 0 Q 110.3 0, 112 4 L 122 28 Q 123.7 32, 127 32 L 160 32 Z"
                        fill="#01030a"
                      />
                    </svg>
                  )}

                  {/* Back Face Wrapper */}
                  <div
                    className="group absolute inset-0 h-full w-full"
                    style={{
                      transform: 'rotateX(180deg)',
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="relative h-full w-full transition-all duration-300">
                      {/* Back Face Container */}
                      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.12)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)]">
                        {/* Animated SVG Pattern (Dots) */}
                        <svg
                          className="absolute inset-0 h-full w-full text-white/5"
                          aria-hidden="true"
                        >
                          <defs>
                            <pattern
                              id={`dots-base-${i}`}
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                              patternUnits="userSpaceOnUse"
                            >
                              <circle
                                cx="2"
                                cy="2"
                                r="1.5"
                                fill="currentColor"
                              />
                              <animate
                                attributeName="x"
                                from="0"
                                to="24"
                                dur="4s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                from="0"
                                to="24"
                                dur="4s"
                                repeatCount="indefinite"
                              />
                            </pattern>
                          </defs>
                          <rect
                            width="100%"
                            height="100%"
                            fill={`url(#dots-base-${i})`}
                          />
                        </svg>

                        {/* Icon */}
                        <div className="relative z-10 mb-6 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:scale-105 md:h-16 md:w-16">
                          <svg
                            className="h-6 w-6 text-white md:h-8 md:w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>
                        </div>

                        {/* Text */}
                        <span className="relative z-10 text-center text-sm leading-relaxed font-medium text-white md:text-base lg:text-lg">
                          {item}
                        </span>
                      </div>

                      {(i === 0 || i === 2) && (
                        <svg
                          viewBox="0 0 160 32"
                          className="pointer-events-none absolute -bottom-[1px] left-1/2 z-50 hidden h-6 w-48 -translate-x-1/2 md:block md:h-8 md:w-64"
                          preserveAspectRatio="none"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <path
                            d="M 0 32 L 33 32 Q 36.3 32, 38 28 L 48 4 Q 49.7 0, 54 0 L 106 0 Q 110.3 0, 112 4 L 122 28 Q 123.7 32, 127 32 L 160 32 Z"
                            fill="#01030a"
                          />
                        </svg>
                      )}
                      {(i === 1 || i === 3) && (
                        <svg
                          viewBox="0 0 160 32"
                          className="pointer-events-none absolute -top-[1px] left-1/2 z-50 hidden h-6 w-48 -translate-x-1/2 md:block md:h-8 md:w-64"
                          preserveAspectRatio="none"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <path
                            d="M 0 0 L 33 0 Q 36.3 0, 38 4 L 48 28 Q 49.7 32, 54 32 L 106 32 Q 110.3 32, 112 28 L 122 4 Q 123.7 0, 127 0 L 160 0 Z"
                            fill="#01030a"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
