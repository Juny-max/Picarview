import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LenisProvider } from '@/components/LenisProvider'

const metropolisBlack = localFont({
  src: '../../public/fonts/Metropolis-Black.otf',
  variable: '--font-metropolis-black',
  display: 'swap',
})

const metropolisBold = localFont({
  src: '../../public/fonts/Metropolis-Bold.otf',
  variable: '--font-metropolis-bold',
  display: 'swap',
})

const bacalisties = localFont({
  src: '../../public/fonts/Bacalisties.ttf',
  variable: '--font-bacalisties',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Picarview | Premium Creative Agency',
  description: 'Create your view. A creative company focused on shaping how pictures, art, and visual ideas are perceived.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${metropolisBlack.variable} ${metropolisBold.variable} ${bacalisties.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" />
      </body>
    </html>
  )
}
