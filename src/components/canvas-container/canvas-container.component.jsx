import React, { useState, useRef, useEffect } from 'react';

import Canvas from '../canvas/canvas.component';

import { useWindowSize } from '../../utils';

const CanvasContainer = ({ className, ...otherProps }) => {
	const [rect, setRect] = useState({
		width: 0,
		height: 0
	});
	const windowSize = useWindowSize();
	const container = useRef(null);

	useEffect(()=>{
		if (!container.current) return;
		const { width, height } = container.current.getBoundingClientRect();
		if (width !== rect.width || height !== rect.height) {
			setRect({ width, height })
		}
	}, [rect, container, windowSize])

	return (
		<div className={`w-100 h-100 overflow-hidden absolute top-0 left-0 ${className}`} ref={container} { ...otherProps }>
			{ rect &&
				<Canvas rect={rect} />
			}
			<div className='w-100 vh-100 absolute top-0 left-0'/>
		</div>
	)
}
export default CanvasContainer;