import { useReducer, useCallback } from 'react'

export const useCounter = (initialValue = 0) => {
  const [count, dispatch] = useReducer(counterReducer, initialValue)

  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), [])
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), [])

  return { count, increment, decrement }
}

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
