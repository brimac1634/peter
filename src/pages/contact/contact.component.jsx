import React from 'react';

import ContactPanel from '../../components/contact-panel/contact-panel.component';
import CanvasContainer from '../../components/canvas-container/canvas-container.component';

const Contact = () => {
    return ( 
        <div className='vw-100 min-vh-100 overflow-hidden flex justify-center items-center'>
            <CanvasContainer />
            <ContactPanel dark className='z-1 w-50' />
        </div> 
    );
}
 
export default Contact;