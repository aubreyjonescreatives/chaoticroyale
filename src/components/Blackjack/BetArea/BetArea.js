import './BetArea.scss'
import { useContext } from 'react'
import { ScoreContext } from "../../../ScoreContext";


const BetArea = (props) => {
  const score = useContext(ScoreContext)
  //const [curBet, setCurBet] = useState('')

  // const setTheBet = (target) => {

  // }

  return (
    <div className="BetArea">
      <p>Balance:</p>
      <h1>${score.get}</h1>
      <p>Enter Bet:</p>
      <input className="betInput" type="number" value={props.theBet} min={10} max={score.get} step={1} onChange={(e) => props.setTheBet(e.target.value)}/>
      <button className="betBtn" onClick={props.betSetter}>Place Bet</button>
    </div>
  )
}
export default BetArea