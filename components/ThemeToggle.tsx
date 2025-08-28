// 'use client'
// import React from 'react'

// export default function ThemeToggle() {
//   const [mode, setMode] = React.useState<'dark'|'light'>('dark')

//   React.useEffect(() => {
//     const saved = localStorage.getItem('srg:theme')
//     const isLight = saved === 'light'
//     document.documentElement.classList.toggle('light', isLight)
//     setMode(isLight ? 'light' : 'dark')
//   }, [])

//   function toggle() {
//     const root = document.documentElement
//     const next = root.classList.toggle('light') ? 'light' : 'dark'
//     localStorage.setItem('srg:theme', next)
//     setMode(next as any)
//   }

//   return (
//     <button onClick={toggle} className="btn" aria-label="Toggle theme">
//       {mode === 'light' ? '🌙 Dark' : '☀️ Light'}
//     </button>
//   )
// }



'use client'
import React from 'react'

export default function ThemeToggle() {
  const [isLight, setIsLight] = React.useState<boolean>(
    typeof window !== 'undefined' ? document.documentElement.classList.contains('light') : false
  )

  React.useEffect(() => {
    // keep state in sync if user/system changes (optional)
    setIsLight(document.documentElement.classList.contains('light'))
  }, [])

  function toggle() {
    const el = document.documentElement
    if (el.classList.contains('light')) {
      el.classList.remove('light')
      setIsLight(false)
      localStorage.setItem('theme', 'dark')
    } else {
      el.classList.add('light')
      setIsLight(true)
      localStorage.setItem('theme', 'light')
    }
  }

  // on first load, respect stored choice
  React.useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      document.documentElement.classList.add('light')
      setIsLight(true)
    }
  }, [])

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[--color-border] bg-[color-mix(in_oklab,var(--color-surface)_85%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-surface)_70%,transparent)] transition"
      aria-label="Toggle theme"
    >
      <span>{isLight ? '🌞' : '🌙'}</span>
      <span className="text-sm">{isLight ? 'Light' : 'Dark'}</span>
    </button>
  )
}
