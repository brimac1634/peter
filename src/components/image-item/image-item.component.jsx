import React from 'react';

import './image-item.styles.scss';

const ImageItem = ({ title, children, ...otherProps }) => (
    <article  
        className='h-100 card w6-ns ma4s bg-white shadow-4 pointer flex flex-column justify-between overflow-hidden'
        {...otherProps}
    >
        <div className='w-100 h4 relative'>
            <div 
                className='floor-image w-100 h-100' 
                style={{background: `url(${require(`../../assets/floor-${Math.ceil(Math.random() * 4)}.jpg`)})`}} 
            />
            <div className='absolute w-100 h-100 top-0 left-0 o-60 bg-custom-yellow'/>
            <h1 className='absolute bottom-0 left-0 f3 mb2 ttu jura pv1 near-white ph3'>{title}</h1>
        </div>
        <div className='pa3 pa4-ns'>
            {children}
        </div>
    </article>
)
 
export default ImageItem;