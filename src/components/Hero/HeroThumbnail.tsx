import React, { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface HeroThumbnailProps {
  imgSrc: string
  onClick: () => void
  borderRef: RefObject<SVGRectElement | null>
  autoplayDuration: number  // ms
}

const THUMB_SIZE = 90

export function HeroThumbnail({
  imgSrc,
  onClick,
  borderRef,
  autoplayDuration,
}: HeroThumbnailProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)


  useEffect(() => {
    const el = borderRef.current
    if (!el) return
    // Perimeter of rect(88 x 88) with x=1,y=1 => 2*(88+88)=352
    const perimeter = 2 * (THUMB_SIZE - 2 + THUMB_SIZE - 2)
    el.style.setProperty('--perimeter', `${perimeter}px`)
    el.style.strokeDasharray = `${perimeter}`
    el.style.strokeDashoffset = `${perimeter}`
    // Also set the animation duration to match autoplay
    el.style.animationDuration = `${autoplayDuration / 1000}s`
  }, [borderRef, autoplayDuration])

  return (
    <button
      className="hero-thumbnail"
      onClick={onClick}
      aria-label="Next slide"
      title="Next slide"
    >
      <div className="hero-thumbnail__inner">
        <img
          src={imgSrc}
          alt="Next slide preview"
          className="hero-thumbnail__img"
          loading="eager"
        />

        {/* SVG border: track (dim) + fill (animating) */}
        <svg
          ref={svgRef}
          className="hero-thumbnail__svg"
          viewBox={`0 0 ${THUMB_SIZE} ${THUMB_SIZE}`}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dim background track */}
          <rect
            className="hero-thumbnail__border-track"
            x="1" y="1"
            width={THUMB_SIZE - 2}
            height={THUMB_SIZE - 2}
          />
          {/* Animated fill — driven by CSS keyframe restarted on slide change */}
          <rect
            ref={borderRef as React.RefObject<SVGRectElement>}
            className="hero-thumbnail__border-fill"
            x="1" y="1"
            width={THUMB_SIZE - 2}
            height={THUMB_SIZE - 2}
          />
        </svg>

        <span className="hero-thumbnail__next-label">Next</span>
      </div>
    </button>
  )
}
