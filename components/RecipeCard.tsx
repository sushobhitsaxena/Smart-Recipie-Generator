'use client'
import React from 'react'
import type { Recipe } from '../lib/types'
import Stars from './Stars'
import { getRatingFor, setRating, isFavorite, toggleFavorite } from '../lib/storage'
import { suggestSubs } from '../lib/substitutions'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

function pill(label: string) {
  return <span className="chip">{label}</span>
}

export default function RecipeCard({
  recipe,
  userIngredients = [],
}: {
  recipe: Recipe
  userIngredients?: string[]
}) {
  const [fav, setFav] = React.useState(false)
  const [stars, setStars] = React.useState(0)
  const [expanded, setExpanded] = React.useState(false)
  const [servings, setServings] = React.useState(recipe.servings)

  React.useEffect(() => {
    setFav(isFavorite(recipe.id))
    setStars(getRatingFor(recipe.id))
  }, [recipe.id])

  function handleFav() {
    setFav(toggleFavorite(recipe.id))
  }
  function handleRate(v: number) {
    setRating(recipe.id, v)
    setStars(v)
  }

  // Nutrition scaling
  const factor = servings / recipe.servings
  const n = recipe.nutritionPerServing
  const nScaled = {
    calories: Math.round(n.calories * factor),
    protein: +(n.protein * factor).toFixed(1),
    carbs: +(n.carbs * factor).toFixed(1),
    fat: +(n.fat * factor).toFixed(1),
  }

  // Highlight + subs
  const have = new Set(userIngredients.map((s) => s.toLowerCase().trim()))
  const highlight = (name: string) => {
    const has = have.has(name.toLowerCase())
    return <span className={has ? 'font-semibold text-[--color-accent]' : ''}>{name}</span>
  }

  return (
    <div className="card space-y-3 hover:shadow-lg transition-shadow duration-200">
      {/* ====== Image banner ====== */}
      <div className="relative w-full h-40 rounded-xl overflow-hidden group">
        <Image
          src={recipe.image || '/images/foodgenric.jpeg'} // ✅ fallback image
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          priority={false}
          unoptimized
          
        />

        {/* Fav over image */}
        <button
          onClick={handleFav}
          aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={fav}
          className="absolute top-2 right-2 icon-btn bg-[color-mix(in_oklab,var(--color-surface)_70%,transparent)]/70 backdrop-blur"
        >
          {fav ? '💖' : '🤍'}
        </button>
      </div>

      {/* ====== Title + actions ====== */}
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug truncate">{recipe.title}</h3>
          <div className="mt-1 flex flex-wrap gap-2 text-xs subtle">
            {pill(recipe.cuisine)}
            {pill(recipe.difficulty)}
            {pill(`${recipe.timeMinutes} min`)}
            {recipe.dietTags?.map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Stars value={stars} onChange={handleRate} />
          <button
            onClick={() => setExpanded((s) => !s)}
            className="icon-btn"
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      {/* ====== Expanded details ====== */}
      {expanded && (
        <div className="space-y-3 pt-2 border-t">
          {/* Servings */}
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

          {/* Ingredients */}
          <div>
            <h4 className="font-semibold">Ingredients</h4>
            <ul className="list-disc pl-5 leading-relaxed space-y-1.5">
              {recipe.ingredients.map((ing, i) => {
                const missing = !have.has(ing.name.toLowerCase())
                const subs = missing ? suggestSubs(ing.name) : []
                return (
                  <li key={i}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span>
                        {highlight(ing.name)}
                        {ing.quantity ? ` — ${ing.quantity}` : ''}
                      </span>
                      <span className={`badge ${missing ? '' : 'chip--accent'}`}>
                        {missing ? 'missing' : 'have'}
                      </span>
                    </div>
                    {missing && subs.length > 0 && (
                      <div className="text-xs subtle mt-0.5">
                        Try: {subs.slice(0, 2).join(', ')}
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Steps */}
          <div>
            <h4 className="font-semibold">Steps</h4>
            <ol className="list-decimal pl-5 mt-2 space-y-1 leading-relaxed">
              {recipe.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>

          {/* Nutrition */}
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
      )}
    </div>
  )
}

