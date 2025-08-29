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
