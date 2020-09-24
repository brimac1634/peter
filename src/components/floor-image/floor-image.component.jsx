import React from 'react';

import './floor-image.styles.scss';

const FloorImage = ({ className }) => (
    <div 
        className={`floor-image relative ${className}`} 
        style={{background: `url(${require(`../../assets/floor-${Math.ceil(Math.random() * 4)}.jpg`)})`}} 
    >
        <div className='absolute w-100 h-100 top-0 left-0 o-40 bg-custom-green'/>
    </div>
)
 
export default FloorImage;