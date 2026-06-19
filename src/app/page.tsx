import dynamic from 'next/dynamic'

import HeroBackground from '@/components/hero/HeroBackground'
import HeroContent from '@/components/hero/HeroContent'
import HeroMarquee from '@/components/hero/HeroMarquee'
import InteractiveHero from '@/components/hero/InteractiveHero'
import MobileNavbar from '@/components/layout/MobileNavbar'

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'))
const ApproachSection = dynamic(
  () => import('@/components/sections/ApproachSection'),
)
const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
)
const ExpertiseSection = dynamic(
  () => import('@/components/sections/ExpertiseSection'),
)
const FounderSection = dynamic(
  () => import('@/components/sections/FounderSection'),
)

export default function Home() {
  return (
    <main
      id="home"
      className="relative w-full bg-[#01030a] font-sans text-white"
    >
      {/* 1. FIXED BACKGROUND z-0 */}
      <HeroBackground />

      {/* HERO SCROLLING CONTAINER */}
      <div className="relative flex h-screen w-full flex-col md:block md:min-h-screen">
        {/* TOP SECTION ON MOBILE: NAVBAR + IMAGE + MARQUEE / FIXED OVERLAY ON DESKTOP */}
        <div className="relative z-20 flex h-[50vh] w-full flex-col overflow-hidden md:contents">
          {/* Mobile Navbar - client component for interactivity */}
          <MobileNavbar />

          {/* Marquee behind image on mobile (z-10, image is z-20) */}
          <div className="absolute inset-0 z-10 md:hidden">
            <HeroMarquee />
          </div>

          {/* Interactive Hero image */}
          <div className="pointer-events-none absolute inset-0 z-20 flex items-end justify-center md:fixed md:inset-0 md:p-6">
            <div className="pointer-events-auto absolute inset-0 flex items-end justify-center">
              <InteractiveHero />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION ON MOBILE: TEXT CONTENT / BASE LAYER ON DESKTOP */}
        <div className="relative flex h-[50vh] w-full flex-col overflow-hidden bg-[#01030a] md:block md:h-auto md:min-h-screen md:bg-transparent">
          {/* Marquee on desktop only */}
          <div className="hidden md:block">
            <HeroMarquee />
          </div>

          {/* SCROLLING UI CONTENT z-30 */}
          <div className="pointer-events-none relative z-30 flex h-full w-full flex-col p-6 md:min-h-screen md:pt-6">
            <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col">
              <HeroContent />
            </div>
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
      <div
        id="founder"
        className="relative z-30 mt-0 bg-[#01030a] md:-mt-[100vh]"
      >
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
