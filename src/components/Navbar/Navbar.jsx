import React, {useState} from 'react';
import { GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

import {Link} from "react-router-dom";


const Navbar = () => {
  const [toggleMenu, settoggleMenu] =useState(false);

  return(
  <nav className='app__navbar'id="navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="" />
    </div>
      <ul className="app__navbar-links">
        <Link to="/">
          <li className="p__opensans"><div className="shortLine"></div><a href="#home">Home</a></li>
        </Link>
        <Link to="/aboutus">
          <li className="p__opensans"><div className="shortLine"></div><a href="#about">About</a></li>
        </Link>/
        <Link to="/menu">
          <li className="p__opensans"><div className="shortLine"></div><a href="#menu">Menu</a></li>
        </Link>
        <Link to="/awards">
          <li className="p__opensans"><div className="shortLine"></div><a href="#awards">Awards</a></li>
        </Link>
        <Link to="/contact">
          <li className="p__opensans"><div className="shortLine"></div><a href="#contact">Contact</a></li>
        </Link>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Register</a>
        <div/>
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize="27" onClick={()=>settoggleMenu(true)}/>

        {toggleMenu &&(

          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu  fontSize={27} className="overlay_close" onClick={()=>settoggleMenu(false)} />
          <ul className="app__navbar-smallscreen-links">
              <Link to="/">
                <li className="p__opensans" onClick={()=>settoggleMenu(false)} ><a href="#home">Home</a></li>
              </Link>
              <Link to="/aboutus">
                <li className="p__opensans" onClick={()=>settoggleMenu(false)} ><a href="#about">About</a></li>
              </Link>
              <Link to="/menu">
                <li className="p__opensans" onClick={()=>settoggleMenu(false)} ><a href="#menu">Menu</a></li>
              </Link>
              <Link to="/awards">
                <li className="p__opensans" onClick={()=>settoggleMenu(false)} ><a href="#awards">Awards</a></li>
              </Link>
              <Link to="/contact">
                <li className="p__opensans" onClick={()=>settoggleMenu(false)} ><a href="#contact">Contact</a></li>
              </Link>
          </ul>
        </div>
          )}

      </div>
  </nav>
)
};

export default Navbar;
