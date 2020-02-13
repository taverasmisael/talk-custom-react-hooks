import { useReducer, useCallback } from 'react'

export const useCounter = initialValue => {
  const [count, dispatch] = useReducer(counterReducer, initialValue)

  const increment = useCallback(() => dispatch({ type: 'INCREMENT' }), [])
  const decrement = useCallback(() => dispatch({ type: 'DECREMENT' }), [])

  return { count, increment, decrement }
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
