// components/Header.tsx
'use client'
import React from 'react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-[--color-border]">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[--color-accent] opacity-90" />
          <h1 className="text-lg sm:text-xl font-semibold gradient-title">
            Smart Recipe
          </h1>
        </div>
        {/* room for future actions (profile/theme) */}
        <div className="hidden sm:flex items-center gap-2">
          <a href="#" className="btn text-sm">Docs</a>
          <a href="#" className="btn text-sm">About</a>
        </div>
      </div>
    </header>
  )
}
