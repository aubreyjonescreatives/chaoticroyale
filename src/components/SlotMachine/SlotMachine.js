import React, { useEffect, useState } from 'react';
import Confetti from "react-confetti";

import './SlotMachine.scss'
import Tumbler from './Tumbler/Tumbler'


const SlotMachine = props => {
    // Random numbers for tumblers, win state true/false, and the winning value
    const [randomNumbers, setRandomNumbers] = useState([21,21,21,21,21])
    const [winState, setWinState] = useState(null)
    const [winValue, setWinValue] = useState(0)

    // Toggle to disable button while slots are spinning
    const [active, setActive] = useState(false)

    // Current user bet value
    const [bet, setBet] = useState(10)
    
    const generateNumbers = () => {
        setActive(true)
        // Reset the win value to 0 and win state to false
        setWinValue(0)
        // setWinState(win: false)     

        // Generate a random number for each element in the randomNumbers array
        setTimeout(() => {
            setActive(false)
            const tumblerValues = [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()]       
            setRandomNumbers(tumblerValues)
        }, 3000)
    }

    const checkWin = n => {
        // Check for win state -- compare the values of the tumblers 
        
        const ranges = [ 
            [0,8],
            [7,13],
            [12,16],
            [15,18],
            [17,20],
            [19,21],
            [20,22]
        ]

        for (let i = 0; i < ranges.length; i++) {
            const one = ranges[i][0]
            const two = ranges[i][1]

            const obj = isBetween(one, two, n)

            // If we have a win, break the loop and return the object
            if (obj.win) {
                return {
                    win: true,
                    tumblers: i + 1, // Current value of the loop iterator + 1
                    count: obj.count
                }
            }
        }

        // If n[x] is between number 1 and number 2
        // if ( isBetween(0, 8, n) ) return { win: true, tumblers: 1 count: }
        // if ( isBetween(7, 13, n) ) return { win: true, tumblers: 2 }
        // if ( isBetween(12, 16, n) ) return { win: true, tumblers: 3 }
        // if ( isBetween(15, 18, n) ) return { win: true, tumblers: 4 }
        // if ( isBetween(17, 20, n) ) return { win: true, tumblers: 5 }
        // if ( isBetween(19, 21, n) ) return { win: true, tumblers: 6 }
        // if ( isBetween(20, 22, n) ) return { win: true, tumblers: 7 }
        
        return { win: false, tumblers: 0, count: 0 }
    } 
   
    
    const isBetween = (val1, val2, valArray) => {
        let between = [false,false,false,false,false]
        
        for (let i in valArray) {

            if ( (valArray[i] > val1) && (valArray[i] < val2) ) {
                between[i] = true
            } else {
                between[i] = false
            }

        }

        if ( between[0] && between[1] ) return { win: true, count:2 }

        if ( between[0] && between[1] && between[3] ) return { win: true, count: 3 }

        if ( between[0] && between[1] && between[2] && between[3]) return { win: true, count: 4 }

        if ( between[0] && between[1] && between[2] && between[3] && between[4] ) return { win: true, count: 5 }

        return { win: false, count: 0 }
    }   

    useEffect(()=> {

        // When the random numbers update, set the win state
        setWinState( checkWin(randomNumbers)?.win )
    
    }, [ randomNumbers ])

    
    useEffect(()=>{
        console.log(winState)

        if (winState?.win) setWinValue(()=> {
            return winState.tumblers * winState.count + bet
        })

    },[ winState, bet ])

    // const setWinAmount = (val) => {

    //     if (val < 8) return 1

    //     if (val > 7 && val < 13) return 2

    //     if (val > 12 && val < 16 ) return 3

    //     if (val > 15 && val < 18 ) return 4

    //     if (val > 17 && val < 20) return 5

    //     if (val > 19 && val < 21) return 6

    //     if (val === 21) return 7
    // }

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
                {winValue}
                <h1>{ winState ? 'Win!' : 'Nope.' }</h1>
                <h2>{ winState ? `You won $${ winValue }!` : 'You win nothing.' }</h2>               
            </div>

            <div className="row mb-5 slot-tumblers">
                <Tumbler number={ randomNumbers[0] } active={ active } />
                <Tumbler number={ randomNumbers[1] } active={ active } />
                <Tumbler number={ randomNumbers[2] } active={ active } />
                <Tumbler number={ randomNumbers[3] } active={ active } />
                <Tumbler number={ randomNumbers[4] } active={ active } />
            </div>   

            <div className="row mb-5 bet-control">

                <button className="subtract" disabled={bet < 20 ? true : false}
                onClick={() => {
                    setBet(bet - 10)
                }}>-</button>

                <p className="slot-bet">${bet}</p> 

                <button className="add" onClick={() => {
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