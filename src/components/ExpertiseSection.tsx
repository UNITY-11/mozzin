'use client'

import { useEffect, useRef, useState } from 'react'

const expertiseData = [
  {
    title: 'Digital Marketing & Strategy',
    desc: 'Data-driven reach and business growth.',
    details:
      'Leveraging analytics, SEO, and paid media to construct comprehensive campaigns that maximize ROI and drive sustainable, scalable business growth across all digital touchpoints.',
    icon: (
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
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    desc: 'Platform growth and strategic content.',
    details:
      'Building vibrant online communities through viral content creation, influencer partnerships, and data-driven platform strategies that elevate brand awareness and engagement.',
    icon: (
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
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
  },
  {
    title: 'Branding & Positioning',
    desc: 'Defining identity and value communication.',
    details:
      'Crafting compelling brand narratives, visual identities, and unique value propositions that differentiate you in crowded markets and resonate deeply with your target audience.',
    icon: (
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
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: 'Content Systems',
    desc: 'Content strategy designed to attract, educate, and convert.',
    details:
      'Designing end-to-end content engines that consistently produce high-quality, SEO-optimized assets to attract prospects, nurture leads, and drive measurable conversions.',
    icon: (
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
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: 'Personal Branding',
    desc: 'Authority and influence for founders and professionals.',
    details:
      'Establishing executives and founders as thought leaders through strategic PR, speaking engagements, and high-impact personal content that builds unshakeable industry authority.',
    icon: (
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Growth Consultation',
    desc: 'Strategic blueprints to scale marketing efforts.',
    details:
      'Providing fractional CMO expertise and tailored growth blueprints to optimize your marketing stack, identify new revenue channels, and accelerate your overall business trajectory.',
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
]

const cardStyles = [
  { bg: 'text-white', contentText: 'text-blue-700', iconBg: 'bg-blue-700/10' },
  { bg: 'text-cyan-400', contentText: 'text-white', iconBg: 'bg-white/20' },
  { bg: 'text-blue-700', contentText: 'text-white', iconBg: 'bg-white/10' },
  { bg: 'text-blue-700', contentText: 'text-white', iconBg: 'bg-white/10' },
  { bg: 'text-white', contentText: 'text-blue-700', iconBg: 'bg-blue-700/10' },
  { bg: 'text-cyan-400', contentText: 'text-white', iconBg: 'bg-white/20' },
]

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridContainerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const [windowWidth, setWindowWidth] = useState(1200)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false
            return
          }

          const isMobile = window.innerWidth < 768
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024

          const rect = containerRef.current.getBoundingClientRect()
          const scrollDistance = rect.height - window.innerHeight
          const scrolled = -rect.top

          let p = scrolled / scrollDistance
          p = Math.max(0, Math.min(1, p))

          const entryProgress = Math.min(1, Math.max(0, p / 0.3))
          const spreadProgress = Math.min(1, Math.max(0, (p - 0.3) / 0.45))

          if (!isMobile) {
            if (headerRef.current) {
              headerRef.current.style.opacity = Math.max(
                0,
                1 - entryProgress * 1,
              ).toString()
              headerRef.current.style.pointerEvents =
                entryProgress > 0.1 ? 'none' : 'auto'
            }
            if (gridContainerRef.current) {
              gridContainerRef.current.style.transform = `translateY(${(1 - entryProgress) * 100}vh)`
            }

            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
            const spread = easeOut(spreadProgress)
            const stackAmount = 1 - spread

            const initialRotations = [-20, -12, -4, 4, 12, 20]

            cardsRef.current.forEach((card, index) => {
              if (!card) return

              const currentRotation = initialRotations[index] * stackAmount
              let xCalc = '0px'
              let yCalc = '0px'

              if (isTablet) {
                const col = index % 2
                const row = Math.floor(index / 2)

                const colOffset = col === 0 ? 0.5 : -0.5
                xCalc = `calc((${colOffset} * 100% + ${colOffset} * 32px) * ${stackAmount})`

                const rowOffset = 1 - row
                yCalc = `calc((${rowOffset} * 100% + ${rowOffset} * 32px) * ${stackAmount})`
              } else {
                const col = index % 3
                const row = Math.floor(index / 3)

                const colOffset = col === 0 ? 1 : col === 2 ? -1 : 0
                xCalc = `calc((${colOffset} * 100% + ${colOffset} * 32px) * ${stackAmount})`

                const rowOffset = row === 0 ? 0.5 : -0.5
                yCalc = `calc((${rowOffset} * 100% + ${rowOffset} * 32px) * ${stackAmount})`
              }

              card.style.transform = `translate(${xCalc}, ${yCalc}) rotate(${currentRotation}deg)`
            })
          } else {
            // Reset mobile styles
            if (headerRef.current) {
              headerRef.current.style.opacity = '1'
              headerRef.current.style.pointerEvents = 'auto'
            }
            if (gridContainerRef.current) {
              gridContainerRef.current.style.transform = 'none'
            }
            cardsRef.current.forEach((card) => {
              if (card)
                card.style.transform = 'translate(0px, 0px) rotate(0deg)'
            })
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial calculation
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isMobile = windowWidth < 768

  return (
    <section
      ref={containerRef}
      className="relative z-20 h-auto bg-[#01030a] md:h-[500vh]"
    >
      <div className="relative top-0 flex h-auto w-full flex-col items-center justify-center border-t border-white/5 px-6 py-20 md:sticky md:h-screen md:overflow-hidden md:px-10 md:py-0">
        <div className="relative flex h-full w-full max-w-[1500px] flex-col items-center md:justify-center">
          {/* Section Header (Centered, fades out as cards enter) */}
          <div
            ref={headerRef}
            className="relative mb-12 flex w-full max-w-3xl flex-col items-center px-6 text-center max-md:!pointer-events-auto max-md:!opacity-100 md:absolute md:top-1/2 md:left-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20 md:w-24" />
              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              <h3 className="font-syncopate text-sm font-bold tracking-widest text-white uppercase">
                Core Expertise
              </h3>
              <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />

              <div className="h-[1px] w-12 bg-white/20 md:w-24" />
            </div>
            <h2 className="font-syncopate text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl">
              WHAT I DO
            </h2>
          </div>

          {/* 3x2 Grid Container (Slides up, then cards spread) */}
          <div
            ref={gridContainerRef}
            className="relative grid w-full grid-cols-1 gap-6 will-change-transform max-md:!transform-none md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            {expertiseData.map((item, index) => (
              <ExpertiseCard
                key={index}
                item={item}
                index={index}
                styleConfig={cardStyles[index]}
                cardRef={(el) => {
                  cardsRef.current[index] = el
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({
  item,
  index,
  styleConfig,
  cardRef,
}: {
  item: (typeof expertiseData)[0] & { details?: string }
  index: number
  styleConfig: (typeof cardStyles)[0]
  cardRef: (el: HTMLDivElement | null) => void
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  const zIndex = 10 - index

  return (
    <div
      ref={cardRef}
      className="group relative aspect-square w-full cursor-pointer will-change-transform max-md:!transform-none lg:aspect-[4/3]"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1500px',
        zIndex,
      }}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
          {/* Responsive SVG Background Shape */}
          <svg
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
            className={`absolute inset-0 h-full w-full drop-shadow-xl ${styleConfig.bg}`}
          >
            <path
              d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z"
              fill="currentColor"
            />
          </svg>

          {/* Front Content */}
          <div
            className={`absolute inset-0 flex flex-col p-6 sm:p-10 lg:p-12 ${styleConfig.contentText}`}
          >
            <div
              className={`mb-auto inline-flex h-16 w-16 items-center justify-center self-start rounded-2xl md:self-end ${styleConfig.iconBg}`}
            >
              {item.icon}
            </div>

            <div className="pr-4 pb-16 sm:pb-4">
              <h4 className="font-syncopate text-3xl font-black tracking-tight md:text-3xl">
                {item.title}
              </h4>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
          {/* Back Background Shape */}
          <svg
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
            className={`absolute inset-0 h-full w-full drop-shadow-xl ${styleConfig.bg}`}
          >
            <path
              d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z"
              fill="currentColor"
            />
          </svg>

          {/* Back Content */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:p-8 lg:p-10 ${styleConfig.contentText}`}
          >
            <h4 className="font-syncopate mb-4 text-xl font-bold tracking-tight md:text-2xl">
              {item.title}
            </h4>
            <div className="mb-4 h-[2px] w-12 rounded-full bg-current opacity-30"></div>
            <p className="font-sans text-sm leading-relaxed font-medium opacity-90 md:text-base">
              {item.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
