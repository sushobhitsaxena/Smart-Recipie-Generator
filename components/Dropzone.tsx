'use client'
import React from 'react'

export default function Dropzone({
  onRecognize,
}: { onRecognize: (ings: string[], caption?: string) => void }) {
  return (
    <div
      className="border rounded-2xl p-4 text-center cursor-pointer"
      onClick={() => onRecognize(['tomato'], 'mock caption')}
    >
      Click to add “tomato” (test Dropzone)
    </div>
  )
}
