/////////// this part of code is just for backup if in case the main page.tsx has some issue thats why it is commented out ///////////





// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'
// import { RECIPES } from '../lib/recipes'
// import { findMatches, matchesRecipeSearch } from '../lib/match'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'
// import MobileFilters from '../components/MobileFilters'
// import SearchBar from '../components/SearchBar'
// import Image from "next/image"


// import { getPersonalizedRecommendations } from '../lib/recommend'

// // UI
// import { Card, CardContent } from "../components/card"

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])
//   const [loading, setLoading] = useState(false)
//   const [cuisinesSel, setCuisinesSel] = useState<string[]>([])
//   const [query, setQuery] = useState('') // 🔎 search state

//   const cuisinesAll = useMemo(
//     () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
//     []
//   )

//   useEffect(() => {
//     try {
//       const recList = getPersonalizedRecommendations?.({
//         diet,
//         cuisines: cuisinesSel,
//         userIngredients: ingredients,
//         limit: 6,
//       }) ?? []
//       const uniq = Array.from(new Map(recList.map(r => [r.id, r])).values())
//       setRecs(uniq)
//     } catch {
//       setRecs([])
//     }
//   }, [ingredients, diet, cuisinesSel])

//   const results = useMemo(
//     () =>
//       findMatches(RECIPES, {
//         userIngredients: ingredients,
//         diet,
//         maxTime,
//         difficulty,
//         cuisine: cuisinesSel,
//       }),
//     [ingredients, diet, maxTime, difficulty, cuisinesSel]
//   )

//   const uniqueResults = useMemo(() => {
//     const seen = new Set<string>()
//     return results.filter(x => {
//       const id = x.recipe.id
//       if (seen.has(id)) return false
//       seen.add(id)
//       return true
//     })
//   }, [results])

//   // 🔎 Apply text search after all other filters
//   const searchedResults = useMemo(() => {
//     return uniqueResults.filter((x) => matchesRecipeSearch(x.recipe as any, query))
//   }, [uniqueResults, query])

//   // Shared filters
//   const renderFilters = () => (
//     <div className="space-y-4">
//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />
//       {/* Optional cuisine filter */}
//       {/* <CuisineFilter cuisines={cuisinesAll} selected={cuisinesSel} onChange={setCuisinesSel} /> */}
//     </div>
//   )



//   /// ai part is this from here 👇
// // const [aiRecipe, setAiRecipe] = useState<Recipe | null>(null);

// // async function handleGenerate() {
// //   if (!ingredients.length) return alert("Add some ingredients first!");
// //   try {
// //     setLoading(true);
// //     const res = await fetch("/api/generate-recipe", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ ingredients }),
// //     });
// //     const data = await res.json();
// //     setLoading(false);

// //     if (data.error) return alert("❌ " + data.error);
// //     setAiRecipe(data); // 👈 store AI recipe
// //   } catch {
// //     setLoading(false);
// //     alert("Something went wrong while generating recipe.");
// //   }
// // }





//   return (
//     <div className="space-y-8">
//       {/* === HEADER === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">🍳 Smart Recipe Generator</h1>
//             <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
//           </div>
//           {/* Hero image */}
// <div className="relative mx-auto w-full max-w-4xl h-40 md:h-56 rounded-2xl overflow-hidden shadow-md">
//   <Image
//     src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
//     alt="Fresh ingredients and spices"
//     fill
//     sizes="(max-width: 768px) 100vw, 800px"
//     className="object-cover"
//     priority
//   />
// </div>


//           {/* 🔎 SEARCH AT TOP */}
//           <div className="flex justify-center">
//             <SearchBar
//               value={query}
//               onChange={setQuery}
//               className="w-full max-w-2xl"
//               placeholder="Search recipes (name, cuisine, tag, ingredient, time)…"
//             />
//           </div>

//           {/* Input + Upload */}
//           <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
//             <div className="flex-1 w-full">
//               <IngredientPicker value={ingredients} onChange={setIngredients} />
//             </div>
//             <div className="flex-1 w-full">
//               <ImageDropzone
//                 onRecognize={(ings, cap) => {
//                   setCaption(cap || '')
//                   if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//                 }}
//                 onLoadingChange={setLoading}
//               />
//             </div>
//           </div>

//           {caption && (
//             <p className="text-sm text-gray-500 italic text-center">
//               Caption guess: “{caption}”
//             </p>
//           )}

//           {/* Mobile filters */}
//           <div className="md:hidden pt-2">
//             <MobileFilters renderFilters={renderFilters} />
//           </div>
//         </CardContent>
//       </Card>

