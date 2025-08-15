// Re-export all helper functions
export {
  getDetails,
  getDirectChildren,
  getParent,
  getLevel,
  isValid
} from './helpers'

// Re-export types for consumers
export type {
  Element,
  ElementCodified,
  ElementNested,
  ClassificationPlain,
  ClassificationNested
} from './types'

// Re-export data if needed
export { classificationNested } from './versions/20230318'