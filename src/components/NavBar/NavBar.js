import React, { useContext, useState, useEffect } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

import { ScoreContext } from "../../ScoreContext"

import Cashout from '../Cashout/Cashout'
import HighScoreArea from '../HighScoreArea/HighScoreArea'

const axios = require('axios');

const NavBar = props => {
    const [showCashout, setShowCashout] = useState(false)
    const [showHighScores, setShowHighScores] = useState(false)
    const [scoreList, setScoreList] = useState([])
    const [highscore, setHighscore] = useState(null)
    const score = useContext(ScoreContext)

    const scoreFormat = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const toggleCashout = () => {
        setShowCashout(!showCashout)
    }

    const toggleHighScoreArea = () => {
        console.log('show high scores')
        setShowHighScores(!showHighScores)
    }

    const baseURL = 'https://intense-reef-47527.herokuapp.com/chaotic'

    useEffect(() => {
        getScores()
    }, [])
    useEffect(() => {
        console.log(scoreList)
    }, [scoreList])

    const getScores = () => {
        axios.get(baseURL)
          .then(function (response) {
            // handle success
            console.log(response)
            let sortedArray = response.data.sort((a,b) => {
                return b.score - a.score
            })
            setScoreList(sortedArray)
            if (sortedArray.length > 0) {
                setHighscore(sortedArray[0].score)
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error)
            setHighscore('Error')
          })
    }
    
    return (
        <React.Fragment>
            <header className="main-navbar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="logo mr-lg-5">
                            <h1 className="logoText"><NavLink to="/">Chaotic Royale</NavLink></h1>
                        </div>
                        
                        <nav className="main-nav">
                            <NavLink activeClassName="activeLink" to="/blackjack">Blackjack</NavLink>
                            <NavLink activeClassName="activeLink" to="/slots">Slots</NavLink>
                            <NavLink activeClassName="activeLink" to="/texasholdem">Texas Holdem</NavLink>
                        </nav>

                        <div className="d-flex score-balance justify-self-end">
                            <h3 className="high-score pr-lg-5 mr-lg-5" onClick={toggleHighScoreArea}>High Score: {highscore !== null ? '$' + scoreFormat(highscore) : 'Loading...'}</h3>
                            <h3 className="balance">Balance: ${scoreFormat(score.get)}</h3>
                            <button className="cashoutBtn" onClick={toggleCashout}>Cash Out</button>
                        </div>
                    </div>
                </div>
            </header>
            {showCashout && (
                <Cashout toggleCashout={toggleCashout} getScores={getScores} />
            )}
            {showHighScores && (
                <HighScoreArea scores={scoreList} toggleScores={toggleHighScoreArea} />
            )}
        </React.Fragment>
    )
}

export default NavBar