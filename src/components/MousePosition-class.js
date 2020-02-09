import React, { PureComponent } from 'react'

export class MousePosition extends PureComponent {
  state = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.setMousePosition)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.setMousePosition)
  }

  setMousePosition = ({ x, y }) => {
    this.setState({ x, y })
  }

  render() {
    const { x, y } = this.state
    return (
      <div>
        <strong>X: </strong> {x}
        <strong>Y: </strong> {y}
      </div>
    )
  }
}
