import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { images } from "../../constants";
import  {SubHeading}  from "../../components/"



import './Header.css';

const Header = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info" data-aos="fade-down">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">
        The Key To Fine Dining
      </h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img" data-aos="fade-down" data-aos-delay="700">
      <img src={images.welcome} alt="" />
    </div>
  </div>
)};

export default Header;
