
import React ,{useRef} from "react";
import Logo from "../assets/logo.jpg";
import '@fontsource/roboto';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
  const searchRef=useRef();
  const searchHandler = () => {
  console.log("Clicked Search");
  searchRef.current.classList.toggle("active");
};
  return ( <nav className="navbar">
    
      <div className="navbar-container">
        {/* Logo */}
        <div>
         <a href="#" className="logo"><img src={Logo} style={{width: 160, height: 80}} alt="reslogo"/></a>
       
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
<div className='icons'>
  <FiSearch className="nav-icon" onClick={searchHandler} />
  <FiShoppingCart className="nav-icon" />
  <FiMenu className="nav-icon menu-btn" />
</div>
</div>
       <div className="search-form " ref={searchRef}>
        <input type="search" placeholder="search here...."id="search-box"/>
    <FiSearch className="search-form-icon" />

       </div>
    </nav>
    );
    
};

export default Navbar;
