
import React from 'react';
import Logo from "../assets/images/logo.jpg";
import '@fontsource/roboto';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
  return ( <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div>
         <a href="#" className="logo"><img src={Logo} style={{width: 80, height: 80}} alt="reslogo"/></a>
       
        </div>

        {/* Navigation List Centered */}
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
           <li><a href="#review">Reviews</a></li>
           <li><a href="#contact">Contact</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>

        {/* Right Buttons */}
        <div className="nav-buttons">
          <button className="btn">
          <FiSearch className="icon" />
          Search
        </button>
        <button className="btn">
          <FiShoppingCart className="icon" />
          Cart
        </button>
        <button className="btn">
          <FiMenu className='icon' id="#menu-btn"/>
        </button>
        </div>
      </div>
      <div>
        
      </div>
    </nav>
  
    );
    
};

export default Navbar;
