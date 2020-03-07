import React, { Component } from 'react'

export default class BannerTop extends Component {
  render() {
    return (
      <div className="home">
        <div className="home_background_container prlx_parent">
          <div className="home_background prlx" style={{ backgroundImage: 'url(images/contact_background.jpg)' }} />
        </div>
        <div className="home_content">
          <h1>Contact</h1>
        </div>
      </div>

    )
  }
}
