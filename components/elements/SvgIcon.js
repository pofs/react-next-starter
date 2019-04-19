import React from 'react'

export default props => (
  <svg width={props.width} height={props.height}>
    <use xlinkHref={`/static/sprite.svg#${props.name}`} />
  </svg>
)
