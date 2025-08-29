// lib/normalize.ts

/** Preferred Indian terms for common food synonyms */
const PREFERRED: Record<string, string> = {
  // ===== Vegetables =====
  eggplant: "brinjal",
  aubergine: "brinjal",
  okra: "bhindi",
  "lady finger": "bhindi",
  ladyfinger: "bhindi",
  cilantro: "coriander leaves",
  coriander: "coriander leaves",
  "coriander leaves": "coriander leaves",
  scallion: "spring onion",
  "green onion": "spring onion",
  "spring onions": "spring onion",
  "spring-onion": "spring onion",
  "bell pepper": "capsicum",
  peppers: "capsicum",
  "red pepper": "capsicum",
  "green pepper": "capsicum",
  "yellow pepper": "capsicum",
  zucchini: "courgette",
  ridgegourd: "ridge gourd",
  "ridge gourd": "ridge gourd",
  bottleGourd: "bottle gourd",
  "bottle gourd": "bottle gourd",
  bittergourd: "bitter gourd",
  "bitter gourd": "bitter gourd",
  drumstick: "moringa",
  moringa: "moringa",
  clusterbeans: "cluster beans",
  "cluster beans": "cluster beans",
  broadbeans: "broad beans",
  "broad beans": "broad beans",

  // ===== Dairy & Pantry =====
  yogurt: "curd",
  "plain yogurt": "curd",
  "greek yogurt": "curd",
  "cottage cheese": "paneer",
  cheese: "paneer",
  butter: "makhan",
  clarifiedbutter: "ghee",
  "clarified butter": "ghee",

  // ===== Pulses / Legumes =====
  chickpea: "chickpeas",
  "chickpeas": "chickpeas",
  "garbanzo bean": "chickpeas",
  "garbanzo beans": "chickpeas",
  kidneybeans: "rajma",
  "kidney beans": "rajma",
  lentils: "dal",
  pigeonpeas: "toor dal",
  "pigeon peas": "toor dal",
  "black gram": "urad dal",
  "green gram": "moong dal",
  mungbean: "moong dal",
  "mung beans": "moong dal",
  "red lentils": "masoor dal",
  "split red lentils": "masoor dal",

  // ===== Seafood / Meat =====
  shrimp: "prawns",
  prawn: "prawns",
  lamb: "mutton",
  goat: "mutton",
  beef: "beef",
  pork: "pork",

  // ===== Flours & Starches =====
  wheatflour: "atta",
  "wheat flour": "atta",
  "all purpose flour": "maida",
  maida: "maida",
  "all-purpose": "maida",
  "all-purpose flour": "maida",
  cornstarch: "corn flour",
  "corn starch": "corn flour",
  riceflour: "rice flour",
  "rice flour": "rice flour",
  semolina: "sooji",
  rava: "sooji",
  sooji: "sooji",
  millet: "bajra",
  "pearl millet": "bajra",
  sorghum: "jowar",
  "finger millet": "ragi",

  // ===== Sugars =====
  sugar: "sugar",
  jaggery: "jaggery",
  "powdered sugar": "icing sugar",
  "confectioners sugar": "icing sugar",
  "confectioner's sugar": "icing sugar",
  "brown sugar": "brown sugar",

  // ===== Spices =====
  chili: "chilli",
  chilies: "chillies",
  "red chili powder": "chilli powder",
  "chili powder": "chilli powder",
  turmeric: "turmeric",
  "turmeric powder": "turmeric",
  cumin: "jeera",
  "cumin seeds": "jeera",
  corianderpowder: "dhania powder",
  "coriander powder": "dhania powder",
  cardamom: "elaichi",
  cloves: "laung",
  cinnamon: "dalchini",
  bayleaf: "tej patta",
  "bay leaf": "tej patta",
  fenugreek: "methi",
  "fenugreek seeds": "methi seeds",
  mustardseeds: "sarson seeds",
  "mustard seeds": "sarson seeds",
  fennel: "saunf",
  "fennel seeds": "saunf",

  // ===== Fruits =====
  banana: "banana",
  apple: "apple",
  orange: "orange",
  pineapple: "pineapple",
  papaya: "papaya",
  guava: "guava",
  pomegranate: "anar",
  mango: "mango",
  grapes: "grapes",
  watermelon: "watermelon",
  muskmelon: "kharbuja",

  // ===== Oils =====
  "vegetable oil": "oil",
  "refined oil": "oil",
  "mustard oil": "mustard oil",
  "olive oil": "olive oil",
  "coconut oil": "coconut oil",
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

/** Convert a detected name to your preferred label */
export function normalizeIngredientName(raw: string): string {
  let s = basicClean(raw);
  // direct
  if (PREFERRED[s]) return PREFERRED[s];

  // try singular
  const sing = singularGuess(s);
  if (PREFERRED[sing]) return PREFERRED[sing];

  // heuristics for catch-alls
  if (s.includes("eggplant")) return "brinjal";
  if (s.includes("aubergine")) return "brinjal";
  if (s.includes("okra")) return "bhindi";
  if (s.includes("bell pepper") || s.includes("pepper")) return "capsicum";
  if (s.includes("cilantro")) return "coriander leaves";
  if (s.includes("green onion") || s.includes("scallion")) return "spring onion";

  return s; // fallback
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
