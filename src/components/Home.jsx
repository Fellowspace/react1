import { useEffect } from 'react';
import Background from '../assets/images/bg.jpg'
import Roundimg from'../assets/rm1.png'
import '@fontsource/roboto';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
  AOS.init({ duration: 1200 });
}, []);
  return ( 
    <>
    <section className="home" id="home">
       
<div className="home-content  ">
    <h1   className="glow-text" data-aos="fade-right"
  data-aos-duration="3000"
  data-aos-delay="500"
  data-aos-easing="ease-in-out" >
        FRESH <span className="highlight  ">FOOD IN THE</span> MORNING
    </h1>
    <p  className="glow-text" data-aos="fade-up"
  data-aos-duration="2500"
  data-aos-delay="800"
  data-aos-easing="ease-in-out" > Satisfy your cravings with our mouth-watering, freshly prepared dishes.
Bringing the taste of comfort and quality to every plate.</p>
 <div className="get-yours-wrapper">
  <button className="get-yours-btn">
    <a href="#menu" className="color">Get Yours Now</a>
  </button>
</div>

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
