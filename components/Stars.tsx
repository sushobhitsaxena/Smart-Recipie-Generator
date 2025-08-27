// components/Stars.tsx
'use client'
import React from 'react'

export default function Stars({
  value,
  onChange,
  size = 22,
  ariaLabel = 'Rate recipe',
}: {
  value: number
  onChange: (v: number) => void
  size?: number
  ariaLabel?: string
}) {
  const [hover, setHover] = React.useState<number | null>(null)
  const v = hover ?? value
  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label={ariaLabel}>
      {[1,2,3,4,5].map(n => (
        <button
          key={n}
          role="radio"
          aria-checked={value === n}
          className="icon-btn"
          style={{ width: size, height: size }}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(null)}
          onClick={() => onChange(n)}
          title={`${n} star${n>1?'s':''}`}
        >
          {v >= n ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}
