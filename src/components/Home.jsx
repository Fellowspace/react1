import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'
import Background from '../assets/images/bg.jpg'
import Roundimg from'../assets/rm1.png'
import '@fontsource/roboto';

const Home = () => {
   useEffect(() => {
  AOS.init({ duration: 1200 }); // 👈 animation duration in ms
}, []);

  return ( 
    <>
    <section className="home" id="home">
       
<div className="home-content ">
    <h1 data-aos="fade-right"  data-aos-duration="3000"
  data-aos-delay="500"
  data-aos-easing="ease-in-out">
        FRESH <span className="highlight ">FOOD IN THE</span> MORNING
    </h1>
    <p  data-aos="fade-up"  data-aos-duration="2500"
  data-aos-delay="800"
  data-aos-easing="ease-in-out" > Satisfy your cravings with our mouth-watering, freshly prepared dishes."
"Bringing the taste of comfort and quality to every plate.</p>

  <a href="#menu" className="butadd bounce">Get Yours Now</a>

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
