import React, { useMemo } from 'react'

import { useWindowSize } from '../hook/useWindowSize'
import { useMousePosition } from '../hook/useMousePosition'

import classes from '../helpers/backgroundSelector.module.css'
import { getRGBColor } from '../helpers/colors'

export const BackgroundSelector = () => {
  const position = useMousePosition()
  const size = useWindowSize()

  const backgroundColor = useMemo(() => getRGBColor(size, position), [
    position,
    size,
  ])

  return (
    <div className={classes.root} style={{ backgroundColor }}>
      <h1 className={classes.name}>{backgroundColor}</h1>
    </div>
  )
}
