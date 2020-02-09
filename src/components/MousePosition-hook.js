import React, { useState, useEffect } from 'react'

export const MousePosition = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  const setMousePosition = ({ x, y }) => setPosition({ x, y })

  useEffect(() => {
    document.addEventListener('mousemove', setMousePosition)
    return () => document.removeEventListener('mousemove', setMousePosition)
  }, [])

  return (
    <div>
      <strong>X: </strong> {x}
      <strong>Y: </strong> {y}
    </div>
  )
}
