// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }




// // 'use client'
// // import React, { useState } from 'react'
// // import IngredientPicker from '@/components/IngredientPicker'
// // import ImageDropzone from '@/components/ImageDropzone'
// // import Filters from '@/components/Filters'
// // import RecipeCard from '@/components/RecipeCard'
// // import FavoritesDrawer from '@/components/FavoritesDrawer'

// // // temporary mock recipe to test RecipeCard
// // const demoRecipe = {
// //   id: 'demo',
// //   title: 'Test Recipe',
// //   cuisine: 'Indian',
// //   ingredients: [
// //     { name: 'tomato', quantity: '2' },
// //     { name: 'onion', quantity: '1' },
// //   ],
// //   steps: ['Chop onion', 'Cook with tomato'],
// //   timeMinutes: 15,
// //   difficulty: 'easy',
// //   dietTags: ['veg'] as any,
// //   servings: 2,
// //   nutritionPerServing: { calories: 200, protein: 5, carbs: 30, fat: 6 },
// // }

// // export default function Page() {
// //   const [ingredients, setIngredients] = useState<string[]>([])
// //   const [diet, setDiet] = useState<'veg' | 'vegan' | 'gluten-free' | 'none'>(
// //     'none'
// //   )
// //   const [maxTime, setMaxTime] = useState<number | undefined>(30)
// //   const [difficulty, setDifficulty] = useState<('easy' | 'medium' | 'hard')[]>(
// //     []
// //   )
// //   const [caption, setCaption] = useState<string>('')

// //   return (
// //     <main className="space-y-6">
// //       <h1 className="text-2xl font-bold">Smart Recipe Generator (Test Mode)</h1>

// //       {/* ingredient input */}
// //       <IngredientPicker value={ingredients} onChange={setIngredients} />

// //       {/* image upload (no API yet, just displays caption) */}
// //       <ImageDropzone
// //         onRecognize={(ings, cap) => {
// //           setCaption(cap || '')
// //           if (ings.length)
// //             setIngredients([...new Set([...ingredients, ...ings])])
// //         }}
// //       />
// //       {caption && (
// //         <p className="text-xs opacity-60">Caption guess: {caption}</p>
// //       )}

// //       {/* filters */}
// //       <Filters
// //         diet={diet}
// //         setDiet={setDiet}
// //         maxTime={maxTime}
// //         setMaxTime={setMaxTime}
// //         difficulty={difficulty}
// //         setDifficulty={setDifficulty}
// //       />

// //       {/* test recipe card */}
// //       <RecipeCard recipe={demoRecipe} />

// //       {/* favorites drawer */}
// //       <FavoritesDrawer />
// //     </main>
// //   )
// // }
// 'use client'
// import React, { useState } from 'react'
// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'


// // temporary mock recipe to test RecipeCard
// const demoRecipe = {
//   id: 'demo',
//   title: 'Test Recipe',
//   cuisine: 'Indian',
//   ingredients: [
//     { name: 'tomato', quantity: '2' },
//     { name: 'onion', quantity: '1' },
//   ],
//   steps: ['Chop onion', 'Cook with tomato'],
//   timeMinutes: 15,
//   difficulty: 'easy',
//   dietTags: ['veg'],
//   servings: 2,
//   nutritionPerServing: { calories: 200, protein: 5, carbs: 30, fat: 6 },
// }

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<'veg' | 'vegan' | 'gluten-free' | 'none'>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')

//   return (
//     <main className="space-y-6">
//       <h1 className="text-2xl font-bold">Smart Recipe Generator (Test Mode)</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       {/* image upload (no API yet, just displays caption) */}
//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//       />
//       {caption && <p className="text-xs opacity-60">Caption guess: {caption}</p>}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       <RecipeCard recipe={demoRecipe as any} />

//       <FavoritesDrawer />
//     </main>
//   )
// }


