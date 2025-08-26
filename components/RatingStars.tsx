'use client'
import React from 'react'

export default function RatingStars({
  value,
  onChange,
}: {
  value: number
  onChange: (n: number) => void
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          aria-label={`rate ${n}`}
          onClick={() => onChange(n)}
          className={'text-xl ' + (n <= value ? '' : 'opacity-40')}
        >
          ★
        </button>
      ))}
    </div>
  )
}