//       {/* === MAIN CONTENT === */}
//       <div className="grid md:grid-cols-[280px,1fr] gap-6">
//         {/* Sidebar filters (desktop) */}
//         <aside className="hidden md:block">
//           <div className="card md:sticky md:top-4 md:h-fit space-y-4">
//             <h3 className="font-semibold">Filters</h3>
//             {renderFilters()}
//           </div>
//         </aside>



 







//         {/* Results */}
//         <section className="space-y-3">
//           <h2 className="section-title">Suggestions</h2>

//           {loading && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <SkeletonCard key={i} />
//               ))}
//             </div>
//           )}

//           {!loading && searchedResults.length === 0 && (
//             <EmptyState message={`No recipes match “${query}”. Try another search or relax filters.`} />
//           )}

//           {/* ✅ Masonry layout for suggestions */}
//           {!loading && searchedResults.length > 0 && (
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//               {searchedResults.slice(0, 12).map((x) => (
//                 <div key={x.recipe.id} style={{ breakInside: 'avoid' }} className="mb-4">
//                   <RecipeCard recipe={x.recipe as any} userIngredients={ingredients} />
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ✅ Masonry layout for recommendations */}
//           {recs.length > 0 && (
//             <div className="space-y-3 pt-4">
//               <h2 className="section-title">Recommended For You</h2>
//               <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//                 {recs.map((r) => (
//                   <div key={r.id} style={{ breakInside: 'avoid' }} className="mb-4">
//                     <RecipeCard recipe={r as any} userIngredients={ingredients} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </section>
//       </div>

//       <FavoritesDrawer />
//     </div>
//   )
// }


/// the main code is starting from here

'use client'
import React, { useEffect, useMemo, useState } from 'react'
import type { Recipe, Diet } from '../lib/types'
import { RECIPES } from '../lib/recipes'
import { findMatches, matchesRecipeSearch } from '../lib/match'

import ImageDropzone from '../components/ImageDropzone'
import IngredientPicker from '../components/IngredientPicker'
import Filters from '../components/Filters'
import RecipeCard from '../components/RecipeCard'
import FavoritesDrawer from '../components/FavoritesDrawer'
import SkeletonCard from '../components/SkeletonCard'
import EmptyState from '../components/EmptyState'
import MobileFilters from '../components/MobileFilters'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'

