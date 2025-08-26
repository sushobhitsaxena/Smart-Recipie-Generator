import type { Recipe, Diet } from './types'
import { getSubstitutes } from './substitutions'

export interface MatchOptions {
  userIngredients: string[]
  diet: Diet
  maxTime?: number
  difficulty?: ('easy' | 'medium' | 'hard')[]
  cuisine?: string[]
  servings?: number
}

function norm(x: string) {
  return x.toLowerCase().trim()
}

export function matchScore(recipe: Recipe, opts: MatchOptions) {
  const want = new Set(opts.userIngredients.map(norm))
  const ing = recipe.ingredients.map((i) => norm(i.name))

  let hits = 0
  let subsUsed = 0
  for (const item of ing) {
    if (want.has(item)) {
      hits++
      continue
    }
    const subs = getSubstitutes(item)
    if (subs.some((s) => want.has(norm(s)))) subsUsed++
  }
  const coverage = (hits + 0.5 * subsUsed) / ing.length

  let score = Math.round(100 * coverage)

  if (opts.maxTime) {
    if (recipe.timeMinutes <= opts.maxTime) score += 5
    else score -= Math.min(20, Math.floor((recipe.timeMinutes - opts.maxTime) / 10))
  }

  const okDiet = opts.diet === 'none' || recipe.dietTags.includes(opts.diet)
  if (!okDiet) return -1

  if (opts.difficulty && opts.difficulty.length) {
    if (!opts.difficulty.includes(recipe.difficulty)) return -1
  }

  if (opts.cuisine && opts.cuisine.length) {
    if (!opts.cuisine.map(norm).includes(norm(recipe.cuisine))) return -1
  }

  return score
}

export function findMatches(recipes: Recipe[], opts: MatchOptions) {
  return recipes
    .map((r) => ({ recipe: r, score: matchScore(r, opts) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score)
}
