import { classificationNested } from "./versions/20230318"
import type { ElementNested, ElementCodified } from "./types"

/**
 * Get detailed information for a GICS code
 */
export function getDetails(code: string): ElementNested | undefined {
  return classificationNested[code]
}

/**
 * Get all children of a GICS code
 */
export function getDirectChildren(code: string): Record<string, ElementCodified> | undefined {
  const element = classificationNested[code]
  return element?.children
}

/**
 * Get parent of a GICS code
 */
export function getParent(code: string): ElementCodified | undefined {
  const element = classificationNested[code]
  return element?.parent
}

/**
 * Get all top-level sectors (2-digit codes)
 */
export function getLevel(level:number = 1): Record<string, ElementNested> {
  return Object.fromEntries(
    Object.entries(classificationNested).filter(([code]) => code.length === 2*level)
  )
}

/**
 * Check if a code exists in the classification
 */
export function isValid(code: string): boolean {
  return code in classificationNested
}