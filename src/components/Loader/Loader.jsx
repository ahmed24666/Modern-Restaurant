import React from 'react'
import './loader.css'
import images from '../../constants/images'

const Loader = () => {
    return (
        <div className='Loader'>
            <div className="image">
            <img src={images.gericht} alt="" />
            </div>
        </div>
    )
}

export default Loader
