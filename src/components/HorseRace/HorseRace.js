import React, {useState, useContext} from 'react'
import './HorseRace.scss'

import { ScoreContext } from "../../ScoreContext";
import Track from "./Track/Track";

function HorseRace() {
const score = useContext(ScoreContext)

const horseNames = ['Gold Reliable', 'Tangerine', 'Snowball II', 'Smitty Werben Jagerman Jensen']

const [pos1, setPos1] = useState(0)
const [pos2, setPos2] = useState(0)
const [pos3, setPos3] = useState(0)
const [pos4, setPos4] = useState(0)

const [bet1, setBet1] = useState(0)
const [bet2, setBet2] = useState(0)
const [bet3, setBet3] = useState(0)
const [bet4, setBet4] = useState(0)

const [active, setActive] = useState(false)
const [running, setRunning] = useState(false)

const raceFun = () => {

    let resultsArray = [10, 60, 60, 60, 88, 88, 88, 88, 88, 92, 92, 92, 92]
    let rng = Math.floor(Math.random()*4+1)
    setPos1(resultsArray[Math.floor(Math.random() * resultsArray.length)])
    setPos2(resultsArray[Math.floor(Math.random() * resultsArray.length)])
    setPos3(resultsArray[Math.floor(Math.random() * resultsArray.length)])
    setPos4(resultsArray[Math.floor(Math.random() * resultsArray.length)])

    if(rng === 1) {
        setPos1(95)
    } else if (rng === 2) {
        setPos2(95)
    } else if (rng === 3) {
        setPos3(95)
    } else {
        setPos4(95)
    } 
    setTimeout(() => {
        setPos1(0)
        setPos2(0)
        setPos3(0)
        setPos4(0)
        setBet1(0)
        setBet2(0)
        setBet3(0)
        setBet4(0)
        setActive(false)
        setRunning(false)
        let betArray = [bet1, bet2, bet3, bet4]
        score.set(score.get - bet1 - bet2 -bet3 -bet4)
        if(betArray[rng-1] > 0) {
            let winnings = betArray[rng-1] * 4
            alert(horseNames[rng-1] + ' is the winner!' + '\n' + 'You won $' + winnings)
            score.set(score.get + winnings)
        } else {
            alert(horseNames[rng-1] + ' is the winner!' + '\n' + 'Better luck next time!')
        }
    }, 6000)
}

  return (
    <div className="horse-main">
      <h1 className="horse-title">Horse Race</h1>
      <p className="name-text">{horseNames[0]}</p>
      <Track track={1} running={running} place={pos1} />
      <p className="name-text">{horseNames[1]}</p>
      <Track track={2} running={running} place={pos2} />
      <p className="name-text">{horseNames[2]}</p>
      <Track track={3} running={running} place={pos3} />
      <p className="name-text">{horseNames[3]}</p>
      <Track track={4} running={running} place={pos4} />
      <div className="bet-panel">
          <h2 style={{fontSize: 26}}>Betting Area</h2>
          <div className="bet-buttons">
              <div className="horse-bet">
                  <div style={{backgroundColor: '#c7d182'}}>
                  <button
                    onClick={() => {
                        setBet1(bet1+10)
                    }}
                    disabled={(bet1 + bet2 + bet3 + bet4 + 10) > score.get ? true : false}
                  >+</button>
                  <h3>${bet1}</h3>
                  <button
                    onClick={() => {
                        setBet1(bet1-10)
                    }}
                    disabled={bet1 < 10 ? true : false}
                  >-</button>
                  </div>
                  <p>{horseNames[0]}</p>
              </div>
              <div className="horse-bet">
                <div style={{backgroundColor: '#ba9568'}}>
                  <button
                    onClick={() => {
                        setBet2(bet2+10)
                    }}
                    disabled={(bet1 + bet2 + bet3 + bet4 + 10) > score.get ? true : false}
                  >+</button>
                  <h3>${bet2}</h3>
                  <button
                    onClick={() => {
                        setBet2(bet2-10)
                    }}
                    disabled={bet2 < 10 ? true : false}
                  >-</button>
                </div>
                  <p>{horseNames[1]}</p>
              </div>
              <div className="horse-bet">
                <div style={{backgroundColor: '#a8878e'}}>
                  <button
                    onClick={() => {
                        setBet3(bet3+10)
                    }}
                    disabled={(bet1 + bet2 + bet3 + bet4 + 10) > score.get ? true : false}
                  >+</button>
                  <h3>${bet3}</h3>
                  <button
                    onClick={() => {
                        setBet3(bet3-10)
                    }}
                    disabled={bet3 < 10 ? true : false}
                  >-</button>
                </div>
                  <p>{horseNames[2]}</p>
              </div>
              <div className="horse-bet">
                <div style={{backgroundColor: '#778da8'}}>
                  <button
                    onClick={() => {
                        setBet4(bet4+10)
                    }}
                    disabled={(bet1 + bet2 + bet3 + bet4 + 10) > score.get ? true : false}
                  >+</button>
                  <h3>${bet4}</h3>
                  <button
                    onClick={() => {
                        setBet4(bet4-10)
                    }}
                    disabled={bet4 < 10 ? true : false}
                  >-</button>
                  </div>
                  <p>Smitty W.</p>
              </div>
          </div>
          <button
            className="go-button"
            onClick={() => {
                setActive(true)
                setRunning(true)
                raceFun()
            }}
            disabled={active || (bet1+bet2+bet3+bet4 < 10) ? true : false} 
            style={(bet1+bet2+bet3+bet4 < 10) ? {backgroundColor: '#aaa'} : null}
          >
              GO!
          </button>
      </div>
    </div>
  );
}

export default HorseRace;