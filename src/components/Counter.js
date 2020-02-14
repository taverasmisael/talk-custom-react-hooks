import React from 'react'

import classes from '../helpers/counter.module.css'
import { useCounter } from '../hook/useCounter'

export const Counter = () => {
  const counter = useCounter()
  return (
    <div className={`container ${classes.root}`}>
      <button className={classes.button} onClick={counter.decrement}>
        -
      </button>
      <h1 className={classes.count}>{counter.count}</h1>
      <button className={classes.button} onClick={counter.increment}>
        +
      </button>
    </div>
  )
}
