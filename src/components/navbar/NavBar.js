import './NavBar.scss'
import { NavLink } from 'react-router-dom'

const NavBar = props => {
    
    
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
                        <NavLink activeClassName="activeLink" to="/texasholdem">Texas Holdem</NavLink>
                    </nav>

                    <div className="d-flex score-balance justify-self-end">
                        <h3 className="high-score pr-lg-5 mr-lg-5">High Score: $150,000</h3>
                        <h3 className="balance">Balance: $20,000</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar