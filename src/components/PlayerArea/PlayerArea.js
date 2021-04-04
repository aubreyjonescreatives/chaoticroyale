import React, { useEffect, useState } from 'react'; 
import { Card } from 'react-bootstrap'
import './playerarea.scss'
import axios from 'axios'








const PlayerArea = () => {


const [userCards, setUserCards] = useState({
    cardList: []
})

const fetchCards = async () => {
axios.get(`https://deckofcardsapi.com/api/deck/new/`)
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

<div className="player-area-container">


{userCards.cardList.map((card) => {

return (
    <Card className="userCard">
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

)

}






export default PlayerArea; 