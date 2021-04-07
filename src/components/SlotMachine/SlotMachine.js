import React, { useEffect, useState } from 'react';

import './SlotMachine.scss'
import Tumbler from './Tumbler/Tumbler'


const SlotMachine = props => {
    const [randomNumbers, setRandomNumbers] = useState([1,1,1])
    
    const generateNumbers = () => {
        setRandomNumbers([randomNumber(), randomNumber(), randomNumber()])
    }

    const randomNumber = () => {
        // Generate a random number between 1 and 8
        return Math.floor(Math.random() * 8) + 1
    }

    return (
        <div className="SlotMachine">
            <Tumbler number={ randomNumbers[0] }/>
            <Tumbler number={ randomNumbers[1] }/>
            <Tumbler number={ randomNumbers[2] }/>

            <button onClick={ generateNumbers }>Go</button>
        </div>      

    )
}

export default SlotMachine