// export default function Page() {
//   return (
//     <main className="space-y-6">
//       <h1 className="text-3xl font-bold text-red-500">Tailwind v4 wired ✅</h1>
//       <p className="opacity-70">Next up: components, data, and APIs.</p>
//     </main>
//   );
// }



// 'use client'
// import React, { useMemo, useState } from 'react'

// import Dropzone from '../components/Dropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'

// import RecipeCard from '../components/RecipeCard'
// // replace the FavoritesDrawer import line:
// import FD from '../components/FD'

// // ...later in JSX, replace <FavoritesDrawer /> with:
// <FD />


// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import type { Diet } from '../lib/types'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')

//   const results = useMemo(
//     () =>
//       findMatches(RECIPES, {
//         userIngredients: ingredients,
//         diet,
//         maxTime,
//         difficulty,
//       }),
//     [ingredients, diet, maxTime, difficulty]
//   )

//   return (
//     <main className="space-y-6">
//       <h1 className="text-2xl font-bold">Smart Recipe Generator</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       <Dropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//       />

//       {caption && (
//         <p className="text-xs opacity-60">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       <section className="space-y-3">
//         <h2 className="text-xl font-semibold">Suggestions</h2>
//         {results.length === 0 && (
//           <div className="opacity-60">
//             No matches yet. Try adding tomato, onion, rice…
//           </div>
//         )}
//         <div className="grid md:grid-cols-2 gap-4">
//           {results.slice(0, 10).map((x) => (
//             <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//           ))}
//         </div>
//       </section>

//       <FavoritesDrawer />
//     </main>
//   )
// }
// -----------------------------this is working code below-----------------------------
// 'use client'
// import React, { useMemo, useState } from 'react'
// import { useEffect } from 'react'
// import type { Recipe } from '../lib/types'

// // import Dropzone from '../components/Dropzone'
// import ImageDropzone from '../components/ImageDropzone'

// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer' // ✅ use real drawer

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import type { Diet } from '../lib/types'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')

//   const results = useMemo(
//     () =>
//       findMatches(RECIPES, {
//         userIngredients: ingredients,
//         diet,
//         maxTime,
//         difficulty,
//       }),
//     [ingredients, diet, maxTime, difficulty]
//   )

//   return (
//     <main className="space-y-6">
//       <h1 className="text-2xl font-bold">Smart Recipe Generator</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//      <ImageDropzone
//   onRecognize={(ings, cap) => {
//     setCaption(cap || '')
//     if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//   }}
// />


//       {caption && (
//         <p className="text-xs opacity-60">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       <section className="space-y-3">
//         <h2 className="text-xl font-semibold">Suggestions</h2>
//         {results.length === 0 && (
//           <div className="opacity-60">
//             No matches yet. Try adding tomato, onion, rice…
//           </div>
//         )}
//         <div className="grid md:grid-cols-2 gap-4">
//           {results.slice(0, 10).map((x) => (
//             <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//           ))}
//         </div>
//       </section>

//       {/* ✅ real Favorites drawer */}
//       <FavoritesDrawer />
//     </main>
//   )
// }







// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])

//   const results = useMemo(
//     () =>
//       findMatches(RECIPES, {
//         userIngredients: ingredients,
//         diet,
//         maxTime,
//         difficulty,
//       }),
//     [ingredients, diet, maxTime, difficulty]
//   )

//   // compute recs on the client so we can read localStorage
//   useEffect(() => {
//     setRecs(getPersonalizedRecommendations(6))
//   }, [ingredients]) // any interaction can retrigger; tweak as you like

//   return (
//     <main className="space-y-6">
//       <h1 className="text-2xl font-bold">Smart Recipe Generator</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//       />

//       {caption && (
//         <p className="text-xs opacity-60">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       <section className="space-y-3">
//         <h2 className="text-xl font-semibold">Suggestions</h2>
//         {results.length === 0 && (
//           <div className="opacity-60">No matches yet. Try adding tomato, onion, rice…</div>
//         )}
//         <div className="grid md:grid-cols-2 gap-4">
//           {results.slice(0, 10).map((x) => (
//             <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//           ))}
//         </div>
//       </section>

