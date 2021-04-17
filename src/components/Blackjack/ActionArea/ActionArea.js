import "./ActionArea.scss";

const ActionArea = (props) => {
  return (
    <div className="ActionArea">
      {props.gameState === "pregame" ? (
        <button
          onClick={() => props.changeGamePhase("gameStart")}
          className="actionBtn"
        >
          Begin Game
        </button>
      ) : null}
      {props.gameState === "shufflingCards" ? (
        <button className="actionBtn">Shuffling cards...</button>
      ) : null}
            
    {props.gameState === "betTime" ? 
      <div className="betArea">
      <label>Set your Bet
        <div className="betBox1">
        <input type="number" value={props.theBet} min={10} max={500} step={1} onChange={e => props.setTheBet(e.target.value)}/>
        </div>
      </label>
      <p>Min: $10  Max: $500</p>
      <div className="betButtons">
      <button className="actionBtn" onClick={props.betSetter}>CONFIRM</button>
      <button className="actionBtn"onClick={() => props.changeGamePhase("pregame")}>CANCEL</button>
      </div>

      </div>: null}
    
      {props.gameState === "addOne" ? (
        <button onClick={props.freshDeal} className="actionBtn">
          Deal
        </button>
      ) : null}
      {props.gameState === "endRoundWin" ||
      props.gameState === "endRoundLose" ||
      props.gameState === "endRoundDraw" ||
      props.gameState === "winRoundNatural" ||
      props.gameState === "win6Card" ||
      props.gameState === "bust" ? (
        <button
          onClick={props.playAgain}
          className="actionBtn"
        >
          Play Again?
        </button>
      ) : null}
      {props.gameState === "userPhase" ? (
        <div className="hitStand">
        <button
          onClick={() => props.dealCard("user", "up", false)}
          className="actionBtn"
        >
          Hit
        </button>
        <button
          onClick={() => props.changeGamePhase("dealerPhase")}
          className="actionBtn"
        >
          Stand
        </button>
        </div>
      ) : null}
    </div>
  );
};
export default ActionArea;
