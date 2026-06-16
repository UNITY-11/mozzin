'use client'

import { useEffect, useRef, useState } from 'react'

const expertiseData = [
  {
    title: 'Digital Marketing & Strategy',
    desc: 'Data-driven reach and business growth.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Social Media Marketing',
    desc: 'Platform growth and strategic content.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: 'Branding & Positioning',
    desc: 'Defining identity and value communication.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Content Systems',
    desc: 'Content strategy designed to attract, educate, and convert.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'Personal Branding',
    desc: 'Authority and influence for founders and professionals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Growth Consultation',
    desc: 'Strategic blueprints to scale marketing efforts.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const cardStyles = [
  { bg: 'text-white', contentText: 'text-black', iconBg: 'bg-black/5' },
  { bg: 'text-blue-300', contentText: 'text-black', iconBg: 'bg-black/10' },
  { bg: 'text-blue-700', contentText: 'text-white', iconBg: 'bg-white/10' },
  { bg: 'text-blue-700', contentText: 'text-white', iconBg: 'bg-white/10' },
  { bg: 'text-white', contentText: 'text-black', iconBg: 'bg-black/5' },
  { bg: 'text-blue-300', contentText: 'text-black', iconBg: 'bg-black/10' },
]

export default function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) observer.unobserve(sectionRef.current)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative z-20 bg-[#01030a] py-24 lg:py-32 border-t border-white/5">
      <div ref={sectionRef} className="mx-auto max-w-[1500px] px-6 md:px-10">
        
        {/* Section Header */}
        <div className={`mb-16 flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-white/20 md:w-24" />
            <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
            <h3 className="font-syncopate text-sm font-bold tracking-widest text-white uppercase">
              Core Expertise
            </h3>
            <div className="h-[1px] w-12 bg-white/20 md:w-24" />
          </div>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
            What I Do
          </h2>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseData.map((item, index) => (
            <ExpertiseCard 
              key={index} 
              item={item} 
              index={index} 
              styleConfig={cardStyles[index]}
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({ 
  item, 
  index, 
  styleConfig, 
  isVisible 
}: { 
  item: typeof expertiseData[0], 
  index: number, 
  styleConfig: typeof cardStyles[0],
  isVisible: boolean 
}) {
  return (
    <div
      className={`group relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full h-full transition-transform duration-500 group-hover:-translate-y-2 group-hover:drop-shadow-2xl">
        {/* Responsive SVG Background Shape (Rounded Chamfer Design) */}
        <svg 
          viewBox="0 0 400 400" 
          preserveAspectRatio="none" 
          className={`absolute inset-0 w-full h-full drop-shadow-xl ${styleConfig.bg}`}
        >
          <path 
            d="M 0 24 Q 0 0 24 0 L 320 0 Q 335 0 345 10 L 390 55 Q 400 65 400 80 L 400 376 Q 400 400 376 400 L 80 400 Q 65 400 55 390 L 10 345 Q 0 335 0 320 Z" 
            fill="currentColor" 
          />
        </svg>

        {/* Card Content */}
        <div className={`relative z-10 p-10 lg:p-12 h-full flex flex-col ${styleConfig.contentText}`}>
          <div className={`mb-auto self-end inline-flex h-16 w-16 items-center justify-center rounded-2xl ${styleConfig.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12`}>
            {item.icon}
          </div>
          
          <div className="pr-4 pb-4">
            <h4 className="mb-3 font-syncopate text-2xl md:text-3xl font-black tracking-tight">
              {item.title}
            </h4>
            <p className="font-sans opacity-80 leading-relaxed font-medium text-lg">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
