import React, { useState, useContext } from 'react'
import './texasholdem.scss'
import Cards from './cards'
import { ScoreContext } from "../../ScoreContext";
//import cardBacks from './images/cardBacks'
import _ from 'lodash'
//import ThPot from './ThPot'
import THActs from './THActs'
//import PokerChips from './images/pokerchips.png'
import { Modal, Button} from 'react-bootstrap'



const cardData = Cards

const theCards = _.shuffle(cardData)




const holecards1 = theCards[0].image
const holecards2 = theCards[1].image
const holecards3 = theCards[2].image
const holecards4 = theCards[3].image


const communitycards1 = theCards[4].image
const communitycards2 = theCards[5].image
const communitycards3 = theCards[6].image
const communitycards4 = theCards[7].image
const communitycards5 = theCards[8].image





const TexasHoldem = (props) => {

  const score = useContext(ScoreContext)
  console.log(score)
 
const [holeCards, setholeCards] = useState([])
const [holeCards2, setholeCards2] = useState([])
const [communityCards, setcommunityCards] = useState([])
const [addcommunityCard, setaddcommunityCard] = useState([])
const [check, setCheck] = useState(false)
const [fold, setFold] = useState(false)



const closeCheck = () => setCheck(false) 
const showCheck = () => setCheck(true)



const closeFold = () => {
  setFold(false)
  setCount(0)

}

const closeFold2 = () => {
  setFold(false)
  

} 

const showFold = () => setFold(true)



const holeAdd = (holeCard, holeCard2) => {

  const nhCards = [holecards1, holecards2]
  const newholeCards = nhCards.concat(); 
  console.log(newholeCards)
 setholeCards([...newholeCards, holeCard])

 console.log(holeCard)
 const nhCards2 = [holecards3, holecards4]
 const newholeCards2 = nhCards2.concat(); 
 console.log(newholeCards2)
 setholeCards2([...newholeCards2, holeCard2])
 console.log(holeCard2)



}


const communityAdd = (communityCard) => {

  const communityCards = [communitycards1, communitycards2, communitycards3, communitycards4, communitycards5]
  const newcommunityCards = communityCards.concat(); 
  console.log(newcommunityCards)
 setcommunityCards([...newcommunityCards, communityCard])

 console.log(communityCard)




}

const addCommunityCard = (communityCard) => {

  const communityCards = [communitycards1, communitycards2, communitycards3, communitycards4, communitycards5]
  const addcommunityCards = communityCards.concat(); 
  console.log(addcommunityCards)
 setaddcommunityCard([...addcommunityCards, communityCard])

  
  console.log('community card added')
}

// add scores to bet

const [bet, setBet] = useState(10)




// count bet

const [count, setCount] = useState(0)

//score.set(score.get + bet)

const handleIncrement = () => {
  setCount(prevCount => prevCount + 10)
  setBet(10)
  

}


const handleDecrement = () => {
  setCount(prevCount => prevCount - 5)
  setBet(5)
  

}



  return (
    
    <div>



   <div className="actions">


    <div className="dealerArea">
    <div className="dealerTitle">Dealer</div>
    <button className="dealerButton" onClick={holeAdd} >Hole Cards</button>
    <button className="dealerButton" onClick={communityAdd}>Community Cards</button>
    </div>

    <div className="actChoices">
    <div className="betTitle">Bet</div>
    <div className="actingArea">
    <h1 className="actingTitle2"> $ {count}</h1>
    <button className="betButton" onClick={handleIncrement}>Bet +</button>
    </div>
    </div>

    <div className="act2">

    <div className="acTitle">Additional Actions</div>
    <button className="actingButton2" onClick={showCheck}>Check</button>
    <Modal {...props} show={check} onHide={closeCheck}
    size="lg"
   aria-labelledby="contained-modal-title-vcenter"
   centered 
   className="modal">
    <Modal.Header className="modal-header">
      Are you sure you would like to check? 
    </Modal.Header>
    <Modal.Body className="modal-body">
    You will only bet $0, and this is only allowed after the blind bet.
   </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={closeCheck} className="modal-button">Close</Button>
      <Button variant="secondary" onClick={closeCheck} className="modal-button">Submit Check</Button>
   
    </Modal.Footer>
    </Modal>
   
   
   
   
    <button className="actingButton2" onClick={showFold}>Fold</button>

<Modal {...props} show={fold} onHide={closeFold2}
 size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered 
className="modal">
<Modal.Header className="modal-header">
  Are you sure you want to fold? 
</Modal.Header>
<Modal.Body className="modal-body">
You will discard your current hand and forfeit the current bet!
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={closeFold2} className="modal-button">Close</Button>
  <Button variant="secondary" onClick={closeFold} className="modal-button">Fold</Button>

</Modal.Footer>
</Modal>
    </div>
    </div>
   



   
    <div className="game-container-th">
    <div className="computerArea">
    <div className="computerTitle">Computer</div>
    <div id="computerCards" className="cardArea">
    {holeCards.map(holeCard => (
      <div key={holeCards} className="holeDeals"><img src={`./images/${holeCard}`} className="cardImage" alt="hole-card"/></div>
    ))}
    </div>
    </div>
    <div className="communityArea">
    <div className="communityTitle">Community</div>
    <div className="cardArea">
    {communityCards.map(communityCard => (
     <div key={communityCards} className="holeDeals" onClick={addCommunityCard}><img src={`./images/${communityCard}`} className="cardImage" alt="community-card"/></div>
    ))}
    </div>
    </div>
    <div className="playerArea">
    <div className="playerTitle">Player</div>
    <div className="cardArea">
    {holeCards2.map(holeCard2 => (
      <li key={holeCards2} className="holeDeals"><img src={`./images/${holeCard2}`} className="cardImage" alt="hole-card"/></li>
    ))}
    {addcommunityCard.map(addCC => (
      <li key={addcommunityCard} className="holeDeals"><img src={`./images/${addCC}`} className="cardImage" alt="hole-card"/></li>
    ))}
    </div>
    </div>
    </div>
  

</div>
  )
}



export default TexasHoldem
