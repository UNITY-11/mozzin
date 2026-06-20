import Image from 'next/image'

export default function HeroBoxes() {
  return (
    <div className="mt-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-end lg:px-4">
      {/* =========================================
          MOBILE LAYOUT (< 768px)
          ========================================= */}
      <div className="pointer-events-auto flex w-full md:hidden">
        <div className="w-full rounded-[24px] border border-white/10 bg-[#0a0a0a]/90 p-5 shadow-2xl backdrop-blur-xl">
          {/* Top Row */}
          <div className="flex w-full items-start justify-between gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-500/50 text-cyan-400">
                  <svg
                    className="h-2.5 w-2.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <p className="max-w-[80px] text-[8px] leading-tight text-white/70">
                  Full support peoples from all over the world
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex -space-x-1.5">
                <div className="font-syncopate flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-blue-600 text-[9px] font-bold text-white shadow-sm">
                  In
                </div>
                <div className="font-syncopate flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-cyan-600 text-[9px] font-bold text-white shadow-sm">
                  Ig
                </div>
                <div className="font-syncopate flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#0a0a0a] bg-black text-[9px] font-bold text-white shadow-sm">
                  X
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-1 justify-end text-right">
              <p className="max-w-[150px] text-[10px] leading-relaxed text-white/50">
                <span className="font-bold text-white/90">MAZZIN.IN</span> is
                your partner in business growth, creating modern digital
                experiences.
              </p>
            </div>
          </div>

          {/* Bottom Row - Stats */}
          <div className="mt-8 flex w-full items-end justify-start gap-12 border-b-[1.5px] border-cyan-500/40 pb-3">
            <div className="flex flex-col">
              <span className="font-syncopate text-3xl font-black tracking-tighter text-white">
                45+
              </span>
              <span className="mt-1 text-[7px] font-bold tracking-widest text-cyan-400 uppercase">
                - BUSINESS EXPERTS
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-syncopate text-3xl font-black tracking-tighter text-white">
                120+
              </span>
              <span className="mt-1 text-[7px] font-bold tracking-widest text-cyan-400 uppercase">
                - PROJECT DONE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          DESKTOP LAYOUT (>= 768px)
          ========================================= */}
      <div className="hidden w-full justify-between md:flex md:flex-row md:items-end">
        {/* Bottom Left Box */}
        <div className="pointer-events-auto self-start md:self-end">
          <div className="drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="relative z-10 h-[120px] w-[220px] md:h-[140px] md:w-[250px] lg:h-[160px] lg:w-[280px]">
              {/* Glass Blur (Clipped with rough CSS polygon) */}
              <div
                className="absolute inset-0 backdrop-blur-3xl backdrop-brightness-110 backdrop-saturate-[1.2]"
                style={{
                  clipPath:
                    'polygon(6% 0, 80% 0, 100% 20%, 100% 94%, 94% 100%, 20% 100%, 0 80%, 0 6%)',
                  transform: 'translateZ(0)',
                }}
              >
                {/* SVG Filter for Liquid Effect */}
                <div
                  className="absolute inset-0 z-0 bg-white/5 mix-blend-overlay"
                  style={{ filter: 'url(#glass-blur)' }}
                />
              </div>

              {/* Glowing SVG Background, Gradients & Border */}
              <svg
                className="pointer-events-none absolute inset-0 z-20 h-full w-full drop-shadow-sm"
                viewBox="0 0 400 400"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="left-glass-top"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <linearGradient
                    id="left-glass-tr"
                    x1="0"
                    y1="1"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                />
                <path
                  d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z"
                  fill="url(#left-glass-top)"
                />
                <path
                  d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z"
                  fill="url(#left-glass-tr)"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Content Container */}
              <div className="relative z-30 flex h-full w-full flex-col items-center justify-between p-4 text-center md:p-5 lg:p-6">
                <div className="font-syncopate text-[9px] font-bold tracking-[0.3em] text-white md:text-[10px]">
                  MAZZIN.IN
                </div>
                <div className="font-syncopate text-4xl font-black tracking-tighter text-white drop-shadow-md md:text-5xl lg:text-6xl">
                  45+
                </div>
                <div className="font-sans text-[9px] font-semibold tracking-widest text-white md:text-[10px]">
                  BUSINESS EXPERTS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Box */}
        <div className="pointer-events-auto relative self-end">
          <div className="drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div className="relative z-10 h-[120px] w-[220px] md:h-[140px] md:w-[250px] lg:h-[160px] lg:w-[280px]">
              {/* Glass Blur (Clipped with rough CSS polygon) */}
              <div
                className="absolute inset-0 backdrop-blur-3xl backdrop-brightness-110 backdrop-saturate-[1.2]"
                style={{
                  clipPath:
                    'polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 53%, 23% 41%, 30% 0)',
                  transform: 'translateZ(0)',
                }}
              >
                {/* SVG Filter for Liquid Effect */}
                <div
                  className="absolute inset-0 z-0 bg-white/5 mix-blend-overlay"
                  style={{ filter: 'url(#glass-blur)' }}
                />
              </div>

              {/* Glowing SVG Background, Gradients & Border */}
              <svg
                className="pointer-events-none absolute inset-0 z-20 h-full w-full drop-shadow-sm"
                viewBox="0 0 280 160"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="right-glass-top"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                  <linearGradient
                    id="right-glass-tr"
                    x1="0"
                    y1="1"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                <path
                  d="M 85 0 L 260 0 C 271 0, 280 9, 280 20 L 280 140 C 280 151, 271 160, 260 160 L 20 160 C 9 160, 0 151, 0 140 L 0 85 C 0 74, 9 65, 20 65 L 45 65 Q 65 65, 65 45 L 65 20 C 65 9, 74 0, 85 0 Z"
                  fill="rgba(255, 255, 255, 0.05)"
                />
                <path
                  d="M 85 0 L 260 0 C 271 0, 280 9, 280 20 L 280 140 C 280 151, 271 160, 260 160 L 20 160 C 9 160, 0 151, 0 140 L 0 85 C 0 74, 9 65, 20 65 L 45 65 Q 65 65, 65 45 L 65 20 C 65 9, 74 0, 85 0 Z"
                  fill="url(#right-glass-top)"
                />
                <path
                  d="M 85 0 L 260 0 C 271 0, 280 9, 280 20 L 280 140 C 280 151, 271 160, 260 160 L 20 160 C 9 160, 0 151, 0 140 L 0 85 C 0 74, 9 65, 20 65 L 45 65 Q 65 65, 65 45 L 65 20 C 65 9, 74 0, 85 0 Z"
                  fill="url(#right-glass-tr)"
                  stroke="rgba(255, 255, 255, 0.5)"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Content Container */}
              <div className="relative z-30 flex h-full w-full flex-col justify-between p-4 text-left md:p-5 lg:p-6">
                {/* Top Row: Constrained to the right side (75% width for the narrower cutout) */}
                <div className="flex w-full justify-end">
                  <div className="flex w-[75%] items-center justify-between pl-2 lg:pr-2">
                    <span className="font-syncopate text-lg font-bold tracking-wider text-white drop-shadow-md md:text-xl lg:text-2xl">
                      200+
                    </span>
                    <div className="flex -space-x-2 md:-space-x-3">
                      <Image
                        src="https://i.pravatar.cc/150?img=11"
                        width={40}
                        height={40}
                        className="h-5 w-5 rounded-full border border-white/50 shadow-sm md:h-7 md:w-7 lg:h-9 lg:w-9"
                        alt="avatar"
                      />
                      <Image
                        src="https://i.pravatar.cc/150?img=33"
                        width={40}
                        height={40}
                        className="h-5 w-5 rounded-full border border-white/50 shadow-sm md:h-7 md:w-7 lg:h-9 lg:w-9"
                        alt="avatar"
                      />
                      <Image
                        src="https://i.pravatar.cc/150?img=47"
                        width={40}
                        height={40}
                        className="h-5 w-5 rounded-full border border-white/50 shadow-sm md:h-7 md:w-7 lg:h-9 lg:w-9"
                        alt="avatar"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="font-syncopate mt-auto text-[8px] leading-[1.4] font-bold tracking-widest text-white uppercase drop-shadow-sm md:text-[9px] lg:text-[10px]">
                  YOUR PARTNER IN
                  <br />
                  BUSINESS GROWTH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
