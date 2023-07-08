import React, { useEffect, useState } from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from './components/Loader/Loader';
const App = () => {
  const [load, setload] = useState(true)
  useEffect(() => {
    setTimeout(()=>setload(false), 4000)
  }, [])
  return(
    <>
  <Router>
    {load ? (<Loader />) : (
      <>
        <Navbar />
        <span className="goUp ">
          <a href="#navbar">
            <div className="linescroll"></div>
            <span className="topscroll">Top</span>
          </a>
        </span>
        <Routes>
          <Route exact path="/" element={<><Header /><AboutUs /><Chef /><Intro /><Gallery /><Footer /></>} />
          <Route exact path="/aboutus" element={<><AboutUs /><Chef /><Footer /></>} />
          <Route exact path="/menu" element={<><SpecialMenu /><Footer /></>} />
          <Route exact path="/awards" element={<><Laurels /><Footer /></>} />
          <Route exact path="/contact" element={<><FindUs /><Footer /></>} />
        </Routes>
      </>
    )}
  </Router>
    </>
  )
    };

export default App;
