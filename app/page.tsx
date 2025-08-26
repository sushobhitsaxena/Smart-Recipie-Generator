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



'use client'
import React, { useEffect, useMemo, useState } from 'react'
import type { Recipe, Diet } from '../lib/types'

import ImageDropzone from '../components/ImageDropzone'
import IngredientPicker from '../components/IngredientPicker'
import Filters from '../components/Filters'
import CuisineFilter from '../components/CuisineFilter' // NEW
import RecipeCard from '../components/RecipeCard'
import FavoritesDrawer from '../components/FavoritesDrawer'

import { RECIPES } from '../lib/recipes'
import { findMatches } from '../lib/match'
import { getPersonalizedRecommendations } from '../lib/recommend' // if you added this

export default function Page() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [diet, setDiet] = useState<Diet>('none')
  const [maxTime, setMaxTime] = useState<number | undefined>(30)
  const [difficulty, setDifficulty] = useState<Array<'easy' | 'medium' | 'hard'>>([])
  const [caption, setCaption] = useState('')
  const [recs, setRecs] = useState<Recipe[]>([])
  const [cuisinesSel, setCuisinesSel] = useState<string[]>([]) // NEW

  // NEW: compute available cuisines from recipe DB (sorted, unique)
  const cuisinesAll = useMemo(
    () => Array.from(new Set(RECIPES.map(r => r.cuisine))).sort(),
    []
  )

  // OPTIONAL: client-side personalized recs
  useEffect(() => {
    try { setRecs(getPersonalizedRecommendations?.(6) ?? []) } catch {}
  }, [ingredients])

  // NEW: persist ingredients across refreshes
  useEffect(() => {
    const key = 'srg:ingredients'
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '[]')
      if (Array.isArray(saved)) setIngredients(saved)
    } catch {}
  }, [])
  useEffect(() => {
    const key = 'srg:ingredients'
    try { localStorage.setItem(key, JSON.stringify(ingredients)) } catch {}
  }, [ingredients])

  const results = useMemo(
    () =>
      findMatches(RECIPES, {
        userIngredients: ingredients,
        diet,
        maxTime,
        difficulty,
        cuisine: cuisinesSel, // NEW
      }),
    [ingredients, diet, maxTime, difficulty, cuisinesSel]
  )

  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-bold">Smart Recipe Generator</h1>

      <IngredientPicker value={ingredients} onChange={setIngredients} />

      <ImageDropzone
        onRecognize={(ings, cap) => {
          setCaption(cap || '')
          if (ings?.length) setIngredients([...new Set([...ingredients, ...ings])])
        }}
      />

      {caption && (
        <p className="text-xs opacity-60">
          Caption guess: <em>{caption}</em>
        </p>
      )}

      <Filters
        diet={diet}
        setDiet={setDiet}
        maxTime={maxTime}
        setMaxTime={setMaxTime}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />

      {/* NEW: Cuisine filter */}
      <CuisineFilter
        cuisines={cuisinesAll}
        selected={cuisinesSel}
        onChange={setCuisinesSel}
      />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Suggestions</h2>
        {results.length === 0 && (
          <div className="opacity-60">No matches yet. Try adding tomato, onion, rice…</div>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {results.slice(0, 10).map((x) => (
            <RecipeCard key={x.recipe.id} recipe={x.recipe as any} />
          ))}
        </div>
      </section>

      {recs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Recommended For You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recs.map((r) => (
              <RecipeCard key={r.id} recipe={r as any} />
            ))}
          </div>
        </section>
      )}

      <FavoritesDrawer />
    </main>
  )
}
