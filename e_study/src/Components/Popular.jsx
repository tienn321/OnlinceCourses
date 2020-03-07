import React, { Component } from 'react';
import CoursesCarousel from './CoursesCarousel';
import CourseService from '../_core/Services/course';
export default class Popular extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listCourses: [],
    }
  }

  componentDidMount() {
    this.getAllCourses();
  }
  getAllCourses = () => {
    CourseService.getAllCourses()
      .then(result => {
        this.setState({
          listCourses: result.data
        },
          // () => {
          // console.log('ds khoa hoc nhan', this.state.listCourses)
          // }
        )
      })
      .catch((err) => console.log(err.message))
  }

  render() {
    return (
      <div className="popular page_section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title text-center">
                <h1>Popular Courses</h1>
              </div>
            </div>
          </div>
          {/* <div className="course_boxes"> */}

            {/* Popular Course Item */}
          <CoursesCarousel listCoursesDisplay={this.state.listCourses} style={{ position: 'relative' }}/>

            {/* Popular Course Item */}
            {/* <div className="col-lg-4 course_box">
              <div className="card">
                <img className="card-img-top" src="images/course_2.jpg" alt="https://unsplash.com/@cikstefan" />
                <div className="card-body text-center">
                  <div className="card-title"><a href="courses.html">Beginners guide to HTML</a></div>
                  <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                </div>
                <div className="price_box d-flex flex-row align-items-center">
                  <div className="course_author_image">
                    <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh" />
                  </div>
                  <div className="course_author_name">Michael Smith, <span>Author</span></div>
                  <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                </div>
              </div>
            </div> */}

            {/* Popular Course Item */}
            {/* <div className="col-lg-4 course_box">
              <div className="card">
                <img className="card-img-top" src="images/course_3.jpg" alt="https://unsplash.com/@dsmacinnes" />
                <div className="card-body text-center">
                  <div className="card-title"><a href="courses.html">Advanced Photoshop</a></div>
                  <div className="card-text">Adobe Guide, Layes, Smart Objects etc...</div>
                </div>
                <div className="price_box d-flex flex-row align-items-center">
                  <div className="course_author_image">
                    <img src="images/author.jpg" alt="https://unsplash.com/@mehdizadeh" />
                  </div>
                  <div className="course_author_name">Michael Smith, <span>Author</span></div>
                  <div className="course_price d-flex flex-column align-items-center justify-content-center"><span>$29</span></div>
                </div>
              </div>
            </div> */}
            
          {/* </div> */}
        </div>
      </div>

    )
  }
}
