import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import type { Slide } from '../../constants/slides'

interface HeroSlideProps {
  slide: Slide
  isActive: boolean
}


export function HeroSlide({ slide, isActive }: HeroSlideProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    if (!contentRef.current) return

    const words = contentRef.current.querySelectorAll<HTMLSpanElement>('.hero-word')
    const label = contentRef.current.querySelector<HTMLSpanElement>('.hero-slide__label')


    gsap.set(words, { y: '110%' })
    gsap.set(label, { opacity: 0, y: 10 })

    if (!isActive) return

    const tl = gsap.timeline({ delay: 0.1 })
    tl.to(label, { opacity: 0.8, y: 0, duration: 0.5, ease: 'power2.out' })
      .to(words, { y: '0%', duration: 0.7, stagger: 0.06, ease: 'power3.out' }, '-=0.2')

    return () => { tl.kill() }
  }, [isActive])


  const renderLine = (line: string, lineIndex: number) => (
    <div key={lineIndex} className="block">
      {line.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="hero-word-wrapper">
          <span className="hero-word">{word}</span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`hero-slide ${isActive ? 'hero-slide--active' : 'hero-slide--inactive'}`}
      aria-hidden={!isActive}
    >
      {/* Background image */}
      <img
        src={slide.bg}
        alt={`Slide ${slide.id} — ${slide.titleLines.join(' ')}`}
        className="hero-slide__bg"
        loading={slide.id === 1 ? 'eager' : 'lazy'}
      />

      {/* Gradient overlay */}
      <div className="hero-slide__overlay" aria-hidden="true" />


      <div ref={contentRef} className="hero-slide__content">
        <p className="hero-slide__label">{slide.label}</p>
        <h1 className="hero-slide__title">
          {slide.titleLines.map((line, i) => renderLine(line, i))}
        </h1>
      </div>
    </div>
  )
}
