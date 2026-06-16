import AboutSection from '@/components/AboutSection'
import HeroBackground from '@/components/HeroBackground'
import HeroBoxes from '@/components/HeroBoxes'
import HeroContent from '@/components/HeroContent'
import HeroMarquee from '@/components/HeroMarquee'
import InteractiveHero from '@/components/InteractiveHero'

export default function Home() {
  return (
    <main className="relative w-full bg-[#01030a] font-sans text-white">
      {/* 1. FIXED BACKGROUND z-0 */}
      <HeroBackground />

      {/* HERO SCROLLING CONTAINER (Spans exactly 100vh) */}
      <div className="relative min-h-screen w-full">
        {/* 2. SCROLLING MARQUEE z-10 (Behind Image, Scrolls Up) */}
        <HeroMarquee />

        {/* 3. FIXED INTERACTIVE HERO z-20 (In Front of Marquee, Fixed) */}
        <div className="pointer-events-none fixed inset-0 z-20 flex flex-col p-6">
          <div className="pointer-events-auto absolute inset-0 flex items-end justify-center">
            <InteractiveHero />
          </div>
        </div>

        {/* 4. SCROLLING UI CONTENT z-30 (In Front of Image, Scrolls Up) */}
        <div className="pointer-events-none relative z-30 flex min-h-screen w-full flex-col p-6">
          <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
            <HeroContent />
          </div>
        </div>

        {/* 5. FIXED BOXES z-40 (In Front of everything in hero, Fixed) */}
        <div className="pointer-events-none fixed inset-0 z-40 flex flex-col p-6">
          <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
            <div className="flex-1" />
            <HeroBoxes />
          </div>
        </div>
      </div>

      {/* 6. ABOUT SECTION z-50 (Scrolls up and covers all fixed layers) */}
      <AboutSection />
    </main>
  )
}
