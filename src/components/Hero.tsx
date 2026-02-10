'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = heroRef.current
    if (!node) return

    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      node.style.setProperty('--mx', `${x}%`)
      node.style.setProperty('--my', `${y}%`)
    }

    node.addEventListener('mousemove', handleMove)
    node.style.setProperty('--mx', '50%')
    node.style.setProperty('--my', '50%')

    return () => node.removeEventListener('mousemove', handleMove)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered fade out
      gsap.to(overlayRef.current, {
        opacity: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      data-theme="dark"
      className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden hero-ambient"
      style={{ height: '100vh' }}
    >
      <div className="absolute inset-0 hero-ambient-layer" />

      {/* Dark overlay for scroll transition */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black opacity-0 pointer-events-none z-10"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        {/* Main Title */}
        <div className="mask-reveal mb-6 perspective-1000">
          <h1 
            className="hero-title text-[12vw] md:text-[15vw] text-white tracking-tighter leading-none"
            style={{ perspective: '1000px' }}
          >
            PICARVIEW
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      <div className="hero-signature">
        <span className="handwriting">Create your view</span>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-white/20 z-20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-white/20 z-20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-white/20 z-20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-white/20 z-20" />
    </section>
  )
}
