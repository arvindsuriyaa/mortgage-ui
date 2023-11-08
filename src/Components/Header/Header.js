import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className='header_head'>
    <div className='header_logo_container'>
    <img className='header_logo' src="https://i.ibb.co/JxHBLGf/logo-png.png"></img>
    </div>
    <div className='menu'>
      <NavLink to="/" activeclassname="active" exact="true">Home</NavLink>
      <NavLink to="/aboutus" activeclassname="active" exact="true">About Us</NavLink>
      {/* <NavLink to="/ourproducts" activeclassname="active" exact="true">Our Products</NavLink> */}
      <NavLink to="/emicalculator" activeclassname="active" exact="true">EMI Calculator</NavLink>
      <NavLink to="/enquire" activeclassname="active" exact="true">Enquire</NavLink>
      {/* <NavLink to="/contactus" activeclassname="active" exact="true">Contact Us</NavLink> */}
      <NavLink to="/login" activeclassname="active" exact="true">Login</NavLink>
     </div>
    </div>

  )
}
