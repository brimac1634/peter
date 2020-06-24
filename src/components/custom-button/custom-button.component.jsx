import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, className, ...otherProps }) => (
    <button 
        className={`custom-button f5 f4-ns link ba ph3 pv2 mb2 near-black ttu pointer b--near-black bw1 ${className}`}
        {...otherProps}
    >
        {children}
    </button>
)
 
export default CustomButton;