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


// ----working version with diversity filter----
// import { RECIPES } from './recipes'
// import type { Recipe } from './types'

// function get<T>(key: string, fallback: T): T {
//   if (typeof window === 'undefined') return fallback
//   try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
// }

// export function getPersonalizedRecommendations(limit = 6): Recipe[] {
//   const favs: string[] = get('srg:favorites', [])
//   const ratings: Array<{ recipeId: string; stars: number }> = get('srg:ratings', [])
//   const ratingMap = new Map(ratings.map(r => [r.recipeId, r.stars]))

//   const scored = RECIPES.map(r => {
//     let score = 0
//     if (favs.includes(r.id)) score += 20
//     if (ratingMap.has(r.id)) score += (ratingMap.get(r.id) || 0) * 5
//     score += Math.random() * 1.5
//     return { r, score }
//   }).sort((a,b)=>b.score-a.score)

//   // UNIQUE by id
//   const seen = new Set<string>()
//   const uniq: Recipe[] = []
//   for (const { r } of scored) {
//     if (seen.has(r.id)) continue
//     seen.add(r.id)
//     uniq.push(r)
//     if (uniq.length >= limit) break
//   }
//   return uniq
// }




// import { RECIPES } from './recipes'
// import type { Recipe } from './types'
// import { getFavorites, getRatings } from './storage'

// export type RecoCtx = {
//   diet?: 'veg'|'vegan'|'gluten-free'|'none'
//   cuisines?: string[]
//   userIngredients?: string[]
//   limit?: number
// }

// export function getPersonalizedRecommendations(ctx: RecoCtx = {}): Recipe[] {
//   const { diet = 'none', cuisines = [], userIngredients = [], limit = 6 } = ctx
//   const favs = new Set(getFavorites())
//   const ratings = getRatings()
//   const ratingMap = new Map(ratings.map(r => [r.recipeId, r.stars]))
//   const wantCuisine = new Set((cuisines || []).map(s => s.toLowerCase()))

//   const have = new Set((userIngredients || []).map(s => s.toLowerCase().trim()))

//   const scored = RECIPES.map(r => {
//     let score = 0

//     // 1) Ratings/favorites (main signal)
//     const stars = ratingMap.get(r.id) ?? 0
//     if (favs.has(r.id)) score += 30
//     if (stars > 0) score += stars * 8

//     // 2) Diet alignment (soft boost if matches, soft penalty if not)
//     if (diet && diet !== 'none') {
//       const passes = r.dietTags?.includes(diet)
//       score += passes ? 6 : -8
//     }

//     // 3) Cuisine preference boost
//     if (wantCuisine.size) {
//       if (wantCuisine.has(r.cuisine.toLowerCase())) score += 6
//     }

//     // 4) Ingredient overlap (tiny boost)
//     if (have.size) {
//       const overlap = r.ingredients.reduce((acc, ing) => acc + (have.has(ing.name.toLowerCase()) ? 1 : 0), 0)
//       score += Math.min(6, overlap) // cap
//     }

//     // 5) Small diversity jitter
//     score += Math.random() * 1.5

//     return { r, score }
//   })
//   .sort((a,b) => b.score - a.score)

//   // Unique by id, top N
//   const seen = new Set<string>()
//   const out: Recipe[] = []
//   for (const { r } of scored) {
//     if (seen.has(r.id)) continue
//     seen.add(r.id)
//     out.push(r)
//     if (out.length >= limit) break
//   }
//   return out
// }


// lib/recommend.ts
import { RECIPES } from './recipes'
import type { Recipe } from './types'
import { getFavorites, getRatings } from './storage'

export type RecoCtx = {
  diet?: 'veg'|'vegan'|'gluten-free'|'none'
  cuisines?: string[]
  userIngredients?: string[]
  limit?: number
}

export function getPersonalizedRecommendations(ctx: RecoCtx = {}): Recipe[] {
  const { diet = 'none', cuisines = [], userIngredients = [], limit = 6 } = ctx
  const favs = new Set(getFavorites())
  const ratings = getRatings()
  const ratingMap = new Map(ratings.map(r => [r.recipeId, r.stars]))
  const wantCuisine = new Set((cuisines || []).map(s => s.toLowerCase()))
  const have = new Set((userIngredients || []).map(s => s.toLowerCase().trim()))

  const scored = RECIPES.map(r => {
    let score = 0
    const stars = ratingMap.get(r.id) ?? 0
    if (favs.has(r.id)) score += 30
    if (stars > 0)     score += stars * 8

    if (diet && diet !== 'none') {
      const passes = r.dietTags?.includes(diet)
      score += passes ? 6 : -8
    }

    if (wantCuisine.size && wantCuisine.has(r.cuisine.toLowerCase())) score += 6

    if (have.size) {
      const overlap = r.ingredients.reduce((acc, ing) => acc + (have.has(ing.name.toLowerCase()) ? 1 : 0), 0)
      score += Math.min(6, overlap)
    }

    score += Math.random() * 1.5
    return { r, score }
  }).sort((a,b)=> b.score - a.score)

  const seen = new Set<string>()
  const out: Recipe[] = []
  for (const { r } of scored) {
    if (seen.has(r.id)) continue
    seen.add(r.id)
    out.push(r)
    if (out.length >= limit) break
  }
  return out
}
