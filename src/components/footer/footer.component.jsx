import React from 'react';

const Footer = () => ( 
    <footer class='pv4 ph3 ph5-m ph6-l mid-gray'>
        <small class='f6 db tc'>© {new Date().getFullYear().toString()} <b class='ttu'>Peter Ip & Associates Limited</b>, All Rights Reserved</small>
        <div class='tc mt3'>
            <span class='f6 dib ph2 link mid-gray dim'>Language</span>
            <a 
                class='f6 dib ph2 link mid-gray dim'
                href='mailto:peteripadm@gmail.com' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                email
            </a>
            <a class='f6 dib ph2 link mid-gray dim' href='tel:+852-3954-5730'>phone</a>
        </div>
    </footer>
);
 
export default Footer;