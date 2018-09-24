import React from 'react'
import './Welcome.css'

import Logo from '../Logo/Logo'
import RangeSlider from '../RangeSlider/RangeSlider'

const Welcome = (props) => {
	return (
		<div className="Welcome">
			<Logo />
			<form onSubmit={props.submit}>
				<RangeSlider name="WelcomeNumber" min="2" max="12" value="6" />
				How many emojis would you like to match?<br />
				<button>Play Game</button>
			</form>
		</div>
	);
}

export default Welcome