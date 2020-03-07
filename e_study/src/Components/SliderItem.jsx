import React, { Component } from 'react';

class SliderItem extends Component {
  render() {
    let { sldImg } = this.props;
    return (
      <div className="hero_slide">
        <img className="hero_slide_background" src={sldImg} alt='our-course'/>
        <div className="hero_slide_container d-flex flex-column align-items-center justify-content-center">
          <div className="hero_slide_content text-center">
            <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut">Get your <span>Education</span> today!</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;