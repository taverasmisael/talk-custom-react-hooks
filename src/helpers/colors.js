export const getRGBColor = (size, position) => {
  const WIDTH = size.width / 255
  const HEIGHT = size.height / 255
  const X = Math.floor(position.x / WIDTH)
  const Y = Math.floor(position.y / HEIGHT)

  const R = X
  const G = (Y - 255) * -1
  const B = X <= Y ? Y - X : 0

  return `rgb(${R}, ${G}, ${B})`
}
