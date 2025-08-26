import type { Nutrition } from './types'

export function scaleNutrition(
  n: Nutrition,
  fromServings: number,
  toServings: number
): Nutrition {
  const factor = toServings / fromServings
  return {
    calories: Math.round(n.calories * factor),
    protein: +(n.protein * factor).toFixed(1),
    carbs: +(n.carbs * factor).toFixed(1),
    fat: +(n.fat * factor).toFixed(1),
  }
}
