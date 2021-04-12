import React, { useEffect, useState } from 'react';

import './SlotMachine.scss'
import Tumbler from './Tumbler/Tumbler'


const SlotMachine = props => {
    // Random numbers for tumblers, win state true/false, and the winning value
    const [randomNumbers, setRandomNumbers] = useState([1,1,1])
    const [winState, setWinState] = useState(false)
    const [winValue, setWinValue] = useState(0)

    // Toggle to disable button while slots are spinning
    const [active, setActive] = useState(false)

    // Current user bet value
    const [bet, setBet] = useState(10)
    
    const generateNumbers = () => {
        setActive(true)
        // Reset the win value to 0
        setWinValue(0)

        // Generate a random number for each element in the randomNumbers array
        setTimeout(() => {
            setActive(false)
            const tumblerValues = [randomNumber(), randomNumber(), randomNumber()]       
            setRandomNumbers(tumblerValues)
        }, 3000)
    }

    const checkWin = n => {
        // Check for win state -- compare the values of the tumblers
        if ( n[0] === n[1] && n[0] === n[2] ) return true
        
        return false
    } 
   

    useEffect(()=> {

        // When the random numbers update, set the win state
        setWinState( checkWin(randomNumbers) )

        // If winState is true, Set the winValue to whatever the first number is (they should all be equal)
        if(winState) setWinValue(randomNumbers[0])

    }, [winState, randomNumbers])


    const randomNumber = () => {
        // Generate a random number between 1 and 8
        return Math.floor(Math.random() * 7) + 1
    }

    return (
        <div className="container slot-machine">
            <div className="slot-status">
                <h1>{ winState ? 'Win!' : 'Nope.' }</h1>
                <h2>{ winState ? `You won ${winValue}!` : 'You win nothing.' }</h2>
            </div>

            <div className="row slot-tumblers">
                <Tumbler number={ randomNumbers[0] } active={active} />
                <Tumbler number={ randomNumbers[1] } active={active} />
                <Tumbler number={ randomNumbers[2] } active={active} />
            </div>   

            <div className="row bet-control">
                <button disabled={bet < 20 ? true : false}
                onClick={() => {
                    setBet(bet - 10)
                }}>-</button>
                <p>{bet}</p> 
                <button onClick={() => {
                    setBet(bet + 10)
                }}>+</button>
            </div>         

            <div className="row slot-actions">
                <button className="slot-btn" onClick={ generateNumbers } disabled={active ? true : false} >Pull</button>
            </div>            
        </div>      

    )
}

export default SlotMachine