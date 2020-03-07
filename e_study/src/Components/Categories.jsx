import React, { Component } from 'react';
import CourseService from '../_core/Services/course';
import { connect } from "react-redux";
import { getActiveCategory } from '../_core/Actions/course'
import classNames from 'classnames';
class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList : [],
      activeCategory: ''
    }
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    CourseService.getCourseCategories()
      .then((result) => {
        this.setState({
          categoryList: result.data
        }
          //, () => {
          //   console.log('ds khoa hoc nhan', this.state.categoryList)
          //  }
        )
      })
      .then(() => {
        this.setState({ activeCategory: this.state.categoryList[0].maDanhMuc }
           ,() => { this.props.updateActiveCategory(this.state.activeCategory)
          //   //console.log('ds khoa hoc nhan', this.state.categoryList)
          //   console.log('active cate', this.state.activeCategory)
           }
        )
      })
      .catch((err) => console.log('errorr is',err.message))
  }

  changeActiveCategory = (maDanhMuc) => {
    this.setState({
      activeCategory : maDanhMuc
    }
      //  ,() => {
      //       console.log('ma danh muc moi: ', this.state.activeCategory)
      // }
      , () => { this.props.updateActiveCategory(this.state.activeCategory)}
    )
  }

  render() {
    const categoryElm = this.state.categoryList.map((category, index) => <li className={classNames({
      'category_item': true, 'active': this.state.activeCategory === `${category.maDanhMuc}`
    })} key={index} onClick={() => this.changeActiveCategory(category.maDanhMuc)}
     > {category.tenDanhMuc}</li>)


    return (
      <ul className='category_list my-3'>
        <li
          className={classNames({
            'category_item': true, 'active': this.state.activeCategory === 'all'
          })}
          onClick={() => this.changeActiveCategory('all')}>
          Tất cả</li>
        {categoryElm}
      </ul>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getActiveCategory: (maDanhMuc) => {
      dispatch(getActiveCategory(maDanhMuc));
    }
  }
 }

export default connect(null, mapDispatchToProps)(Categories);