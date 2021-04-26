import React, { useContext, useState } from 'react'

import './Cashout.scss'

import { Spinner } from "react-bootstrap";

import { ScoreContext } from "../../ScoreContext";

const axios = require('axios')

const NavBar = props => {
  const [initials, setInitials] = useState('')
  const [curScreen, setCurScreen] = useState('confirm')
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const score = useContext(ScoreContext)
  const scoreFormat = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  
  const baseURL = 'https://intense-reef-47527.herokuapp.com/chaotic'

  const changeInitials = (e) => {
    setInitials(e.target.value.toUpperCase())
  }

  const submitScore = () => {
    if (initials.length !== 3) {
      return
    }
    setIsLoading(true)
    setCurScreen('request')
    axios.post(baseURL, {
      name: initials,
      score: score.get
    })
    .then(function (response) {
      // handle success
      setIsError(false)
      console.log(response)
    })
    .catch(function (error) {
      // handle error
      setIsError(true)
      console.log(error)
    })
    .then(function () {
      // execute no matter what
      setIsLoading(false)
    })
  }

  const resetGame = () => {
    props.toggleCashout()
    props.getScores()
    score.set(1000)
  }
  
  return (
    <div className="cashoutBackground">
      <div className="Cashout">
        {curScreen === 'confirm' && (
          <React.Fragment>
            <h1>Cash Out?</h1>
            <p>Your total cash balance will be your final score, and your balance will be reset.</p>
            <h2>Current Balance: ${scoreFormat(score.get)}</h2>
            <button className="cashoutSubmit" onClick={() => setCurScreen('initials')}>Continue</button>
            <button className="cashoutCancel" onClick={props.toggleCashout}>Keep Playing</button>
          </React.Fragment>
        )}
        {curScreen === 'initials' && (
          <React.Fragment>
            <h1>Enter Initials</h1>
            <input className="initialsInput" value={initials} onChange={changeInitials} type="text" maxLength="3" /><br />
            <button className="cashoutSubmit" onClick={submitScore}>Cash Out at ${scoreFormat(score.get)}</button>
            <button className="cashoutCancel" onClick={props.toggleCashout}>Cancel</button>
          </React.Fragment>
        )}
        {curScreen === 'request' && (
          <React.Fragment>
            {isLoading && (
              <React.Fragment>
                <h2>Submitting score...</h2>
                <Spinner animation="border" role="status" variant="success">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </React.Fragment>
            )}
            {!isLoading && !isError && (
              <React.Fragment>
                <h3>Score Submitted!</h3>
                <button className="cashoutCancel" onClick={resetGame}>Return to Game</button>
              </React.Fragment>
            )}
            {!isLoading && isError && (
              <React.Fragment>
                <h3>Error occured!</h3>
                <p>Try again</p>
                <button className="cashoutCancel" onClick={props.toggleCashout}>Return to Game</button>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default NavBar