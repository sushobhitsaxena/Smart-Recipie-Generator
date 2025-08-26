'use client'
import React from 'react'

export default function CuisineFilter({
  cuisines,
  selected,
  onChange,
}: {
  cuisines: string[]
  selected: string[]
  onChange: (v: string[]) => void
}) {
  function toggle(c: string) {
    onChange(
      selected.includes(c) ? selected.filter(x => x !== c) : [...selected, c]
    )
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Cuisine</label>
      <div className="flex flex-wrap gap-2">
        {cuisines.map((c) => (
          <button
            key={c}
            onClick={() => toggle(c)}
            className={
              'px-3 py-1 rounded-full border text-sm ' +
              (selected.includes(c) ? 'bg-white/15' : 'opacity-70')
            }
            aria-pressed={selected.includes(c)}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}
