'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const hoverRef = useRef(false)

  useEffect(() => {
    // Check multiple ways to determine if it's a touch device
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches

    // Use setTimeout to avoid synchronous state setting inside useEffect (lint rule)
    const timer = setTimeout(() => setIsTouchDevice(isTouch), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    hoverRef.current = isHovering
  }, [isHovering])

  useEffect(() => {
    if (isTouchDevice) return

    const updatePosition = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      const target = e.target as HTMLElement
      const isPointer =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')

      setIsHovering(!!isPointer)
    }

    window.addEventListener('mousemove', updatePosition)

    let animationFrameId: number
    const render = () => {
      // Smoothly interpolate (lerp) the ring towards the mouse
      ring.current.x += (mouse.current.x - ring.current.x) * 0.2
      ring.current.y += (mouse.current.y - ring.current.y) * 0.2

      // Calculate the distance between the mouse and the center of the ring
      const dx = mouse.current.x - ring.current.x
      const dy = mouse.current.y - ring.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // The maximum distance the dot is allowed to travel from the center of the ring
      // Ring radius = 20px, Dot radius = 4px. Max safe distance = 16px. We use 14px for a nice margin.
      const maxDistance = 14

      let dotX = mouse.current.x
      let dotY = mouse.current.y

      // Clamp the dot's position to the inner edge of the ring if it tries to escape
      if (distance > maxDistance) {
        const angle = Math.atan2(dy, dx)
        dotX = ring.current.x + Math.cos(angle) * maxDistance
        dotY = ring.current.y + Math.sin(angle) * maxDistance
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) scale(${hoverRef.current ? 1.5 : 1})`
        ringRef.current.style.backgroundColor = hoverRef.current
          ? 'rgba(255, 255, 255, 0.1)'
          : 'transparent'
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`
        dotRef.current.style.opacity = hoverRef.current ? '0' : '1'
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isTouchDevice])

  if (isTouchDevice) {
    return null
  }

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 transition-[scale,background-color] duration-300 ease-out md:block"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity duration-150 md:block"
        style={{ transform: 'translate(-100px, -100px)' }}
      />
    </>
  )
}
