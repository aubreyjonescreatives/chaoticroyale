import React, {useState} from 'react'
import './App.scss'

import { ScoreContext } from "./ScoreContext";

import {BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Landing from './components/Landing/Landing'
import Blackjack from './components/Blackjack/Blackjack'
import SlotMachine from './components/SlotMachine/SlotMachine'

function App() {
  const [score, setScore] = useState(99)

  return (
    <div className="App">
      <ScoreContext.Provider value={{get: score, set: setScore}}>
        <Router>
          <NavBar />
          <Route path="/" exact component={Landing} />
          <Route path="/blackjack" exact component={Blackjack} />
          <Route path="/slots" exact component={SlotMachine} />
        </Router>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
