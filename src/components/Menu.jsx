import React, { useState } from "react";
import item1 from "../assets/menu1.jpg";
import item2 from "../assets/menu2.jpg";
import item3 from "../assets/menu3.jpg";
import item4 from "../assets/menu4.jpg";
import item5 from "../assets/menu5.jpg";
import item6 from "../assets/menu6.jpg";
import item7 from "../assets/menu7.jpg";
import item8 from "../assets/menu8.jpg";
import item9 from "../assets/menu9.jpg"; // Add more images as needed
import item10 from "../assets/menu10.jpg";

const allMenuItems = [
  {
    id: 1,
    title: "Chicken Biryani",
    image: item1,
    price: "$14.99",
    desc: "Pakistani Basmati Rice with refreshening and tasty Spices.",
  },
  {
    id: 2,
    title: "Spaghetti",
    image: item2,
    price: "$9.99",
    desc: "Classic Spaghetti with Tomato Sauce.",
  },
  {
    id: 3,
    title: "Juicy Beefball Subs",
    image: item3,
    price: "$4.99",
    desc: "Beefball wraps with extra mirinara and spicy toppings.",
  },
  {
    id: 4,
    title: "Layered Hamburger",
    image: item4,
    price: "$6.99",
    desc: "Juicy grilled hamburger with cheese, lettuce, and tomato.",
  },
  {
    id: 5,
    title: "Hot Choco-Lava",
    image: item5,
    price: "$6.99",
    desc: "Hot chocolate lava filling tasty cupcakes.",
  },
  {
    id: 6,
    title: "Tikka-Boti",
    image: item6,
    price: "$9.25",
    desc: "Grilled chicken with fresh spices (6 pieces).",
  },
  {
    id: 7,
    title: "Creamy Pancakes",
    image: item7,
    price: "$5.99",
    desc: "Creamy pancakes with blueberry and honey topping.",
  },
  {
    id: 8,
    title: "Choco-Brownies",
    image: item8,
    price: "$6.99",
    desc: "Chocolate brownies with strawberry topping.",
  },
  // Additional hidden items
  {
    id: 9,
    title: "Hot Chocolate Coffee",
    image: item9,
    price: "$7.99",
    desc: "Refreshing Hot Chololate Coffee with Creamy top.",
  },
  {
    id: 10,
    title: "Chocolate Shake",
    image: item10,
    price: "$7.25",
    desc: "Chocolate Shake with Vinella Ice-Cream topping.",
  },
];

const Menu = () => {
  const [visibleCount, setVisibleCount] = useState(8); // Show first 8

  const handleViewMore = () => {
    setVisibleCount(allMenuItems.length); // Show all
  };

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>

      <div className="menu-grid">
        {allMenuItems.slice(0, visibleCount).map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
            <button className="btn">Order Now</button>
          </div>
        ))}
      </div>

      {visibleCount < allMenuItems.length && (
        <div className="view-more-container">
          <button className="btn view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}

      <br />
      <br />
      <h3>Delivery service available with 20% off</h3>
    </section>
  );
};

export default Menu;
