import { useEffect, useState } from 'react'
import './Blackjack.scss'

import axios from 'axios'
import CardArea from '../CardArea/CardArea'
import ActionArea from '../ActionArea/ActionArea'

const Blackjack = props => {

    // TODO: the logic for blackjack needs to be moved into a blackjack component, since there will be different games.
    // it looks like the GameArea component can just be changed to the blackjack component.
    // use react router to switch between the different games / pages 

    const [userCards, setUserCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])

    const addUserCard = async () => {
        axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
            .then((res) => {
                setUserCards([...userCards, res.data.cards[0]])
            })
    }
    const addDealerCard = async () => {
        axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
            .then((res) => {
                setDealerCards([...dealerCards, res.data.cards[0]])
            })
    }

    useEffect(() => {
        addUserCard()
        addDealerCard()
    }, [])

    return (
        <div className="App">
            <CardArea cards={dealerCards} name="Dealer" />
            <CardArea cards={userCards} name="Player" />
            <ActionArea addUserCard={addUserCard} addDealerCard={addDealerCard} />
        </div>
    )
}

export default Blackjack