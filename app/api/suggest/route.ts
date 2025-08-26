import { NextResponse } from 'next/server'
import { RECIPES } from '@/lib/recipes'
import { getFavorites, getRatings } from '@/lib/storage'
import type { Recipe } from '@/lib/types'

// Return top N recommended recipes based on favorites + ratings
export async function GET() {
  try {
    // localStorage is client-only, so simulate with dummy store for now
    // In real use: you'd persist favorites/ratings in DB
    const favs = getFavorites()
    const ratings = getRatings()

    const ratedMap = new Map<string, number>()
    ratings.forEach((r) => ratedMap.set(r.recipeId, r.stars))

    // Score each recipe
    const scores = RECIPES.map((r) => {
      let score = 0
      if (favs.includes(r.id)) score += 20
      if (ratedMap.has(r.id)) score += ratedMap.get(r.id)! * 5
      // small random to diversify
      score += Math.random() * 2
      return { recipe: r, score }
    })

    const sorted = scores.sort((a, b) => b.score - a.score).slice(0, 6)

    return NextResponse.json({ recommendations: sorted.map((s) => s.recipe) })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'fail' }, { status: 500 })
  }
}
