import React, { useEffect, useState } from 'react'; 
import { Card } from 'react-bootstrap'
import './playerarea.scss'
import axios from 'axios'








const PlayerArea = () => {


const [userCards, setUserCards] = useState({
    cardList: []
})

const fetchCards = async () => {
axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
.then(function (response) {
    setUserCards({
        cardList: response.data.cards
    })
})
}

useEffect(() => {
    fetchCards()
})



return (

<div id="player-area-container">

<div id="Player1">Player1</div>

<div id="PlayerCard">

{userCards.cardList.map((card) => {

return (
    <Card>
    <Card.Img 
    variant="top"
    alt='card'
    src={card.image}>
    </Card.Img>
    </Card>
)



})
}
</div>

</div>

)

}






export default PlayerArea; 