import { getPersonalizedRecommendations } from '../lib/recommend'
import { Card, CardContent } from '../components/card'

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [diet, setDiet] = useState<Diet>('none')
  const [maxTime, setMaxTime] = useState<number | undefined>(30)
  const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
  const [caption, setCaption] = useState('')
  const [recs, setRecs] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [cuisinesSel, setCuisinesSel] = useState<string[]>([])
  const [query, setQuery] = useState('')

  // 🔮 AI recipe state
  const [aiRecipe, setAiRecipe] = useState<Recipe | null>(null)

  const cuisinesAll = useMemo(
    () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
    []
  )

  useEffect(() => {
    try {
      const recList =
        getPersonalizedRecommendations?.({
          diet,
          cuisines: cuisinesSel,
          userIngredients: ingredients,
          limit: 6,
        }) ?? []
      const uniq = Array.from(new Map(recList.map(r => [r.id, r])).values())
      setRecs(uniq)
    } catch {
      setRecs([])
    }
  }, [ingredients, diet, cuisinesSel])

  const results = useMemo(
    () =>
      findMatches(RECIPES, {
        userIngredients: ingredients,
        diet,
        maxTime,
        difficulty,
        cuisine: cuisinesSel,
      }),
    [ingredients, diet, maxTime, difficulty, cuisinesSel]
  )

  const uniqueResults = useMemo(() => {
    const seen = new Set<string>()
    return results.filter(x => {
      const id = x.recipe.id
      if (seen.has(id)) return false
      seen.add(id)
      return true
    })
  }, [results])

  const searchedResults = useMemo(
    () => uniqueResults.filter(x => matchesRecipeSearch(x.recipe as any, query)),
    [uniqueResults, query]
  )

  const renderFilters = () => (
    <div className="space-y-4">
      <Filters
        diet={diet}
        setDiet={setDiet}
        maxTime={maxTime}
        setMaxTime={setMaxTime}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      {/* <CuisineFilter cuisines={cuisinesAll} selected={cuisinesSel} onChange={setCuisinesSel} /> */}
    </div>
  )


  function localFallbackFor(title: string) {
  const t = title.toLowerCase()
  if (t.includes('paneer')) return '/images/paneerbuttermasala.jpeg'
  if (t.includes('chicken')) return '/images/chickentikka.jpeg'
  if (t.includes('dal')) return '/images/dal.jpeg'
  return '/images/foodgenric.jpeg'
}


  // 🚀 Generate recipe from /api/generate-recipe
  async function handleGenerate() {
  if (!ingredients.length) return alert("Add some ingredients first!");
  try {
    setLoading(true);
    const res = await fetch("/api/genrate-recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok || data.error) {
      alert(data.error || "Could not generate recipe.");
      return;
    }
    const imgQuery =
  encodeURIComponent((data.title || ingredients.join(' ')).trim() + ' indian dish');

const unsplash = `https://source.unsplash.com/800x600/?${imgQuery}`;
    const normalized: Recipe = {
      id: `ai-${Date.now()}`,
      title: data.title || "AI Recipe",
      cuisine: data.cuisine || "Fusion",
      ingredients: (data.ingredients || []).map((i: any) => ({
        name: String(i.name || "").trim(),
        quantity: String(i.quantity || "").trim(),
      })),
      steps: Array.isArray(data.steps) ? data.steps : [String(data.steps || "")],
      timeMinutes: Number(data.timeMinutes ?? 30),
      difficulty: (data.difficulty as any) || "medium",
      dietTags: Array.isArray(data.dietTags) ? data.dietTags : [],
      servings: Number(data.servings ?? 2),
      nutritionPerServing: {
        calories: Number(data.nutritionPerServing?.calories ?? 0),
        protein: Number(data.nutritionPerServing?.protein ?? 0),
        carbs: Number(data.nutritionPerServing?.carbs ?? 0),
        fat: Number(data.nutritionPerServing?.fat ?? 0),
      },
      image: localFallbackFor(data.title || ''),
// instead of: image: unsplash || localFallbackFor(data.title || '')

    };

    setAiRecipe(normalized);
    setTimeout(() => {
      document.getElementById('ai-recipe')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  } catch (e) {
    setLoading(false);
    alert("Network or server error while generating recipe.");
  }
}

return (
    <div className="space-y-8">
      {/* === HEADER === */}
      <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              🍳 Smart Recipe Generator
            </h1>
            <p className="text-gray-600">
              Find delicious recipes with the ingredients you already have
            </p>
          </div>

          {/* Hero image */}
          <div className="relative mx-auto w-full max-w-4xl h-40 md:h-56 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
              alt="Fresh ingredients and spices"
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* 🔎 SEARCH AT TOP */}
          <div className="flex justify-center">
            <SearchBar
              value={query}
              onChange={setQuery}
              className="w-full max-w-2xl"
              placeholder="Search recipes (name, cuisine, tag, ingredient, time)…"
            />
          </div>

          {/* Input + Upload */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 w-full">
              <IngredientPicker
                value={ingredients}
                onChange={setIngredients}
                onGenerate={handleGenerate} // ✅ show Generate Recipe button
              />
            </div>
            <div className="flex-1 w-full">
              <ImageDropzone
                onRecognize={(ings, cap) => {
                  setCaption(cap || '')
                  if (ings?.length)
                    setIngredients([...new Set([...ingredients, ...ings])])
                }}
                onLoadingChange={setLoading}
              />
            </div>
          </div>

          {caption && (
            <p className="text-sm text-gray-500 italic text-center">
              Caption guess: “{caption}”
            </p>
          )}

          {/* Mobile filters */}
          <div className="md:hidden pt-2">
            <MobileFilters renderFilters={renderFilters} />
          </div>
        </CardContent>
      </Card>

      {/* === MAIN CONTENT === */}
      <div className="grid md:grid-cols-[280px,1fr] gap-6">
        {/* Sidebar filters (desktop) */}
        <aside className="hidden md:block">
          <div className="card md:sticky md:top-4 md:h-fit space-y-4">
            <h3 className="font-semibold">Filters</h3>
            {renderFilters()}
          </div>
        </aside>

        {/* Results */}
        <section className="space-y-6">
          {/* ✨ AI result card */}
          {aiRecipe && (
            <div id="ai-recipe" className="space-y-3">
              <h2 className="section-title">✨ AI Generated Recipe</h2>
              <RecipeCard recipe={aiRecipe} userIngredients={ingredients} />
            </div>
          )}

          <h2 className="section-title">Suggestions</h2>

          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {!loading && searchedResults.length === 0 && (
            <EmptyState message={`No recipes match “${query}”. Try another search or relax filters.`} />
          )}

          {!loading && searchedResults.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {searchedResults.slice(0, 12).map(x => (
                <div key={x.recipe.id} style={{ breakInside: 'avoid' }} className="mb-4">
                  <RecipeCard recipe={x.recipe as any} userIngredients={ingredients} />
                </div>
              ))}
            </div>
          )}

          {recs.length > 0 && (
            <div className="space-y-3 pt-4">
              <h2 className="section-title">Recommended For You</h2>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                {recs.map(r => (
                  <div key={r.id} style={{ breakInside: 'avoid' }} className="mb-4">
                    <RecipeCard recipe={r as any} userIngredients={ingredients} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>

      <FavoritesDrawer />
    </div>
  )
}
