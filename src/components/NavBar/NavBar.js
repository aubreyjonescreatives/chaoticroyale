import React, { useContext, useState } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

import { ScoreContext } from "../../ScoreContext";

import Cashout from '../Cashout/Cashout'

const NavBar = props => {
    const [showCashout, setShowCashout] = useState(false)
    const score = useContext(ScoreContext)

    const scoreFormat = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const toggleCashout = () => {
        setShowCashout(!showCashout)
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
                            <h3 className="high-score pr-lg-5 mr-lg-5">High Score: $150,000</h3>
                            <h3 className="balance">Balance: ${scoreFormat(score.get)}</h3>
                            <button className="cashoutBtn" onClick={toggleCashout}>Cash Out</button>
                        </div>
                    </div>
                </div>
            </header>
            {showCashout && (
                <Cashout toggleCashout={toggleCashout} />
            )}
        </React.Fragment>
    )
}

export default NavBar