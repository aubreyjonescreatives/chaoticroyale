import React from 'react'

import './HighScoreArea.scss'

const HighScoreArea = props => {
  console.log(props.scores)
    
  return (
    <div className="highScoreBackground">
      <div className="HighScoreArea">
        <h1>Top 10 Highscores</h1>
        <div className="scoreList">
          {props.scores.map((score, index) => {
            if (index < 10)
              return (<div className="scoreItem" key={index}><div className="scoreName">{score.name}</div><div className="scoreScore">{score.score}</div></div>)
          })}
        </div>
        
        <button className="cashoutCancel" onClick={props.toggleScores}>Cancel</button>
      </div>
    </div>
  )
}

export default HighScoreArea