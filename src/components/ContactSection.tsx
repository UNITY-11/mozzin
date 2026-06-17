'use client'

import { useEffect, useRef, useState } from 'react'

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t border-white/10 bg-[#01030a]"
    >
      {/* ─── Top Row: Heading + Form ─── */}
      <div className="mx-auto max-w-[1500px] px-6 pt-24 pb-12 md:px-10 lg:pt-32 lg:pb-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          {/* ─── Left: Large Heading ─── */}
          <div className="flex flex-col justify-center lg:w-1/2">
            {/* Heading */}
            <div
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div className="mb-4 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                <div className="h-[1px] w-16 bg-white/20" />
              </div>

              <h2 className="font-syncopate text-5xl leading-[1.05] font-black tracking-tighter text-white md:text-6xl lg:text-7xl xl:text-8xl">
                LET&apos;S
                <br />
                <span className="ml-8 md:ml-16">GET IN</span>
                <br />
                <span className="text-blue-500">TOUCH</span>
              </h2>
            </div>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div
            className={`flex flex-col justify-center transform transition-all delay-200 duration-1000 lg:w-1/2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            <form
              className="flex flex-col gap-0"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Full Name */}
              <div className="group relative border-b border-white/10 py-6 transition-colors hover:border-white/30">
                <label className="font-syncopate mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-white/20 md:text-xl"
                />
                <div className="absolute right-0 bottom-6 text-white/20 transition-colors group-hover:text-white/50">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Email + Phone Row */}
              <div className="flex flex-col gap-0 md:flex-row">
                <div className="group relative flex-1 border-b border-white/10 py-6 transition-colors hover:border-white/30 md:border-r">
                  <label className="font-syncopate mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-white/20 md:text-xl md:pr-4"
                  />
                  <div className="absolute right-0 bottom-6 text-white/20 transition-colors group-hover:text-white/50 md:right-4">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                <div className="group relative flex-1 border-b border-white/10 py-6 transition-colors hover:border-white/30 md:pl-6">
                  <label className="font-syncopate mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-transparent text-lg font-light text-white outline-none placeholder:text-white/20 md:text-xl"
                  />
                  <div className="absolute right-0 bottom-6 text-white/20 transition-colors group-hover:text-white/50">
                    <svg
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="group relative border-b border-white/10 py-6 transition-colors hover:border-white/30">
                <label className="font-syncopate mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                  Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none bg-transparent text-lg font-light text-white outline-none placeholder:text-white/20 md:text-xl"
                />
                <div className="absolute right-0 top-6 text-white/20 transition-colors group-hover:text-white/50">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Submit Arrow */}
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="group flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                  <svg
                    className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ─── Bottom: Contact Info + Social ─── */}
      <div className="mx-auto max-w-[1500px] border-t border-white/5 px-6 py-12 md:px-10 lg:py-16">
        <div
          className={`flex flex-col gap-12 transform transition-all delay-500 duration-1000 md:flex-row md:items-start md:justify-between ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          {/* Location */}
          <div>
            <p className="font-syncopate mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Based In
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Kerala, India
              <br />
              Available Worldwide
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="font-syncopate mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Email
            </p>
            <a
              href="mailto:hello@mozzin.com"
              className="text-sm text-white/70 transition-colors hover:text-blue-400"
            >
              hello@mozzin.com
            </a>
          </div>

          {/* Social */}
          <div>
            <p className="font-syncopate mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Follow
            </p>
            <div className="flex gap-4 text-white/50">
              <a
                href="https://x.com/amozz_in?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/amozz.in?igsh=MTdqZGMwYzJ4OWJobQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vijilraj?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-blue-400"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Credits */}
          <div className="text-right">
            <p className="font-syncopate mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
              Credits
            </p>
            <p className="text-xs leading-relaxed text-white/40">
              © {new Date().getFullYear()} Mozzin. All Rights Reserved.
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
    </section>
  )
}
