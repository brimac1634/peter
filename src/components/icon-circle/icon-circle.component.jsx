import React from 'react';

import './icon-circle.styles.scss';

const IconCircle = ({ children, className, ...otherProps }) => (
    <div 
        className={`${className} icon-circle center flex justify-center items-center b--near-black ba bw1 br-100`} 
        {...otherProps}
    >
        {children}
    </div>
)
 
export default IconCircle;