import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () =>{
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return(
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse" data-aos="fade-zoom-in" >
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info" data-aos="fade-zoom-in" data-aos-delay="500">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content" data-aos="fade-zoom-in" >
        <div className="app__chef-content_quote" >
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign" data-aos="fade-zoom-in" >
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
)};

export default Chef;