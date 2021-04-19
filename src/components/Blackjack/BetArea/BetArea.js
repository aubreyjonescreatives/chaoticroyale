import './BetArea.scss'
import { useState } from 'react'


const BetArea = (props) => {

  const [curBet, setCurBet] = useState('')

  return (
    <div className="BetArea">
      <p>Balance:</p>
      <h1>$20,000</h1>
      <p>Enter Bet:</p>
      <input className="betInput" type="number" value={props.theBet} min={10} max={20000} step={1} onChange={e => props.setTheBet(e.target.value)}/>
      <button className="betBtn" onClick={props.betSetter}>Place Bet</button>
    </div>
  )
}
export default BetArea