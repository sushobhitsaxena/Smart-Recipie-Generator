// // components/Header.tsx
// 'use client'
// import React from 'react'

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-[--color-border]">
//       <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-xl bg-[--color-accent] opacity-90" />
//           <h1 className="text-lg sm:text-xl font-semibold gradient-title">
//             Smart Recipe
//           </h1>
//         </div>
//         {/* room for future actions (profile/theme) */}
//         <div className="hidden sm:flex items-center gap-2">
//           <a href="#" className="btn text-sm">Docs</a>
//           <a href="#" className="btn text-sm">About</a>
//         </div>
//       </div>
//     </header>
//   )
// }

// components/Header.tsx
// 'use client'
// import React from 'react'
// import ThemeToggle from './ThemeToggle' // assuming you already have this

// export default function Header() {
//   return (
//     <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Left: Logo */}
//         <div className="flex items-center gap-2">
//           <span className="text-2xl">🍳</span>
//           <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
//             Smart Recipe
//           </h1>
//           <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-200/60 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300">
//             beta
//           </span>
//         </div>

//         {/* Right: Actions */}
//         <div className="flex items-center gap-3">
//           {/* Search bar (optional inline) */}
//           <input
//             type="text"
//             placeholder="Search recipes..."
//             className="hidden sm:block px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-800/70 text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//           />
          
//           {/* Theme toggle */}
//           <ThemeToggle />
//         </div>
//       </div>
//     </header>
//   )
// }




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
