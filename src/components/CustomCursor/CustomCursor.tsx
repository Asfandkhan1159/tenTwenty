import { useRef } from 'react'
import { useMousePosition } from '../../hooks/useMousePosition'

interface CustomCursorProps {
  isCarouselHovered: boolean
}

export function CustomCursor({ isCarouselHovered }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  useMousePosition(cursorRef)

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isCarouselHovered ? 'custom-cursor--carousel' : ''}`}
      aria-hidden="true"
      style={{ position: 'fixed', top: 0, left: 0 }}
    >
      {isCarouselHovered && (
        <span className="custom-cursor__label">
          <span>‹ </span>
          <span> ›</span>
        </span>
      )}
    </div>
  )
}
