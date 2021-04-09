import { useEffect, useState } from 'react'
import './Blackjack.scss'

import axios from 'axios'
import CardArea from './CardArea/CardArea'
import ActionArea from './ActionArea/ActionArea'
import BetArea from './BetArea/BetArea'

const Blackjack = props => {
    // gameStatus - two possible values: 'playing' and 'betting'
    const [gameStatus, setGameStatus] = useState('betting')

    // cards
    const [userCards, setUserCards] = useState([])
    const [dealerCards, setDealerCards] = useState([])

    // user bet amount
    const [userBet, setUserBet] = useState(null)


    const addUserCard = async () => {
        console.log('addUserCard')
        axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
            .then((res) => {
                console.log([...userCards])
                setUserCards([...userCards, res.data.cards[0]])
            })
    }
    const addDealerCard = async () => {
        console.log('addDealerCard')
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

    const startGame = (bet) => {
        console.log('starting game')
        // set status to playing, set bet
        setGameStatus('playing')
        setUserBet(bet)

        // make sure cards arrays are empty
        // this isn't doing anything for some reason???
        setUserCards([])
        setDealerCards([])

        // add two user cards and one dealer card.
        // maybe there's a better way to do this?
        // for some reason only one card for usercards gets displayed.
        setTimeout(() => { addUserCard() }, 800)
        setTimeout(() => { addDealerCard() }, 1600)
        setTimeout(() => { addUserCard() }, 2400)
    }

    const endGame = () => {
        // delete these two lines once it's figured out why they aren't doing anything in startGame()
        setUserCards([])
        setDealerCards([])

        setGameStatus('betting')
    }

    return (
        <div className="Blackjack">
            <CardArea cards={dealerCards} name="Dealer" />
            <CardArea cards={userCards} name="Player" />

            { gameStatus === 'playing' && (
                <ActionArea 
                    addUserCard={addUserCard} 
                    addDealerCard={addDealerCard} 
                    hit={hit}
                    stand={stand}
                    double={double}
                    split={split}
                    endGame={endGame}
                />
            )}
            { gameStatus === 'betting' && (
                <BetArea 
                    startGame={startGame}
                />
            )}

            
        </div>
    )
}

export default Blackjack