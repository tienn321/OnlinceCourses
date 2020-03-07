import React, { Component } from 'react'
import Sliders from '../../Components/Sliders';
import Popular from '../../Components/Popular';
import Register from '../../Components/Register';
import Services from '../../Components/Services';
import Events from '../../Components/Events';
import CoursesByCategory from '../../Components/CoursesByCategory';


export default class HomePage extends Component {
  render() {
    return (
      <>
        <Sliders />
        <Popular />
        <Register />
        <Services />
        <CoursesByCategory />
        <Events/>
      </>
    )
  }
}
