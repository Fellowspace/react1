import React from 'react'
import Background from '../assets/images/bg.jpg'
import Roundimg from'../assets/rm1.png'
import '@fontsource/roboto';
const Home = () => {
  return ( 
    <>
    <section className="home" id="home">
        <div className="home-overlay"></div>
<div className="home-content">
    <h1>
        FRESH <span className="highlight">FOOD IN THE</span> MORNING
    </h1>
    
   <p> Satisfy your cravings with our mouth-watering, freshly prepared dishes."
"Bringing the taste of comfort and quality to every plate.</p>
</div>

{/* button */}
<div className="image-container">
    <img src={Roundimg}
        alt="rm"
      className="custom-image"></img>
    
</div>
    </section>

    </>
  );
};

export default Home;