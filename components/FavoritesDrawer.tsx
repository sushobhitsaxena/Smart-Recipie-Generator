// 'use client'
// import React, { useEffect, useState } from 'react'

// function getFavorites(): string[] {
//   if (typeof window === 'undefined') return []
//   try {
//     return JSON.parse(localStorage.getItem('srg:favorites') || '[]')
//   } catch {
//     return []
//   }
// }

// export default function FavoritesDrawer() {
//   const [open, setOpen] = useState(false)
//   const [ids, setIds] = useState<string[]>([])

//   useEffect(() => {
//     if (open) setIds(getFavorites())
//   }, [open])

//   return (
//     <div className="fixed bottom-4 right-4">
//       <button
//         onClick={() => setOpen(!open)}
//         className="rounded-full px-4 py-2 border bg-black/40 backdrop-blur"
//       >
//         Favorites ({ids.length})
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 w-64 border rounded-2xl p-3 bg-black/80 text-sm max-h-72 overflow-auto">
//           {ids.length ? (
//             ids.map((id) => (
//               <div key={id} className="py-1">
//                 • {id}
//               </div>
//             ))
//           ) : (
//             <div className="opacity-70">No favorites yet</div>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }
// 'use client'
// import React, { useEffect, useState } from 'react'

// function getFavorites(): string[] {
//   if (typeof window === 'undefined') return []
//   try { return JSON.parse(localStorage.getItem('srg:favorites') || '[]') }
//   catch { return [] }
// }

// export default function FavoritesDrawer() {
//   const [open, setOpen] = useState(false)
//   const [ids, setIds] = useState<string[]>([])

//   useEffect(() => { if (open) setIds(getFavorites()) }, [open])

//   return (
//     <div className="fixed bottom-4 right-4">
//       <button
//         onClick={() => setOpen(!open)}
//         className="rounded-full px-4 py-2 border bg-black/40 backdrop-blur"
//       >
//         Favorites ({ids.length})
//       </button>
//       {open && (
//         <div className="absolute right-0 mt-2 w-64 border rounded-2xl p-3 bg-black/80 text-sm max-h-72 overflow-auto">
//           {ids.length ? ids.map(id => <div key={id} className="py-1">• {id}</div>)
//                      : <div className="opacity-70">No favorites yet</div>}
//         </div>
//       )}
//     </div>
//   )
// }
'use client'
import React, { useEffect, useState } from 'react'

function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try { return JSON.parse(localStorage.getItem('srg:favorites') || '[]') }
  catch { return [] }
}

export default function FavoritesDrawer() {
  const [open, setOpen] = useState(false)
  const [ids, setIds] = useState<string[]>([])

  useEffect(() => {
    if (open) setIds(getFavorites())
  }, [open])

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full px-4 py-2 border bg-black/40 backdrop-blur"
      >
        Favorites ({ids.length})
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 border rounded-2xl p-3 bg-black/80 text-sm max-h-72 overflow-auto">
          {ids.length
            ? ids.map(id => <div key={id} className="py-1">• {id}</div>)
            : <div className="opacity-70">No favorites yet</div>}
        </div>
      )}
    </div>
  )
}
