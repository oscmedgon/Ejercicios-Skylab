/* global describe, it, expect, fizzBuzz */

describe('function fizzBuzz', function () {
  it('should be defined', function () {
    expect(game).toBeDefined()
  })
  it('should be a function', function () {
    expect(typeof game).toBe('function')
  })
  it('should return a string', function () {
    expect(typeof game()).toBe('string')
  })
  it('should return a non empty string', function () {
    expect(game().length).not.toBe(0)
  })
  it('should return PAPER vs SCISSORS => SCISSORS wins!', function () {
    expect(game('paper' , 'scissors')).toBe('PAPER vs SCISSORS => SCISSORS wins!')
  })
  it('should return ROCK vs ROCK => tie!', function () {
    expect(game('rock' , 'rock')).toBe('ROCK vs ROCK => tie!')
  })
})
