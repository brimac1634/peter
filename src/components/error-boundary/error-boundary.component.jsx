import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true }
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<div className='flex flex-columns items-center tc'>
					<h1 className='f-headline lh-solid'>Uh Oh.</h1>
					<span>Something has gone wrong.</span>
					<span>Please try refreshing.</span>
				</div>
			)
		} 
		return this.props.children
	}
} 

export default ErrorBoundary;