//       {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="text-xl font-semibold">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} />
//             ))}
//           </div>
//         </section>
//       )}

//       <FavoritesDrawer />
//     </main>
//   )
// }



// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter' // NEW
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend' // if you added this

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])
//   const [cuisinesSel, setCuisinesSel] = useState<string[]>([]) // NEW

//   // NEW: compute available cuisines from recipe DB (sorted, unique)
//   const cuisinesAll = useMemo(
//     () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
//     []
//   )

//   // OPTIONAL: client-side personalized recs
//   useEffect(() => {
//     try { setRecs(getPersonalizedRecommendations?.(6) ?? []) } catch {}
//   }, [ingredients])

//   // NEW: persist ingredients across refreshes
//   useEffect(() => {
//     const key = 'srg:ingredients'
//     try {
//       const saved = JSON.parse(localStorage.getItem(key) || '[]')
//       if (Array.isArray(saved)) setIngredients(saved)
//     } catch {}
//   }, [])
//   useEffect(() => {
//     const key = 'srg:ingredients'
//     try { localStorage.setItem(key, JSON.stringify(ingredients)) } catch {}
//   }, [ingredients])

//   const results = useMemo(
//     () =>
//       findMatches(RECIPES, {
//         userIngredients: ingredients,
//         diet,
//         maxTime,
//         difficulty,
//         cuisine: cuisinesSel, // NEW
//       }),
//     [ingredients, diet, maxTime, difficulty, cuisinesSel]
//   )

//   return (
//     <main className="space-y-6">
//       <h1 className="text-2xl font-bold">Smart Recipe Generator</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//       />

//       {caption && (
//         <p className="text-xs opacity-60">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       {/* NEW: Cuisine filter */}
//       <CuisineFilter
//         cuisines={cuisinesAll}
//         selected={cuisinesSel}
//         onChange={setCuisinesSel}
//       />

//       <section className="space-y-3">
//         <h2 className="text-xl font-semibold">Suggestions</h2>
//         {results.length === 0 && (
//           <div className="opacity-60">No matches yet. Try adding tomato, onion, rice…</div>
//         )}
//         <div className="grid md:grid-cols-2 gap-4">
//           {results.slice(0, 10).map((x) => (
//             <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//           ))}
//         </div>
//       </section>

//       {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="text-xl font-semibold">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} />
//             ))}
//           </div>
//         </section>
//       )}

//       <FavoritesDrawer />
//     </main>
//   )
// }




// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter' // if you added it
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])
//   const [loading, setLoading] = useState(false) // NEW
//   const [cuisinesSel, setCuisinesSel] = useState<string[]>([])

//   const cuisinesAll = useMemo(
//     () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
//     []
//   )

//   useEffect(() => {
//     try { setRecs(getPersonalizedRecommendations?.(6) ?? []) } catch {}
//   }, [ingredients])

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

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold gradient-title">Smart Recipe Generator</h1>


//      <IngredientPicker value={ingredients} onChange={setIngredients} />
// {/* <Filters
//   diet={diet} setDiet={setDiet}
//   maxTime={maxTime} setMaxTime={setMaxTime}
//   difficulty={difficulty} setDifficulty={setDifficulty}
// /> */}


//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//         onLoadingChange={setLoading} // NEW
//       />

//       {caption && (
//         <p className="text-xs subtle">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       <Filters
//         diet={diet}
//         setDiet={setDiet}
//         maxTime={maxTime}
//         setMaxTime={setMaxTime}
//         difficulty={difficulty}
//         setDifficulty={setDifficulty}
//       />

//       {/* optional */}
//       {/* <CuisineFilter cuisines={cuisinesAll} selected={cuisinesSel} onChange={setCuisinesSel} /> */}

//       <section className="space-y-3">
//   <h2 className="section-title">Suggestions</h2>

//         {/* Loading skeletons */}
//         {loading && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
//           </div>
//         )}
        

