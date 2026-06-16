/* eslint-disable @next/next/no-img-element */
export default function HeroBoxes() {
  return (
    <div className="mt-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-end lg:px-4">
      {/* Bottom Left Box */}
      <div className="pointer-events-auto self-start md:self-end">
        <div className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
          <div
            className="flex h-[120px] w-[240px] flex-col justify-between bg-white/[0.03] px-6 py-4 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:h-[140px] md:w-[280px] md:px-8 md:py-5 lg:h-[160px] lg:w-[320px] lg:px-10 lg:py-6"
            style={{
              clipPath:
                'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)',
            }}
          >
            <div className="font-syncopate text-[9px] font-bold tracking-[0.3em] text-white/70 md:text-[10px]">
              MAZZIN.IN
            </div>
            <div className="font-syncopate text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl">
              475+
            </div>
            <div className="font-sans text-[9px] font-semibold tracking-widest text-[#8fb7e8] md:text-[10px]">
              BUSINESS EXPERTS
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Box */}
      <div className="pointer-events-auto relative self-end">
        <div className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
          <div
            className="relative z-10 flex h-[120px] w-[240px] flex-col justify-between bg-white/[0.03] px-6 py-4 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:h-[140px] md:w-[280px] md:px-8 md:py-5 lg:h-[160px] lg:w-[320px] lg:px-10 lg:py-6"
            style={{
              clipPath:
                'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)',
            }}
          >
            <div className="relative z-10 flex items-start justify-between">
              <span className="font-syncopate text-xl font-bold tracking-wider text-white md:text-2xl lg:text-3xl">
                200+
              </span>
              <div className="flex -space-x-2 md:-space-x-3">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=33"
                  className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="relative z-10 font-sans text-[8px] leading-relaxed font-bold tracking-[0.2em] text-[#8fb7e8] uppercase md:text-[10px] lg:text-[11px]">
              YOUR PARTNER IN
              <br />
              BUSINESS GROWTH
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
