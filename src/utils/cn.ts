/** Join Tailwind / conditional classes; omits falsy entries */
export function cn(...parts: Array<string | false | undefined | null>): string {
  return parts.filter(Boolean).join(' ')
}