//         {/* Empty state */}
//         {!loading && results.length === 0 && (
//           <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//         )}


//         {/* Results */}
//         {!loading && results.length > 0 && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {results.slice(0, 10).map((x) => (
//               <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//             ))}
//           </div>
//         )}
//       </section>

//       {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="section-title">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} />
//             ))}
//           </div>
//         </section>
//       )}

//       <FavoritesDrawer />
//     </div>
//   )
// }




// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter' // if you added it
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])
//   const [loading, setLoading] = useState(false)
//   const [cuisinesSel, setCuisinesSel] = useState<string[]>([])

//   // ✅ all available cuisines (unique + sorted)
//   const cuisinesAll = useMemo(
//     () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
//     []
//   )

//   // ✅ load personalized recommendations (deduplicated)
//   useEffect(() => {
//     try {
//       const recList = getPersonalizedRecommendations?.(6) ?? []
//       const uniq = Array.from(new Map(recList.map(r => [r.id, r])).values())
//       setRecs(uniq)
//     } catch {
//       setRecs([])
//     }
//   }, [ingredients])

//   // ✅ compute recipe matches
//   // const results = useMemo(
//   //   () =>
//   //     findMatches(RECIPES, {
//   //       userIngredients: ingredients,
//   //       diet,
//   //       maxTime,
//   //       difficulty,
//   //       cuisine: cuisinesSel,
//   //     }),
//   //   [ingredients, diet, maxTime, difficulty, cuisinesSel]
//   // )
//   // compute matches
// const results = useMemo(
//   () =>
//     findMatches(RECIPES, {
//       userIngredients: ingredients,
//       diet,
//       maxTime,
//       difficulty,
//       cuisine: cuisinesSel,
//     }),
//   [ingredients, diet, maxTime, difficulty, cuisinesSel]
// )

// // ✅ make sure each id appears only once
// // const uniqueResults = useMemo(() => {
// //   const byId = new Map<string, typeof results[number]>()
// //   for (const m of results) if (!byId.has(m.recipe.id)) byId.set(m.recipe.id, m)
// //   return Array.from(byId.values())
// // }, [results])
// const uniqueResults = useMemo(() => {
//   const seen = new Set<string>()
//   return results.filter(x => {
//     const id = x.recipe.id
//     if (seen.has(id)) return false
//     seen.add(id)
//     return true
//   })
// }, [results])
// {!loading && uniqueResults.length > 0 && (
//   <div className="grid md:grid-cols-2 gap-4">
//     {uniqueResults.slice(0, 10).map((x) => (
//       <RecipeCard key={x.recipe.id} recipe={x.recipe as any} userIngredients={ingredients} />
//     ))}
//   </div>
// )}



//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold gradient-title">Smart Recipe Generator</h1>

//       {/* === INGREDIENT INPUT === */}
//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       {/* === IMAGE UPLOAD === */}
//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//         onLoadingChange={setLoading}
//       />

//       {caption && (
//         <p className="text-xs subtle">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

//       {/* === FILTERS === */}
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

//       {/* === SUGGESTIONS === */}
//       <section className="space-y-3">
//         <h2 className="section-title">Suggestions</h2>

//         {loading && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {Array.from({ length: 4 }).map((_, i) => (
//               <SkeletonCard key={i} />
//             ))}
//           </div>
//         )}

//         {!loading && results.length === 0 && (
//           <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//         )}

//         {!loading && results.length > 0 && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {results.slice(0, 10).map((x) => (
//               <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* === PERSONALIZED RECS === */}
//       {/* {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="section-title">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} />
//             ))}
//           </div>
//         </section>
//       )} */}
//       {recs.length > 0 && (
//   <section className="space-y-3">
//     <h2 className="section-title">Recommended For You</h2>
//     <div className="grid md:grid-cols-2 gap-4">
//       {recs.map((r) => (
//         <RecipeCard key={r.id} recipe={r as any} userIngredients={ingredients} />
//       ))}
//     </div>
//   </section>
// )}

