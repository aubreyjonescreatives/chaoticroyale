import './NavBar.scss'

const NavBar = props => {
    
    
    return (
        <header className="main-navbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="logo mr-lg-5">
                        <h1>Chaotic Royale</h1>
                    </div>
                    
                    <nav className="main-nav">
                        <a href="#" className="current">Blackjack</a>
                        <a href="#">Other game</a>
                    </nav>

                    <div className="d-flex score-balance justify-self-end">
                        <h3 className="high-score pr-lg-5 mr-lg-5">High Score: $150,000</h3>
                        <h3 className="balance">Balance: ${props.chips}</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar