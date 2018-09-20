import React from 'react'
import './Welcome.css'

import Logo from '../Logo/Logo'
import RadioButton from '../RadioButton/RadioButton'

const Welcome = (props) => {
	return (
		<div className="Welcome">
			<Logo />
			<form onSubmit={props.submit}>
				How many emojis would you like to match?<br />
				<RadioButton value="2" />
				<RadioButton value="3" />
				<RadioButton value="4" />
				<RadioButton value="5" />
				<RadioButton value="6" />
				<RadioButton value="7" />
				<RadioButton value="8" />
				<RadioButton value="9" />
				<RadioButton value="10" />
				<RadioButton value="11" />
				<RadioButton value="12" />
				<br/>
				<button>Play Game</button>
			</form>
		</div>
	);
}

export default Welcome