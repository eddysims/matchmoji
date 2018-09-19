import React from 'react'
import './Logo.css'

var randomEmoji = require('random-emoji');

const Logo = props => {
	let str = 'MATCHMOJI'.split('');
	let emoji = randomEmoji.random({count: 5}).map( obj => obj.character );
	// 
	return (
		<div className="Logo">
			<div className="Logo__emoji">{emoji}</div>
			{str.map( (val, index) => <span className={index} key={index}>{val}</span> ) }
		</div>
	)
}

export default Logo