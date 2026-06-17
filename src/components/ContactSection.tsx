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
            <div className="flex gap-6 text-white/50">
              <a
                href="https://x.com/amozz_in?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="font-syncopate text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-400"
              >
                X
              </a>
              <a
                href="https://www.instagram.com/amozz.in?igsh=MTdqZGMwYzJ4OWJobQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="font-syncopate text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-400"
              >
                INSTAGRAM
              </a>
              <a
                href="https://www.linkedin.com/in/vijilraj?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="font-syncopate text-xs font-bold uppercase tracking-wider transition-colors hover:text-blue-400"
              >
                LINKEDIN
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
