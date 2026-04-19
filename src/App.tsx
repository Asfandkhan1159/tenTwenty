import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Hero } from './components/Hero/Hero'
import { ProductCarousel } from './components/Products/ProductCarousel'
import { CustomCursor } from './components/CustomCursor/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

interface ProductsSectionProps {
  onCarouselHover: (hovering: boolean) => void
}

function ProductsSection({ onCarouselHover }: ProductsSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const titleRef = useRef<HTMLSpanElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const title = titleRef.current
    const desc = descRef.current
    if (!title || !desc) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    tl.to(title, {
      y: '0%',
      duration: 0.8,
      ease: 'power3.out',
    }).to(
      desc,
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.3'
    )

    return () => { tl.kill() }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="products-section"
      id="services"
      aria-label="Quality Products"
    >
      <div className="products-section__header">
        <h2 className="products-section__title">
          <span ref={titleRef} className="products-section__title-inner">
            Quality Products
          </span>
        </h2>
        <p ref={descRef} className="products-section__desc">
          We partner with local farmers across the UAE to bring you the freshest,
          highest-quality produce — harvested with care and delivered straight
          from our farms to your table.
        </p>
      </div>
      <ProductCarousel onCarouselHover={onCarouselHover} />
    </section>
  )
}

export default function App() {
  const [isCarouselHovered, setIsCarouselHovered] = useState(false)

  return (
    <>
      <CustomCursor isCarouselHovered={isCarouselHovered} />
      <main>
        <Hero />
        <ProductsSection onCarouselHover={setIsCarouselHovered} />
      </main>
    </>
  )
}
