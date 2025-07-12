// App.jsx
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
  const [searchQuery, setSearchQuery] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    // Check if item already exists to increment quantity or add new
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        return prevItems.map((cartItem, index) =>
          index === existingItemIndex ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }]; // Add new item with quantity 1
    });
    showMessage(`${item.title} added to cart successfully!`);
  };

  const removeFromCart = (idToRemove) => { // Changed to use item ID for more robust removal
    const removedItem = cartItems.find(item => item.id === idToRemove);
    const newCart = cartItems.filter(item => item.id !== idToRemove);
    setCartItems(newCart);
    if (removedItem) {
      showMessage(`${removedItem.title} removed from cart.`);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const placeOrder = () => {
    if (cartItems.length === 0) {
      showMessage("Your cart is empty. Please add items before placing an order.");
      return;
    }
    clearCart();
    setOrderPlaced(true);
    setIsCartVisible(false); // Close cart dropdown after ordering
    setMessage(""); // Clear any pending item messages
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2500);
  };

  // Calculate total price considering quantity
  const totalPrice = cartItems
    .reduce((total, item) => total + parseFloat(item.price.replace("$", "")) * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div style={{ position: "relative" }}>
      {/* Success message for add/remove */}
      {message && <div className="success-message">{message}</div>}

      {/* Order placed message outside cart */}
      {orderPlaced && (
        <div className="order-message">🎉 Your order has been placed successfully!</div>
      )}

      <Navbar
        cartCount={cartItems.reduce((total, item) => total + (item.quantity || 1), 0)} // Pass total quantity
        toggleCart={() => setIsCartVisible(!isCartVisible)}
        setSearchQuery={setSearchQuery}
      />

      {/* Cart Dropdown */}
      {isCartVisible && (
        <div className="cart-dropdown">
          <h3>Cart Items</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => ( // Use item.id as key for better performance and stability
                  <li key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
                    <span>
                      <span style={{ fontSize: "1.2em", marginRight: "5px" }}>🥘</span>
                      {item.title} (x{item.quantity || 1}) - {item.price}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)} // Pass item.id for removal
                      style={{ border: "none", background: "none", color: "red", cursor: "pointer", fontSize: "1.2em" }}
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <hr style={{ margin: "10px 0" }} />
              <p style={{ fontWeight: "bold", textAlign: "right", fontSize: "1.1em" }}>
                🧾 Total: ${totalPrice}
              </p>

              {/* Place Order Button */}
              <button
                onClick={placeOrder}
                className="butadd" // Apply your existing button styles
                style={{ width: "100%", marginTop: "15px" }} // Added more margin top
              >
                Place Order
              </button>
            </>
          )}
        </div>
      )}

      {/* Main content */}
      <Home />
      <About />
      <Menu
        addToCart={addToCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Reviews />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
