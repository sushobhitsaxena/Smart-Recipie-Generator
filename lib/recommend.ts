// import { RECIPES } from './recipes'
// import type { Recipe } from './types'

// // Read client history safely
// function get<T>(key: string, fallback: T): T {
//   if (typeof window === 'undefined') return fallback
//   try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
// }

// export function getPersonalizedRecommendations(limit = 6): Recipe[] {
//   const favs: string[] = get('srg:favorites', [])
//   const ratings: Array<{ recipeId: string; stars: number }> = get('srg:ratings', [])

//   const ratingMap = new Map(ratings.map(r => [r.recipeId, r.stars]))

//   // Score recipes:
//   // +20 if favorited; +5 per star (1..5); +small recency/random spice
//   const scored = RECIPES.map(r => {
//     let score = 0
//     if (favs.includes(r.id)) score += 20
//     if (ratingMap.has(r.id)) score += (ratingMap.get(r.id) || 0) * 5
//     score += Math.random() * 1.5
//     return { r, score }
//     // you can add boosts by cuisine/diet later if you like
//   })

//   return scored.sort((a,b)=>b.score-a.score).slice(0, limit).map(s=>s.r)
// }



import { RECIPES } from './recipes'
import type { Recipe } from './types'

function get<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}

export function getPersonalizedRecommendations(limit = 6): Recipe[] {
  const favs: string[] = get('srg:favorites', [])
  const ratings: Array<{ recipeId: string; stars: number }> = get('srg:ratings', [])
  const ratingMap = new Map(ratings.map(r => [r.recipeId, r.stars]))

  const scored = RECIPES.map(r => {
    let score = 0
    if (favs.includes(r.id)) score += 20
    if (ratingMap.has(r.id)) score += (ratingMap.get(r.id) || 0) * 5
    score += Math.random() * 1.5
    return { r, score }
  }).sort((a,b)=>b.score-a.score)

  // UNIQUE by id
  const seen = new Set<string>()
  const uniq: Recipe[] = []
  for (const { r } of scored) {
    if (seen.has(r.id)) continue
    seen.add(r.id)
    uniq.push(r)
    if (uniq.length >= limit) break
  }
  return uniq
}
