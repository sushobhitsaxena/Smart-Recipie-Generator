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
