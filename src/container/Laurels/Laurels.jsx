import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ awards: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () =>{ 
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  return(
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <div className="laurels__heading" data-aos="fade-down">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
      </div>


      <div className="app__laurels_awards" data-aos="fade-down" data-aos-delay="400">
        {data.awards.map((awarded) => <AwardCard awards={awarded}  />)}
      </div>
    </div>

    <div className="app__wrapper_img" data-aos="fade-down" data-aos-delay="700">
      <img src={images.laurels} alt="laurels_img" />
    </div>
  </div>
)};

export default Laurels;
