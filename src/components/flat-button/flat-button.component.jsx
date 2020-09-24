import React from 'react';

import './flat-button.styles.scss';

const FlatButton = ({ children, homeNav, className, ...otherProps }) => (
    <button className={`flat-button pointer nowrap outline-0 fw7 f4 ${className}`} {...otherProps}>
        {children}
    </button>
)

export default FlatButton;