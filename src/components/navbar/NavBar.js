import './NavBar.scss'

const NavBar = props => {
    
    
    return (
        <header className="main-navbar">
            <div className="container">
                <div className="logo">
                    <h1>Chaotic Royale</h1>
                </div>
                
                <nav className="main-nav">
                    <a href="#">Blackjack</a>
                    <a href="#">Other game</a>
                </nav>

                <div className="score-balance">
                    <h3 className="high-score">High Score: $150,000</h3> 
                    <h3 className="balance">Balance: $20,000</h3>
                </div>
            </div>
        </header>
    )
}

export default NavBar