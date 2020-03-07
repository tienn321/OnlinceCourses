import React from 'react';
import HeaderMenu from '../../Components/HeaderMenu';
import Footer from '../../Components/Footer';

export default function CommonLayout(props) {
  return (
    <div className="super_container">
      <HeaderMenu />
      {props.children}
      <Footer/>
    </div>
  )
}
