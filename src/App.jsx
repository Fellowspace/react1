import React, { useState } from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import '@fontsource/roboto';
import 'typeface-poppins';
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // 🔍 search

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    showMessage(`${item.title} added to cart successfully!`);
  };

  const removeFromCart = (indexToRemove) => {
    const removedItem = cartItems[indexToRemove];
    const newCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newCart);
    showMessage(`${removedItem.title} removed from cart.`);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div style={{ position: "relative" }}>
      {message && <div className="success-message">{message}</div>}

      <Navbar
        cartItems={cartItems}
        cartCount={cartItems.length}
        toggleCart={() => setIsCartVisible(!isCartVisible)}
        setSearchQuery={setSearchQuery} // ✅ pass search state setter
      />

      {isCartVisible && (
        <div className="cart-dropdown">
          <h3>Cart Items</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>🥘 {item.title} - {item.price}</span>
                    <button onClick={() => removeFromCart(index)} style={{ border: "none", background: "none", color: "red", cursor: "pointer" }}>×</button>
                  </li>
                ))}
              </ul>
              <hr />
              <p style={{ fontWeight: "bold", textAlign: "right" }}>
                🧾 Total: $
                {cartItems
                  .reduce(
                    (total, item) =>
                      total + parseFloat(item.price.replace("$", "")),
                    0
                  )
                  .toFixed(2)}
              </p>
            </>
          )}
        </div>
      )}
<Home/>
<About/>
     <Menu
  addToCart={addToCart}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery} // ✅ add this
/>
<Reviews/>
<Blogs/>
<Contact/>
<Footer/>

    </div>
  );
};

export default App;
