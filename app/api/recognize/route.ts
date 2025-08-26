// import { NextResponse } from 'next/server'
// export const runtime = 'edge'

// export async function POST(req: Request) {
//   try {
//     const form = await req.formData()
//     const file = form.get('image') as File | null
//     if (!file) return NextResponse.json({ error: 'No image provided' }, { status: 400 })

//     const bytes = await file.arrayBuffer()

//   const resp = await fetch(
//   'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base',
//   {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
//       'Content-Type': 'application/octet-stream',
//     },
//     body: bytes,
//   }
// )


//     if (!resp.ok) {
//       const err = await resp.text()
//       return NextResponse.json({ error: 'HF error: ' + err.slice(0,200) }, { status: 500 })
//     }

//     const data = (await resp.json()) as Array<{ generated_text: string }>
//     const caption = data?.[0]?.generated_text || ''

//     // quick tokenization -> simple ingredient guesses
//     const tokens = caption.toLowerCase().split(/\W+/).filter(w => w.length > 2)

//     return NextResponse.json({ caption, ingredients: Array.from(new Set(tokens)).slice(0,8) })
//   } catch (e: any) {
//     return NextResponse.json({ error: e?.message || 'fail' }, { status: 500 })
//   }
// }





// import { NextResponse } from 'next/server'

// // Run on Node.js runtime for compatibility
// export const runtime = 'nodejs'

// export async function POST(req: Request) {
//   try {
//     const form = await req.formData()
//     const file = form.get('image') as File | null
//     if (!file) return NextResponse.json({ error: 'No image provided' }, { status: 400 })

//     const token = process.env.HUGGINGFACE_TOKEN
//     if (!token || !token.startsWith('hf_')) {
//       return NextResponse.json({ error: 'Missing or invalid HUGGINGFACE_TOKEN' }, { status: 500 })
//     }

//     const bytes = await file.arrayBuffer()

//     // Use the stable vit-gpt2 image captioning model
//     const url = 'https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning'

//     const r = await fetch(url, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/octet-stream',
//         Accept: 'application/json',
//         'x-wait-for-model': 'true',
//       },
//       body: bytes,
//     })

//     const text = await r.text()
//     if (!r.ok) {
//       return NextResponse.json({ error: `HF ${r.status}: ${text.slice(0, 200)}` }, { status: r.status })
//     }

//     let data: any
//     try {
//       data = JSON.parse(text)
//     } catch {
//       return NextResponse.json({ error: 'Invalid JSON from HF', raw: text.slice(0, 200) }, { status: 500 })
//     }

//     const caption: string = Array.isArray(data) ? (data[0]?.generated_text ?? '') : ''
//     if (!caption) {
//       return NextResponse.json({ error: 'No caption generated', raw: data }, { status: 500 })
//     }

//     // Simple ingredient extraction
//     const words = caption.toLowerCase().replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(w => w.length > 2)
//     const vocab = new Set([
//       'tomato','onion','garlic','ginger','potato','chilli','pepper','carrot','cucumber','lemon',
//       'chickpeas','spinach','paneer','tofu','egg','rice','lentils','beans','broccoli','mushroom',
//       'peas','banana','bread','butter','cheese','milk','yogurt','cream','fish','chicken','oats'
//     ])
//     const guessed = Array.from(new Set(words.filter(w => vocab.has(w))))

//     return NextResponse.json({ caption, ingredients: guessed })
//   } catch (e: any) {
//     return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 })
//   }
// }






// import { NextResponse } from 'next/server'

// // Use Node runtime for compatibility with Buffer
// export const runtime = 'nodejs'

// // Clarifai REST v2 endpoint for the Food model in clarifai/main
// // Docs: https://docs.clarifai.com/ (PAT auth) ; Model page has the slug
// const CLARIFAI_FOOD_MODEL_ID = 'food-item-recognition'
// const CLARIFAI_API_URL = `https://api.clarifai.com/v2/models/${CLARIFAI_FOOD_MODEL_ID}/outputs`

