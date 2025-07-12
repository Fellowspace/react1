import React, { useRef, useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";
import '@fontsource/roboto';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartCount, toggleCart, setSearchQuery }) => {
  const searchRef = useRef();
  const inputRef = useRef();
  const [menuOpen, setMenuOpen] = useState(false);

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    inputRef.current.focus();
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      setSearchQuery(value);
      inputRef.current.value = "";
      searchRef.current.classList.remove("active");
    }
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest('.navbar')) setMenuOpen(false);
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>
          <img src={Logo} alt="reslogo" />
        </a>

        <ul className={`nav-list ${menuOpen ? "mobile-active" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#menu" onClick={handleLinkClick}>Menu</a></li>
          <li><a href="#reviews" onClick={handleLinkClick}>Reviews</a></li>
          <li><a href="#blogs" onClick={handleLinkClick}>Blogs</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>

        <div className="icons">
          <FiSearch className="nav-icon" onClick={searchHandler} />
          <div onClick={toggleCart} style={{ position: "relative", cursor: "pointer" }}>
            <FiShoppingCart className="nav-icon" />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
          <FiMenu className="nav-icon menu-btn" onClick={toggleMobileMenu} />
        </div>
      </div>

      <div className="search-form" ref={searchRef}>
        <input type="search" placeholder="Search..." onKeyDown={handleSearchKeyDown} ref={inputRef} />
        <FiSearch className="search-form-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
