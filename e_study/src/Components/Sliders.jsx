import React, { Component } from 'react'
import SliderItem from './SliderItem';
import PrevArrow from './Buttons/PrevArrow'
import NextArrow from './Buttons/NextArrow'
import slider1 from '../Assets/images/slider1.jpg';
import slider2 from '../Assets/images/slider2.jpg';
import slider3 from '../Assets/images/slider3.jpg';
import slider4 from '../Assets/images/slider4.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SVGGlobe from './Buttons/SVGGlobe';
import SVGBooks from './Buttons/SVGBooks';
import SVGProfessor from './Buttons/SGVProfessor';

import books from '../Assets/images/books.svg'
import earth from '../Assets/images/earth-globe.svg'
import professor from '../Assets/images/professor.svg'

const sliderLst = [slider1, slider2, slider3, slider4,]
export default class Sliders extends Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    let elm = sliderLst.map((sldImg, index) => {
      return <SliderItem key={index} sldImg={sldImg} />
    })
    return (
      <>
       
        <div className="home">
          {/* Hero Slider */}
          <div className="hero_slider_container">
            <div className="hero_slider">

              <Slider {...settings}>
                {/* Hero Slide */}
                {elm}
              </Slider>

            </div>
          </div>
        </div>

        <div className="hero_boxes">
          <div className="hero_boxes_inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <div className="svg">
                      <SVGGlobe />
                      </div>
                    <div className="hero_box_content">
                      <h2 className="hero_box_title">Online Courses</h2>
                      <a href="courses.html" className="hero_box_link">view more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <div className="svg">
                      <SVGBooks />
                    </div>
                    <div className="hero_box_content">
                      <h2 className="hero_box_title">Our Library</h2>
                      <a href="courses.html" className="hero_box_link">view more</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 hero_box_col">
                  <div className="hero_box d-flex flex-row align-items-center justify-content-start">
                    <div className="svg">
                      <SVGProfessor/> 
                    </div>
                  
                  <div className="hero_box_content">
                    <h2 className="hero_box_title">Our Teachers</h2>
                    <a href="teachers.html" className="hero_box_link">view more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        

      </>
    )
  }
}
