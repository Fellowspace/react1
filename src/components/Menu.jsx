import React, { useEffect, useRef, useState } from "react";
import item1 from "../assets/menu1.jpg";
import item2 from "../assets/menu2.jpg";
import item3 from "../assets/menu3.jpg";
import item4 from "../assets/menu4.jpg";
import item5 from "../assets/menu5.jpg";
import item6 from "../assets/menu6.jpg";
import item7 from "../assets/menu7.jpg";
import item8 from "../assets/menu8.jpg";
import item9 from "../assets/menu9.jpg";
import item10 from "../assets/menu10.jpg";

const allMenuItems = [
  { id: 1, title: "Chicken Biryani", image: item1, price: "$14.99", desc: "Pakistani Basmati Rice with Spices." },
  { id: 2, title: "Spaghetti", image: item2, price: "$9.99", desc: "Spaghetti with Tomato Sauce." },
  { id: 3, title: "Juicy Beefball Subs", image: item3, price: "$4.99", desc: "Beefball wraps with toppings." },
  { id: 4, title: "Layered Hamburger", image: item4, price: "$6.99", desc: "Grilled burger with cheese." },
  { id: 5, title: "Hot Choco-Lava", image: item5, price: "$6.99", desc: "Hot chocolate lava cupcakes." },
  { id: 6, title: "Tikka-Boti", image: item6, price: "$9.25", desc: "Grilled chicken with spices." },
  { id: 7, title: "Creamy Pancakes", image: item7, price: "$5.99", desc: "Pancakes with honey topping." },
  { id: 8, title: "Choco-Brownies", image: item8, price: "$6.99", desc: "Brownies with strawberries." },
  { id: 9, title: "Hot Chocolate Coffee", image: item9, price: "$7.99", desc: "Chocolate Coffee with cream." },
  { id: 10, title: "Chocolate Shake", image: item10, price: "$7.25", desc: "Shake with Ice Cream topping." },
];

const Menu = ({ addToCart, searchQuery, setSearchQuery }) => {
  const itemRefs = useRef({});
  const sectionRef = useRef();
  const notFoundRef = useRef(); // 🔴 New
  const [itemsToRender, setItemsToRender] = useState(allMenuItems);
  const [notAvailable, setNotAvailable] = useState(false);

  // 🔁 Function to handle "Item Not Found"
  const itemNotFound = () => {
    setItemsToRender([]);
    setNotAvailable(true);
    setTimeout(() => {
      notFoundRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100); // slight delay to ensure ref is mounted
  };

  // 🔁 Reset menu handler (button)
  const resetMenu = () => {
    setItemsToRender(allMenuItems);
    setNotAvailable(false);
    setSearchQuery("");
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!searchQuery || searchQuery.trim() === "") {
      setItemsToRender(allMenuItems);
      setNotAvailable(false);
      return;
    }

    const match = allMenuItems.find(
      (item) => item.title.toLowerCase() === searchQuery.toLowerCase()
    );

    if (match) {
      setItemsToRender([match]);
      setNotAvailable(false);
      itemRefs.current[match.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      itemNotFound();
    }
  }, [searchQuery]);

  return (
    <section className="menu" id="menu" ref={sectionRef}>
      <h1 className="heading">
        our <span>menu</span>
      </h1>

      {/* ❌ Not Found Message */}
      {notAvailable && (
        <div
          ref={notFoundRef}
          style={{
            textAlign: "center",
            marginTop: "30px",
            padding: "20px",
            border: "1px solid red",
            borderRadius: "10px",
            background: "#ffe5e5",
          }}
        >
          <p style={{ color: "red", fontWeight: "bold", fontSize: "18px" }}>
             Item not available
          </p>
          <button className="butadd" onClick={resetMenu}>
            Back to Menu
          </button>
        </div>
      )}

      {/* Menu Items Grid */}
      <div className="menu-grid">
        {itemsToRender.map((item) => (
          <div
            className="menu-card"
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
            <button className="butadd" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <br />
      <br />
      <h3 style={{ textAlign: "center" }}>
         Delivery service available with 20% off
      </h3>
    </section>
  );
};

export default Menu;
