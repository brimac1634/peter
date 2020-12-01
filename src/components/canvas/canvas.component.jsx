import React, { useEffect, useRef } from 'react';

import Line from './Line';

const Canvas = ({ rect, color, ...otherProps }) => {
	const canvasRef = useRef(null);
	const { width, height } = rect;

	useEffect(()=>{
		if (!canvasRef.current) return;
		const { width, height } = rect;
		const canvas = canvasRef.current        
		const c = canvas.getContext('2d')
		let linesArray = [];

		for (var i = 0; i < (Math.ceil(width * 0.07)); i++) {
	        const x = (Math.random() * (width) + width);
			const y = (Math.random() * (height / 2) - (height / 2));
			const xEnd = x - (width * 0.8);
			const yEnd = y + height;
	        linesArray.push(new Line(x,y,xEnd,yEnd,c,color))
		}

	      const animate = () => {
	        requestAnimationFrame(animate)
	        c.clearRect(0, 0, window.innerWidth, window.innerHeight);

	        for (var i = 0; i < linesArray.length; i++) {
	          linesArray[i].update();
	        }
	      }
	      animate();
	}, [canvasRef, rect, color])

	return (
		<canvas 
	        ref={canvasRef}
	        width={width} 
	        height={height}
	        { ...otherProps }
		/>
	)
}
export default Canvas;