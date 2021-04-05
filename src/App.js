import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.scss';
import NavBar from './components/navbar/NavBar'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'
import CardArea from './components/CardArea/CardArea'



function App() {

  // TODO: the logic for blackjack needs to be moved into a blackjack component, since there will be different games.
  // it looks like the GameArea component can just be changed to the blackjack component.
  // use react router to switch between the different games / pages 

  const [userCards, setUserCards] = useState([])
  const [dealerCards, setDealerCards] = useState([])

  const fetchCards = async () => {
    // TODO: this can probably be optimized. probably don't have to make two axios requests.
    axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then((res) => {
      setDealerCards([...dealerCards, res.data.cards[0]])
    })
    axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
    .then((res) => {
      setUserCards([...userCards, res.data.cards[0]])
    })
  }

  useEffect(() => {
    fetchCards()
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <CardArea cards={dealerCards} name="Dealer" />
      <CardArea cards={userCards} name="Player" />
    </div>
  );
}

export default App;
