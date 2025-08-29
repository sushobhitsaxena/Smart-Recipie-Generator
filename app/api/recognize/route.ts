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
