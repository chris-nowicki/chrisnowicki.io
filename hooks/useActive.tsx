export function useActive(item: string, itemCompare: string): boolean {
  if (item.toLocaleLowerCase() !== itemCompare) return false

  return true
}
