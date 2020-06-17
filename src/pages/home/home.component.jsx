import React from 'react';

import './home.styles.scss';

const Home = () => {
    return ( 
        <div className='w-100 min-vh-100'>
            {/* <div className='gradient w-50 vh-100 absolute top-0 right-0 z-0' /> */}
            <section className='w-100 min-vh-100 flex items-center pa4'>
                <div className='flex flex-column'>
                    <h1 className="f2 f1-l lh-title avenir fw4">
                        PETER IP &<br/> ASSOCIATES<br/> LIMITED
                    </h1>
                    <span className='f4'>-Since 2011</span>
                </div>
            </section>
        </div>
     );
}
 
export default Home;