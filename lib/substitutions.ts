// export const SUBSTITUTIONS: Record<string, string[]> = {
//   milk: ['almond milk', 'soy milk', 'oat milk'],
//   butter: ['olive oil', 'ghee'],
//   egg: ['flax egg', 'chia egg'],
//   'wheat flour': ['rice flour', 'oat flour', 'gluten-free blend'],
//   yogurt: ['coconut yogurt'],
//   chicken: ['tofu', 'paneer'],
//   paneer: ['tofu'],
//   cream: ['cashew cream'],
//   cheese: ['nutritional yeast'],
//   shrimp: ['tofu', 'mushroom'],
// }

// export function getSubstitutes(term: string): string[] {
//   const key = term.toLowerCase().trim()
//   return SUBSTITUTIONS[key] ?? []
// }



// lib/substitutions.ts
export const SUBS: Record<string, string[]> = {
  paneer: ['tofu', 'firm tofu'],
  butter: ['ghee', 'olive oil'],
  cream: ['milk + 1 tsp butter', 'yogurt (for curries)'],
  'soy sauce': ['tamari', 'coconut aminos'],
  rice: ['quinoa', 'millet'],
  tomato: ['tomato puree', 'canned tomato'],
  onion: ['shallots', 'leeks'],
  garlic: ['garlic powder', 'asafoetida (pinch)'],
  egg: ['silken tofu (scramble)', 'flax egg'],
  milk: ['oat milk', 'soy milk'],
  yogurt: ['coconut yogurt', 'hung curd'],
}

export function suggestSubs(name: string): string[] {
  return SUBS[name.toLowerCase()] ?? []
}

// ✅ alias to satisfy existing imports in match.ts
export const getSubstitutes = suggestSubs
