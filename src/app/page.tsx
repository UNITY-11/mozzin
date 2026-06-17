import dynamic from 'next/dynamic'
import HeroBackground from '@/components/HeroBackground'
import HeroContent from '@/components/HeroContent'
import HeroMarquee from '@/components/HeroMarquee'
import InteractiveHero from '@/components/InteractiveHero'

const AboutSection = dynamic(() => import('@/components/AboutSection'))
const ApproachSection = dynamic(() => import('@/components/ApproachSection'))
const ContactSection = dynamic(() => import('@/components/ContactSection'))
const ExpertiseSection = dynamic(() => import('@/components/ExpertiseSection'))
const FounderSection = dynamic(() => import('@/components/FounderSection'))

export default function Home() {
  return (
    <main
      id="home"
      className="relative w-full bg-[#01030a] font-sans text-white"
    >
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
      </div>

      {/* 6. ABOUT SECTION z-50 (Scrolls up and covers all fixed layers) */}
      <div id="about">
        <AboutSection />
      </div>

      {/* 7. EXPERTISE SECTION (What I Do) */}
      <div id="expertise">
        <ExpertiseSection />
      </div>

      {/* FOUNDER SECTION (Slides over ExpertiseSection) */}
      <div id="founder" className="relative z-30 mt-[-100vh] bg-[#01030a]">
        <FounderSection />
      </div>

      {/* APPROACH SECTION */}
      <div id="approach" className="relative z-30 bg-[#01030a]">
        <ApproachSection />
      </div>

      {/* CONTACT SECTION */}
      <div id="contact" className="relative z-30 bg-[#01030a]">
        <ContactSection />
      </div>
    </main>
  )
}
