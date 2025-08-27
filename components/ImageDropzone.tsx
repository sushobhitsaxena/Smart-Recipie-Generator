// 'use client'
// import React, { useRef, useState } from 'react'

// export default function ImageDropzone({
//   onRecognize,
// }: {
//   onRecognize: (ings: string[], caption?: string) => void
// }) {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const inputRef = useRef<HTMLInputElement>(null)

//   async function handleFiles(file?: File) {
//     if (!file) return
//     setLoading(true)
//     setError(null)
//     try {
//       const fd = new FormData()
//       fd.append('image', file)
//       const resp = await fetch('/api/recognize', { method: 'POST', body: fd })
//       const data = await resp.json()
//       if (data.error) setError(data.error)
//       onRecognize(data.ingredients || [], data.caption)
//     } catch (e: any) {
//       setError(e?.message ?? 'Failed')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div
//       className="border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer hover:bg-white/5"
//       onClick={() => inputRef.current?.click()}
//       onDragOver={(e) => {
//         e.preventDefault()
//       }}
//       onDrop={(e) => {
//         e.preventDefault()
//         handleFiles(e.dataTransfer.files?.[0])
//       }}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={(e) => handleFiles(e.target.files?.[0] || undefined)}
//       />
//       <p className="text-sm opacity-80">
//         Drop an ingredient photo or click to upload
//       </p>
//       {loading && <p className="mt-2 text-xs animate-pulse">Analyzing…</p>}
//       {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
//     </div>
//   )
// }
// 'use client'
// import React, { useRef, useState } from 'react'

// export default function ImageDropzone({
//   onRecognize,
// }: { onRecognize: (ings: string[], caption?: string) => void }) {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const inputRef = useRef<HTMLInputElement>(null)

//   async function handleFiles(file?: File) {
//     if (!file) return
//     setLoading(true); setError(null)
//     try {
//       const fd = new FormData()
//       fd.append('image', file)
//       const resp = await fetch('/api/recognize', { method: 'POST', body: fd })
//       const data = await resp.json()
//       if (data.error) setError(data.error)
//       onRecognize(data.ingredients || [], data.caption)
//     } catch (e: any) {
//       setError(e?.message ?? 'Failed')
//     } finally { setLoading(false) }
//   }

//   return (
//     <div
//       className="border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer hover:bg-white/5"
//       onClick={() => inputRef.current?.click()}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files?.[0]) }}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={(e) => handleFiles(e.target.files?.[0] || undefined)}
//       />
//       <p className="text-sm opacity-80">Drop an ingredient photo or click to upload</p>
//       {loading && <p className="mt-2 text-xs animate-pulse">Analyzing…</p>}
//       {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
//     </div>
//   )
// }



// 'use client'
// import React, { useRef, useState } from 'react'

// export default function ImageDropzone({
//   onRecognize,
// }: { onRecognize: (ings: string[], caption?: string) => void }) {
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const inputRef = useRef<HTMLInputElement>(null)

//   async function handleFiles(file?: File) {
//     if (!file) return
//     setLoading(true); setError(null)
//     try {
//       const fd = new FormData()
//       fd.append('image', file)
//       const resp = await fetch('/api/recognize', { method: 'POST', body: fd })
//       const data = await resp.json()
//       if (data.error) setError(data.error)
//       onRecognize(data.ingredients || [], data.caption)
//     } catch (e: any) {
//       setError(e?.message ?? 'Failed')
//     } finally { setLoading(false) }
//   }

//   return (
//     <div
//       className="border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer hover:bg-white/5"
//       onClick={() => inputRef.current?.click()}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files?.[0]) }}
//     >
//       <input
//         ref={inputRef}
//         type="file"
//         accept="image/*"
//         className="hidden"
//         onChange={(e) => handleFiles(e.target.files?.[0] || undefined)}
//       />
//       <p className="text-sm opacity-80">Drop an ingredient photo or click to upload</p>
//       {loading && <p className="mt-2 text-xs animate-pulse">Analyzing…</p>}
//       {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
//     </div>
//   )
// }


'use client'
import React, { useRef, useState } from 'react'

export default function ImageDropzone({
  onRecognize,
  onLoadingChange,
}: {
  onRecognize: (ings: string[], caption?: string) => void
  onLoadingChange?: (loading: boolean) => void
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFiles(file?: File) {
    if (!file) return
    setLoading(true); onLoadingChange?.(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append('image', file)
      const resp = await fetch('/api/recognize', { method: 'POST', body: fd })
      const data = await resp.json()
      if (data.error) setError(data.error)
      onRecognize(data.ingredients || [], data.caption)
    } catch (e: any) {
      setError(e?.message ?? 'Failed')
    } finally {
      setLoading(false); onLoadingChange?.(false)
    }
  }

  return (
    <div
      className={'dropzone ' + (loading ? 'opacity-70' : '')}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files?.[0]) }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files?.[0] || undefined)}
      />
      <p className="hint">Drop an ingredient photo or click to upload</p>
      {loading && <p className="mt-2 text-xs animate-pulse">Analyzing…</p>}
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  )
}

