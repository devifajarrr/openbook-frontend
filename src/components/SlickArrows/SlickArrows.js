import React from 'react'
export const NextArrow = props => {
  const { className, style, onClick } = props

  return (
    <div
      className={className + ' slick-custom-arrow'}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img src="/assets/img/right.svg" alt="next" />
    </div>
  )
}
export const PrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className + ' slick-custom-arrow'}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <img src="/assets/img/left.svg" alt="prev" />
    </div>
  )
}
