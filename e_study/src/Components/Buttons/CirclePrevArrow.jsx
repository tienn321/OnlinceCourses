import React from 'react'

export default function CirclePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='circle_arrow prev_arrow'>
      <i className='fa fa-long-arrow-alt-left '
        onClick={onClick} > </i> 
    </div>
    
  )
}
