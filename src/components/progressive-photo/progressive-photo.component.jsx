import React, { useState } from 'react';

const ProgressivePhoto = ({ children, src, overlay, alt, className, ...otherProps }) => {
    const [fullImageHasLoaded, setFullImageHasLoaded] = useState(false);

    const IMG_STYLE = {
        objectFit: 'cover'
    }

    const OVERLAY_STYLE = {
        filter: 'blur(5px)',
        transition: 'opacity ease-in 1000ms',
        clipPath: 'inset(0)',
    }

    return ( 
        <div className='relative overflow-hidden'>
            <img
                className={`${className}`}
                onLoad={() => setFullImageHasLoaded(true)}
                style={{ opacity: fullImageHasLoaded ? 1 : 0, ...IMG_STYLE }}
                src={src}
                alt={alt}
            />
            <img
                className={`absolute absolute--fill ${className}`}
                style={{ opacity: fullImageHasLoaded ? 0 : 1, ...OVERLAY_STYLE, ...IMG_STYLE }}
                src={overlay}
                alt={alt}
            />
            <div className='absolute absolute--fill'>
                {children}
            </div>
      </div>
     );
}
 
export default ProgressivePhoto;