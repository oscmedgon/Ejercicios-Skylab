/* global describe, it, expect, fizzBuzz */
describe('function game general tests', function () {
  it('should be defined', function () {
    expect(game).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof game).toBe('function')
  })
  it('should return a string', function () {
    expect(typeof game()()).toBe('string')
  })
  it('should return a non empty string', function () {
    expect(game()().length).not.toBe(0)
  })
  it('if you call the function with a string should return a string error', function () {
    expect(game('string')()).toBe('The user input can\'t be translated')
  })
  it('if you call the function with a bolean should return a string error', function () {
    expect(game(true)()).toBe('The user input can\'t be translated')
  })
  describe('if you call the function with a number should translate the number and return it as a string', function () {
    it('input (8) should be return VIII', function () {
      expect(game(8)()).toBe("VIII")
    })
    it('input (48) should be return IIX', function () {
      expect(game(48)()).toBe("XLVIII")
    })
    it('input (795) should be return IIX', function () {
      expect(game(795)()).toBe("DCCXCV")
    })
    it('input (1999) should be return MCMXCIX', function () {
      expect(game(1999)()).toBe("MCMXCIX")
    })
  })
})
