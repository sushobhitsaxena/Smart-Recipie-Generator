'use client'
import React, { useState } from 'react'

export default function IngredientPicker({
  value,
  onChange,
}: {
  value: string[]
  onChange: (v: string[]) => void
}) {
  const [text, setText] = useState('')

  function add(token: string) {
    const v = token.toLowerCase().trim()
    if (!v) return
    if (!value.includes(v)) onChange([...value, v])
    setText('')
  }
  function remove(token: string) {
    onChange(value.filter((x) => x !== token))
  }

  return (
    <div>
      <label className="text-sm font-medium">Ingredients you have</label>
      <div className="flex gap-2 mt-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') add(text)
          }}
          placeholder="e.g., tomato, onion, rice"
          className="flex-1 bg-transparent border rounded-xl px-3 py-2"
        />
        <button
          onClick={() => add(text)}
          className="px-3 py-2 rounded-xl border bg-white/10"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {value.map((tok) => (
          <span
            key={tok}
            className="px-2 py-1 rounded-full bg-white/10 text-xs flex items-center gap-2"
          >
            {tok}
            <button
              className="opacity-70 hover:opacity-100"
              onClick={() => remove(tok)}
              aria-label={`remove ${tok}`}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  )
}
