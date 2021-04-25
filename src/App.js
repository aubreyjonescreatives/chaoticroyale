import React, {useState} from 'react'
import './App.scss'

import { ScoreContext } from "./ScoreContext";

import {BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
import Blackjack from './components/Blackjack/Blackjack'
import SlotMachine from './components/SlotMachine/SlotMachine'
import TexasHoldem from './components/TexasHoldem/TexasHoldem'
import HorseRace from './components/HorseRace/HorseRace'

function App() {
  const [score, setScore] = useState(1000)

  return (
    <div className="App">
      <ScoreContext.Provider value={{get: score, set: setScore}}>
        <Router>
          <NavBar />
          <Route path="/" exact component={Landing} />
          <Route path="/blackjack" exact component={Blackjack} />
          <Route path="/slots" exact component={SlotMachine} />
          <Route path="/horse" exact component={HorseRace} />
        </Router>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
