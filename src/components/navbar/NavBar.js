import {useContext} from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router-dom'

import { ScoreContext } from "../../ScoreContext";

const NavBar = props => {
    const score = useContext(ScoreContext)

    const scoreFormat = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    
    return (
        <header className="main-navbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo mr-lg-5">
                        <h1 className="logoText"><NavLink to="/">Chaotic Royale</NavLink></h1>
                    </div>
                    
                    <nav className="main-nav">
                        <NavLink activeClassName="activeLink" to="/blackjack">Blackjack</NavLink>
                        <NavLink activeClassName="activeLink" to="/slots">Slots</NavLink>
                    </nav>

                    <div className="d-flex score-balance justify-self-end">
                        <h3 className="high-score pr-lg-5 mr-lg-5">High Score: $150,000</h3>
                        <h3 className="balance">Balance: ${scoreFormat(score.get)}</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar