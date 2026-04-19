import { useEffect, useRef } from 'react'

/**
 * Tracks mouse position and updates a DOM element directly
 * (bypasses React state to avoid re-renders on every mousemove)
 */
export function useMousePosition(cursorRef: React.RefObject<HTMLDivElement | null>) {
  const posRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top  = `${e.clientY}px`
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [cursorRef])

  return posRef
}
