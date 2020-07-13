import React from 'react';

import './image-item.styles.scss';

const ImageItem = ({ index, title, children, ...otherProps }) => (
    <article  
        className='h-100 card w6-ns ma4s bg-white br3 ba b--black-10 pointer flex flex-column justify-between'
    >
        <div className='w-100 h4 relative'>
            <div className='floor-image w-100 h-100' style={{background: `url(${require(`../../assets/floor-${Math.ceil(Math.random() * 4)}.jpg`)})`}} />
            <h1 className='absolute bottom-0 left-0 f3 mb2 ttu avenir pv1 near-white ph3'>{title}</h1>
        </div>
        <div className='pa3 pa4-ns'>
            {children}
        </div>
    </article>
)
 
export default ImageItem;