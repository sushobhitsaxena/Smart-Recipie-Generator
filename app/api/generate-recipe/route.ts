import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";           // ensure Node runtime (not edge)
export const dynamic = "force-dynamic";    // don't cache

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

/** Build a simple local fallback so the UI still works even if the API fails */
function buildFallback(ings: string[]) {
  const title = ings.length
    ? `Quick ${ings[0].replace(/^\w/, c => c.toUpperCase())} Stir-Fry`
    : "Simple Pantry Curry";

  const uniq = Array.from(new Set(ings.map(s => s.trim()).filter(Boolean)));
  return {
    title,
    cuisine: "Indian",
    difficulty: "easy",
    timeMinutes: 20,
    servings: 2,
    ingredients: uniq.slice(0, 6).map(n => ({ name: n, quantity: "as needed" })),
    steps: [
      "Heat oil in a pan.",
      "Add aromatics and sauté until fragrant.",
      "Add remaining ingredients with spices; cook until done.",
      "Adjust seasoning and serve hot."
    ],
    nutritionPerServing: { calories: 250, protein: 8, carbs: 28, fat: 10 },
  };
}

export async function POST(req: Request) {
  try {
    const { ingredients } = await req.json();
    const ings: string[] = Array.isArray(ingredients) ? ingredients : [];

    if (!ings.length) {
      return NextResponse.json(
        { error: "Please add some ingredients first." },
        { status: 400 }
      );
    }

    // If no API key, return a local fallback recipe so UI continues to work
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(buildFallback(ings));
    }

    const prompt = `
You are a professional chef. Create a UNIQUE recipe using ONLY these ingredients: ${ings.join(", ")}.
Return strictly valid JSON (no markdown, no commentary) in this schema:

{
  "title": "string",
  "cuisine": "string",
  "difficulty": "easy" | "medium" | "hard",
  "timeMinutes": number,
  "servings": number,
  "ingredients": [{ "name": "string", "quantity": "string" }],
  "steps": ["string"],
  "nutritionPerServing": { "calories": number, "protein": number, "carbs": number, "fat": number }
}
`.trim();

    // Ask the model to return a proper JSON object
    const resp = await openai.chat.completions.create({
      model: "gpt-4o-mini",          // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 600,
      response_format: { type: "json_object" }, // << forces JSON
    });

    const raw = resp.choices?.[0]?.message?.content ?? "{}";

    let recipe: any;
    try {
      recipe = JSON.parse(raw);
    } catch {
      // As a last resort, return fallback
      recipe = buildFallback(ings);
    }

    // minimal validation + safe defaults
    const safe = {
      title: recipe?.title || buildFallback(ings).title,
      cuisine: recipe?.cuisine || "Indian",
      difficulty: ["easy", "medium", "hard"].includes(
        String(recipe?.difficulty || "").toLowerCase()
      )
        ? String(recipe.difficulty).toLowerCase()
        : "medium",
      timeMinutes: Number(recipe?.timeMinutes ?? 30),
      servings: Number(recipe?.servings ?? 2),
      ingredients: Array.isArray(recipe?.ingredients) && recipe.ingredients.length
        ? recipe.ingredients.map((i: any) => ({
            name: String(i?.name ?? "").trim(),
            quantity: String(i?.quantity ?? "").trim(),
          }))
        : buildFallback(ings).ingredients,
      steps: Array.isArray(recipe?.steps) && recipe.steps.length
        ? recipe.steps.map((s: any) => String(s))
        : buildFallback(ings).steps,
      nutritionPerServing: {
        calories: Number(recipe?.nutritionPerServing?.calories ?? 0),
        protein: Number(recipe?.nutritionPerServing?.protein ?? 0),
        carbs: Number(recipe?.nutritionPerServing?.carbs ?? 0),
        fat: Number(recipe?.nutritionPerServing?.fat ?? 0),
      },
    };

    return NextResponse.json(safe);
  } catch (err) {
    console.error("Recipe Generation Error:", err);
    return NextResponse.json(
      { error: "Failed to generate recipe." },
      { status: 500 }
    );
  }
}
