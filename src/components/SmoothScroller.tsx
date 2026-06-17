'use client'

import { ReactNode, useEffect } from 'react'

import Lenis from 'lenis'

export default function SmoothScroller({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Adjust this value to make it smoother or faster
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleStop = () => lenis.stop()
    const handleStart = () => lenis.start()

    window.addEventListener('lenis-stop', handleStop)
    window.addEventListener('lenis-start', handleStart)

    return () => {
      window.removeEventListener('lenis-stop', handleStop)
      window.removeEventListener('lenis-start', handleStart)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
