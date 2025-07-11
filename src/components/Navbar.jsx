import React ,{useRef} from "react";
import Logo from "../assets/logo.jpg";
import '@fontsource/roboto';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';


const Navbar = ({ cartCount, toggleCart, setSearchQuery }) => {
  const searchRef = useRef();
  const inputRef = useRef();

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    inputRef.current.focus();
  };

 const handleSearchKeyDown = (e) => {
  if (e.key === "Enter") {
    const value = e.target.value.trim(); // get value before clearing
    setSearchQuery(value);               // 🔴 only this triggers Menu
    inputRef.current.value = "";         // ✅ now clear input
    searchRef.current.classList.remove("active");
  }
};


  return (
    <nav className="navbar">
      <div className="navbar-container">
        
<div>
         <a href="#" className="logo"><img src={Logo} style={{width: 160, height: 80}} alt="reslogo"/></a>
       
        </div>

        {/* Navigation List Centered */}
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
           <li><a href="#reviews">Reviews</a></li>
           <li><a href="#contact">Contact</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>

        <div className="icons">
          <FiSearch className="nav-icon" onClick={searchHandler} />
          <div style={{ position: "relative", cursor: "pointer" }} onClick={toggleCart}>
            <FiShoppingCart className="nav-icon" />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </div>
          <FiMenu className="nav-icon menu-btn" />
        </div>
      </div>

      <div className="search-form" ref={searchRef}>
      <input
  type="search"
  placeholder="Search here..."
  id="search-box"
  onKeyDown={handleSearchKeyDown}
  ref={inputRef}
        />
        <FiSearch className="search-form-icon" />
      </div>
    </nav>
  );
};
export default Navbar;