//       <FavoritesDrawer />
//     </div>
//   )
// }




// it has the ui import and looks attracting
// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter' // if you added it
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// // ⬇️ UI imports
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
//   }, [ingredients])

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

//   return (
//     <div className="space-y-8">
//       {/* === HEADER CARD === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl font-bold text-gray-800">🍳 Smart Recipe Generator</h1>
//             <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
//           </div>

//           {/* === INGREDIENT INPUT + UPLOAD === */}
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

//           {/* === FILTERS === */}
//           <div className="border-t pt-4">
//             <Filters
//               diet={diet}
//               setDiet={setDiet}
//               maxTime={maxTime}
//               setMaxTime={setMaxTime}
//               difficulty={difficulty}
//               setDifficulty={setDifficulty}
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* === SUGGESTIONS === */}
//       <section className="space-y-3">
//         <h2 className="section-title">Suggestions</h2>

//         {loading && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {Array.from({ length: 4 }).map((_, i) => (
//               <SkeletonCard key={i} />
//             ))}
//           </div>
//         )}

//         {!loading && results.length === 0 && (
//           <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//         )}

//         {!loading && uniqueResults.length > 0 && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {uniqueResults.slice(0, 10).map((x) => (
//               <RecipeCard key={x.recipe.id} recipe={x.recipe as any} userIngredients={ingredients} />
//             ))}
//           </div>
//         )}
//       </section>

//       {/* === PERSONALIZED RECS === */}
//       {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="section-title">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} userIngredients={ingredients} />
//             ))}
//           </div>
//         </section>
//       )}

//       <FavoritesDrawer />
//     </div>
//   )
// }




// // app/page.tsx
// // it has the basic structure of the app
// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'
// // import CuisineFilter from '../components/CuisineFilter' // optional

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// export default function Page() {
//   const [ingredients, setIngredients] = useState<string[]>([])
//   const [diet, setDiet] = useState<Diet>('none')
//   const [maxTime, setMaxTime] = useState<number | undefined>(30)
//   const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
//   const [caption, setCaption] = useState('')
//   const [recs, setRecs] = useState<Recipe[]>([])
//   const [loading, setLoading] = useState(false)
//   const [cuisinesSel, setCuisinesSel] = useState<string[]>([])

//   // optional cuisine list
//   // const cuisinesAll = useMemo(() => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(), [])

//   // load personalized recs whenever inputs change
//   useEffect(() => {
//     try {
//       const list = getPersonalizedRecommendations({
//         diet,
//         cuisines: cuisinesSel,
//         userIngredients: ingredients,
//         limit: 6,
//       })
//       // de-dup just in case
//       const uniq = Array.from(new Map(list.map(r => [r.id, r])).values())
//       setRecs(uniq)
//     } catch {
//       setRecs([])
//     }
//   }, [ingredients, diet, cuisinesSel])

//   // compute matches
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

//   // unique results to avoid duplicate key errors
//   const uniqueResults = useMemo(() => {
//     const seen = new Set<string>()
//     return results.filter((x) => {
//       const id = x.recipe.id
//       if (seen.has(id)) return false
//       seen.add(id)
//       return true
//     })
//   }, [results])

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold gradient-title">Smart Recipe Generator</h1>

//       <IngredientPicker value={ingredients} onChange={setIngredients} />

//       <ImageDropzone
//         onRecognize={(ings, cap) => {
//           setCaption(cap || '')
//           if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
//         }}
//         onLoadingChange={setLoading}
//       />

//       {caption && (
//         <p className="text-xs subtle">
//           Caption guess: <em>{caption}</em>
//         </p>
//       )}

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

//       <section className="space-y-3">
//         <h2 className="section-title">Suggestions</h2>

//         {loading && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
//           </div>
//         )}

//         {!loading && uniqueResults.length === 0 && (
//           <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//         )}

