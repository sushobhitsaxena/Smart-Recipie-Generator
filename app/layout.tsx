





import "./globals.css"
import type { Metadata } from "next"
import ThemeToggle from "@/components/ThemeToggle"

export const metadata: Metadata = {
  title: "Smart Recipe Generator",
  description: "Suggest recipes from your ingredients",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-fg antialiased font-sans flex flex-col">
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 px-3 py-2 rounded-lg bg-[--color-surface] border border-[--color-border] shadow"
        >
          Skip to content
        </a>

        {/* Navbar */}
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-surface)_85%,transparent)] border-b border-[--color-border]/70 shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🍳</span>
              <span className="text-lg font-bold tracking-tight">Smart Recipe</span>
              <span className="ml-1 px-2 py-0.5 text-xs rounded-full border border-[--color-border] text-[--color-muted]">
                beta
              </span>
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main container */}
        <main id="main" className="flex-1 mx-auto w-full max-w-6xl p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-6 border-t border-[--color-border]/70 py-4 text-center text-sm text-[--color-muted]">
          © {new Date().getFullYear()} Smart Recipe Generator • Built with ❤️
        </footer>
      </body>
    </html>
  )
}




