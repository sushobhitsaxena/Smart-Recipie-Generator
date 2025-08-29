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
