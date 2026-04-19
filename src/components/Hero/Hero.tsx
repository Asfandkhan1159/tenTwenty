import { Navbar } from '../Navbar/Navbar'
import { HeroSlide } from './HeroSlide'
import { HeroThumbnail } from './HeroThumbnail'
import { useSlider } from '../../hooks/useSlider'
import { SLIDES, AUTOPLAY_DURATION } from '../../constants/slides'

export function Hero() {
  const {
    activeIndex,
    nextIndex,
    totalSlides,
    goNext,
    borderRef,
  } = useSlider()

  const nextSlide = SLIDES[nextIndex]
  const nextThumb = nextSlide.bg.replace('w=1920', 'w=400')

  // Counter display: "01" format
  const pad = (n: number) => String(n + 1).padStart(2, '0')

  return (
    <section className="hero-section" aria-label="Hero banner">
      <Navbar />

      {/* All slides stacked — opacity controls which is visible */}
      {SLIDES.map((slide, i) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={i === activeIndex}
        />
      ))}

      {/* Thumbnail: shows next slide, click to advance */}
      <HeroThumbnail
        imgSrc={nextThumb}
        onClick={goNext}
        borderRef={borderRef}
        autoplayDuration={AUTOPLAY_DURATION}
      />

      {/* Slide counter */}
      <div className="hero-counter" aria-label={`Slide ${activeIndex + 1} of ${totalSlides}`}>
        <span>{pad(activeIndex)}</span>
        <div className="hero-counter__line">
          <div
            className="hero-counter__line-fill"
            style={{ width: `${((activeIndex + 1) / totalSlides) * 100}%` }}
          />
        </div>
        <span>{pad(totalSlides - 1)}</span>
      </div>
    </section>
  )
}
