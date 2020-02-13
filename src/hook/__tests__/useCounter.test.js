import { useCounter, counterReducer } from '../useCounter'

describe('counterReducer', () => {
  test('it doesnt crash without state', () => {
    expect(counterReducer(undefined, { type: 'INCREMENT' })).toBe(1)
  })
  test('it increments', () => {
    expect(counterReducer(0, { type: 'INCREMENT' })).toBe(1)
    expect(counterReducer(68, { type: 'INCREMENT' })).toBe(69)
  })
  test('it decrements', () => {
    expect(counterReducer(1, { type: 'DECREMENT' })).toBe(0)
    expect(counterReducer(421, { type: 'DECREMENT' })).toBe(420)
  })
  test('it returns the same state on unknowun actions', () => {
    expect(counterReducer(42069, { type: 'XOTWOD' })).toBe(42069)
  })
})

describe('useCounter', () => {
  test('sum', () => {
    expect(0).toBe(0)
  })
})
