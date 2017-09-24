/* global describe, it, expect, fizzBuzz */

describe('function fizzBuzz', function () {
  it('should be defined', function () {
    expect(fizzBuzz).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof fizzBuzz).toBe('function')
  })
  it('should return an array', function () {
    var result = Array.isArray(fizzBuzz())

    expect(result).toBeTruthy()
  })
  it('should returnan array of 100 elements', function () {
    var result = fizzBuzz().length

    expect(result).toBe(100)
  })
  describe('numbers non divisible by 5 or 3 shoud return the number', function () {
  it('position [1] of the array should return 2', function () {
    var result = fizzBuzz()[1]

    expect(result).toBe(2)
  })
})
  describe('numbers divisible by 3 or 5 should return Fizz and Buzz respective', function () {
  it('position [2] of the array should return Fizz', function () {
    var result = fizzBuzz()[2]

    expect(result).toBe("Fizz")
  })
  it('position [4] of the array should return Buzz', function () {
    var result = fizzBuzz()[4]

    expect(result).toBe("Buzz")
  })
  })
   describe('numbers divisible by 5 and 3 should return FizzBuzz', function () { 
    it('position [14] of the array should return Buzz', function () {
    var result = fizzBuzz()[14]

    expect(result).toBe("FizzBuzz")
  })
  })
   describe('if a number is divisible by 3 or it have a 3 should return Fizz', function () { 
    it('position [12] of the array should return Fizz', function () {
    var result = fizzBuzz()[12]

    expect(result).toBe("Fizz")
  })
})
   describe('if a number is divisible by 5 or it have a 5 should return Buzz', function () { 
    it('position [50] of the array should return Fizz', function () {
    var result = fizzBuzz()[50]

    expect(result).toBe("Fizz")
  })
})
})
