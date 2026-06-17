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
    <div ref={containerRef} className="relative h-full w-full">
      {/* Background Hero Image (Hero 2 - Hidden when not hovering to avoid bleeding through transparent areas) */}
      <Image
        src="/images/hero-2.webp"
        alt="Mozzin CEO Alternate"
        fill
        priority
        className="pointer-events-none absolute inset-0 object-cover transition-opacity duration-300"
        style={{ opacity: isHovering ? 1 : 0 }}
      />

      {/* Foreground Hero Image (Hero 1 - Erased at the cursor) */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          maskImage: isHovering
            ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 50%, rgba(0,0,0,1) 80%)`
            : `none`,
          WebkitMaskImage: isHovering
            ? `radial-gradient(circle 450px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 50%, rgba(0,0,0,1) 80%)`
            : `none`,
        }}
      >
        <Image
          src="/images/hero-1.webp"
          alt="Mozzin CEO"
          fill
          priority
          className="pointer-events-none absolute inset-0 object-cover"
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
