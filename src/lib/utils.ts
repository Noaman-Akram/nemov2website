import { type ClassValue, clsx } from "clsx";

/**
 * cn() — merge Tailwind class names conditionally.
 * Usage: cn("base-class", condition && "conditional-class", { "object-class": bool })
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * truncate() — truncate a string with ellipsis.
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

/**
 * slugify() — convert a string to a URL-safe slug.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .trim();
}
