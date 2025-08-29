'use client'
import React, { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle'
import SearchBar from './SearchBar'


export default function Header() {
  const [headerQuery, setHeaderQuery] = useState('')

  // Emit a custom event so any page can consume the query
  const notify = (q: string) => {
    try {
      window.dispatchEvent(new CustomEvent('recipe:search', { detail: q }))
      // (optional) keep last query for refresh/navigation
      sessionStorage.setItem('recipe:query', q)
    } catch {}
  }

  // Restore last query on mount (optional)
  useEffect(() => {
    const saved = sessionStorage.getItem('recipe:query') ?? ''
    if (saved) {
      setHeaderQuery(saved)
      notify(saved)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-[--color-border]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-2xl">🍳</span>
          <span className="text-lg font-semibold tracking-tight">Smart Recipe</span>
          <span className="px-2 py-0.5 text-xs rounded-full border border-[--color-border] text-[--color-muted]">
            beta
          </span>
        </div>

        {/* Search (grows) */}
        <div className="flex-1 min-w-0">
          <SearchBar
            value={headerQuery}
            onChange={(q) => {
              setHeaderQuery(q)
              notify(q)
            }}
            className="w-full max-w-xl ml-auto"
            placeholder="Search recipes (name, cuisine, tag, ingredient, time)…"
          />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
