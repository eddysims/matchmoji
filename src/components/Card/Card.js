import React from 'react'
import './Card.css'

const Card = props => {
	let width = Math.ceil(Math.sqrt(props.totalCards));
	let height = Math.floor(props.totalCards/width)
	let style = {
		width: 100/width + '%',
		paddingTop: 100/width + '%'
	}
	return (
		<div onClick={props.click} data-value={props.value} className="Card" style={style}>
			<div className="card">
				<div className="content">
				    <div className="front">
				    	?
				    </div>
				    <div className="back">
				    	{props.value}
				    </div>
				</div>
			</div>
		</div>
	)
}

export default Card