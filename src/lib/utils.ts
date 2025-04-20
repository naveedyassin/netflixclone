import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Netflix specific colors - these would usually be in tailwind.config.js
// but we'll keep them here for reference
export const netflixColors = {
  black: "#141414",
  darkgray: "#181818",
  red: "#E50914"
}
