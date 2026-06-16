'use client'

import { useRef, useState } from 'react'

export default function InteractiveHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMousePosition({ x, y })
  }

  // To hide mask when mouse leaves
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[850px] w-full items-end justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base Hero Image */}
      <img
        src="/images/hero-1.webp"
        alt="Mozzin CEO"
        className="pointer-events-none absolute bottom-0 w-[900px] object-contain transition-opacity duration-300"
      />

      {/* Hover Mask Hero Image */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 20%, transparent 100%)`,
        }}
      >
        <img
          src="/images/hero-2.webp"
          alt="Mozzin CEO Alternate"
          className="absolute bottom-0 left-1/2 w-[900px] -translate-x-1/2 object-contain"
        />
        {/* Glow Element mimicking background brightness */}
        <div
          className="pointer-events-none absolute rounded-full bg-blue-300/40 mix-blend-screen blur-[100px]"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
            width: 400,
            height: 400,
          }}
        />
      </div>
    </div>
  )
}
