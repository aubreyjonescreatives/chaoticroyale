import React, { useState, useEffect } from 'react'
import './App.scss';
import NavBar from './components/navbar/NavBar'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'



function App() {
  const [chips, setChips] = useState(5000)

  const cardValue = (val) => {
    if(val == 'ACE') {
      console.log(11, 1)
    } else if (val == 'JACK' || val == 'QUEEN' || val == 'KING') {
      console.log(10)
    } else {
      let num = parseInt(val, 10)
      console.log(num)
    }
  }

  return (
    <div className="App">
      <NavBar chips={chips} />
      <DealerArea cardValue={cardValue} />
      <PlayerArea cardValue={cardValue} />
    </div>
  );
}

export default App;
