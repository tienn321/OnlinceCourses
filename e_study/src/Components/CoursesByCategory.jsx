import React, { Component } from 'react'
import Categories from './Categories'
import CourseService from '../_core/Services/course'
import CoursesCarousel from './CoursesCarousel';
export default class CoursesByCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //activeCategory: '',
      listCourseActive : []
    }
  }

  updateActiveCategory = newCategory => {
    //console.log('update la', newCategory)
    // this.setState({
    //   activeCategory: newCategory
    // })
    
    if (newCategory === 'all') {
      this.getAllCourses();
    }
    else {
      this.getCoursesDuetoActiveCategory(newCategory);
    }
  }

  getCoursesDuetoActiveCategory = newCategory => {
    CourseService.getCoursesByCategory(newCategory)
      .then(result => {
        this.setState({
          listCourseActive: result.data
        }
        , () => {
        console.log('ds khoa hoc active la', this.state.listCourseActive)
          }
        )
      })
      .catch((err) => console.log(err.message))
  }

  getAllCourses = () => {
    CourseService.getAllCourses()
      .then(result => {
        this.setState({
          listCourseActive: result.data
        },
          () => {
            console.log('ds khoa hoc active all la', this.state.listCourseActive)
          }
        )
      })
      .catch((err) => console.log(err.message))
  }

  render() {
    return (
      <div className="popular page_section category">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center px-5">
                <h1>Our Course Categories</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
                Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
                  Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus.
                </p>
              </div>
            </div>
          </div>

          <Categories updateActiveCategory={this.updateActiveCategory}/>
          

          {/* Courses Carousel Item */}
          <CoursesCarousel listCoursesDisplay={this.state.listCourseActive} style={{ position: 'relative' }} />
        </div>
      </div>
    )
  }
}
