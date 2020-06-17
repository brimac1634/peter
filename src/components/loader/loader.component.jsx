import React from 'react';

import './loader.styles.scss';

const Loader = () => (
    <div className='w-100 h-100 fixed flex items-center justify-center'>
        <div className='w2 h2'>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    </div>
)
 
export default Loader;