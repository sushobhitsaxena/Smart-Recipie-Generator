'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { RECIPES } from '@/lib/recipes'

function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try { return JSON.parse(localStorage.getItem('srg:favorites') || '[]') } catch { return [] }
}

export default function FavoritesDrawer() {
  const [open, setOpen] = useState(false)
  const [ids, setIds] = useState<string[]>([])
  const map = useMemo(() => new Map(RECIPES.map(r => [r.id, r.title])), [])

  useEffect(() => { if (open) setIds(getFavorites()) }, [open])

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={() => setOpen(!open)} className="btn">
        Favorites ({ids.length})
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 card text-sm max-h-80 overflow-auto">
          {ids.length ? (
            ids.map((id) => (
              <div key={id} className="py-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[--color-primary]" />
                <span>{map.get(id) ?? id}</span>
              </div>
            ))
          ) : (
            <div className="opacity-70">No favorites yet</div>
          )}
        </div>
      )}
    </div>
  )
}


