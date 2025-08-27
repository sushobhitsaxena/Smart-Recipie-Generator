// 'use client'
// import React, { useState } from 'react'
// import RatingStars from './RatingStars'

// // Minimal inline types/utilities (will match lib/ later)
// type Nutrition = { calories: number; protein: number; carbs: number; fat: number }
// type Difficulty = 'easy' | 'medium' | 'hard'
// export type Recipe = {
//   id: string
//   title: string
//   cuisine: string
//   ingredients: { name: string; quantity: string }[]
//   steps: string[]
//   timeMinutes: number
//   difficulty: Difficulty
//   dietTags: Array<'veg' | 'vegan' | 'gluten-free' | 'none'>
//   servings: number
//   nutritionPerServing: Nutrition
// }

// function scaleNutrition(n: Nutrition, fromServings: number, toServings: number): Nutrition {
//   const factor = toServings / fromServings
//   return {
//     calories: Math.round(n.calories * factor),
//     protein: +(n.protein * factor).toFixed(1),
//     carbs: +(n.carbs * factor).toFixed(1),
//     fat: +(n.fat * factor).toFixed(1),
//   }
// }

// // tiny localStorage helpers (match lib/storage later)
// function getFavorites(): string[] {
//   if (typeof window === 'undefined') return []
//   try { return JSON.parse(localStorage.getItem('srg:favorites') || '[]') } catch { return [] }
// }
// function toggleFavorite(id: string) {
//   const favs = new Set(getFavorites())
//   favs.has(id) ? favs.delete(id) : favs.add(id)
//   localStorage.setItem('srg:favorites', JSON.stringify([...favs]))
//   return [...favs]
// }
// function rate(recipeId: string, stars: number) {
//   if (typeof window === 'undefined') return
//   const key = 'srg:ratings'
//   const r: { recipeId: string; stars: number }[] = JSON.parse(localStorage.getItem(key) || '[]')
//   const idx = r.findIndex((x) => x.recipeId === recipeId)
//   if (idx >= 0) r[idx].stars = stars
//   else r.push({ recipeId, stars })
//   localStorage.setItem(key, JSON.stringify(r))
// }

// export default function RecipeCard({ recipe }: { recipe: Recipe }) {
//   const [servings, setServings] = useState(recipe.servings)
//   const [fav, setFav] = useState(getFavorites().includes(recipe.id))
//   const [myRating, setMyRating] = useState(0)

//   const n = scaleNutrition(recipe.nutritionPerServing, recipe.servings, servings)

//   return (
//     <div className="rounded-2xl border p-4 space-y-3">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-semibold">{recipe.title}</h3>
//         <button
//           onClick={() => {
//             setFav(!fav)
//             toggleFavorite(recipe.id)
//           }}
//           aria-label="favorite"
//         >
//           {fav ? '💖' : '🤍'}
//         </button>
//       </div>

//       <p className="text-xs opacity-70">
//         {recipe.cuisine} • {recipe.difficulty} • {recipe.timeMinutes} min • serves {servings}
//       </p>

//       <div className="flex items-center gap-2">
//         <label className="text-sm">Servings</label>
//         <input
//           type="number"
//           min={1}
//           value={servings}
//           onChange={(e) => setServings(Math.max(1, Number(e.target.value)))}
//           className="w-20 bg-transparent border rounded-xl px-3 py-1"
//         />
//       </div>

//       <div>
//         <h4 className="font-medium">Ingredients</h4>
//         <ul className="list-disc pl-5 text-sm opacity-90">
//           {recipe.ingredients.map((i, idx) => (
//             <li key={idx}>
//               {i.quantity} {i.name}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <h4 className="font-medium">Steps</h4>
//         <ol className="list-decimal pl-5 text-sm opacity-90">
//           {recipe.steps.map((s, idx) => (
//             <li key={idx}>{s}</li>
//           ))}
//         </ol>
//       </div>

//       <div className="text-sm opacity-80">
//         <h4 className="font-medium mb-1">Nutrition (per current serving)</h4>
//         <p>
//           {n.calories} kcal • P {n.protein}g • C {n.carbs}g • F {n.fat}g
//         </p>
//       </div>