// export async function POST(req: Request) {
//   try {
//     const form = await req.formData()
//     const file = form.get('image') as File | null
//     if (!file) {
//       return NextResponse.json({ error: 'No image provided' }, { status: 400 })
//     }

//     const pat = process.env.CLARIFAI_PAT
//     if (!pat) {
//       return NextResponse.json({ error: 'Missing CLARIFAI_PAT on server' }, { status: 500 })
//     }

//     // Read image bytes and base64-encode for Clarifai v2 REST
//     const bytes = await file.arrayBuffer()
//     const base64 = Buffer.from(bytes).toString('base64')

//     // Call Clarifai Food model
//     const resp = await fetch(CLARIFAI_API_URL, {
//       method: 'POST',
//       headers: {
//         Authorization: `Key ${pat}`, // Clarifai PAT header
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         inputs: [
//           {
//             data: { image: { base64 } },
//           },
//         ],
//       }),
//     })

//     const text = await resp.text()
//     if (!resp.ok) {
//       // Surface short error message
//       return NextResponse.json(
//         { error: `Clarifai ${resp.status}: ${text.slice(0, 200)}` },
//         { status: 200 }
//       )
//     }

//     // Parse predictions
//     let data: any
//     try {
//       data = JSON.parse(text)
//     } catch {
//       return NextResponse.json({ error: 'Invalid JSON from Clarifai' }, { status: 200 })
//     }

//     const concepts =
//       data?.outputs?.[0]?.data?.concepts?.map((c: any) => ({
//         name: String(c.name || '').toLowerCase(),
//         value: Number(c.value || 0),
//       })) || []

//     // Keep confident food terms as our “ingredients”
//     const ingredients = concepts
//       .filter((c: any) => c.value >= 0.5) // confidence threshold (tweak as you like)
//       .slice(0, 12)
//       .map((c: any) => c.name)

//     // Build a human caption from top few concepts for your UI
//     const caption =
//       concepts.slice(0, 5).map((c: any) => c.name).join(', ') || 'food image'

//     return NextResponse.json({ caption, ingredients })
//   } catch (e: any) {
//     return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 200 })
//   }
// }


import { NextResponse } from 'next/server'

// Use Node runtime (Buffer needed)
export const runtime = 'nodejs'

// Public Clarifai "Food Item Recognition" model inside clarifai/main
const USER_ID = 'clarifai'
const APP_ID  = 'main'
const MODEL_ID = 'food-item-recognition'
const CLARIFAI_URL = `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`

export async function POST(req: Request) {
  try {
    const form = await req.formData()
    const file = form.get('image') as File | null
    if (!file) return NextResponse.json({ error: 'No image provided' }, { status: 400 })

    const pat = process.env.CLARIFAI_PAT
    if (!pat) return NextResponse.json({ error: 'Missing CLARIFAI_PAT on server' }, { status: 500 })

    const bytes = await file.arrayBuffer()
    const base64 = Buffer.from(bytes).toString('base64')

    const body = {
      user_app_id: { user_id: USER_ID, app_id: APP_ID },
      inputs: [{ data: { image: { base64 } } }],
    }

    const resp = await fetch(CLARIFAI_URL, {
      method: 'POST',
      headers: {
        Authorization: `Key ${pat}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const text = await resp.text()
    if (!resp.ok) {
      return NextResponse.json(
        { error: `Clarifai ${resp.status}: ${text.slice(0, 400)}` },
        { status: 200 }
      )
    }

    let data: any
    try { data = JSON.parse(text) } catch {
      return NextResponse.json({ error: 'Invalid JSON from Clarifai' }, { status: 200 })
    }

    const concepts =
      data?.outputs?.[0]?.data?.concepts?.map((c: any) => ({
        name: String(c.name || '').toLowerCase(),
        value: Number(c.value || 0),
      })) ?? []

    // keep confident items
    const ingredients = concepts
      .filter((c: any) => c.value >= 0.5)
      .slice(0, 12)
      .map((c: any) => c.name)

    const caption =
      concepts.slice(0, 5).map((c: any) => c.name).join(', ') || 'food image'

    return NextResponse.json({ caption, ingredients })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 200 })
  }
}
