import React, { useState, useEffect } from 'react'

export const MousePosition = () => {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 })

  const setMousePosition = ({ x, y }) => setPosition({ x, y })

  useEffect(() => {
    document.addEventListener('mousemove', setMousePosition)
    return () => document.removeEventListener('mousemove', setMousePosition)
  }, [])

  return (
    <div className="container">
      <p>
        <strong>X: </strong> {x}
      </p>
      <p>
        <strong>Y: </strong> {y}
      </p>
    </div>
  )
}
