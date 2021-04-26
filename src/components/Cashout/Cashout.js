import React, { useContext, useState } from 'react'
import './Cashout.scss'

import { ScoreContext } from "../../ScoreContext";

const NavBar = props => {
    const [showCashout, setShowCashout] = useState(false)
    const score = useContext(ScoreContext)
    const scoreFormat = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    
    return (
      <div className="cashoutBackground">
        <div className="Cashout">
          <h1>Cash Out?</h1>
          <p>Your total cash balance will be your final score, and your balance will be reset.</p>
          <h2>Current Balance: ${scoreFormat(score.get)}</h2>
          <button className="cashoutConfirm">Cash Out</button>
          <button className="cashoutContinue" onClick={props.toggleCashout}>Keep Playing</button>
        </div>
      </div>
    )
}

export default NavBar