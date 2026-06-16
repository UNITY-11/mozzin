import { Facebook, Instagram, Twitter } from 'lucide-react'

import InteractiveHero from '@/components/InteractiveHero'

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#020510] font-sans text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-lighten"
        style={{ backgroundImage: 'url(/images/mozzin-bg.webp)' }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-8 py-10">
        {/* Header */}
        <header className="z-30 mb-8 flex items-center justify-between">
          <div className="group flex cursor-pointer flex-col gap-1.5">
            <div className="h-0.5 w-10 bg-white transition-all group-hover:w-12" />
            <div className="h-0.5 w-7 bg-white transition-all group-hover:w-10" />
          </div>

          <div className="font-syncopate flex items-center justify-center text-2xl font-bold tracking-widest text-blue-100">
            MOZZIN<span className="text-blue-500">.IN</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-white">
              <Instagram className="h-4 w-4 text-gray-300 hover:text-white" />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-white">
              <Facebook className="h-4 w-4 text-gray-300 hover:text-white" />
            </div>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-gray-500 transition-colors hover:border-white">
              <Twitter className="h-4 w-4 text-gray-300 hover:text-white" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="relative z-20 mt-12 flex flex-1 items-start justify-between">
          {/* Left Text */}
          <div className="w-[35%]">
            <h1 className="font-syncopate mb-8 text-4xl leading-snug font-bold text-gray-200 lg:text-5xl">
              We Build
              <br />
              Brands That
              <br />
              <span className="text-blue-500">Mean Business</span>
            </h1>
            <p className="max-w-sm text-[10px] leading-relaxed tracking-wider text-gray-400 uppercase">
              Unlock your business solutions with our brand expert solutions.
              Unlock your business solutions with our brand expert solutions.
              Unlock your business solutions with our brand expert solutions.
            </p>
          </div>

          {/* Right Text */}
          <div className="w-[35%] text-right">
            <h2 className="font-syncopate text-4xl leading-snug font-bold text-gray-200 lg:text-5xl">
              CREATIVE
              <br />
              BRANDING
              <br />
              <span className="text-blue-500">STUDIO</span>
            </h2>
          </div>
        </div>

        {/* Center Background Text - BRANDING */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 flex w-full -translate-x-1/2 -translate-y-[40%] justify-center overflow-hidden text-center select-none">
          <div
            className="font-syncopate text-[18vw] leading-none font-black tracking-tighter"
            style={{
              background:
                'linear-gradient(to bottom, #8fbdf5 0%, #355ba5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0.9,
            }}
          >
            BRANDING
          </div>
        </div>

        {/* Interactive Hero */}
        <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-5xl -translate-x-1/2">
          <InteractiveHero />
        </div>

        {/* Curved Boxes */}
        {/* Left Box (White) */}
        <div className="pointer-events-auto absolute bottom-16 left-8 z-30">
          <div className="w-72 rounded-tl-xl rounded-tr-[50px] rounded-br-xl rounded-bl-[50px] bg-white/95 p-8 text-black shadow-2xl backdrop-blur-md">
            <div className="font-syncopate mb-6 text-[9px] font-bold tracking-widest text-gray-800">
              MAZZIN.IN
            </div>
            <div className="font-syncopate mb-3 text-5xl font-black tracking-tighter text-[#0b1021]">
              475+
            </div>
            <div className="text-xs font-semibold tracking-wider text-gray-500">
              BUSINESS EXPERTS
            </div>
          </div>
        </div>

        {/* Right Box (Glass Outline) */}
        <div className="pointer-events-auto absolute right-8 bottom-16 z-30">
          <div className="flex h-[150px] w-80 flex-col justify-between rounded-tl-[40px] rounded-tr-xl rounded-br-[40px] rounded-bl-xl border-[1px] border-blue-500/40 bg-[#0b1b42]/40 p-6 shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <span className="font-syncopate text-2xl font-bold text-blue-100">
                200+
              </span>
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/150?img=11"
                  className="h-10 w-10 rounded-full border-2 border-[#0b1b42] shadow-sm"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=33"
                  className="h-10 w-10 rounded-full border-2 border-[#0b1b42] shadow-sm"
                  alt="avatar"
                />
                <img
                  src="https://i.pravatar.cc/150?img=47"
                  className="h-10 w-10 rounded-full border-2 border-[#0b1b42] shadow-sm"
                  alt="avatar"
                />
              </div>
            </div>
            <div className="text-[10px] leading-relaxed font-semibold tracking-widest text-blue-200/80 uppercase">
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
