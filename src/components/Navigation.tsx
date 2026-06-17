'use client'

import { useEffect, useState } from 'react'

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
          <div className="flex h-full w-full flex-col justify-between overflow-y-auto p-12 lg:p-24">
            <div className="w-full max-w-lg">
              <img
                src="/images/hero-ui.webp"
                alt="Navigation Image"
                className="h-[250px] w-full bg-white/5 object-cover lg:h-[300px]"
              />
              <div className="font-syncopate mt-6 flex justify-between text-[10px] font-medium tracking-wider text-white/50 uppercase lg:text-xs">
                <div>
                  <p className="mb-2">Recent Project</p>
                  <p className="text-white capitalize">
                    Mozzin Brand & Strategy
                  </p>
                </div>
                <div className="text-right md:text-left">
                  <p className="mb-2">Scope</p>
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

            <div className="mt-auto pt-16">
              <div className="mb-4 flex gap-4 text-white opacity-50">
                <a
                  href="https://x.com/amozz_in?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/amozz.in?igsh=MTdqZGMwYzJ4OWJobQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vijilraj?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-blue-500"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
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
                  <img src="/gif/unity11-logo.gif" alt="Unity11 Logo" className="h-4 w-4 object-contain" />
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
                className="group relative flex w-full items-center px-8 py-3 text-left transition-colors duration-300 hover:bg-blue-600 md:px-12 md:py-4 lg:px-24 lg:py-5"
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
