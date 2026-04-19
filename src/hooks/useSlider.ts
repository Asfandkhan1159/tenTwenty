import { useState, useRef, useCallback, useEffect } from 'react'
import { SLIDES, AUTOPLAY_DURATION } from '../constants/slides'

export function useSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const borderRef = useRef<SVGRectElement | null>(null)

  const totalSlides = SLIDES.length

  // Restart the SVG border animation by toggling the CSS class
  const restartBorderAnimation = useCallback(() => {
    const el = borderRef.current
    if (!el) return

    el.classList.remove('hero-thumbnail__border-fill--animating')
    // Force reflow so browser resets the animation
    void (el as SVGRectElement & { offsetWidth: number }).getBoundingClientRect()
    el.classList.add('hero-thumbnail__border-fill--animating')
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex(index)
    restartBorderAnimation()

    // Allow next transition after 1s (matches CSS opacity transition)
    setTimeout(() => setIsAnimating(false), 1000)
  }, [isAnimating, restartBorderAnimation])

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % totalSlides
    goToSlide(next)
  }, [activeIndex, totalSlides, goToSlide])

  // Reset and start autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current)
    autoplayRef.current = setTimeout(() => {
      goNext()
    }, AUTOPLAY_DURATION)
  }, [goNext])

  // Restart autoplay whenever slide changes
  useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
    }
  }, [activeIndex, startAutoplay])

  // Start border animation on mount
  useEffect(() => {
    restartBorderAnimation()
  }, [restartBorderAnimation])

  const nextIndex = (activeIndex + 1) % totalSlides

  return {
    activeIndex,
    nextIndex,
    totalSlides,
    goNext,
    goToSlide,
    borderRef,
    isAnimating,
  }
}