//         {!loading && uniqueResults.length > 0 && (
//           <div className="grid md:grid-cols-2 gap-4">
//             {uniqueResults.slice(0, 10).map((x) => (
//               <RecipeCard key={x.recipe.id} recipe={x.recipe as any} userIngredients={ingredients} />
//             ))}
//           </div>
//         )}
//       </section>

//       {recs.length > 0 && (
//         <section className="space-y-3">
//           <h2 className="section-title">Recommended For You</h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {recs.map((r) => (
//               <RecipeCard key={r.id} recipe={r as any} userIngredients={ingredients} />
//             ))}
//           </div>
//         </section>
//       )}

//       <FavoritesDrawer />
//     </div>
//   )
// }




// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter' // if you added it
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'
// import MobileFilters from '../components/MobileFilters' // ✅ new

// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'
// import { getPersonalizedRecommendations } from '../lib/recommend'

// // ⬇️ UI imports
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
//   // ✅ include all inputs that influence recs
//   },[ingredients, diet, cuisinesSel])

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

//   // ✅ shared renderer so mobile sheet + desktop sidebar stay in sync
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

//   return (
//     <div className="space-y-8">
//       {/* === HEADER CARD (kept) === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl font-bold text-gray-800">🍳 Smart Recipe Generator</h1>
//             <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
//           </div>

//           {/* === INGREDIENT INPUT + UPLOAD === */}
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

//           {/* === MOBILE FILTER SHEET BUTTON (new) === */}
//           <div className="md:hidden pt-2">
//             <MobileFilters renderFilters={renderFilters} />
//           </div>

//           {/* (desktop filters move to sticky sidebar below) */}
//         </CardContent>
//       </Card>

//       {/* === CONTENT AREA: desktop sidebar + results === */}
//       <div className="grid md:grid-cols-[280px,1fr] gap-6">
//         {/* === DESKTOP STICKY FILTERS (new) === */}
//         <aside className="hidden md:block">
//           <div className="card md:sticky md:top-4 md:h-fit space-y-4">
//             <h3 className="font-semibold">Filters</h3>
//             {renderFilters()}
//           </div>
//         </aside>

//         {/* === RESULTS === */}
//         <section className="space-y-3">
//           <h2 className="section-title">Suggestions</h2>

//           {loading && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <SkeletonCard key={i} />
//               ))}
//             </div>
//           )}

//           {!loading && uniqueResults.length === 0 && (
//             <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//           )}

//             {/* this is the code without expandable version  */}
//           {/* {!loading && uniqueResults.length > 0 && (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {uniqueResults.slice(0, 12).map((x) => (
//                 <RecipeCard key={x.recipe.id} recipe={x.recipe as any} userIngredients={ingredients} />
//               ))}
//             </div>
//           )} */}

//           {/* this is after the expandable one feature set it according to you */}

//           {!loading && uniqueResults.length > 0 && (
//   <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//     {uniqueResults.slice(0, 12).map((x) => (
//       <div key={x.recipe.id} style={{ breakInside: 'avoid' }} className="mb-4">
//         <RecipeCard recipe={x.recipe as any} userIngredients={ingredients} />
//       </div>
//     ))}
//   </div>
// )}


//           {/* === PERSONALIZED RECS === */}
//           {recs.length > 0 && (
//             <div className="space-y-3 pt-4">
//               <h2 className="section-title">Recommended For You</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {recs.map((r) => (
//                   <RecipeCard key={r.id} recipe={r as any} userIngredients={ingredients} />
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


// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'
// import { RECIPES } from '../lib/recipes'
// import { findMatches } from '../lib/match'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import CuisineFilter from '../components/CuisineFilter'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'
// import MobileFilters from '../components/MobileFilters'


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
//   }, [ingredients, diet, cuisinesSel]) // ✅ include all deps

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

//   return (
//     <div className="space-y-8">
//       {/* === HEADER === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl font-bold text-gray-800">🍳 Smart Recipe Generator</h1>
//             <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
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

