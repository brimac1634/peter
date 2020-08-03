import React from 'react';

const Gallery = ({ images }) => (
    <article className='cf'>
        {
            images &&
            images.map((image, i) => (
                <div className={`fl w-third-ns ${i%5 === 0 ? 'w-100' : 'w-50'}`}>
                    <div className='db aspect-ratio aspect-ratio--1x1 overflow-hidden'>
                        <span style={{backgroundImage: `url(${image})`}} className='grow bg-center cover aspect-ratio--object'></span>
                    </div>
                </div>
            ))
        }
    </article>
)
 
export default Gallery;