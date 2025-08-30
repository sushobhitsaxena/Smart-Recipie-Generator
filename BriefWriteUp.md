## Brief Write-Up / Approach

The Smart Recipe Generator is designed to help users quickly discover personalized recipes using the ingredients they already have. My approach combines a structured recipe database with AI-driven generation for flexibility and accuracy.

First, user inputs (text, ingredient selection, or image upload) are normalized to match against a predefined dataset of diverse recipes across cuisines. A match scoring algorithm evaluates similarity between user inputs and available recipes, factoring in missing items and suggesting substitutions when needed. Filters for dietary preferences (vegetarian, vegan, gluten-free), cooking time, and difficulty further refine results.

To extend beyond static recipes, I integrated OpenAI’s API for dynamic recipe generation, ensuring variety and adaptability even when uncommon ingredient combinations are provided. Favorites and ratings are stored locally to personalize future suggestions.

From a technical perspective, the system is built using Next.js (App Router) with TypeScript, styled with Tailwind CSS, and deployed seamlessly on Vercel for scalability. AI integration, efficient error handling, and a responsive UI enhance usability across devices.

This hybrid approach—combining deterministic matching with generative AI—ensures the app delivers practical, accurate, and creative cooking solutions, making it both a reliable tool and a showcase of modern web and AI integration.


