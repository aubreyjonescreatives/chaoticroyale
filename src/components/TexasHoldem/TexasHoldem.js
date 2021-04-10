import React from 'react'
import './texasholdem.scss'



const dealerCards = []
const playerCards = []


const Landing = () => {
  
  return (
    <div>
    <button>Deal 'hole cards</button>
    <button>Deal Community Cards</button>
    <div class="game-container">
    <div className="cardArea">
    <div className="dealerTitle">Dealer</div>
    <div className="dealerArea"></div>
    </div>
    <div className="communityArea">
    <div className="communityTitle">Community</div>
    </div>
    <div className="cardArea">
    <div className="playerTitle">Player</div>
    <div className="playerArea"></div>
    </div>
    </div>
   
   
    </div>
  )
}

export default Landing
