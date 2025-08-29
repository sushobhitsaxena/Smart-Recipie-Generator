<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


🍳 Smart Recipe Generator

Find delicious recipes using the ingredients you already have.
Search by name/cuisine/tags, filter by diet & time, drop a photo of ingredients for recognition, and even generate a complete recipe with AI.

✨ Features

🔎 Smart search (name, cuisine, difficulty, tags, ingredients, time)

🧮 Match scoring based on your available ingredients (with substitutions)

🧑‍🍳 AI recipe generation from a list of ingredients (OpenAI)

🖼️ Photo recognition of ingredients (uploads → recognized → normalized names)

🧩 Filters: diet, max time, difficulty, cuisine

🧱 Beautiful UI with responsive grid & masonry layout

⭐ Ratings & Favorites (locally stored; easy to swap to DB)

🌗 Light/Dark theme, glassy header, keyboard shortcuts ( / to focus search )

⚡ Next.js 15 (App Router) + Turbopack + Tailwind

🧰 Tech Stack

Frontend: Next.js 15, React, TypeScript, Tailwind CSS

UI: custom components, lucide icons, Next Image

AI: OpenAI (chat completions) for recipe generation

Image Recognition: simple server route (can wire to a vision model later)

Data: Local JSON/TS datasets (+ localStorage for ratings/favorites)

Deployment: Vercel

▶️ Quick Start
# 1) Install
npm install

# 2) Create env file
cp .env.example .env.local

# 3) Dev
npm run dev

# Open http://localhost:3000

🔐 Environment Variables

Create .env.local in project root:

# Optional but recommended for AI generation
OPENAI_API_KEY=sk-...

# NextAuth (only if you enable login, otherwise ignore)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace_with_random_string

# Google OAuth (only if you enable Google login)
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Database (only if you add Prisma + Postgres)
DATABASE_URL=postgres://user:pass@host:5432/dbname


AI generation will gracefully fallback with a dummy recipe if OPENAI_API_KEY is not set (useful for demos).

📦 Scripts
npm run dev        # start dev (Turbopack)
npm run build      # production build
npm run start      # start production server
npm run lint       # lint

📁 Project Structure
app/
  api/
    generate-recipe/route.ts   # AI recipe generation (OpenAI)
    recognize/route.ts         # image → ingredient names
    suggest/route.ts           # server suggestions (optional)
  page.tsx                     # main page
  layout.tsx                   # root layout (theme, header)

components/
  RecipeCard.tsx, Filters.tsx, IngredientPicker.tsx,
  SearchBar.tsx, FavoritesDrawer.tsx, ImageDropzone.tsx, ...

lib/
  recipes.ts                   # demo recipes dataset (with images)
  substitutions.ts             # ingredient substitution map
  match.ts                     # scoring + search utils
  normalize.ts                 # US↔︎IN ingredient name normalization
  storage.ts                   # localStorage helpers (ratings, favorites)
  recommend.ts                 # simple personalized suggestions

public/
  images/                      # local images for recipes & fallbacks
  favicon.ico

🧪 AI Recipe Generation

Route: app/api/generate-recipe/route.ts

Model: gpt-4o-mini (change as you like)

Input: { ingredients: string[] }

Output: strict JSON { title, cuisine, difficulty, timeMinutes, servings, ingredients[], steps[], nutritionPerServing }

If OPENAI_API_KEY is missing or the request fails, the route returns a safe fallback recipe so the UI never breaks.

🖼️ Image Recognition (optional)

Route: app/api/recognize/route.ts

Accepts an image upload and returns a list of raw ingredient names.

Names then pass through lib/normalize.ts to convert to India-friendly terms:

eggplant → brinjal

okra/lady finger → bhindi

cilantro → coriander

green onion/scallion → spring onion

bell pepper/peppers → capsicum

yogurt → curd

shrimp → prawns

cornstarch → corn flour

(and many more in the list)

You can replace the simple recognizer with a Vision model/API whenever you want.

🖼️ Images & Next/Image

We use local dish images in public/images for stable rendering.
If you also use remote images (Unsplash/picsum), add hosts in next.config.ts:

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};
export default nextConfig;


For AI-generated recipes we also set a runtime fallback to local images if the network image fails.

🚀 Deploy (Vercel)

Push this repo to GitHub.

Import the project on Vercel.

Set env vars (OPENAI_API_KEY, etc.) in Project → Settings → Environment Variables.

Deploy.

If TypeScript/ESLint fails the build on Vercel, we allow production builds with warnings via .eslintrc and keep types reasonable.
You can also set NEXT_PUBLIC_ flags for optional client-side configs.

🔧 Common Issues

Image not loading
Use local image paths like /images/palakpanner.jpeg.
If it’s a remote URL, add the hostname to next.config.ts.

“Invalid src prop” from next/image
Same as above—host not in remotePatterns.

AI route returns 404 locally
Ensure the folder path is exactly: app/api/generate-recipe/route.ts.

OpenAI error / “Network or server error”
Check OPENAI_API_KEY. The route returns a fallback recipe if the key is missing, but the console will log errors if the request actually fails.

ESLint blocking Vercel build
We’ve tuned rules to be CI-friendly. If you customize lint rules, ensure builds don’t fail or run NEXT_DISABLE_ESLINT=1 as a last resort.

🧭 Roadmap (nice-to-have)

Auth (Google/Email) + cloud sync for favorites/ratings

User profiles, allergies, meal plans

More robust ingredient recognition (Vision model)

Pro plan with higher AI limits

🙌 Contributing

PRs welcome!
Please keep PRs small & focused—UI tweaks, new recipes, better normalization, or provider integrations.

📝 License

MIT — do whatever, just don’t remove attribution.

🙏 Credits

Photos: Unsplash (when used) & local images

Icons: lucide-react

Hosting: Vercel

Demo

Once deployed, your live URL will look like:

https://smart-recipe-generator-xxxxx.vercel.app