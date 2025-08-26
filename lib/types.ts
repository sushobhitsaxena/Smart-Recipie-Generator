export type Diet = 'veg' | 'vegan' | 'gluten-free' | 'none'
export type Difficulty = 'easy' | 'medium' | 'hard'

export interface Nutrition {
  calories: number
  protein: number // g
  carbs: number   // g
  fat: number     // g
}

export interface Recipe {
  id: string
  title: string
  cuisine: string
  ingredients: { name: string; quantity: string }[]
  steps: string[]
  timeMinutes: number
  difficulty: Difficulty
  dietTags: Diet[]
  servings: number
  nutritionPerServing: Nutrition
}

export interface Rating {
  recipeId: string
  stars: number // 1..5
}
