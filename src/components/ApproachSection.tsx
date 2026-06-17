'use client'

import { useEffect, useRef } from 'react'

export default function ApproachSection() {
  const containerRef = useRef<HTMLElement>(null)
  
  // Phase 1: Rolling Text
  const rollingTextContainerRef = useRef<HTMLDivElement>(null)
  const whiteWrapperRef = useRef<HTMLDivElement>(null)
  const blueWrapperRef = useRef<HTMLDivElement>(null)
  
  // Phase 2: Paragraphs Text Reveal
  const paragraphsRef = useRef<HTMLDivElement>(null)
  
  // Phase 3 & 4: Blue Stack and Flip
  const blueStackContainerRef = useRef<HTMLDivElement>(null)
  const stackHeaderRef = useRef<HTMLHeadingElement>(null)
  const blueCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const backdropRef = useRef<HTMLDivElement>(null)

  const items = [
    "Developing comprehensive brand identities from scratch",
    "Executing high-ROI social media and content campaigns",
    "Designing and launching high-conversion web platforms",
    "Consulting startups on go-to-market strategies"
  ]

  useEffect(() => {
    let animationFrameId: number

    const handleScroll = () => {
      if (!containerRef.current) return
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
      if (whiteWrapperRef.current) whiteWrapperRef.current.style.transform = translateY
      if (blueWrapperRef.current) blueWrapperRef.current.style.transform = translateY

      // Fade out rolling text between 0.25 and 0.3
      if (rollingTextContainerRef.current) {
        if (progress >= 0.28) {
          rollingTextContainerRef.current.style.opacity = Math.max(0, 1 - (progress - 0.28) / 0.02).toString()
          rollingTextContainerRef.current.style.pointerEvents = 'none'
        } else {
          rollingTextContainerRef.current.style.opacity = '1'
          rollingTextContainerRef.current.style.pointerEvents = 'auto'
        }
      }

      // ===== PHASE 2: Paragraphs Text Reveal (0.3 to 0.6) =====
      // Fade in at 0.3, reveal text 0.35 -> 0.55, fade out at 0.6
      const pFadeIn = Math.max(0, Math.min(1, (progress - 0.3) / 0.05))
      const pFadeOut = progress > 0.6 ? Math.max(0, 1 - (progress - 0.6) / 0.05) : 1
      const pOpacity = Math.min(pFadeIn, pFadeOut)
      
      // Map 0.35 to 0.55 to 0% to 100%
      const revealPct = Math.max(0, Math.min(1, (progress - 0.35) / 0.2)) * 100

      if (paragraphsRef.current) {
        paragraphsRef.current.style.opacity = pOpacity.toString()
        paragraphsRef.current.style.pointerEvents = pOpacity > 0.5 ? 'auto' : 'none'
        paragraphsRef.current.style.setProperty('--reveal-pct', `${revealPct}%`)
      }

      // ===== PHASE 3 & 4: Blue Stack (0.65 to 1.0) =====
      // Slide in from bottom between 0.65 and 0.75
      let stackTranslateY = windowHeight
      if (progress >= 0.65 && progress < 0.75) {
        const gapSize = 16 // Target gap size in px
        const slideP = (progress - 0.65) / 0.1
        stackTranslateY = windowHeight * (1 - slideP)
      } else if (progress >= 0.75) {
        stackTranslateY = 0
      }
      
      // Map 0.75 to 1.0 for gap expansion and flip
      const flipProgress = Math.max(0, Math.min(1, (progress - 0.75) / 0.25))

      if (blueStackContainerRef.current) {
        blueStackContainerRef.current.style.transform = `translateY(${stackTranslateY}px)`
        blueStackContainerRef.current.style.opacity = progress >= 0.65 ? '1' : '0'
        blueStackContainerRef.current.style.pointerEvents = progress >= 0.65 ? 'auto' : 'none'
        
        // Expand gap: 0px to 2rem (32px)
        blueStackContainerRef.current.style.setProperty('--stack-gap', `${flipProgress * 32}px`)
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
      // @ts-ignore
      blueCardsRef.current.forEach((card, i) => {
        if (!card) return
        
        // Simultaneous flip progress
        const cardP = flipProgress
        
        // Spread calculation (gap without shrinking cards)
        // 4 cards: indices 0, 1, 2, 3 -> multipliers -1.5, -0.5, 0.5, 1.5
        const spreadMax = 16 // px
        const translateX = (i - 1.5) * (cardP * spreadMax)
        
        // RotateX from 0 to -180deg for simultaneous venetian blind effect
        card.style.transform = `translateX(${translateX}px) rotateX(${cardP * -180}deg)`
      })

      animationFrameId = requestAnimationFrame(handleScroll)
    }

    // Initial call
    handleScroll()
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section ref={containerRef} className="relative w-full h-[1200vh] bg-[#01030a] border-t border-white/10">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 lg:px-8">
        
        {/* Main Heading (Static Top) */}
        <div className="absolute top-12 md:top-16 lg:top-20 w-full flex justify-center z-10 pointer-events-none">
          <h2 className="font-syncopate text-lg md:text-2xl lg:text-3xl font-black tracking-widest text-blue-500 uppercase">
            WHY WORK WITH ME
          </h2>
        </div>

        {/* =========================================
            PHASE 1: ROLLING TEXT
            ========================================= */}
        <div 
          ref={rollingTextContainerRef}
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-20"
        >
          <div 
            className="relative h-[16vw] md:h-[12vw] lg:h-[10vw] w-full max-w-[100vw] overflow-hidden pointer-events-auto select-none"
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
              className="absolute top-0 inset-x-0 flex flex-col items-center justify-start transition-transform duration-500 ease-out w-full"
            >
              {['Strategy.', 'Creativity.', 'Consistency.'].map((word, i) => (
                <div key={i} className="flex h-[16vw] md:h-[12vw] lg:h-[10vw] w-full shrink-0 items-center justify-center">
                  <h3 className="font-syncopate whitespace-nowrap leading-none font-black tracking-tighter text-white text-[13vw] md:text-[9vw] lg:text-[7vw] xl:text-[8vw]">
                    {word}
                  </h3>
                </div>
              ))}
            </div>

            {/* Stationary Mask Container */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                maskImage: 'radial-gradient(circle 8vw at var(--cursor-x, -100px) var(--cursor-y, -100px), black 100%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle 8vw at var(--cursor-x, -100px) var(--cursor-y, -100px), black 100%, transparent 100%)',
              }}
            >
              {/* Blue Hover Layer (Moving inside Mask) */}
              <div 
                ref={blueWrapperRef}
                className="absolute top-0 inset-x-0 flex flex-col items-center justify-start transition-transform duration-500 ease-out w-full"
                aria-hidden="true"
              >
                {['Strategy.', 'Creativity.', 'Consistency.'].map((word, i) => (
                  <div key={i} className="flex h-[16vw] md:h-[12vw] lg:h-[10vw] w-full shrink-0 items-center justify-center">
                    <h3 className="font-syncopate whitespace-nowrap leading-none font-black tracking-tighter text-blue-500 text-[13vw] md:text-[9vw] lg:text-[7vw] xl:text-[8vw]">
                      {word}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            PHASE 2: PARAGRAPHS REVEAL
            ========================================= */}
        <div 
          ref={paragraphsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 z-30"
        >
          <div className="w-full max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
            <p 
              className="flex-1 text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, white var(--reveal-pct, 0%), #1f2937 var(--reveal-pct, 0%))'
              }}
            >
              I believe successful brands are not built through random marketing efforts, but through a calculated mix of strategy, creativity, and consistency.
            </p>
            <p 
              className="flex-1 text-2xl md:text-3xl lg:text-4xl leading-relaxed font-light bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, white var(--reveal-pct, 0%), #1f2937 var(--reveal-pct, 0%))'
              }}
            >
              I don’t just create content. I help businesses understand their audience, craft compelling narratives, and execute strategies that drive real growth.
            </p>
          </div>
        </div>

        {/* =========================================
            PHASE 3 & 4: BLUE STACK & CARD FLIP
            ========================================= */}
        <div 
          ref={blueStackContainerRef}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-0 z-40"
        >
          <div 
            className="relative flex flex-row w-full max-w-6xl px-6 h-[50vh] min-h-[300px] max-h-[500px]" 
            style={{ gap: '0px', perspective: '5000px' }}
          >
            {/* Solid blue backdrop to hide any sub-pixel rendering gaps before the flip starts */}
            <div 
              ref={backdropRef}
              className="absolute top-0 bottom-0 left-6 right-6 bg-blue-600 pointer-events-none transition-opacity duration-75"
            />
            
            {items.map((item, i) => (
              <div 
                key={i} 
                className="relative h-full flex-1"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div 
                  // @ts-ignore
                  ref={el => { blueCardsRef.current[i] = el }}
                  className="absolute inset-0 w-full h-full ease-out"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateX(0deg)' }}
                >
                  {/* Front Face: Solid Blue with Sliced Text */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-blue-600 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div 
                      className="absolute top-0 h-full flex items-center justify-center pointer-events-none"
                      style={{ 
                        width: 'calc(100% * 4)', 
                        left: `calc(-100% * ${i})` 
                      }}
                    >
                      <h4 className="font-syncopate text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black uppercase text-center w-full px-4">
                        What I've Been<br />Working On
                      </h4>
                    </div>
                  </div>

                  {/* Front Face Notches (Extracted as siblings to avoid overflow-hidden aliasing lines) */}
                  {(i === 0 || i === 2) && (
                    <svg viewBox="0 0 160 32" className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 md:w-64 h-6 md:h-8 pointer-events-none z-50" preserveAspectRatio="none" style={{ backfaceVisibility: 'hidden' }}>
                      <path d="M 0 0 L 35 0 L 50 32 L 110 32 L 125 0 L 160 0 Z" fill="#01030a" />
                    </svg>
                  )}
                  {(i === 1 || i === 3) && (
                    <svg viewBox="0 0 160 32" className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-48 md:w-64 h-6 md:h-8 pointer-events-none z-50" preserveAspectRatio="none" style={{ backfaceVisibility: 'hidden' }}>
                      <path d="M 0 32 L 35 32 L 50 0 L 110 0 L 125 32 L 160 32 Z" fill="#01030a" />
                    </svg>
                  )}
                  
                  {/* Back Face Wrapper */}
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}
                  >
                    {/* Back Face Background */}
                    <div className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center px-4 py-6 md:px-6 md:py-8 shadow-[0_0_40px_rgba(37,99,235,0.12)] overflow-hidden">
                      {/* Decorative Background Elements */}
                      <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-70 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-100/60 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                      
                      <svg className="absolute inset-0 w-full h-full text-blue-900/[0.03] pointer-events-none" aria-hidden="true">
                        <defs>
                          <pattern id={`dots-${i}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#dots-${i})`} />
                      </svg>

                      <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center mb-6 shadow-sm border border-blue-100/60">
                        <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <span className="relative z-10 text-slate-800 text-sm md:text-base lg:text-lg font-medium text-center leading-relaxed">
                        {item}
                      </span>
                    </div>

                    {/* Back Face Notches (Siblings inside wrapper) */}
                    {(i === 0 || i === 2) && (
                      <svg viewBox="0 0 160 32" className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-48 md:w-64 h-6 md:h-8 pointer-events-none z-50" preserveAspectRatio="none">
                        <path d="M 0 32 L 35 32 L 50 0 L 110 0 L 125 32 L 160 32 Z" fill="#01030a" />
                      </svg>
                    )}
                    {(i === 1 || i === 3) && (
                      <svg viewBox="0 0 160 32" className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-48 md:w-64 h-6 md:h-8 pointer-events-none z-50" preserveAspectRatio="none">
                        <path d="M 0 0 L 35 0 L 50 32 L 110 32 L 125 0 L 160 0 Z" fill="#01030a" />
                      </svg>
                    )}
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
