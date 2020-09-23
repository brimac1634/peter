import React, { useRef, useEffect, useState } from 'react';

import { useScrollY } from '../../utils';

import './enter.styles.scss';

const Enter = ({ children, enterStyle, className, ...otherProps }) => {
	const [show, setShow] = useState(false);
	const enter = useRef(null);
	const scrollY = useScrollY();

	useEffect(()=>{
		if (!enter) return;
		const { top } = enter.current.getBoundingClientRect(); 
		const inView = (enterStyle && !show) ? top < window.innerHeight - 50 : top < window.innerHeight;
		if (inView && !show) {
			setShow(true);
		} else if (!inView && show) {
			setShow(false);
		}
	}, [scrollY])
	
	return (
		<div 
			className={`${enterStyle && 'enter'} ${show && enterStyle}`} 
			ref={enter}
			{ ...otherProps }
		>
			{ children }
		</div>
	)
}
export default Enter;