export const SUBSTITUTIONS: Record<string, string[]> = {
  milk: ['almond milk', 'soy milk', 'oat milk'],
  butter: ['olive oil', 'ghee'],
  egg: ['flax egg', 'chia egg'],
  'wheat flour': ['rice flour', 'oat flour', 'gluten-free blend'],
  yogurt: ['coconut yogurt'],
  chicken: ['tofu', 'paneer'],
  paneer: ['tofu'],
  cream: ['cashew cream'],
  cheese: ['nutritional yeast'],
  shrimp: ['tofu', 'mushroom'],
}

export function getSubstitutes(term: string): string[] {
  const key = term.toLowerCase().trim()
  return SUBSTITUTIONS[key] ?? []
}
