import React, { useRef, useEffect, useState } from 'react';

import { useScrollY } from '../../utils';

import './enter.styles.scss';

const Enter = ({ children, enterStyle, className, ...otherProps }) => {
	const [show, setShow] = useState(false);
	const enter = useRef(null);
	const scrollY = useScrollY();

	useEffect(()=>{
		if (!enter) return;
		const { top, height } = enter.current.getBoundingClientRect();
		if (show) {
			if (window.innerHeight < top) {
				setShow(false);
			}
		} else {
			if (top + height * 0.6 < window.innerHeight) {
				setShow(true);
			}
		}
	}, [scrollY,show])
	
	return (
		<div 
			className={`enter ${show ? enterStyle : null} ${className}`} 
			ref={enter}
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}
export default Enter;