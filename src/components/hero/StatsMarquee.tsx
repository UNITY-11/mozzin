'use client'

import { useEffect, useRef } from 'react'

export default function StatsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translateX(${scrollY * -0.2}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="flex w-full overflow-hidden border-t border-b border-white/5 bg-[#01030a] py-3 md:py-6">
      <div ref={marqueeRef} className="flex w-max">
        <div
          className="animate-marquee flex w-max whitespace-nowrap"
          style={{ animationDuration: '30s' }}
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-syncopate mx-4 text-xs font-bold tracking-widest text-white md:mx-8 md:text-2xl">
                10+ YEARS EXPERIENCE
              </span>
              <span className="text-xs text-blue-500 md:text-base">✦</span>
              <span className="font-syncopate mx-4 text-xs font-bold tracking-widest text-white md:mx-8 md:text-2xl">
                299+ DELIVERIES
              </span>
              <span className="text-xs text-blue-500 md:text-base">✦</span>
              <span className="font-syncopate mx-4 text-xs font-bold tracking-widest text-white md:mx-8 md:text-2xl">
                99% POSITIVE REVIEWS
              </span>
              <span className="text-xs text-blue-500 md:text-base">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
