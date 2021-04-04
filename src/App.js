import './App.css';
import NavBar from './components/navbar/NavBar'
import DealerArea from './components/DealerArea/DealerArea'
import PlayerArea from './components/PlayerArea/PlayerArea'



function App() {
  return (
    <div className="App">
      <NavBar />
      <DealerArea />
      <PlayerArea />
    </div>
  );
}

export default App;
