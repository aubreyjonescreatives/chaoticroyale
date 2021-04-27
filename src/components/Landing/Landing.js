import React from 'react'
import './Landing.scss'
import { NavLink } from 'react-router-dom'
import BJImage from './images/Card8.svg'
import SMImage from './images/slot_1.png'
import THImage from './images/Card3.svg'

const Landing = () => {
  
  return (
    <div>
    <div className="Landing ">
      Landing page. Click on a game in the nav bar or down below to load that game. 
    </div>
    <div className="GameSelect">Trending Games</div>
    <div className="game-group">
  
      <div className="game-container">
        <NavLink to="/blackjack" className="navLink">
      <img variant="top" src={BJImage} className="game-image" />
        <div className="gameText">
          BlackJack
        </div>
      </NavLink>
    </div>

    
    <div className="game-container">
        <NavLink to="/slots" className="navLink">
      <img variant="top" src={SMImage} className="game-image-2"/>
        <div className="gameText">
          Slots
        </div>
      </NavLink>
    </div>

      
    <div className="game-container">
        <NavLink to="/texasholdem" className="navLink">
      <img variant="top" src={THImage} className="game-image"/>
      <div className="gameText">
          Texas Holdem
        </div>
      </NavLink>
    </div>
    </div>

    <footer className="footerInfo">Copyright © 2021 Chaotic Royale</footer>
   
    </div>
  )
}

export default Landing
