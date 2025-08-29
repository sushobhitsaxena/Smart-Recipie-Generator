// lib/normalize.ts

/** Preferred Indian terms for common food synonyms */
const PREFERRED: Record<string, string> = {
  // Vegetables / herbs
  eggplant: "brinjal",
  aubergine: "brinjal",
  okra: "bhindi",
  "lady finger": "bhindi",
  ladyfinger: "bhindi",
  cilantro: "coriander",
  "coriander leaves": "coriander",
  scallion: "spring onion",
  "green onion": "spring onion",
  "spring onions": "spring onion",
  "spring-onion": "spring onion",
  "bell pepper": "capsicum",
  peppers: "capsicum",
  "red pepper": "capsicum",
  "green pepper": "capsicum",
  "yellow pepper": "capsicum",

  // Dairy / pantry
  yogurt: "curd",
  "plain yogurt": "curd",
  "cottage cheese": "paneer",

  // Pulses / legumes
  "chickpea": "chickpeas",
  "garbanzo bean": "chickpeas",
  "garbanzo beans": "chickpeas",

  // Seafood
  shrimp: "prawns",

  // Flours & starches
  "cornstarch": "corn flour",
  "corn starch": "corn flour",
  "all purpose flour": "all-purpose flour",
  "all-purpose": "all-purpose flour",
  "all-purpose flour": "all-purpose flour",

  // Sugars
  "powdered sugar": "icing sugar",
  "confectioners sugar": "icing sugar",
  "confectioner's sugar": "icing sugar",

  // Spices (just a few examples)
  "chili powder": "chilli powder",
  "red chili powder": "chilli powder",
  "turmeric powder": "turmeric",
};

/** Basic cleanup (case, punctuation, plural s/es). */
function basicClean(x: string) {
  let s = x.toLowerCase().trim();
  s = s.replace(/[_\-]+/g, " ");         // kebab to spaces
  s = s.replace(/\s+/g, " ");            // collapse spaces
  s = s.replace(/[.,()]/g, "");          // drop punctuation
  return s;
}

/** Very light singularization for mapping attempts */
function singularGuess(s: string) {
  if (s.endsWith("ies")) return s.slice(0, -3) + "y";
  if (s.endsWith("es")) return s.slice(0, -2);
  if (s.endsWith("s")) return s.slice(0, -1);
  return s;
}

/** Convert a detected name to your preferred label (e.g., eggplant -> brinjal). */
export function normalizeIngredientName(raw: string): string {
  let s = basicClean(raw);
  // direct
  if (PREFERRED[s]) return PREFERRED[s];

  // try singular
  const sing = singularGuess(s);
  if (PREFERRED[sing]) return PREFERRED[sing];

  // special multi-word checks
  if (s.includes("eggplant")) return "brinjal";
  if (s.includes("aubergine")) return "brinjal";
  if (s.includes("bell pepper")) return "capsicum";
  if (s.includes("pepper") && s.includes("capsicum") === false) return "capsicum";
  if (s.includes("cilantro")) return "coriander";
  if (s.includes("green onion") || s.includes("scallion")) return "spring onion";

  return s; // fallback to cleaned text itself
}

/** Normalize a list, dedupe, and return an array */
export function normalizeIngredientList(list: string[]): string[] {
  const out = new Set<string>();
  for (const item of list || []) {
    const n = normalizeIngredientName(item);
    if (n) out.add(n);
  }
  return Array.from(out);
}
