'use client'

export default function MobileNavbar() {
  return (
    <header className="pointer-events-auto relative z-40 flex items-center justify-between p-6 md:hidden">
      <div className="flex flex-1">
        <div
          onClick={() => window.dispatchEvent(new Event('toggle-navigation'))}
          className="group flex cursor-pointer flex-col gap-2.5"
        >
          <div className="h-0.5 w-12 bg-white transition-transform group-hover:translate-x-2" />
          <div className="h-0.5 w-12 bg-white transition-transform group-hover:-translate-x-2" />
        </div>
      </div>
      <div className="font-syncopate text-xl font-bold tracking-widest text-white">
        AMOZZ
      </div>
      <div className="flex flex-1" />
    </header>
  )
}
