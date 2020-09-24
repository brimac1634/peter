import React from 'react';

import Enter from '../../components/enter/enter.component';

const PageBottom = ({ children, className }) => (
    <Enter enterStyle='slide-up'>
        <section className='w-100'>
            <div className={`ph2 pt1 pb4 ph3-ns ${className}`}>
                {children}
            </div>
        </section>
    </Enter>
)
 
export default PageBottom;