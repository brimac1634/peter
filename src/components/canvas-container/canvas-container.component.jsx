import React, { useState } from 'react';

import Canvas from '../canvas/canvas.component';

import { usePrevious } from '../../utils';

const CanvasContainer = ({ otherClasses, ...otherProps }) => {
	const [rect, setRect] = useState({
		width: 0,
		height: 0
	});
	const prevRect = usePrevious(rect);

	const containerCallback = el => {
		console.log(el);
		if (!el) return;
		if (rect.width !== prevRect?.width || rect.height !== prevRect?.height) {
			const { width, height } = el.getBoundingClientRect();
			setRect({ width, height })
		}
	}

	return (
		<div className='w-100 h-100 overflow-hidden absolute top-0 left-0' ref={containerCallback} { ...otherProps }>
			{ rect &&
				<Canvas  
					rect={rect}
				/>
			}
		</div>
	)
}
export default CanvasContainer;