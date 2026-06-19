'use client'

import { useRef, useState } from 'react'

import Image from 'next/image'

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

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full origin-bottom scale-[1.9] md:scale-95"
    >
      {/* Spotlight Background Effect */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(circle 500px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 80%)`,
        }}
      />
      {/* Base Image (Always visible) */}
      <Image
        src="/images/hero-top.webp"
        alt="Mozzin CEO"
        fill
        priority
        className="pointer-events-none absolute inset-0 object-contain object-bottom"
      />

      {/* Reveal Image (Only visible inside the cursor circle) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, black 50%, transparent 80%)`,
        }}
      >
        <Image
          src="/images/hero-bottom.webp"
          alt="Mozzin CEO Alternate"
          fill
          priority
          className="pointer-events-none absolute inset-0 object-contain object-bottom"
        />
      </div>

      {/* Invisible Trigger Zone - restricts hover effect to the actual person in the center */}
      <div
        className="absolute bottom-0 left-1/2 z-10 h-[85%] w-[600px] -translate-x-1/2 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </div>
  )
}
