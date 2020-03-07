import React from 'react'

export default function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="hero_slider_right hero_slider_nav trans_200" onClick={onClick}><span className="trans_200">next</span></div>
  )
}
