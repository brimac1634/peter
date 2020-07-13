import React from 'react';

import Enter from '../../components/enter/enter.component';

import './page-bottom.styles.scss';

const PageBottom = ({ children, className }) => (
    <Enter enterStyle='slide-up'>
        <section className='w-100 enter-diamond'>
            <div className={`ph2 pt1 pb4 ph3-ns diamond-top ${className}`}>
                {children}
            </div>
        </section>
    </Enter>
)
 
export default PageBottom;