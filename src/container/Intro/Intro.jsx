import React, { useEffect} from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import { useState } from 'react';
import{BsFillPlayFill,BsPauseFill}from "react-icons/bs"
import{meal} from "../../constants"
import './Intro.css';

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false)
  const vidRef=React.useRef()
  const handleVideo=()=>{
    setplayVideo((prevplayVideo)=>!prevplayVideo)
    if (playVideo) {
      vidRef.current.pause()
    } else{
      vidRef.current.play()
    }
  }

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return(
  <div className="app__video" data-aos="fade-zoom-in">
    <video src={meal} type="video/mp4" loop controls={false} muted ref={vidRef}></video>
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay-circle flex__center" onClick={handleVideo}>
        {
          playVideo?(<BsPauseFill color="#fff" fontSize={30}/>):<BsFillPlayFill color="#fff" fontSize={30}/>
        }
      </div>
    </div>
  </div>
);
}

export default Intro;
