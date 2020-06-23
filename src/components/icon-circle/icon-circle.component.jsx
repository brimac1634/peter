import React from 'react';

import './icon-circle.styles.scss';

const IconCircle = ({ children, className, clickable, ...otherProps }) => (
    <div 
        className={`${className} icon-circle center flex justify-center items-center b--near-black ba bw1 br-100 ${clickable ? 'card' : null}`} 
        {...otherProps}
    >
        {children}
    </div>
)
 
export default IconCircle;