🍳 Smart Recipe Generator

Find delicious recipes using the ingredients you already have.
Search by name, cuisine, tags, filter by diet & time, drop a photo of ingredients for recognition, and even generate a complete recipe with AI.

✨ Features

🔎 Smart search → by name, cuisine, difficulty, tags, ingredients, time

⚖️ Match scoring → based on your available ingredients (with substitutions)

🤖 AI recipe generation → from a list of ingredients (OpenAI powered)

📸 Photo recognition → upload ingredient photos → recognize → normalize names

🥗 Filters → diet, max time, difficulty, cuisine

🎨 Beautiful UI → responsive grid & masonry layout

⭐ Ratings & Favorites → locally stored (easy to swap with DB)

🌗 Light/Dark theme → glassy header, keyboard shortcuts (/ to focus search)

⚡ Next.js 15 (App Router) + Turbopack + Tailwind CSS

🛠 Tech Stack

Frontend

Next.js 15

React 18

TypeScript

Tailwind CSS

UI

Custom components

Lucide icons

Next.js Image

AI & Data

OpenAI (Chat Completions API) for recipe generation

Ingredient photo recognition (with normalization dataset)

Local JSON/TS datasets + localStorage (for ratings/favorites)

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/UDAY1810/smart-recipe-generator.git
cd smart-recipe-generator

2️⃣ Install dependencies
npm install

3️⃣ Set environment variables

Create a .env.local file:

OPENAI_API_KEY=your_openai_api_key

4️⃣ Run locally
npm run dev


Open http://localhost:3000
 🎉

📦 Deployment

Deployed on Vercel → https://smart-recipe-generator-3qli.vercel.app/

📜 License

Licensed under the MIT License.
Made with ❤️ by Uday Dubey.
