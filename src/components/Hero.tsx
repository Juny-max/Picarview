'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
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
      // Title animation on load
      const titleChars = titleRef.current?.querySelectorAll('.char')
      if (titleChars) {
        gsap.fromTo(
          titleChars,
          {
            y: 150,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: 'power4.out',
            delay: 0.5,
          }
        )
      }

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          delay: 1.2,
        }
      )

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

      gsap.to(titleRef.current, {
        y: -100,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.to(subtitleRef.current, {
        y: -50,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const titleText = 'PICARVIEW'
  const chars = titleText.split('')

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
        <div ref={titleRef} className="mask-reveal mb-6 perspective-1000">
          <h1 
            className="hero-title text-[12vw] md:text-[15vw] text-white tracking-tighter leading-none"
            style={{ perspective: '1000px' }}
          >
            {chars.map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleRef}
          className="relative inline-block px-8 py-4 rounded-full border border-white/20"
        >
          <p className="text-2xl md:text-3xl text-zinc-300 tracking-wide uppercase">
            Create your view
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-white/20 z-20" />
      <div className="absolute top-8 right-8 w-24 h-24 border-r border-t border-white/20 z-20" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-l border-b border-white/20 z-20" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-white/20 z-20" />
    </section>
  )
}
