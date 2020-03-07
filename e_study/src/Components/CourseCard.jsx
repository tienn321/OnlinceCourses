import React, { Component } from 'react'
import course from '../_core/Services/course'

export default class CourseCard extends Component {
  render() {
    let { course } = this.props;
    return (
      // <div className="course_box">
        <div className="card course_carditem">
          <img className="card-img-top course_carditem_img" src={course.hinhAnh} />
          <div className="card-body text-center">
          <div className="card-title course_carditem_title">{course.tenKhoaHoc}</div>

          <div className="card-text course_carditem_desc">{course.moTa}</div>
        </div>
        
        <div className="price_box d-flex flex-row align-items-center course_carditem_info">
          <div>

            <div className="course_carditem_info__top">
              
              <div className='rating_start'>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>

              <div className='course_view'>
                <i className="fa fa-eye mx-1  "></i><span>{course.luotXem}</span>
              </div>
              
            </div>

            <div className="course_carditem_info__bot">
              <i className="fa fa-tag mx-1"></i>
              <span>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
            </div>

          </div>
          

          <div className="course_price d-flex flex-column align-items-center justify-content-center">
            <i className="fa fa-cart-plus"></i>
          </div>
        </div>
        
        </div>
      // </div>
    )
  }
}
