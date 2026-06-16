import InteractiveHero from '@/components/InteractiveHero'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#01030a] font-sans text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/images/mozzin-bg.webp)' }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1700px] flex-col px-10">
        {/* Header */}
        <header className="z-30 flex items-center justify-between pt-10">
          <div className="group flex cursor-pointer flex-col gap-2">
            <div className="h-0.5 w-12 bg-white" />
            <div className="h-0.5 w-8 bg-white" />
          </div>

          <div className="font-syncopate flex items-center justify-center text-2xl font-bold tracking-widest text-white">
            MOZZIN<span className="text-blue-500">.IN</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="group cursor-pointer">
              <svg
                className="h-5 w-5 text-white transition-colors group-hover:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
            <div className="group cursor-pointer">
              <svg
                className="h-5 w-5 text-white transition-colors group-hover:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
            <div className="group cursor-pointer">
              <svg
                className="h-5 w-5 text-white transition-colors group-hover:text-blue-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
              </svg>
            </div>
          </div>
        </header>

        {/* Main Content Area - Pushed higher to align perfectly */}
        <div className="pointer-events-none absolute top-[160px] left-[40px] z-20 flex w-[calc(100%-80px)] items-start justify-between">
          {/* Left Text */}
          <div className="pointer-events-auto w-[35%]">
            <h1 className="font-syncopate mb-6 text-[54px] leading-[1.2] font-bold tracking-wide text-white">
              We Build
              <br />
              Brands That
              <br />
              <span className="font-medium text-[#3a7bf1] drop-shadow-md">
                Mean Business
              </span>
            </h1>
            <p className="max-w-sm text-[9px] leading-relaxed tracking-widest text-gray-400 uppercase opacity-80">
              Unlock your business solutions with our brand expert solutions.
              Unlock your business solutions with our brand expert solutions.
              Unlock your business solutions with our brand expert solutions.
            </p>
          </div>

          {/* Right Text */}
          <div className="pointer-events-auto w-[35%] text-right">
            <h2 className="font-syncopate text-[54px] leading-[1.2] font-bold tracking-wide text-white">
              CREATIVE
              <br />
              BRANDING
              <br />
              <span className="font-medium text-[#3a7bf1] drop-shadow-md">
                STUDIO
              </span>
            </h2>
          </div>
        </div>

        {/* Center Background Text - BRANDING */}
        <div className="pointer-events-none absolute top-[52%] left-1/2 z-0 flex w-full -translate-x-1/2 -translate-y-1/2 justify-center overflow-hidden text-center mix-blend-plus-lighter select-none">
          <div
            className="font-syncopate text-[24vw] leading-none font-black tracking-tighter"
            style={{ color: '#8fb7e8', opacity: 0.9 }}
          >
            BRANDING
          </div>
        </div>

        {/* Interactive Hero */}
        <div className="pointer-events-auto absolute bottom-0 left-1/2 z-10 w-full max-w-6xl -translate-x-1/2">
          <InteractiveHero />
        </div>

        {/* Curved Boxes */}
        {/* Left Box (White) */}
        <div className="pointer-events-auto absolute bottom-16 left-10 z-30">
          <div
            className="w-[340px] bg-white px-10 py-8 text-black"
            style={{
              clipPath:
                'polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)',
            }}
          >
            <div className="font-syncopate mb-6 text-[10px] font-bold tracking-[0.3em] text-gray-800">
              MAZZIN.IN
            </div>
            <div className="font-syncopate mb-2 text-6xl font-black tracking-tighter text-[#0b1021]">
              475+
            </div>
            <div className="mt-2 text-xs font-semibold tracking-widest text-gray-500">
              BUSINESS EXPERTS
            </div>
          </div>
        </div>

        {/* Right Box (Glass Outline) */}
        <div className="pointer-events-auto absolute right-10 bottom-16 z-30">
          <div className="relative flex h-[160px] w-[360px] flex-col justify-between px-8 py-6">
            {/* SVG Border Background to allow stroke around chamfer */}
            <svg
              width="360"
              height="160"
              viewBox="0 0 360 160"
              fill="none"
              className="pointer-events-none absolute inset-0 z-0 drop-shadow-2xl"
            >
              <path
                d="M40 1 L359 1 L359 120 L320 159 L1 159 L1 40 Z"
                fill="rgba(3,6,18,0.7)"
                stroke="rgba(30,58,138,0.7)"
                strokeWidth="1.5"
              />
            </svg>

            <div className="relative z-10 flex items-start justify-between">
              <span className="font-syncopate text-3xl font-bold tracking-wider text-white">
                200+
              </span>
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  className="h-10 w-10 rounded-full border-2 border-[#030612] shadow-sm grayscale"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=33"
                  className="h-10 w-10 rounded-full border-2 border-[#030612] shadow-sm grayscale"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  className="h-10 w-10 rounded-full border-2 border-[#030612] shadow-sm grayscale"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="relative z-10 mt-6 text-[11px] leading-relaxed font-bold tracking-[0.2em] text-[#8fb7e8] uppercase">
              YOUR PARTNER IN
              <br />
              BUSINESS GROWTH
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
