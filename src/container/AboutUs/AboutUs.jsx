import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { images } from '../../constants'

import './AboutUs.css';

const AboutUs = () =>{ 
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return(
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about" data-aos="fade-down" data-aos-delay="500">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="" />
        <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife flex__center" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">
        <img src={images.knife} alt="" />
      </div>
      <div className="app__aboutus-content_history" data-aos="fade-down" data-aos-delay="500">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="" />
        <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
)
};

export default AboutUs;
