import React from 'react'

export default function CircleNextArrow(props) {
  const {onClick } = props;
  return (
    <div className='circle_arrow next_arrow'>
      <i className="fa fa-long-arrow-alt-right "
        onClick={onClick}></i>
    </div>
    
    
  )
}
