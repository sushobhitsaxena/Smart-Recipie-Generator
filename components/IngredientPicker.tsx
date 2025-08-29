'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'

const COMMON_INGREDIENTS: string[] = [
  // Vegetables
  'tomato','onion','garlic','ginger','potato','green chilli','lemon',
  'spinach','carrot','peas','capsicum','cucumber','broccoli','mushroom',
  'cauliflower','cabbage','beetroot','bitter gourd','ridge gourd','bottle gourd',
  'brinjal','okra','drumstick','pumpkin','sweet potato','radish',
  'fenugreek leaves','coriander leaves','mint leaves','spring onion',
  // Proteins
  'paneer','tofu','egg','chicken','fish','prawns','mutton','beef','pork','soya chunks',
  // Grains & Pulses
  'rice','basmati rice','brown rice','poha','oats','pasta','noodles',
  'wheat flour','all-purpose flour','bread','corn flour','semolina','millets',
  'quinoa','barley','buckwheat','lentils','chickpeas','rajma','moong dal','urad dal','toor dal','masoor dal','green gram',
  // Dairy & fats
  'milk','curd','yogurt','cream','butter','ghee','cheese','buttermilk','evaporated milk',
  // Oils
  'oil','olive oil','mustard oil','coconut oil','sunflower oil','sesame oil','groundnut oil',
  // Spices
  'coriander','cumin','turmeric','garam masala','chilli powder',
  'black pepper','cloves','cardamom','cinnamon','bay leaf','nutmeg','mace','fenugreek seeds',
  'fennel seeds','asafoetida','mustard seeds','curry leaves','dry red chilli','kasuri methi',
  // Seasonings
  'salt','sugar','jaggery','honey','vinegar','soy sauce','tomato ketchup','green chutney',
  'tamarind','amchur','lemon juice','pickle',
  // Fruits
  'banana','apple','orange','mango','grapes','papaya','pineapple','watermelon',
  'pomegranate','guava','strawberry','blueberry','kiwi','pear','peach','plum',
  // Nuts & Seeds
  'almonds','cashews','walnuts','peanuts','pistachios','chia seeds','flax seeds','sesame seeds','sunflower seeds',
  // Misc
  'tea leaves','coffee','cocoa powder','corn','green beans','lettuce'
]

export default function IngredientPicker({
  value,
  onChange,
  placeholder = 'e.g., tomato, onion, rice',
  onGenerate, // optional for AI
}: {
  value: string[]
  onChange: (next: string[]) => void
  placeholder?: string
  onGenerate?: () => void
}) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [hi, setHi] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Filter suggestions
  const suggestions = useMemo(() => {
    const q = text.trim().toLowerCase()
    const pool = COMMON_INGREDIENTS.filter(x => !value.includes(x))
    if (!q) return pool.slice(0, 20)
    return pool.filter(x => x.toLowerCase().includes(q)).slice(0, 20)
  }, [text, value])

  function add(token: string) {
    const v = token.toLowerCase().trim()
    if (!v) return
    if (!value.includes(v)) {
      onChange([...value, v])
    }
    setText('')
    setOpen(false)
    setHi(0)
    inputRef.current?.focus()
  }

  function remove(tok: string) {
    onChange(value.filter(x => x !== tok))
  }

  // Close dropdown on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      return
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      if (open && suggestions[hi]) {
        add(suggestions[hi])
      } else {
        add(text)
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHi((i) => Math.min(i + 1, Math.max(0, suggestions.length - 1)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHi((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="space-y-2" ref={boxRef}>
      <label className="text-sm font-medium">Ingredients you have</label>

      <div className="flex gap-2">
        <input
          ref={inputRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value)
            setOpen(true)
            setHi(0)
          }}
          onKeyDown={onKeyDown}
          onFocus={() => setOpen(true)}
          placeholder={value.length ? 'Add more ingredients…' : placeholder}
          className="input flex-1"
          aria-autocomplete="list"
          aria-expanded={open}
        />
        <button className="btn-primary" onClick={() => add(text)}>Add</button>
        {onGenerate && value.length > 0 && (
          <button
            onClick={onGenerate}
            className="btn ml-2 border-emerald-400 text-emerald-600 hover:bg-emerald-50"
          >
            ✨ Generate Recipe
          </button>
        )}
      </div>

      {/* Selected chips */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map(tok => (
            <span key={tok} className="chip chip--accent">
              {tok}
              <button
                className="opacity-70 hover:opacity-100 ml-1"
                onClick={() => remove(tok)}
                aria-label={`remove ${tok}`}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Suggestions */}
      {open && suggestions.length > 0 && (
        <div
          className="card mt-2 p-1 max-h-56 overflow-auto z-20"
          role="listbox"
        >
          <div className="text-xs subtle px-2 py-1">Suggestions</div>
          {suggestions.map((s, i) => (
            <button
              key={s}
              role="option"
              aria-selected={i === hi}
              onMouseEnter={() => setHi(i)}
              onClick={() => add(s)}
              className={
                'w-full text-left btn mt-1 ' +
                (i === hi ? 'bg-[--color-accent]/20' : '')
              }
            >
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
