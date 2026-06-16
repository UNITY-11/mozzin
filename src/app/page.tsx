import InteractiveHero from '@/components/InteractiveHero'

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#01030a] p-6 font-sans text-white ">
      
      {/* Background Layer (z-0) - Horizontal Gradient matching the uploaded image */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80 mix-blend-lighten"
        style={{ background: 'linear-gradient(to right, #000318, #0033cc, #00eeff)' }}
      />

      {/* Grid Overlay Layer */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-100 mix-blend-overlay"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* BRANDING Text Layer (z-10) */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center overflow-hidden mix-blend-plus-lighter select-none">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {/* We render the same block twice to create a seamless infinite scroll loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] font-black leading-none tracking-tighter text-transparent opacity-90">
                BRANDING
              </span>
              <svg className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] font-black leading-none tracking-tighter text-transparent opacity-90">
                STUDIO
              </span>
              <svg className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              <span className="font-syncopate mx-8 bg-gradient-to-t from-blue-500 to-white bg-clip-text text-[14vw] font-black leading-none tracking-tighter text-transparent opacity-90">
                CREATIVE
              </span>
              <svg className="mx-4 h-12 w-12 text-blue-500 opacity-80 lg:h-20 lg:w-20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Hero Layer (z-20) */}
      <div className="pointer-events-auto absolute inset-0 z-20 flex items-end justify-center">
        <InteractiveHero />
      </div>

      {/* UI Content Flow (z-30) - Completely Flexible Layout, NO absolute positioning for content! */}
      <div className="pointer-events-none relative z-30 mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
        
        {/* Header */}
        <header className="pointer-events-auto flex items-center justify-between">
          
          <div className="flex flex-1">
            <div className="group flex cursor-pointer flex-col gap-2.5">
              <div className="h-0.5 w-12 bg-white md:w-14 lg:w-16" />
              <div className="h-0.5 w-12 bg-white md:w-14 lg:w-16" />
            </div>
          </div>

          <div className="font-syncopate flex items-center justify-center text-xl font-bold tracking-widest text-white md:text-3xl">
            MOZZIN
          </div>

          <div className="flex flex-1 items-center justify-end gap-4 md:gap-6">
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:bg-white">
              <svg className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </div>
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:bg-white">
              <svg className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </div>
            <div className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/50 transition-all hover:bg-white">
              <svg className="h-4 w-4 text-white transition-colors group-hover:text-blue-500 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </div>
          </div>
          
        </header>

        {/* Main Content Areas that space themselves out vertically */}
        <div className="mt-12 flex flex-1 flex-col justify-between md:mt-16">
          
          {/* Top Row: Headings */}
          <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-start lg:px-4">
            {/* Left Text */}
            <div className="pointer-events-auto w-full max-w-[300px] md:max-w-md">
              <h1 className="mb-4 font-sans text-3xl font-semibold leading-[1] tracking-wide text-white md:mb-6 md:text-4xl lg:text-3xl">
               
                <span className="font-syncopate bg-gradient-to-r from-blue-500 to-white bg-clip-text font-bold text-transparent drop-shadow-md">
                   I'm helping 
                <br />
                Brands To Grow
                <br />
                   In The Digital Era
                </span>
              </h1>
            </div>

            {/* Right Text */}
            <div className="pointer-events-auto md:text-right">
              <h2 className="font-syncopate text-2xl font-bold leading-[1] tracking-wide text-white md:text-3xl lg:text-5xl">
                CREATIVE
                <br />
                BRANDING
                <br />
                STUDIO

              </h2>
            </div>
          </div>

          {/* Bottom Row: Boxes */}
          <div className="mt-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-end lg:px-4">
            
            {/* Bottom Left Box */}
            <div className="pointer-events-auto self-start md:self-end">
              <div className="drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]">
                <div
                  className="flex h-[120px] w-[240px] flex-col justify-between bg-white/[0.03] px-6 py-4 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:h-[140px] md:w-[280px] md:px-8 md:py-5 lg:h-[160px] lg:w-[320px] lg:px-10 lg:py-6"
                  style={{ clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)' }}
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
                  style={{ clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)' }}
                >               
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-syncopate text-xl font-bold tracking-wider text-white md:text-2xl lg:text-3xl">
                      200+
                    </span>
                    <div className="flex -space-x-2 md:-space-x-3">
                      <img src="https://i.pravatar.cc/150?img=11" className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10" alt="avatar" />
                      <img src="https://i.pravatar.cc/150?img=33" className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10" alt="avatar" />
                      <img src="https://i.pravatar.cc/150?img=47" className="h-6 w-6 rounded-full border-2 border-white/10 shadow-sm grayscale md:h-8 md:w-8 lg:h-10 lg:w-10" alt="avatar" />
                    </div>
                  </div>
                  <div className="relative z-10 font-sans text-[8px] font-bold uppercase leading-relaxed tracking-[0.2em] text-[#8fb7e8] md:text-[10px] lg:text-[11px]">
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
    </main>
  )
}
