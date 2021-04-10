import './BetArea.scss'
import { useState } from 'react'


const BetArea = (props) => {

  const [curBet, setCurBet] = useState('')

  const betChange = (e) => {
    setCurBet(e.target.value)
  }

  return (
    <div className="BetArea">
      <p>Balance:</p>
      <h1>$20,000</h1>
      <p>Enter Bet:</p>
      <input type="text" className="betInput" value={curBet} onChange={betChange} />
      <button className="betBtn" onClick={() => props.startGame(curBet) }>Place Bet</button>


    </div>
  )
}
export default BetArea