import { classificationNested } from "./versions/20230318"
import {ElementNested, ElementCodified, ClassificationPosition} from "./types"

/**
 * Check if a code exists in the classification
 */
export function isValid(code: string): boolean {
  return code in classificationNested
}

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
 * Break down a code into each position in a form of array
 * @param code - gics code string
 */

export function getPositions(code: string): ClassificationPosition | null {
  if (!isValid(code)) return null
  const depth = code.length / 2 - 1
  let cursor = 0
  const levels: Array<ElementCodified> = []
  while (cursor <= depth) {
    const target = classificationNested[code.substring(0, (cursor + 1) * 2)]
    levels.push({
      code:target.code,
      name: target.name,
      ...(target.description && { description: target.description }),
    })
    cursor++
  }
  return levels
}

