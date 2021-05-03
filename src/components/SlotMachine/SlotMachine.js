import React, { useEffect, useState, useContext } from 'react';
import Confetti from "react-confetti";

import { ScoreContext } from "../../ScoreContext";

import './SlotMachine.scss'
import Tumbler from './Tumbler/Tumbler'
import SlotPayouts from './SlotPayouts/SlotPayouts'


const SlotMachine = props => {
    const score = useContext(ScoreContext)

    // Random numbers for tumblers, win state true/false, and the winning value
    const [randomNumbers, setRandomNumbers] = useState([21,20,19,1,9])
    const [winState, setWinState] = useState(null)
    const [winValue, setWinValue] = useState(0)

    // Toggle to disable button while slots are spinning
    const [active, setActive] = useState(false)

    // Current user bet value
    const [bet, setBet] = useState(10)
    
    const generateNumbers = () => {
        // setBet(10)

        // Reset the win state
        setWinState({
            win: false,
            tumblers: 0,
            count: 0
        }) 

        setActive(true)

        score.set(score.get - bet)

        // Reset the win value to 0 and win state to false
        setWinValue(0)

        setRandomNumbers([0,0,0,0,0])

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
        
        return { win: false, tumblers: 0, count: 0 }
    } 
   
    
    const isBetween = (val1, val2, valArray) => {
        let between = [false,false,false,false,false]

        let isBomb = false
        let isCherry = false
        let isStar = false

        if( valArray[0] === 16 || valArray[0] === 17) isBomb = true
        if( valArray[0] === 20 ) isCherry = true
        if( valArray[0] === 21 ) isStar = true
        
        for (let i in valArray) {

            if ( (valArray[i] > val1) && (valArray[i] < val2) ) {
                between[i] = true
            } else {
                between[i] = false
            }

        }



        if ( between[0] && between[1] && !between[2] && !between[3] && !between[4] ) return { win: true, count: 2 }

        if ( between[0] && between[1] && between[2] &&  !between[3] && !between[4]) {

            // If we have 3 bombs in a row, you lose
            if( isBomb ) {
                return { win: false, count: 0}
            }

            // 3 cherries, give a 5
            if( isCherry ) {
                return { win: true, count: 5}
            }

            // 3 stars, give a 6
            if( isStar ) {
                return { win: true, count: 6}
            }

            return { win: true, count: 4 } 
        }

        if ( between[0] && between[1] && between[2] && between[3] && !between[4]) {

            // If we have 4 bombs in a row, you lose
            if( isBomb ) {
                return { win: false, count: 0}
            }

            // 4 cherries, give a 8
            if( isCherry ) {
                return { win: true, count: 5}
            }

            // 4 stars, give a 9
            if( isStar ) {
                return { win: true, count: 6}
            }


            return { win: true, count: 8 }
        }

        if ( between[0] && between[1] && between[2] && between[3] && between[4] ) {

            // If we have 5 bombs in a row, you lose
            if( isBomb ) {
                return { win: false, count: 0 }
            }

            // 5 cherries, give a 8
            if( isCherry ) {
                return { win: true, count:  18 }
            }

            // 5 stars, give a 9
            if( isStar ) {
                return { win: true, count: 20 }
            }

            return { win: true, count: 16 }
        }

        return { win: false, count: 0 }
    }   

    useEffect(()=> {        
       // When the random numbers update, set the win state
        setWinState( checkWin(randomNumbers) ) 
  
    }, [ ...randomNumbers ])

    
    useEffect(()=>{
 
        // If we won, set the win value to the tumbler tier times the number of tumblers plus the bet amount
        const updateScore = ()=> {
            if (winState?.win) {
                setWinValue(()=> {
                    score.set(score.get + (winState.count + bet) )
                    return winState.tumblers * winState.count + bet
                })
            } 
        }

        
       updateScore()

    },[ winState?.win ])

    const randomNumber = () => {
        // Generate a random number between 1 and 21, and increase the chances for smaller numbers 
        return Math.floor(Math.random() * 21) + 1
    }

    return (
        <div className="container slot-machine">
            <SlotPayouts />

            {
                winState?.win ? 
                <Confetti 
                run={winState?.win}
                numberOfPieces={100}
                recycle={false}
                />
                :
                ''
            }
            
            <div className="slot-status">
                <h1>{ winState?.win ? 'Win!' : '' } { active ? 'Round and round she goes...' : 'Pull to play!'}</h1>
                <h2>{ winState?.win ? `You won $${ winValue }!` : '' }</h2>               
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