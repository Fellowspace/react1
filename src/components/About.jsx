import React from 'react';
import aboutImage from '../assets/aboutbg.png';

import 'typeface-poppins';
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-overlay">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <h3>What Makes Our Food Special?</h3>
            <p>
              At Restaurant Villa, we serve fresh, high-quality food made with passion and care.
              From classic favorites to bold new flavors, every dish is crafted to delight.
              Whether you're dining in or grabbing a quick bite, we're here to bring comfort, taste, and satisfaction to every meal.
            </p>
            <p>
              We make ordering easy with our user-friendly online menu and fast delivery service.
              Customize your meal, track your order in real time, and enjoy exclusive deals—just a click away!
            </p>
            <button className="btn bounce learn-more"><a href="#blogs" className="color">Learn-more</a></button>
          </div>
          <div className="about-image ">
            <img src={aboutImage} className="bounceIn"  alt="Bowl of noodles" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
