import React from 'react'
import Background from '../assets/images/bg.jpg'
import Roundimg from'../assets/rm1.png'
import '@fontsource/roboto';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  return ( 
    <>
    <section className="home" id="home">
       
<div className="home-content ">
    <h1>
        FRESH <span className="highlight ">FOOD IN THE</span> MORNING
    </h1>
    <p > Satisfy your cravings with our mouth-watering, freshly prepared dishes."
"Bringing the taste of comfort and quality to every plate.</p>
 <button className="btn bounce"><a href="#menu" className="butadd animation: bounce  ">Get Yours Now</a></button>
  </div>


    <div className="image-container">
    <img src={Roundimg}
        alt="rm"
      className="custom-image"></img>
    </div>



{/* button */}

    

    </section>

    </>
  );
};

export default Home;
