import type { Metadata } from 'next'
import { Geist, Geist_Mono, Syncopate } from 'next/font/google'

import Navigation from '@/components/layout/Navigation'
import SmoothScroller from '@/components/layout/SmoothScroller'
import CustomCursor from '@/components/ui/CustomCursor'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const syncopate = Syncopate({
  variable: '--font-syncopate',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Mozzin',
  description: 'Mozzin Portfolio Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syncopate.variable}`}
    >
      <body suppressHydrationWarning>
        <SmoothScroller>
          <CustomCursor />
          <Navigation />
          {children}
        </SmoothScroller>
      </body>
    </html>
  )
}
