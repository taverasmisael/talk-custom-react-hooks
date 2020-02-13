import { renderHook, act } from '@testing-library/react-hooks'

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
  test('it gives the right value', () => {
    let { result } = renderHook(() => useCounter())

    expect(result.current.count).toBe(0)

    result = renderHook(() => useCounter(10)).result

    expect(result.current.count).toBe(10)
  })

  test('it increments', () => {
    const { result } = renderHook(() => useCounter(68))
    act(() => result.current.increment())
    expect(result.current.count).toBe(69)
  })
  test('it decrements', () => {
    const { result } = renderHook(() => useCounter(421))
    act(() => result.current.decrement())
    expect(result.current.count).toBe(420)
  })
})
