'use client'

import { useEffect, useRef } from 'react'

export default function HeroMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let xPercent = 0
    const direction = -1 // -1 for left, 1 for right
    let animationFrameId: number

    let lastScrollY = window.scrollY
    let smoothVelocity = 0

    const updateMarquee = () => {
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY
      lastScrollY = currentScrollY
      smoothVelocity += (deltaY - smoothVelocity) * 0.1

      let direction = -1

      if (smoothVelocity > 1) {
        direction = -1
      } else if (smoothVelocity < -1) {
        direction = 1
      }

      const velocitySpeed = Math.abs(smoothVelocity) * 0.0012
      const baseSpeed = 0.012

      xPercent += (baseSpeed + velocitySpeed) * direction

      // Loop condition: we have 4 identical items.
      // -25% translates exactly 1 item width left.
      if (xPercent <= -25) {
        xPercent += 25
      } else if (xPercent > 0) {
        xPercent -= 25
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
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden p-6 select-none">
      <div ref={marqueeRef} className="flex w-max">
        <div className="flex w-max whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-syncopate mx-8 text-[22vw] leading-none font-black tracking-tighter text-white opacity-100 md:text-[14vw]">
                MARKETING
              </span>
              <svg
                className="mx-4 h-12 w-12 text-white lg:h-20 lg:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 text-[22vw] leading-none font-black tracking-tighter text-white opacity-100 md:text-[14vw]">
                STRATEGY
              </span>
              <svg
                className="mx-4 h-12 w-12 text-white lg:h-20 lg:w-20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 text-[22vw] leading-none font-black tracking-tighter text-white opacity-100 md:text-[14vw]">
                GROWTH
              </span>
              <svg
                className="mx-4 h-12 w-12 text-white lg:h-20 lg:w-20"
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
