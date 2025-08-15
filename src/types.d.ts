export type Element = {
  name: string;
  description?: string;
}

export type ElementCodified = Element & {
  code: string
}

export type ElementNested = ElementCodified & {
  parent?: ElementCodified
  children?: Record<string, ElementCodified>
}

export type ClassificationPlain = {
  [key: string]: Element;
}

export type ClassificationNested = {
  [key: string]: ElementNested;
}

export type ClassificationPosition = Array<ElementCodified>