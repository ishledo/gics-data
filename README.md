# GICS

Modern library to parse, manipulate, and find GICS codes based on [Global Industry Classification Standard](https://www.msci.com/indexes/index-resources/gics) by [MSCI](https://www.msci.com/). This is an industry standard used widely in Financial Services (GICS code 4020).

## Why?
We haven't found modern typescript library for our needs. 

## Installation

```bash
npm install gics-data
```

## Usage

```javascript
import { 
  getDetails, 
  getDirectChildren, 
  getParent, 
  getLevel, 
  isValid,
  classificationNested 
} from 'gics-data'

// Get detailed information for a GICS code
const sector = getDetails('10')
console.log(sector) // { code: '10', name: 'Energy', children: {...} }

// Check if a GICS code is valid
console.log(isValid('10')) // true
console.log(isValid('99')) // false

// Get parent of a GICS code
const parent = getParent('1010')
console.log(parent) // { code: '10', name: 'Energy' }

// Get direct children of a GICS code
const children = getDirectChildren('10')
console.log(Object.keys(children)) // ['1010']

// Get all codes at a specific level
const sectors = getLevel(1) // All sectors
const industryGroups = getLevel(2) // All industry groups
const industries = getLevel(3) // All industries
const subIndustries = getLevel(4) // All sub-industries
```

## API Reference

### `getDetails(code: string)`
Returns detailed information for a GICS code including name, parent, and children.
- **Returns:** `ElementNested | undefined`

### `isValid(code: string)`
Checks if a GICS code exists in the classification.
- **Returns:** `boolean`

### `getParent(code: string)`
Returns the parent element of a GICS code.
- **Returns:** `ElementCodified | undefined`

### `getDirectChildren(code: string)`
Returns all direct children of a GICS code.
- **Returns:** `Record<string, ElementCodified> | undefined`

### `getLevel(level?: number)`
Returns all GICS codes at a specific hierarchical level.
- **Parameters:** `level` - 1 (sectors), 2 (industry groups), 3 (industries), 4 (sub-industries)
- **Default:** 1
- **Returns:** `Record<string, ElementNested>`

### `classificationNested`
The complete GICS classification data as a nested object structure.

## GICS Hierarchy

The Global Industry Classification Standard has 4 levels:
- **Level 1:** Sectors (2-digit codes, e.g., `10` = Energy)
- **Level 2:** Industry Groups (4-digit codes, e.g., `1010` = Energy)
- **Level 3:** Industries (6-digit codes, e.g., `101010` = Energy Equipment & Services)
- **Level 4:** Sub-Industries (8-digit codes, e.g., `10101010` = Oil & Gas Drilling)

## Types

```typescript
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
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.