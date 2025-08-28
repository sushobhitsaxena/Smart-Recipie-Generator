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

const contains = (s: string | undefined, q: string) =>
  (s ?? "").toLowerCase().includes(q);

// Text matcher used by the search bar
export function matchesRecipeSearch(recipe: Recipe, qRaw: string): boolean {
  const q = qRaw.trim().toLowerCase();
  if (!q) return true;

  const nameHit = contains((recipe as any).title ?? (recipe as any).name, q);
  const cuisineHit = contains((recipe as any).cuisine, q);
  const diffHit = contains((recipe as any).difficulty as string, q);
  const tagsHit = ((recipe as any).dietTags ?? []).some((t: string) => contains(t, q));
  const ingHit = ((recipe as any).ingredients ?? []).some(
    (ing: { name: string }) => contains(ing?.name, q)
  );
  const timeHit =
    /^\d+$/.test(q) && typeof (recipe as any).timeMinutes === "number"
      ? String((recipe as any).timeMinutes).includes(q)
      : false;

  return nameHit || cuisineHit || diffHit || tagsHit || ingHit || timeHit;
}