//           {!loading && uniqueResults.length === 0 && (
//             <EmptyState message="No matches yet. Try adding tomato, onion, or rice — or relax filters." />
//           )}

//           {/* ✅ Masonry layout for suggestions */}
//           {!loading && uniqueResults.length > 0 && (
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//               {uniqueResults.slice(0, 12).map((x) => (
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

//   return (
//     <div className="space-y-8">
//       {/* === HEADER === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl font-bold text-gray-800">🍳 Smart Recipe Generator</h1>
//             <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
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
//           <div className="flex items-center justify-between gap-4">
//             <h2 className="section-title">Suggestions</h2>
//             <SearchBar value={query} onChange={setQuery} />
//           </div>

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



'use client'
import React, { useEffect, useMemo, useState } from 'react'
import type { Recipe, Diet } from '../lib/types'
import { RECIPES } from '../lib/recipes'
import { findMatches, matchesRecipeSearch } from '../lib/match'

import ImageDropzone from '../components/ImageDropzone'
import IngredientPicker from '../components/IngredientPicker'
import Filters from '../components/Filters'
import CuisineFilter from '../components/CuisineFilter'
import RecipeCard from '../components/RecipeCard'
import FavoritesDrawer from '../components/FavoritesDrawer'
import SkeletonCard from '../components/SkeletonCard'
import EmptyState from '../components/EmptyState'
import MobileFilters from '../components/MobileFilters'
import SearchBar from '../components/SearchBar'
import Image from "next/image"


import { getPersonalizedRecommendations } from '../lib/recommend'

