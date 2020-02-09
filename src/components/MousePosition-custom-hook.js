import React from 'react'

import { useMousePosition } from '../hook/useMousePosition'

export const MousePosition = () => {
  const { x, y } = useMousePosition()

  return (
    <div>
      <strong>X: </strong> {x}
      <strong>Y: </strong> {y}
    </div>
  )
}
