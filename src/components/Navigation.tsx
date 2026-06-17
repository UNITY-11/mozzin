'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.overscrollBehavior = 'none'
      window.dispatchEvent(new Event('lenis-stop'))
    } else {
      document.body.style.overflow = ''
      document.body.style.overscrollBehavior = ''
      window.dispatchEvent(new Event('lenis-start'))
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Listen for custom event to open navigation
  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('toggle-navigation', handleOpen)
    return () => window.removeEventListener('toggle-navigation', handleOpen)
  }, [])

  const navLinks = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'EXPERTISE', id: 'expertise' },
    { name: 'APPROACH', id: 'approach' },
    { name: 'FOUNDER', id: 'founder' },
    { name: 'CONTACT', id: 'contact' },
  ]

  const handleScrollTo = (id: string) => {
    setIsOpen(false)
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 400) // slight delay to allow closing animation
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 overflow-hidden text-white transition-all ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-700'
        }`}
      >
        {/* LEFT PANEL (Desktop Only) */}
        <div
          className={`absolute inset-y-0 left-0 hidden w-1/2 flex-col border-r border-white/5 bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:flex ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Left Header */}
          <div className="flex h-[90px] w-full items-center justify-between border-b border-white/5 px-12">
            <span className="font-syncopate text-xl font-bold tracking-wider">
              mozzin
            </span>
          </div>

          {/* Left Content */}
          <div className="flex h-full w-full flex-col justify-between overflow-y-auto p-8 lg:p-16">
            <div className="w-full max-w-lg">
              <div className="relative h-[180px] w-full bg-white/5 lg:h-[220px]">
                <Image
                  src="/images/hero-ui.webp"
                  alt="Navigation Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-syncopate mt-4 flex justify-between text-[10px] font-medium tracking-wider text-white/50 uppercase lg:text-xs">
                <div>
                  <p className="mb-1">Recent Project</p>
                  <p className="text-white capitalize">
                    Mozzin Brand & Strategy
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <p className="mb-1">Scope</p>
                  <p className="leading-relaxed text-white capitalize">
                    Visual Design
                    <br />
                    UI/UX Design
                    <br />
                    Web Development
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <div className="mb-4 flex gap-6 text-white opacity-50">
                <a
                  href="https://x.com/amozz_in?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-syncopate flex items-center text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-500"
                >
                  X
                  <svg className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/amozz.in?igsh=MTdqZGMwYzJ4OWJobQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-syncopate flex items-center text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-500"
                >
                  INSTAGRAM
                  <svg className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vijilraj?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-syncopate flex items-center text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-500"
                >
                  LINKEDIN
                  <svg className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
              <p className="text-xs leading-relaxed tracking-wide text-white/40">
                Delivering success with every solution.
                <br />© {new Date().getFullYear()} . Mozzin . All Rights
                Reserved
                <br />
                Designed & Developed by{' '}
                <a
                  href="https://unity11solutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 align-middle transition-opacity hover:opacity-80"
                >
                  <span className="relative inline-block h-4 w-4">
                    <Image src="/gif/unity11-logo.gif" alt="Unity11 Logo" fill className="object-contain" unoptimized />
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text font-bold text-transparent">UNITY11</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL (Desktop + Mobile) */}
        <div
          className={`absolute inset-y-0 right-0 flex w-full flex-col bg-[#0a0a0a] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] md:w-1/2 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Right Header */}
          <div className="flex h-[76px] w-full items-center justify-between border-b border-white/5 px-6 md:h-[90px] md:justify-end md:px-12">
            <span className="font-syncopate text-xl font-bold tracking-wider md:hidden">
              mozzin
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="font-syncopate text-sm font-bold tracking-widest uppercase transition-opacity hover:opacity-70"
            >
              Close
            </button>
          </div>

          {/* Right Content */}
          <div className="flex h-full w-full flex-col justify-center gap-0 overflow-y-auto px-0 md:px-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="group relative flex w-full items-center px-8 py-2 text-left transition-colors duration-300 hover:bg-blue-600 md:px-12 md:py-3 lg:px-24 lg:py-4"
              >
                <span className="font-syncopate flex items-center gap-2 text-2xl font-bold tracking-tighter text-blue-500 transition-all duration-300 group-hover:text-[#0a0a0a] md:text-4xl lg:text-5xl xl:text-6xl">
                  {/* Arrow Icon */}
                  <span className="w-0 overflow-hidden opacity-0 transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:w-8 group-hover:opacity-100 md:group-hover:w-12 lg:group-hover:w-16">
                    <svg
                      className="h-6 w-6 text-[#0a0a0a] md:h-8 md:w-8 lg:h-10 lg:w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                  {link.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
