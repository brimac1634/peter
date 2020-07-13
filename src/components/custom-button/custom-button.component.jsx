import React from 'react';

const CustomButton = ({ children, className, ...otherProps }) => (
    <button 
        className={`f5 f4-ns link ph3 pv2 mb2 near-black ttu pointer bn dim bg-light-gray ${className}`}
        {...otherProps}
    >
        {children}
    </button>
)
 
export default CustomButton;