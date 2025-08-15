import * as gicsData from '../src/index'
import { 
  getDetails, 
  getDirectChildren, 
  getParent, 
  getLevel, 
  isValid,
  classificationNested 
} from '../src'

describe('Index Module Exports', () => {
  describe('Helper function exports', () => {
    it('should export getDetails function', () => {
      expect(typeof gicsData.getDetails).toBe('function')
      expect(typeof getDetails).toBe('function')
      
      // Test function works
      const result = getDetails('10')
      expect(result).toBeDefined()
      expect(result?.code).toBe('10')
    })

    it('should export getDirectChildren function', () => {
      expect(typeof gicsData.getDirectChildren).toBe('function')
      expect(typeof getDirectChildren).toBe('function')
      
      // Test function works
      const result = getDirectChildren('10')
      expect(result).toBeDefined()
      expect(Object.keys(result || {}).length).toBeGreaterThan(0)
    })

    it('should export getParent function', () => {
      expect(typeof gicsData.getParent).toBe('function')
      expect(typeof getParent).toBe('function')
      
      // Test function works
      const result = getParent('1010')
      expect(result).toBeDefined()
      expect(result?.code).toBe('10')
    })

    it('should export getLevel function', () => {
      expect(typeof gicsData.getLevel).toBe('function')
      expect(typeof getLevel).toBe('function')
      
      // Test function works
      const result = getLevel(1)
      expect(result).toBeDefined()
      expect(Object.keys(result).length).toBeGreaterThan(0)
    })

    it('should export isValid function', () => {
      expect(typeof gicsData.isValid).toBe('function')
      expect(typeof isValid).toBe('function')
      
      // Test function works
      expect(isValid('10')).toBe(true)
      expect(isValid('99')).toBe(false)
    })
  })

  describe('Data exports', () => {
    it('should export classificationNested', () => {
      expect(typeof gicsData.classificationNested).toBe('object')
      expect(typeof classificationNested).toBe('object')
      
      // Test data structure
      expect(classificationNested).toBeDefined()
      expect(Object.keys(classificationNested).length).toBeGreaterThan(0)
      
      // Test that it contains expected GICS codes
      expect(classificationNested['10']).toBeDefined()
      expect(classificationNested['10'].name).toBe('Energy')
    })
  })

  describe('Module completeness', () => {
    it('should export all expected functions and data', () => {
      const expectedExports = [
        'getDetails',
        'getDirectChildren', 
        'getParent',
        'getLevel',
        'isValid',
        'classificationNested'
      ]
      
      expectedExports.forEach(exportName => {
        expect(gicsData).toHaveProperty(exportName)
        expect(gicsData[exportName as keyof typeof gicsData]).toBeDefined()
      })
    })

    it('should have consistent exports between named and namespace imports', () => {
      expect(gicsData.getDetails).toBe(getDetails)
      expect(gicsData.getDirectChildren).toBe(getDirectChildren)
      expect(gicsData.getParent).toBe(getParent)
      expect(gicsData.getLevel).toBe(getLevel)
      expect(gicsData.isValid).toBe(isValid)
      expect(gicsData.classificationNested).toBe(classificationNested)
    })
  })

  describe('Integration with helper functions', () => {
    it('should work end-to-end with exported functions', () => {
      // Test a complete workflow using exported functions
      const energySector = getDetails('10')
      expect(energySector).toBeDefined()
      expect(energySector?.name).toBe('Energy')
      
      const energyChildren = getDirectChildren('10')
      expect(energyChildren).toBeDefined()
      
      // Get first child and test parent relationship
      const firstChildCode = Object.keys(energyChildren || {})[0]
      const firstChild = getDetails(firstChildCode)
      expect(firstChild?.parent?.code).toBe('10')
      
      // Test level filtering
      const allSectors = getLevel(1)
      expect(allSectors['10']).toBeDefined()
      expect(allSectors['10'].name).toBe('Energy')
      
      // Test validation
      expect(isValid('10')).toBe(true)
      expect(isValid(firstChildCode)).toBe(true)
      expect(isValid('invalid')).toBe(false)
    })
  })
})