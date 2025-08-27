// import type { Rating } from './types'

// const FAV_KEY = 'srg:favorites'
// const RATE_KEY = 'srg:ratings'

// export function getFavorites(): string[] {
//   if (typeof window === 'undefined') return []
//   return JSON.parse(localStorage.getItem(FAV_KEY) || '[]')
// }

// export function toggleFavorite(id: string) {
//   const favs = new Set(getFavorites())
//   favs.has(id) ? favs.delete(id) : favs.add(id)
//   localStorage.setItem(FAV_KEY, JSON.stringify([...favs]))
//   return [...favs]
// }

// export function getRatings(): Rating[] {
//   if (typeof window === 'undefined') return []
//   return JSON.parse(localStorage.getItem(RATE_KEY) || '[]')
// }

// export function rate(recipeId: string, stars: number) {
//   const r = getRatings()
//   const idx = r.findIndex((x) => x.recipeId === recipeId)
//   if (idx >= 0) r[idx].stars = stars
//   else r.push({ recipeId, stars })
//   localStorage.setItem(RATE_KEY, JSON.stringify(r))
//   return r
// }


// lib/storage.ts — tiny SSR-safe wrappers around localStorage

// function read<T>(key: string, fallback: T): T {
//   if (typeof window === 'undefined') return fallback
//   try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
// }
// function write<T>(key: string, value: T) {
//   if (typeof window === 'undefined') return
//   try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
// }

// /* ---------- Favorites ---------- */
// const FAV_KEY = 'srg:favorites'
// export function getFavorites(): string[] {
//   return read<string[]>(FAV_KEY, [])
// }
// export function isFavorite(id: string): boolean {
//   return getFavorites().includes(id)
// }
// export function toggleFavorite(id: string): boolean {
//   const set = new Set(getFavorites())
//   if (set.has(id)) set.delete(id)
//   else set.add(id)
//   write(FAV_KEY, Array.from(set))
//   return set.has(id)
// }

// /* ---------- Ratings ---------- */
// export type Rating = { recipeId: string; stars: number; ts: number }
// const RATE_KEY = 'srg:ratings'
// export function getRatings(): Rating[] {
//   return read<Rating[]>(RATE_KEY, [])
// }
// export function getRatingFor(id: string): number {
//   const r = getRatings().find(x => x.recipeId === id)
//   return r?.stars ?? 0
// }
// export function setRating(id: string, stars: number) {
//   const now = Date.now()
//   const rest = getRatings().filter(x => x.recipeId !== id)
//   rest.push({ recipeId: id, stars, ts: now })
//   write(RATE_KEY, rest)
// }

// /* ---------- Lightweight prefs (optional) ---------- */
// const PREFS_KEY = 'srg:prefs'
// export type Prefs = { diet?: string; cuisines?: string[] }
// export function savePrefs(p: Prefs) {
//   const cur = read<Prefs>(PREFS_KEY, {})
//   write(PREFS_KEY, { ...cur, ...p })
// }
// export function getPrefs(): Prefs {
//   return read<Prefs>(PREFS_KEY, {})
// }




// lib/storage.ts
export type Rating = { recipeId: string; stars: number; ts: number }

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}
function write<T>(key: string, value: T) {
  if (typeof window === 'undefined') return
  try { localStorage.setItem(key, JSON.stringify(value)) } catch {}
}

/* ---------- Favorites ---------- */
const FAV_KEY = 'srg:favorites'
export function getFavorites(): string[] { return read<string[]>(FAV_KEY, []) }
export function isFavorite(id: string): boolean { return getFavorites().includes(id) }
export function toggleFavorite(id: string): boolean {
  const set = new Set(getFavorites())
  if (set.has(id)) set.delete(id); else set.add(id)
  write(FAV_KEY, Array.from(set))
  return set.has(id)
}

/* ---------- Ratings ---------- */
const RATE_KEY = 'srg:ratings'
export function getRatings(): Rating[] { return read<Rating[]>(RATE_KEY, []) }
export function getRatingFor(id: string): number {
  const r = getRatings().find(x => x.recipeId === id)
  return r?.stars ?? 0
}
export function setRating(id: string, stars: number) {
  const now = Date.now()
  const rest = getRatings().filter(x => x.recipeId !== id)
  rest.push({ recipeId: id, stars, ts: now })
  write(RATE_KEY, rest)
}
