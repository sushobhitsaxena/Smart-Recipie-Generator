import * as React from "react"
import { cn } from "@/lib/utils" // if you don’t have cn, replace with plain className join

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white shadow-sm",
        className
      )}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6", className)} {...props} />
  )
}
