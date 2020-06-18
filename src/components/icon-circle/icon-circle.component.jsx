import React from 'react';

import './icon-circle.styles.scss';

const IconCircle = ({ children }) => (
    <div className='icon-circle w4 h4 center flex justify-center items-center b--black ba bw1 br-100 pa4'>
        {children}
    </div>
)
 
export default IconCircle;