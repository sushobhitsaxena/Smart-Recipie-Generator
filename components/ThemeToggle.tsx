'use client'
import React from 'react'

export default function ThemeToggle() {
  const [mode, setMode] = React.useState<'dark'|'light'>('dark')

  React.useEffect(() => {
    const saved = localStorage.getItem('srg:theme')
    const isLight = saved === 'light'
    document.documentElement.classList.toggle('light', isLight)
    setMode(isLight ? 'light' : 'dark')
  }, [])

  function toggle() {
    const root = document.documentElement
    const next = root.classList.toggle('light') ? 'light' : 'dark'
    localStorage.setItem('srg:theme', next)
    setMode(next as any)
  }

  return (
    <button onClick={toggle} className="btn" aria-label="Toggle theme">
      {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
