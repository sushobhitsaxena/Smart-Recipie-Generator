import type { Rating } from './types'

const FAV_KEY = 'srg:favorites'
const RATE_KEY = 'srg:ratings'

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem(FAV_KEY) || '[]')
}

export function toggleFavorite(id: string) {
  const favs = new Set(getFavorites())
  favs.has(id) ? favs.delete(id) : favs.add(id)
  localStorage.setItem(FAV_KEY, JSON.stringify([...favs]))
  return [...favs]
}

export function getRatings(): Rating[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem(RATE_KEY) || '[]')
}

export function rate(recipeId: string, stars: number) {
  const r = getRatings()
  const idx = r.findIndex((x) => x.recipeId === recipeId)
  if (idx >= 0) r[idx].stars = stars
  else r.push({ recipeId, stars })
  localStorage.setItem(RATE_KEY, JSON.stringify(r))
  return r
}
