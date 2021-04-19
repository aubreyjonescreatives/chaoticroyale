import React from 'react'
import './App.scss'

import {BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Landing from './components/Landing/Landing'
import Blackjack from './components/Blackjack/Blackjack'
import SlotMachine from './components/SlotMachine/SlotMachine'
import TexasHoldem from './components/TexasHoldem/TexasHoldem'

function App() {
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component={Landing} />
        <Route path="/blackjack" exact component={Blackjack} />
        <Route path="/slots" exact component={SlotMachine} />
        <Route path="/texasholdem" exact component={TexasHoldem} />

      </Router>
    </div>
  );
}

export default App;
