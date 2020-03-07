import React from 'react'

export default function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="hero_slider_left hero_slider_nav trans_200" onClick={onClick}><span className="trans_200">prev</span></div>
  )
}
