import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface CarouselCardProps {
  img: string
  name: string
  index: number
  activeIndex: number
  total: number
}

function getCardTransform(index: number, activeIndex: number) {
  const diff = index - activeIndex
  if (diff === 0)       return { rotation: 0,   scale: 1.00 }
  if (diff === -1)      return { rotation: -8,  scale: 0.88 }
  if (diff === 1)       return { rotation: 8,   scale: 0.88 }
  if (diff < -1)        return { rotation: -14, scale: 0.78 }
  /* diff > 1 */        return { rotation: 14,  scale: 0.78 }
}

export function CarouselCard({ img, name, index, activeIndex }: CarouselCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const { rotation, scale } = getCardTransform(index, activeIndex)
    gsap.to(cardRef.current, { rotation, scale, duration: 0.55, ease: 'power2.out' })
  }, [index, activeIndex])

  const { rotation, scale } = getCardTransform(index, activeIndex)

  return (
    <div
      ref={cardRef}
      className="carousel-card"
      aria-label={name}
      style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
    >
      <img
        src={img}
        alt={name}
        className="carousel-card__img"
        loading="lazy"
        draggable={false}
      />
    </div>
  )
}
