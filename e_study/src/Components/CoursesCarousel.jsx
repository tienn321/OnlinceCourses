import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CircleNextArrow from './Buttons/CircleNextArrow';
import CirclePrevArrow from './Buttons/CirclePrevArrow';
import CourseCard from './CourseCard';
//import CourseService from '../_core/Services/course'

export default class CoursesCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCourses : [],
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     listCourses: this.props.listCoursesDisplay
  //   })
  // }

  // componentDidMount() {
  //   this.getAllCourses();
  // }
  // getAllCourses = () => {
  //   CourseService.getAllCourses()
  //     .then(result => {
  //       this.setState({
  //       listCourses:result.data
  //       },
  //         // () => {
  //         // console.log('ds khoa hoc nhan', this.state.listCourses)
  //         // }
  //       )
  // })
  //     .catch((err) => console.log(err.message))
  // }

  render() {
    let slide2Show = 4;
    this.state.listCourses = this.props.listCoursesDisplay;
    if (this.state.listCourses.length < 4) {
      slide2Show = this.state.listCourses.length;
    }
    const courseItem = this.state.listCourses.map((course, index) => <CourseCard key={index} course={course} /> )

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slide2Show,
      slidesToScroll: 2,
      initialSlide: 0,
      //cssEase: "linear",
      nextArrow: <CircleNextArrow />,
      prevArrow: <CirclePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            nextArrow: false,
            prevArrow: false
          }
        }
      ]
    };
   
    return (
      <Slider {...settings}>
        {/* Hero Slide */}
        {courseItem}
        {/* <CourseCard /> */}
        
      </Slider>
    )
  }
}
