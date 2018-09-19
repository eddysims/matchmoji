import React from 'react'
import './Welcome.css'

import Logo from '../Logo/Logo'

const Welcome = (props) => {
	return (
		<div className="Welcome">
			<Logo />
			<form onSubmit={props.submit}>
				<label>I would like to match <input type="number" name="WelcomeNumber" max="12" min="2" /> emojis</label>
				<button>Play Game</button>
			</form>
		</div>
	);
}

export default Welcome