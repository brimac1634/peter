import React from 'react';

import './loader.styles.scss';

const Loader = () => (
    <div className='w-100 h-100 fixed flex items-center justify-center'>
        <div className='w2 h2'>
            <div class="sk-chase">
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
                <div class="sk-chase-dot"></div>
            </div>
        </div>
    </div>
)
 
export default Loader;