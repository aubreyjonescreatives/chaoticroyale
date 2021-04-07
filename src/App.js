import React from 'react'
import './App.scss'
import Blackjack from './components/Blackjack/Blackjack'
import NavBar from './components/NavBar/NavBar'
import SlotMachine from './components/SlotMachine/SlotMachine'

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Blackjack />
      <SlotMachine />
    </div>
  );
}

export default App;
