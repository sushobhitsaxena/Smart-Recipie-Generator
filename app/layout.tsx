import "./globals.css"
import type { Metadata } from "next"
//import { Inter } from "next/font/google"
import ThemeToggle from "@/components/ThemeToggle"

export const metadata: Metadata = {
  title: "Smart Recipe Generator",
  description: "Suggest recipes from your ingredients",
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-bg text-fg antialiased font-sans">
        {/* Skip link for a11y */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] px-3 py-2 rounded-lg bg-[--color-surface] border border-[--color-border] shadow"
        >
          Skip to content
        </a>

        {/* Glassy Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-surface)_80%,transparent)] border-b border-[--color-border]/80">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <span className="text-2xl leading-none">🍳</span>
              <span className="text-lg font-semibold tracking-tight">Smart Recipe</span>
              <span className="px-2 py-0.5 text-xs rounded-full border border-[--color-border] text-[--color-muted]">
                beta
              </span>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Subtle neon seam under header */}
          <div className="h-px w-full bg-gradient-to-r from-[color-mix(in_oklab,var(--color-accent)_40%,transparent)]
                         via-transparent to-[color-mix(in_oklab,var(--color-secondary)_35%,transparent)] opacity-70" />
        </header>

        {/* Page container */}
        <main id="main" className="mx-auto max-w-6xl p-4">
          {children}
        </main>
      </body>
    </html>
  )
}