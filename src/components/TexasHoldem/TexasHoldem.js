import React, {  useEffect, useState } from 'react'
//import ReactDOM from 'react-dom'
import './texasholdem.scss'
import Cards from './cards'
import _ from 'lodash'



const cardData = Cards

const dealerCards = _.shuffle(cardData)
const playerCards = _.shuffle(cardData)

//console.log(dealerCards)
//console.log(playerCards)


const holecards1 = dealerCards[0].image
const holecards2 = dealerCards[1].image
const holecards3 = playerCards[0].image
const holecards4 = playerCards[1].image
console.log(holecards1)
console.log(holecards2) 


//  addholeCards.push(holecards1)
//  addholeCards.push(holecards2)




const TexasHoldem = () => {
 
const [holeCards, setholeCards] = useState([])
const [holeCards2, setholeCards2] = useState([])



const handleAdd = (holeCard, holeCard2) => {
  const nhCards = [holecards1, holecards2]
  const newholeCards = nhCards.concat(); 
  console.log(newholeCards)
 setholeCards([...holeCards, holeCard])

 const nhCards2 = [holecards3, holecards4]
 const newholeCards2 = nhCards2.slice(); 
 console.log(newholeCards2)
 setholeCards2([...holeCards2, holeCard2])




}



  return (
    <div>
   <div className="actions">
    <div className="dealerArea">
    <div className="dealerTitle">Dealer</div>
    <button className="dealerButton" onClick={handleAdd} >hole cards</button>
    <button className="dealerButton">Community Cards</button>
    </div>
    <div className="actingArea">
    <div className="actingTitle">Acting</div>
    <button className="actingButton" >Check</button>
    <button className="actingButton">Bet</button>
    <button className="actingButton" >Fold</button>
    <button className="actingButton">Raise</button>
    <button className="actingButton">Re-Raise</button>
    </div>
    </div>
    <div className="game-container">
    <div className="computerArea">
    <div className="computerTitle">Computer</div>
    <div id="computerCards" className="cardArea">
    {holeCards.map(holeCard => (
      <li key={holeCards} className="holeDeals"><img src={holeCard} className="cardImage" alt="hole-card"/></li>
    ))}
    </div>
    </div>
    <div className="communityArea">
    <div className="communityTitle">Community</div>
    <div className="cardArea"></div>
    </div>
    <div className="playerArea">
    <div className="playerTitle">Player</div>
    <div className="cardArea">
    {holeCards2.map(holeCard2 => (
      <li key={holeCards2} className="holeDeals"><img src={holeCard2} className="cardImage" alt="hole-card"/></li>
    ))}
    </div>
    </div>
    </div>
   
   
    </div>

  )
}



export default TexasHoldem
