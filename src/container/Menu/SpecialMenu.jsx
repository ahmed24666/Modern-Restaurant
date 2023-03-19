import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { images,data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => {
  
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return(
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title" data-aos="fade-down" >
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center" data-aos="fade-in" data-aos-delay="700">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index)=>(
            <MenuItem key={wine.title + index} price={wine.price} title={wine.title} tags={wine.tags}/>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img" data-aos="fade-in" data-aos-delay="300">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center" data-aos="fade-in" data-aos-delay="700">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index)=>(
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
          ))}
        </div>
      </div>     
    </div>
      <div style={{marginTop:'15px'}} data-aos="fade-in" >
        <button type="button" className="custom__button">View More</button>
      </div>
  </div>
)};

export default SpecialMenu;
