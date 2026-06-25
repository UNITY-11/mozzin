'use client'

import { useEffect, useRef } from 'react'

export default function StatsMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let xPercent = 0
    let direction = -1
    let animationFrameId: number

    let lastScrollY = window.scrollY
    let smoothVelocity = 0

    const updateMarquee = () => {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY
      lastScrollY = currentScrollY

      smoothVelocity += (deltaY - smoothVelocity) * 0.1

      const velocitySpeed = Math.abs(smoothVelocity) * 0.002

      if (smoothVelocity > 1) {
        direction = -1
      } else if (smoothVelocity < -1) {
        direction = 1
      }

      const baseSpeed = 0.02
      xPercent += (baseSpeed + velocitySpeed) * direction

      // 6 items array, so 1 item = 100 / 6 = 16.6666%
      if (xPercent <= -16.6666) {
        xPercent += 16.6666
      } else if (xPercent > 0) {
        xPercent -= 16.6666
      }

      if (marqueeRef.current) {
        marqueeRef.current.style.transform = `translate3d(${xPercent}%, 0, 0)`
      }

      animationFrameId = requestAnimationFrame(updateMarquee)
    }

    updateMarquee()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="flex w-full overflow-hidden border-t border-b border-white/5 bg-[#01030a] py-3 md:py-6">
      <div ref={marqueeRef} className="flex w-max">
        <div className="flex w-max whitespace-nowrap">
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
