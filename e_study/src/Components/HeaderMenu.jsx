import React from 'react';
import logo from '../Assets/logo.png';

export default function Header() {
  return (
    <>
      <div className='top_bar'>
        <div className="container">
          <ul className="top_bar_contact_list">
            <li>Have any questions?</li>
            <li>
              <i className="fa fa-phone mr-1" />
              <span>001-1234-5678</span>
            </li>
            <li>
              <i className="fa fa-envelope mr-1"></i>
              <a className='top_bar_contact__mail' href="mailto:tien.viocrystal@gmail.com" target="_top">info.elearning@abc.xyz</a>
            </li>
          </ul>

          
            {/* <button class='login_button btn'>aaa</button> */}
          <button className="text-center login_button">
            Register or Login
          </button>

        </div>
     


      </div>
        <header className="header d-flex flex-row">
          <div className="header_content d-flex flex-row align-items-center">
            {/* Logo */}
            <div className="logo_container">
              <div className="logo">
                <img src={logo} alt='logo' />
                
              </div>
            </div>
            {/* Main Navigation */}
            <nav className="main_nav_container">
              <div className="main_nav">
                <ul className="main_nav_list">
                  <li className="main_nav_item"><a href="#">home</a></li>
                  {/* <li className="main_nav_item"><a href="#">about us</a></li> */}
                  <li className="main_nav_item"><a href="courses.html">courses</a></li>
                  {/* <li className="main_nav_item"><a href="elements.html">elements</a></li> */}
                  <li className="main_nav_item"><a href="news.html">news</a></li>
                  <li className="main_nav_item"><a href="contact.html">contact</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Search here */}
          <div className="header_side d-flex flex-row justify-content-center align-items-center">
            
            {/* <div className="row">
              <div className="col text-center"> */}
                {/* <div className="newsletter_form_container mx-auto"> */}
            <form action="post" className="text-center search_formbar">
              <div className="newsletter_form d-flex flex-md-row align-items-center">
                      <input className="newsletter_email search_input" type="text" placeholder="Search courses..." />
                      <button id="newsletter_submit" type="submit" className="newsletter_submit_btn search_btn trans_300" value="Submit"><i className="fa fa-search"></i></button>
                    </div>
                  </form>
                {/* </div> */}
              {/* </div>
            </div> */}


          </div>
          {/* Hamburger */}
          <div className="hamburger_container">
            <i className="fas fa-bars trans_200" />
          </div>
        </header>
        {/* Menu */}
        <div className="menu_container menu_mm">
          {/* Menu Close Button */}
          <div className="menu_close_container">
            <div className="menu_close" />
          </div>
          {/* Menu Items */}
          <div className="menu_inner menu_mm">
            <div className="menu menu_mm">
              <ul className="menu_list menu_mm">
                <li className="menu_item menu_mm"><a href="#">Home</a></li>
                <li className="menu_item menu_mm"><a href="#">About us</a></li>
                <li className="menu_item menu_mm"><a href="courses.html">Courses</a></li>
                <li className="menu_item menu_mm"><a href="elements.html">Elements</a></li>
                <li className="menu_item menu_mm"><a href="news.html">News</a></li>
                <li className="menu_item menu_mm"><a href="contact.html">Contact</a></li>
              </ul>
              {/* Menu Social */}
              <div className="menu_social_container menu_mm">
                <ul className="menu_social menu_mm">
                  <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-pinterest" /></a></li>
                  <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                  <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-instagram" /></a></li>
                  <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                  <li className="menu_social_item menu_mm"><a href="#"><i className="fab fa-twitter" /></a></li>
                </ul>
              </div>
              <div className="menu_copyright menu_mm">Colorlib All rights reserved</div>
            </div>
          </div>
        </div>
      

    </>
  )
}
