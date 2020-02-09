import { useState, useEffect } from 'react'

export const useWindowSize = () => {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })

  const setWindowsSize = ({ target }) =>
    setSize({ width: target.innerWidth, height: target.innerHeight })

  useEffect(() => {
    setWindowsSize({ target: window })
    window.addEventListener('resize', setWindowsSize)
    return () => window.removeEventListener('resize', setWindowsSize)
  }, [])

  return { width, height }
}
