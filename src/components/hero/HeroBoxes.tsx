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
            <div
              className="relative flex h-[120px] w-[220px] flex-col items-center justify-between overflow-hidden bg-white/5 px-6 py-4 text-center backdrop-blur-3xl backdrop-brightness-110 backdrop-saturate-150 md:h-[140px] md:w-[250px] md:px-8 md:py-5 lg:h-[160px] lg:w-[280px] lg:px-10 lg:py-6"
              style={{
                clipPath:
                  'polygon(0 10%, 5% 0, 72% 0, 76% 4%, 100% 4%, 100% 90%, 92% 100%, 0 100%, 0 65%, 5% 60%, 5% 35%, 0 30%)',
                transform: 'translateZ(0)',
                boxShadow:
                  'inset 0 2px 6px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(255,255,255,0.1)',
              }}
            >
              {/* Liquid Glass Reflections */}
              <div className="pointer-events-none absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-white/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/40" />

              <div className="font-syncopate relative z-10 text-[9px] font-bold tracking-[0.3em] text-white md:text-[10px]">
                MAZZIN.IN
              </div>
              <div className="font-syncopate relative z-10 text-center text-4xl font-black tracking-tighter text-white drop-shadow-md md:text-5xl lg:text-6xl">
                45+
              </div>
              <div className="relative z-10 font-sans text-[9px] font-semibold tracking-widest text-white md:text-[10px]">
                BUSINESS EXPERTS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right Box */}
        <div className="pointer-events-auto relative self-end">
          <div className="drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            <div
              className="relative flex h-[120px] w-[220px] flex-col items-center justify-between overflow-hidden bg-white/5 px-6 py-4 text-center backdrop-blur-3xl backdrop-brightness-110 backdrop-saturate-150 md:h-[140px] md:w-[250px] md:px-8 md:py-5 lg:h-[160px] lg:w-[280px] lg:px-10 lg:py-6"
              style={{
                clipPath:
                  'polygon(0 10%, 5% 0, 72% 0, 76% 4%, 100% 4%, 100% 90%, 92% 100%, 0 100%, 0 65%, 5% 60%, 5% 35%, 0 30%)',
                transform: 'translateZ(0)',
                boxShadow:
                  'inset 0 2px 6px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(255,255,255,0.1)',
              }}
            >
              {/* Liquid Glass Reflections */}
              <div className="pointer-events-none absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-white/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/40" />

              <span className="font-syncopate relative z-10 text-xl font-bold tracking-wider text-white drop-shadow-md md:text-2xl lg:text-3xl">
                120+
              </span>
              <div className="relative z-10 flex -space-x-2 md:-space-x-3">
                <Image
                  src="https://i.pravatar.cc/150?img=11"
                  width={40}
                  height={40}
                  className="h-6 w-6 rounded-full border border-white/50 shadow-sm md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
                <Image
                  src="https://i.pravatar.cc/150?img=33"
                  width={40}
                  height={40}
                  className="h-6 w-6 rounded-full border border-white/50 shadow-sm md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
                <Image
                  src="https://i.pravatar.cc/150?img=47"
                  width={40}
                  height={40}
                  className="h-6 w-6 rounded-full border border-white/50 shadow-sm md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
              </div>
              <div className="relative z-10 font-sans text-[8px] leading-relaxed font-bold tracking-[0.2em] text-white uppercase md:text-[10px] lg:text-[11px]">
                YOUR PARTNER IN
                <br />
                BUSINESS GROWTH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
