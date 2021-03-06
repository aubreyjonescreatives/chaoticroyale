import React from 'react'
import './Landing.scss'
import { NavLink } from 'react-router-dom'
import BJImage from './images/Card8.svg'
import SMImage from './images/slot_1.png'
import THImage from './images/Card3.svg'
import HImage from './images/1.png'


const Landing = () => {
  
  return (
    <div>
    <div className="Landing ">
      Landing page. Click on a game in the nav bar or down below to load that game. 
    </div>
    <div className="GameSelect">Games</div>
    <div className="game-group">
  
      <div className="game-container">
        <NavLink to="/blackjack" className="navLink">
      <img variant="top" src={BJImage} alt="poker" className="game-image" />
        <div className="gameText">
          BlackJack
        </div>
      </NavLink>
    </div>

    <div className="game-container">
        <NavLink to="/slots" className="navLink">
      <img variant="top" src={SMImage} alt="slots" className="game-image-2"/>
        <div className="gameText">
          Slots
        </div>
      </NavLink>
    </div>

    <div className="game-container">
        <NavLink to="/texasholdem" className="navLink">
      <img variant="top" src={THImage} alt="poker" className="game-image"/>
      <div className="gameText">
          Texas Holdem
        </div>
      </NavLink>
    </div>

    <div className="game-container">
        <NavLink to="/horse" className="navLink">
      <img variant="top" src={HImage} alt="poker" className="game-image-2"/>
      <div className="gameText">
          Horse Race
        </div>
      </NavLink>
    </div>
    </div>
    </div>
  )
}

export default Landing
