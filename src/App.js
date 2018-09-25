import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Cards from './components/Cards/Cards';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-126478801-1');
ReactGA.pageview(window.location.pathname + window.location.search);

var randomEmoji = require('random-emoji');

class App extends Component {
  state = {
    showWelcome: true,
    selectedCards: [],
    clickableCards: true,
    emojis: {},
  }

  cards = '';
  hideWelcomeHandler = event => {
    let welcome = this.state.showWelcome;
    let tempObj = {};
    let newEmojis = randomEmoji.random({count: event.target.querySelector('[name="WelcomeNumber"]').value});
    newEmojis = newEmojis.map( val => tempObj[val.character] = false );

    this.setState({ 
      showWelcome: !welcome,
      emojis: tempObj
    });

    this.cards = <Cards cards={Object.keys(tempObj)} click={this.cardClickHandler.bind()} />
  }

  cardClickHandler = event => {
    let selectedCards = [...this.state.selectedCards];
    let clickable = true;
    let emojis = {...this.state.emojis}

    console.log(event.target.dataset.value);
    
    if( !this.state.clickableCards || event.target.classList.contains('found') || event.target.classList.contains('clicked') ) return;
    
    if( selectedCards.length < 2 ) {
      selectedCards.push(event.target.dataset.value);
      event.target.classList.add('clicked');
    }

    if( selectedCards.length === 2 ) {
      let clicked = document.querySelectorAll('.clicked');
      
      if( selectedCards[0] === selectedCards[1] ) {
        clicked.forEach( elm => elm.classList.add('found') );
        selectedCards = [];
        emojis[event.target.dataset.value] = true;

        this.checkForWin();
      }
      else {
        clickable = false
        this.resetCardsAndMakeClickable()
      }
    }

    this.setState({ 
      selectedCards: selectedCards,
      clickableCards: clickable,
      emojis: emojis
    })
    // this.setState({ clickCount: currentClicks })
  }

  resetCardsAndMakeClickable = () => {
    let clickable = true;
    let clickedCards = document.querySelectorAll('.Card.clicked');
    
    setTimeout(() => {
      clickedCards.forEach( elm => elm.classList.remove('clicked') );
      
      this.setState({
        selectedCards: [],
        clickableCards: clickable
      });
    }, 1000)
  }

  checkForWin = () => {
    let emojis = {...this.state.emojis};
    let foundEmojis = document.querySelectorAll('.found');

    if( Object.keys(emojis).length * 2 === foundEmojis.length )  {
      setTimeout( () => {
        alert('you win');
      }, 500);
    }
  }

  render() {
    let welcome = this.state.showWelcome ? <Welcome submit={this.hideWelcomeHandler.bind()} /> : '';
    
    return (
      <div className="App">
        {welcome}
        {this.cards}
      </div>
    );
  }
}

export default App;