// UI
import { Card, CardContent } from "../components/card"

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [diet, setDiet] = useState<Diet>('none')
  const [maxTime, setMaxTime] = useState<number | undefined>(30)
  const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
  const [caption, setCaption] = useState('')
  const [recs, setRecs] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [cuisinesSel, setCuisinesSel] = useState<string[]>([])
  const [query, setQuery] = useState('') // 🔎 search state

  const cuisinesAll = useMemo(
    () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
    []
  )

  useEffect(() => {
    try {
      const recList = getPersonalizedRecommendations?.({
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

  // 🔎 Apply text search after all other filters
  const searchedResults = useMemo(() => {
    return uniqueResults.filter((x) => matchesRecipeSearch(x.recipe as any, query))
  }, [uniqueResults, query])

  // Shared filters
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
      {/* Optional cuisine filter */}
      {/* <CuisineFilter cuisines={cuisinesAll} selected={cuisinesSel} onChange={setCuisinesSel} /> */}
    </div>
  )

  return (
    <div className="space-y-8">
      {/* === HEADER === */}
      <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
        <CardContent className="p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">🍳 Smart Recipe Generator</h1>
            <p className="text-gray-600">Find delicious recipes with the ingredients you already have</p>
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
              <IngredientPicker value={ingredients} onChange={setIngredients} />
            </div>
            <div className="flex-1 w-full">
              <ImageDropzone
                onRecognize={(ings, cap) => {
                  setCaption(cap || '')
                  if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
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
        <section className="space-y-3">
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

          {/* ✅ Masonry layout for suggestions */}
          {!loading && searchedResults.length > 0 && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {searchedResults.slice(0, 12).map((x) => (
                <div key={x.recipe.id} style={{ breakInside: 'avoid' }} className="mb-4">
                  <RecipeCard recipe={x.recipe as any} userIngredients={ingredients} />
                </div>
              ))}
            </div>
          )}

          {/* ✅ Masonry layout for recommendations */}
          {recs.length > 0 && (
            <div className="space-y-3 pt-4">
              <h2 className="section-title">Recommended For You</h2>
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
                {recs.map((r) => (
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



// 'use client'
// import React, { useEffect, useMemo, useState } from 'react'
// import type { Recipe, Diet } from '../lib/types'
// import { RECIPES } from '../lib/recipes'
// import { findMatches, matchesRecipeSearch } from '../lib/match'

// import ImageDropzone from '../components/ImageDropzone'
// import IngredientPicker from '../components/IngredientPicker'
// import Filters from '../components/Filters'
// import RecipeCard from '../components/RecipeCard'
// import FavoritesDrawer from '../components/FavoritesDrawer'
// import SkeletonCard from '../components/SkeletonCard'
// import EmptyState from '../components/EmptyState'
// import MobileFilters from '../components/MobileFilters'
// import SearchBar from '../components/SearchBar'
// import Image from "next/image"

// import { getPersonalizedRecommendations } from '../lib/recommend'
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
//   const [query, setQuery] = useState('')

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

//   const searchedResults = useMemo(() => {
//     return uniqueResults.filter((x) => matchesRecipeSearch(x.recipe as any, query))
//   }, [uniqueResults, query])

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
//     </div>
//   )

//   // 🚀 Generate recipe steps from AI (placeholder)
//   // 🚀 Generate recipe steps from GPT
//   const [aiRecipe, setAiRecipe] = useState<Recipe | null>(null);
// // async function handleGenerate() {
// //   if (ingredients.length === 0) {
// //     alert("⚠️ Please add some ingredients first!");
// //     return;
// //   }

// //   try {
// //     setLoading(true);
// //     const res = await fetch("/api/generate-recipe", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ ingredients }),
// //     });

// //     const data = await res.json();
// //     setLoading(false);

// //     if (data.error) {
// //   alert("❌ " + data.error);
// // } else {
// //   alert("✨ AI Recipe Generated:\n\n" + data.title);
// //   console.log("Full recipe:", data);
// // }

// //   } catch (err) {
// //     setLoading(false);
// //     alert("Something went wrong while generating recipe.");
// //   }
// // }
// async function handleGenerate() {
//   if (!ingredients.length) {
//     alert("⚠️ Please add some ingredients first!");
//     return;
//   }

//   try {
//     setLoading(true);
//     const res = await fetch("/api/generate-recipe", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ ingredients }),
//     });

//     const data = await res.json();
//     setLoading(false);

//     if (data.error) {
//       alert("❌ " + data.error);
//     } else {
//       setAiRecipe(data); // 👈 store AI recipe
//     }
//   } catch (err) {
//     setLoading(false);
//     alert("Something went wrong while generating recipe.");
//   }
// }

//   return (
//     <div className="space-y-8">
//       {/* === HEADER === */}
//       <Card className="shadow-lg rounded-2xl bg-gradient-to-r from-green-50 to-teal-50">
//         <CardContent className="p-8 space-y-6">
//           <div className="text-center space-y-2">
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
//               🍳 Smart Recipe Generator
//             </h1>
//             <p className="text-gray-600">
//               Find delicious recipes with the ingredients you already have
//             </p>
//           </div>

//           {/* Hero image */}
//           <div className="relative mx-auto w-full max-w-4xl h-40 md:h-56 rounded-2xl overflow-hidden shadow-md">
//             <Image
//               src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
//               alt="Fresh ingredients and spices"
//               fill
//               sizes="(max-width: 768px) 100vw, 800px"
//               className="object-cover"
//               priority
//             />
//           </div>
//       {/* AI Recipe Section */}
// {aiRecipe && (
//   <div className="space-y-3 pt-6">
//     <h2 className="section-title">✨ AI Generated Recipe</h2>
//     <RecipeCard recipe={aiRecipe} userIngredients={ingredients} />
//   </div>
// )}
//           {/* 🔎 Search */}
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
//               <IngredientPicker 
//                 value={ingredients} 
//                 onChange={setIngredients}
//                 onGenerate={handleGenerate}  // ✅ now generate button will show
//               />
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

//           {!loading && searchedResults.length > 0 && (
//             <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
//               {searchedResults.slice(0, 12).map((x) => (
//                 <div key={x.recipe.id} style={{ breakInside: 'avoid' }} className="mb-4">
//                   <RecipeCard recipe={x.recipe as any} userIngredients={ingredients} />
//                 </div>
//               ))}
//             </div>
//           )}

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
