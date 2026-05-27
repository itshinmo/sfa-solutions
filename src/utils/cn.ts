import { type ClassValue as ClassNameValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS class names using clsx and tailwind-merge
 * @param inputs - Variable number of class name values
 * @returns Merged and deduplicated class name string optimized for Tailwind CSS
 */
export const cn = (...inputs: ClassNameValue[]): string =>
  twMerge(clsx(inputs));
