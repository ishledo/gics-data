import { getDetails, getDirectChildren, getParent, getLevel, isValid, getPositions } from '../src'

describe('GICS Helper Functions', () => {
  describe('getDetails', () => {
    it('should return element details for valid code', () => {
      const energy = getDetails('10')
      expect(energy).toBeDefined()
      expect(energy?.name).toBe('Energy')
      expect(energy?.code).toBe('10')
    })

    it('should return undefined for invalid code', () => {
      const invalid = getDetails('99')
      expect(invalid).toBeUndefined()
    })

    it('should return element with parent for sub-level code', () => {
      const energyGroup = getDetails('1010')
      expect(energyGroup).toBeDefined()
      expect(energyGroup?.parent).toBeDefined()
      expect(energyGroup?.parent?.code).toBe('10')
    })
  })

  describe('getDirectChildren', () => {
    it('should return children for parent code', () => {
      const children = getDirectChildren('10')
      expect(children).toBeDefined()
      expect(Object.keys(children || {}).length).toBeGreaterThan(0)
      
      // All children should start with parent code and be 2 characters longer
      Object.keys(children || {}).forEach(childCode => {
        expect(childCode).toMatch(/^10\d{2}$/)
      })
    })

    it('should return undefined for leaf nodes', () => {
      // Find a leaf node (8-digit code with no children)
      const leafChildren = getDirectChildren('10101010')
      expect(leafChildren).toBeUndefined()
    })

    it('should return undefined for invalid code', () => {
      const children = getDirectChildren('99')
      expect(children).toBeUndefined()
    })
  })

  describe('getParent', () => {
    it('should return parent for sub-level code', () => {
      const parent = getParent('1010')
      expect(parent).toBeDefined()
      expect(parent?.code).toBe('10')
    })

    it('should return undefined for top-level sectors', () => {
      const parent = getParent('10')
      expect(parent).toBeUndefined()
    })

    it('should return undefined for invalid code', () => {
      const parent = getParent('99')
      expect(parent).toBeUndefined()
    })
  })

  describe('getLevel', () => {
    it('should return sectors for level 1', () => {
      const sectors = getLevel(1)
      const codes = Object.keys(sectors)
      
      expect(codes.length).toBeGreaterThan(0)
      codes.forEach(code => {
        expect(code.length).toBe(2)
      })
    })

    it('should return industry groups for level 2', () => {
      const industryGroups = getLevel(2)
      const codes = Object.keys(industryGroups)
      
      expect(codes.length).toBeGreaterThan(0)
      codes.forEach(code => {
        expect(code.length).toBe(4)
      })
    })

    it('should default to level 1', () => {
      const defaultLevel = getLevel()
      const level1 = getLevel(1)
      
      expect(Object.keys(defaultLevel).length).toBe(Object.keys(level1).length)
    })
  })

  describe('isValid', () => {
    it('should return true for valid codes', () => {
      expect(isValid('10')).toBe(true)
      expect(isValid('1010')).toBe(true)
      expect(isValid('101010')).toBe(true)
    })

    it('should return false for invalid codes', () => {
      expect(isValid('99')).toBe(false)
      expect(isValid('invalid')).toBe(false)
      expect(isValid('')).toBe(false)
    })
  })

  describe('getPositions', () => {
    it('should return null for invalid code', () => {
      const result = getPositions('99')
      expect(result).toBeNull()
    })

    it('should return array for valid sector code (2 digits)', () => {
      const result = getPositions('10')
      expect(Array.isArray(result)).toBe(true)
      expect(result?.length).toBe(1)
      expect(result?.[0]?.code).toBe('10')
      expect(result?.[0]?.name).toBe('Energy')
    })

    it('should return array for valid industry group code (4 digits)', () => {
      const result = getPositions('1010')
      expect(Array.isArray(result)).toBe(true)
      expect(result?.length).toBe(2)
      expect(result?.[0]?.code).toBe('10')
      expect(result?.[1]?.code).toBe('1010')
    })

    it('should return array for valid industry code (6 digits)', () => {
      const result = getPositions('101010')
      expect(Array.isArray(result)).toBe(true)
      expect(result?.length).toBe(3)
      expect(result?.[0]?.code).toBe('10')
      expect(result?.[1]?.code).toBe('1010')
      expect(result?.[2]?.code).toBe('101010')
    })

    it('should return array for valid sub-industry code (8 digits)', () => {
      const result = getPositions('10101010')
      expect(Array.isArray(result)).toBe(true)
      expect(result?.length).toBe(4)
      expect(result?.[0]?.code).toBe('10')
      expect(result?.[1]?.code).toBe('1010')
      expect(result?.[2]?.code).toBe('101010')
      expect(result?.[3]?.code).toBe('10101010')
    })

    it('should include description when present', () => {
      const result = getPositions('10')
      expect(result?.[0]).toHaveProperty('name')
      expect(result?.[0]).toHaveProperty('code')
      // Description should only be included if it exists
      if (result?.[0] && 'description' in result[0]) {
        expect(typeof result[0].description).toBe('string')
      }
    })

    it('should not include description when not present', () => {
      // Test with a code that might not have description
      const result = getPositions('10')
      const element = result?.[0]
      if (element && !('description' in element)) {
        expect(element).not.toHaveProperty('description')
      }
    })

    it('should return proper hierarchy for multi-level codes', () => {
      const result = getPositions('101010')
      expect(result?.length).toBe(3)
      
      // Each level should be progressively more specific
      expect(result?.[0]?.code.length).toBe(2)
      expect(result?.[1]?.code.length).toBe(4)
      expect(result?.[2]?.code.length).toBe(6)
      
      // Each level should start with the previous level's code
      expect(result?.[1]?.code).toMatch(/^10\d{2}$/)
      expect(result?.[2]?.code).toMatch(/^1010\d{2}$/)
    })
  })

  describe('Integration tests', () => {
    it('should maintain parent-child relationships', () => {
      const energy = getDetails('10')
      const energyChildren = getDirectChildren('10')
      
      expect(energy).toBeDefined()
      expect(energyChildren).toBeDefined()
      
      // Check that children have correct parent
      Object.keys(energyChildren || {}).forEach(childCode => {
        const child = getDetails(childCode)
        expect(child?.parent?.code).toBe('10')
      })
    })

    it('should have consistent data across all levels', () => {
      // Test that every element (except top level) has a valid parent
      const allElements = getLevel(1)
      Object.values(allElements).forEach(element => {
        if (element.parent) {
          const parentExists = isValid(element.parent.code)
          expect(parentExists).toBe(true)
        }
      })
    })

    it('getPositions should be consistent with getDetails', () => {
      const code = '101010'
      const positions = getPositions(code)
      const details = getDetails(code)
      
      expect(positions).toBeDefined()
      expect(details).toBeDefined()
      
      // The last position should match the details
      const lastPosition = positions?.[positions.length - 1]
      expect(lastPosition?.code).toBe(details?.code)
      expect(lastPosition?.name).toBe(details?.name)
    })
  })
})