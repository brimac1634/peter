import React from 'react';

import './icon-circle.styles.scss';

const IconCircle = ({ children, className, black, ...otherProps }) => (
    <div 
        className={`${className} icon-circle center flex justify-center items-center br-100 ${black ? 'bg-near-black black' : null}`} 
        {...otherProps}
    >
        {children}
    </div>
)
 
export default IconCircle;