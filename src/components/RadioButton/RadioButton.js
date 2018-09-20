import React from 'react'

const RadioButton = props => {
	let styles = {
		display: 'inline-block',
		margin: '1rem 0 1rem -1px',
		width: '8.333%'
	}

	return (
		<label style={styles}>
			<input type="radio" name="WelcomeNumber" value={props.value} />
			{props.value}
		</label>
	)
}

export default RadioButton