//       <div className="flex items-center gap-2">
//         <span className="text-sm">Rate:</span>
//         <RatingStars
//           value={myRating}
//           onChange={(v) => {
//             setMyRating(v)
//             rate(recipe.id, v)
//           }}
//         />
//       </div>
//     </div>
//   )
// }



'use client'
import React from 'react'
import type { Recipe } from '@/lib/types'

function pill(label: string) {
  return (
    <span className="chip">{label}</span>
  )
}

export default function RecipeCard({
  recipe,
  userIngredients = [],
}: {
  recipe: Recipe
  userIngredients?: string[]
}) {
  const [servings, setServings] = React.useState<number>(recipe.servings)
  const [open, setOpen] = React.useState<boolean>(false)
  const [fav, setFav] = React.useState<boolean>(false)

  // favorites localStorage
  React.useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const ids: string[] = JSON.parse(localStorage.getItem('srg:favorites') || '[]')
      setFav(ids.includes(recipe.id))
    } catch {}
  }, [recipe.id])

  function toggleFav() {
    if (typeof window === 'undefined') return
    const key = 'srg:favorites'
    const ids: string[] = JSON.parse(localStorage.getItem(key) || '[]')
    const next = fav ? ids.filter((x) => x !== recipe.id) : Array.from(new Set([...ids, recipe.id]))
    localStorage.setItem(key, JSON.stringify(next))
    setFav(!fav)
  }

  // nutrition scales by servings
  const factor = servings / recipe.servings
  const n = recipe.nutritionPerServing
  const nScaled = {
    calories: Math.round(n.calories * factor),
    protein: +(n.protein * factor).toFixed(1),
    carbs: +(n.carbs * factor).toFixed(1),
    fat: +(n.fat * factor).toFixed(1),
  }

  // highlight ingredients the user has
  const have = new Set(userIngredients.map((s) => s.toLowerCase().trim()))
  const highlight = (name: string) => {
    const has = have.has(name.toLowerCase())
    return (
      <span className={has ? 'font-semibold text-[--color-accent]' : ''}>
        {name}
      </span>
    )
  }

  return (
    <div className="card space-y-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{recipe.title}</h3>
        <button onClick={toggleFav} className="icon-btn" aria-label="favorite">
          {fav ? '💖' : '🤍'}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs subtle">
        {pill(recipe.cuisine)}
        {pill(recipe.difficulty)}
        {pill(`${recipe.timeMinutes} min`)}
        {recipe.dietTags?.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm">Servings</label>
        <input
          className="number"
          type="number"
          min={1}
          value={servings}
          onChange={(e) => setServings(Math.max(1, Number(e.target.value) || 1))}
        />
      </div>

      <div>
        <h4 className="font-semibold">Ingredients</h4>
        <ul className="list-disc pl-5 leading-relaxed">
          {recipe.ingredients.map((ing, i) => (
            <li key={i}>
              {highlight(ing.name)}{ing.quantity ? ` — ${ing.quantity}` : ''}
            </li>
          ))}
        </ul>
      </div>

      {/* Collapsible steps */}
      <div>
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Steps</h4>
          <button className="btn text-sm" onClick={() => setOpen((s) => !s)}>
            {open ? 'Hide' : 'Show'} steps
          </button>
        </div>
        {open && (
          <ol className="list-decimal pl-5 mt-2 space-y-1 leading-relaxed">
            {recipe.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        )}
      </div>

      {/* Nutrition badges */}
      <div>
        <h4 className="font-semibold mb-1">Nutrition (per current serving)</h4>
        <div className="flex flex-wrap gap-2">
          <span className="chip chip--accent">{nScaled.calories} kcal</span>
          <span className="chip chip--accent">P {nScaled.protein} g</span>
          <span className="chip chip--accent">C {nScaled.carbs} g</span>
          <span className="chip chip--accent">F {nScaled.fat} g</span>
        </div>
      </div>
    </div>
  )
}
