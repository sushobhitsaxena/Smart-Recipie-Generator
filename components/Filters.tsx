'use client'
import React from 'react'
export type Diet = 'veg' | 'vegan' | 'gluten-free' | 'none'

export default function Filters({
  diet, setDiet,
  maxTime, setMaxTime,
  difficulty, setDifficulty,
}: {
  diet: Diet
  setDiet: (d: Diet) => void
  maxTime: number | undefined
  setMaxTime: (n: number | undefined) => void
  difficulty: ('easy' | 'medium' | 'hard')[]
  setDifficulty: (d: ('easy' | 'medium' | 'hard')[]) => void
}) {
  function toggleDiff(d: 'easy'|'medium'|'hard') {
    setDifficulty(difficulty.includes(d) ? difficulty.filter(x=>x!==d) : [...difficulty, d])
  }
  return (
    <div className="grid sm:grid-cols-3 gap-3">
      <div>
        <label className="text-sm">Diet</label>
        <select
          value={diet}
          onChange={(e)=>setDiet(e.target.value as Diet)}
          className="select mt-1"
        >
          <option value="none">None</option>
          <option value="veg">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-free</option>
        </select>
      </div>
      <div>
        <label className="text-sm">Max time (min)</label>
        <input
          type="number"
          className="input mt-1"
          value={maxTime ?? ''}
          placeholder="e.g., 30"
          onChange={(e)=>setMaxTime(e.target.value ? Number(e.target.value) : undefined)}
        />
      </div>
      <div className="flex items-end gap-2">
        {(['easy','medium','hard'] as const).map(d => (
          <button
            key={d}
            className={'btn ' + (difficulty.includes(d) ? 'bg-white/10' : 'opacity-70')}
            onClick={()=>toggleDiff(d)}
            aria-pressed={difficulty.includes(d)}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  )
}
