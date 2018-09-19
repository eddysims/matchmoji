import React from 'react';
import Card from '../Card/Card'
import './Cards.css'

import randomizeArray from '../../helpers/randomizeArray'

const Cards = props => {
		let allCards = randomizeArray(props.cards.concat(props.cards));
		let displayCards = allCards.map( (val, index) => <Card value={val} key={index} click={props.click} totalCards={allCards.length}/> )
		return (
			<div className="Cards">
				{displayCards}
			</div>
		)
}

export default Cards;