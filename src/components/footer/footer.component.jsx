import React from 'react';

const Footer = () => ( 
    <footer className='pv4 ph3 ph5-m ph6-l mid-gray bg-custom-yellow'>
        <small className='f6 db tc'>© {new Date().getFullYear().toString()} <b className='ttu'>Peter Ip & Associates Limited</b>, All Rights Reserved</small>
        <div className='tc mt3'>
            <span className='f6 dib ph2 link mid-gray dim'>Language</span>
            <a 
                className='f6 dib ph2 link mid-gray dim'
                href='mailto:peteripadm@gmail.com' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                email
            </a>
            <a className='f6 dib ph2 link mid-gray dim' href='tel:+852-3954-5730'>phone</a>
        </div>
    </footer>
);
 
export default Footer;