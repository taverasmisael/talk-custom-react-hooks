import { useState, useEffect } from 'react'

export const useMousePosition = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  const setMousePosition = ({ x, y }) => setPosition({ x, y })

  useEffect(() => {
    document.addEventListener('mousemove', setMousePosition)
    return () => document.removeEventListener('mousemove', setMousePosition)
  }, [])

  return { x, y }
}
