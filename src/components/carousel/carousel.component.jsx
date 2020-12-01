import React, { useCallback, useEffect, useState, useRef} from 'react';

import { useWindowSize } from '../../utils';

import './carousel.styles.scss';

const Carousel = ({ children, showIndicator, disablePlay  }) => {
	const [index, setIndex] = useState(0);
	const [translateValue, setTranslation] = useState(0);
	const galleryItem = useRef(null);
	const screenSize = useWindowSize();

	const nextImage = useCallback(() => {
		const { width } = galleryItem.current.getBoundingClientRect()
	    if (index === children.length - 1) {
			setIndex(0)
			setTranslation(0)
		} else {
			setTranslation((index + 1) * -width)
			setIndex(index + 1)
		} 
	}, [index, children])

	const previousImage = useCallback(() => {
		const { width } = galleryItem.current.getBoundingClientRect()
		if (index === 0) {
			setIndex(children.length - 1)
			setTranslation(-width * (children.length - 1))
		} else {
			setTranslation((index - 1) * -width)
			setIndex(index - 1)
		}
	}, [index, children])
	
	useEffect(() => {
		if (disablePlay) return;
		const interval = setInterval(() => nextImage(), 8000)
		return () => clearInterval(interval)
	}, [index, nextImage, disablePlay])

	useEffect(() => {
		const { width } = galleryItem.current.getBoundingClientRect();
		setTranslation(index * -width);
	}, [screenSize, index])

	return (
		<div className='carousel' ref={galleryItem}> 
			<div 
				className="slider-wrapper"
	          	style={{
					transform: `translate(${translateValue}px, 0)`,
					WebkitTransform: `translate(${translateValue}px, 0)`
	            }}
	         >
	            {children}
	        </div>
			<div className='arrow left-arrow' onClick={previousImage}/>
			<div className='arrow right-arrow' onClick={nextImage}/>
			{
				showIndicator &&
				<div className='indicators'>
					{
						children?.length &&
						children.map((image, i) => {
							const isCurrent = i === index;
							return (
								<div 
									key={i} 
									className={`indicator ${isCurrent ? 'current': null}`} 
									onClick={() => setIndex(i)}
								/>
							)
						})
					}
				</div>
			}
		</div>
	)
}

export default Carousel;