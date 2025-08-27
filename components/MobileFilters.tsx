// components/MobileFilters.tsx
'use client'
import React from 'react'
import Filters from './Filters'
// If you added CuisineFilter, uncomment:
// import CuisineFilter from './CuisineFilter'

type Props = {
  children?: React.ReactNode
  renderFilters: () => React.ReactNode
}

export default function MobileFilters({ renderFilters }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <button className="btn-primary w-full" onClick={() => setOpen(true)}>
        ⚙️ Filters
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40"
          aria-modal="true"
          role="dialog"
          onClick={() => setOpen(false)}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* sheet */}
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-2xl border border-[--color-border] card p-4 pb-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Filters</h3>
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close filters">✕</button>
            </div>

            {/* Render your filters here */}
            <div className="space-y-4 max-h-[60vh] overflow-auto">
              {renderFilters()}
              {/* If using CuisineFilter, include it inside renderFilters() from the page */}
            </div>

            <button className="btn-primary w-full mt-4" onClick={() => setOpen(false)}>Apply</button>
          </div>
        </div>
      )}
    </div>
  )
}
