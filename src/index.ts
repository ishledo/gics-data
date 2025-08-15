// Re-export all helper functions
export {
  getDetails,
  getDirectChildren,
  getParent,
  getLevel,
  isValid,
  getPositions
} from './helpers'

// Re-export types for consumers
export type {
  Element,
  ElementCodified,
  ElementNested,
  ClassificationPlain,
  ClassificationNested,
  ClassificationPosition
} from './types'

// Re-export data if needed
export { classificationNested } from './versions/20230318'