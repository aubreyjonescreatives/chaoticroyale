import React, { useEffect, useState, useContext } from 'react';
import Confetti from "react-confetti";

import { ScoreContext } from "../../ScoreContext";

import './SlotMachine.scss'
import Tumbler from './Tumbler/Tumbler'


const SlotMachine = props => {
    const score = useContext(ScoreContext)

    // Random numbers for tumblers, win state true/false, and the winning value
    const [randomNumbers, setRandomNumbers] = useState([21,21,21])
    const [winState, setWinState] = useState(null)
    const [winValue, setWinValue] = useState(0)

    // Toggle to disable button while slots are spinning
    const [active, setActive] = useState(false)

    // Current user bet value
    const [bet, setBet] = useState(10)
    
    const generateNumbers = () => {
        setBet(10)

        setActive(true)
        // Reset the win value to 0 and win state to false
        setWinValue(0)
        setWinState(false)     

        // Generate a random number for each element in the randomNumbers array
        setTimeout(() => {
            setActive(false)
            const tumblerValues = [randomNumber(), randomNumber(), randomNumber()]       
            setRandomNumbers(tumblerValues)
        }, 3000)
    }

    const checkWin = n => {
        // Check for win state -- compare the values of the tumblers
        // if ( n[0] === n[1] && n[0] === n[2] ) return true

        // If n is between number 1 and number 2

        if ( isBetween(0, 8, n) ) return true
        if ( isBetween(7, 13, n) ) return true
        if ( isBetween(12, 16, n) ) return true
        if ( isBetween(15, 18, n) ) return true
        if ( isBetween(17, 20, n) ) return true
        if ( isBetween(19, 21, n) ) return true
        if ( isBetween(20, 22, n) ) return true
        
        return false
    } 
   
    
    const isBetween = (val1, val2, valArray) => {
        let between = [false,false,false]
        
        for (let i in valArray) {

            if ( (valArray[i] > val1) && (valArray[i] < val2) ) {
                between[i] = true
            } else {
                between[i] = false
            }

        }

        return between[0] && between[1] && between[2]
    }   

    useEffect(()=> {

        // When the random numbers update, set the win state
        setWinState( checkWin(randomNumbers) )

        // If winState is true, Set the winValue to the return value of setWinAmount    

        if(winState) setWinValue( setWinAmount(randomNumbers[0]) + bet)

     
    }, [randomNumbers, winState, bet],)


    const setWinAmount = (val) => {

        if (val < 8) return 1

        if (val > 7 && val < 13) return 2

        if (val > 12 && val < 16 ) return 3

        if (val > 15 && val < 18 ) return 4

        if (val > 17 && val < 20) return 5

        if (val > 19 && val < 21) return 6

        if (val === 21) return 7
    }

    const randomNumber = () => {
        // Generate a random number between 1 and 21, and increase the chances for smaller numbers 
        return Math.floor(Math.random() * 21) + 1
    }

    return (
        <div className="container slot-machine">
            <Confetti 
                run={winState}
                numberOfPieces={100}
                recycle={false}
            />
            <div className="slot-status">
                <h1>{ winState ? 'Win!' : 'Nope.' }</h1>
                <h2>{ winState ? `You won $${ winValue }!` : 'You win nothing.' }</h2>               
            </div>

            <div className="row mb-5 slot-tumblers">
                { randomNumbers[0] } { randomNumbers[1] } { randomNumbers[2] }
                <Tumbler number={ randomNumbers[0] } active={ active } />
                <Tumbler number={ randomNumbers[1] } active={ active } />
                <Tumbler number={ randomNumbers[2] } active={ active } />
            </div>   

            <div className="row mb-5 bet-control">

                <button className="subtract" disabled={bet < 20 ? true : false}
                onClick={() => {
                    setBet(bet - 10)
                }}>-</button>

                <p className="slot-bet">${bet}</p> 

                <button 
                    className="add" 
                    disabled={bet > score.get - 10 ? true : false}
                    onClick={() => {
                        setBet(bet + 10)
                    }}
                >+</button>
            </div>         

            <div className="row slot-actions">
                <button className="slot-btn" onClick={ generateNumbers } disabled={active || score.get < 10 ? true : false} >Pull</button>
            </div>            
        </div>      

    )
}

export default SlotMachine