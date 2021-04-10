import React from 'react'
import './Landing.scss'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import BJImage from './images/blackjack.jpg'
import SMImage from './images/slots.jpg'


const Landing = () => {
  
  return (
    <div>
    <div className="Landing ">
      Landing page. Click on a game in the nav bar or down below to load that game. 
    </div>
    <div className="WelcomeMessage">Welcome, Player</div>
    <div className="GameSelect">Please Select a Game</div>
    <div className="card-group">
  
      <Card className="card-container">
        <NavLink to="/blackjack" className="navLink">
      <Card.Img variant="top" src={BJImage} className="card-image" />
      <Card.Body>
        <Card.Text className="gameText">
          BlackJack
        </Card.Text>
      </Card.Body>
      </NavLink>
    </Card>

    
    <Card className="card-container">
        <NavLink to="/slots" className="navLink">
      <Card.Img variant="top" src={SMImage} className="card-image"/>
      <Card.Body>
        <Card.Text className="gameText">
          Slots
        </Card.Text>
      </Card.Body>
      </NavLink>
    </Card>

      
    <Card className="card-container">
        <NavLink to="/texasholdem" className="navLink">
      <Card.Img variant="top" src={BJImage} className="card-image"/>
      <Card.Body>
        <Card.Text className="gameText">
          Texas Holdem
        </Card.Text>
      </Card.Body>
      </NavLink>
    </Card>
    </div>
   
    </div>
  )
}

export default Landing
