import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { CarouselCard } from './CarouselCard'
import { CAROUSEL_ITEMS } from '../../constants/slides'

const getCardWidth = () => (window.innerWidth >= 768 ? 320 : 260)
const getCardGap = () => (window.innerWidth >= 768 ? 24 : 16)
const DRAG_THRESHOLD = 50

interface ProductCarouselProps {
  onCarouselHover: (hovering: boolean) => void
}

export function ProductCarousel({ onCarouselHover }: ProductCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(2)
  const [infoVisible, setInfoVisible] = useState(true)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const lastX = useRef(0)
  const baseOffset = useRef(0)

  const totalItems = CAROUSEL_ITEMS.length

  const offsetForIndex = useCallback((index: number) => {
    const cardWidth = getCardWidth()
    const cardGap = getCardGap()
    return -index * (cardWidth + cardGap)
  }, [])

  const snapToIndex = useCallback(
    (index: number, animate = true) => {
      const track = trackRef.current
      if (!track) return
      const tx = offsetForIndex(index)
      if (animate) {
        gsap.to(track, { x: tx, duration: 0.55, ease: 'power2.out' })
      } else {
        gsap.set(track, { x: tx })
      }
    },
    [offsetForIndex]
  )

  useEffect(() => {
    requestAnimationFrame(() => {
      snapToIndex(0, false)
    })
  }, [snapToIndex])

  useEffect(() => {
    snapToIndex(activeIndex)
    setInfoVisible(false)
    const t = setTimeout(() => setInfoVisible(true), 350)
    return () => clearTimeout(t)
  }, [activeIndex, snapToIndex])

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(totalItems - 1, index)))
    },
    [totalItems]
  )

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    startX.current = e.clientX
    lastX.current = e.clientX
    baseOffset.current = offsetForIndex(activeIndex)
    const track = trackRef.current
    if (track) {
      ; (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
    }
  }, [activeIndex, offsetForIndex])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    lastX.current = e.clientX
    const delta = e.clientX - startX.current
    const track = trackRef.current
    if (!track) return
    gsap.set(track, { x: baseOffset.current + delta })
  }, [])

  const onPointerUp = useCallback((_e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    isDragging.current = false
    const delta = lastX.current - startX.current
    if (Math.abs(delta) > DRAG_THRESHOLD) {
      goTo(delta < 0 ? activeIndex + 1 : activeIndex - 1)
    } else {
      snapToIndex(activeIndex)
    }
  }, [activeIndex, goTo, snapToIndex])

  const activeItem = CAROUSEL_ITEMS[activeIndex]

  return (
    <div
      className="carousel"
      onMouseEnter={() => onCarouselHover(true)}
      onMouseLeave={() => onCarouselHover(false)}
    >
      <div
        ref={trackRef}
        className="carousel__track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ userSelect: 'none', touchAction: 'pan-y' }}
      >
        {CAROUSEL_ITEMS.map((item, i) => (
          <CarouselCard
            key={item.id}
            img={item.img}
            name={item.name}
            index={i}
            activeIndex={activeIndex}
            total={totalItems}
          />
        ))}
      </div>

      <div className="carousel__info">
        <p className={`carousel__info-name ${infoVisible ? 'carousel__info-name--visible' : ''}`}>
          {activeItem.name}
        </p>
        <p className={`carousel__info-location ${infoVisible ? 'carousel__info-location--visible' : ''}`}>
          {activeItem.location}
        </p>
      </div>
    </div>
  )
}
