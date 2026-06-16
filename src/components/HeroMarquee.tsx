'use client'

import { useEffect, useRef } from 'react'

export default function HeroMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentScroll = window.scrollY
    let targetScroll = window.scrollY
    let animationFrameId: number

    const updateScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.05
      
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(-${currentScroll * 0.25}px)`
      }
      
      animationFrameId = requestAnimationFrame(updateScroll)
    }

    const handleScroll = () => {
      targetScroll = window.scrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    animationFrameId = requestAnimationFrame(updateScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden p-6 mix-blend-plus-lighter select-none">
      <div 
        ref={marqueeRef}
        className="flex w-max transition-transform duration-75 ease-out"
      >
        <div className="animate-marquee flex w-max whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] leading-none font-black tracking-tighter text-transparent opacity-90">
                BRANDING
              </span>
              <svg
                className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] leading-none font-black tracking-tighter text-transparent opacity-90">
                STUDIO
              </span>
              <svg
                className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] leading-none font-black tracking-tighter text-transparent opacity-90">
                CREATIVE
              </span>
              <svg
                className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
