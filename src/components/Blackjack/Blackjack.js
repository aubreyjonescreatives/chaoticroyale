import { useEffect, useState } from 'react'
import './Blackjack.scss'

import axios from 'axios'
import CardArea from './CardArea/CardArea'
import ActionArea from './ActionArea/ActionArea'

const Blackjack = props => {

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

    const hit = () => {
        console.log('hit')
    }

    const stand = () => {
        console.log('stand')
    }

    const double = () => {
        console.log('double')
    }

    const split = () => {
        // i'm not completely sure if splitting is something we wanna include,
        // but i'm going to write the function for it anyways
        console.log('split')
    }

    useEffect(() => {
        addUserCard()
        addDealerCard()
    }, [])

    return (
        <div className="App">
            <CardArea cards={dealerCards} name="Dealer" />
            <CardArea cards={userCards} name="Player" />
            <ActionArea 
                addUserCard={addUserCard} 
                addDealerCard={addDealerCard} 
                hit={hit}
                stand={stand}
                double={double}
                split={split}
            />
        </div>
    )
}

export default Blackjack