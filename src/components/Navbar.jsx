// Navbar.jsx
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
    // Ensure cart dropdown closes when search opens
    toggleCart(false); // Pass false to explicitly close cart if it's open
    setMenuOpen(false); // Close mobile menu if search opens
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      setSearchQuery(value);
      inputRef.current.value = "";
      searchRef.current.classList.remove("active");
    }
  };

  // Close menus/forms when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // If clicking outside the navbar area itself
      if (!e.target.closest('.navbar')) {
        setMenuOpen(false);
        searchRef.current.classList.remove("active");
        // We don't control toggleCart here directly, as it's passed from App
        // App's toggleCart already handles its state.
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleMobileMenu = () => {
    setMenuOpen(prev => !prev);
    // Close search and cart dropdown if mobile menu opens
    searchRef.current.classList.remove("active");
    toggleCart(false); // Explicitly close cart
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    // Also close search and cart dropdown when navigating
    searchRef.current.classList.remove("active");
    toggleCart(false);
  };

  const handleCartIconClick = () => {
    toggleCart(); // Toggle cart visibility
    // Close search and mobile menu if cart opens
    searchRef.current.classList.remove("active");
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
          <div onClick={handleCartIconClick} style={{ position: "relative", cursor: "pointer" }}>
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
