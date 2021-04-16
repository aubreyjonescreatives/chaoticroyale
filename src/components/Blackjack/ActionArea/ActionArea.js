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
      {props.gameState === "addOne" ? (
        <button onClick={props.freshDeal} className="actionBtn">
          Deal
        </button>
      ) : null}
      {props.gameState === "endRoundWin" ||
      props.gameState === "endRoundLose" ||
      props.gameState === "endRoundDraw" ||
      props.gameState === "winRoundNatural" ||
      props.gameState === "bust" ? (
        <button
          onClick={() => props.handleGameState("addOne")}
          className="actionBtn"
        >
          Play Again?
        </button>
      ) : null}
      {props.gameState === "userPhase" ? (
        <button
          onClick={() => props.dealCard("user", "up", false)}
          className="actionBtn"
        >
          Hit
        </button>
      ) : null}
      {props.gameState === "userPhase" ? (
        <button
          onClick={() => props.changeGamePhase("dealerPhase")}
          className="actionBtn"
        >
          Stand
        </button>
      ) : null}

      {/* <button onClick={props.addDealerCard} className="actionBtn" >Add Dealer Card</button>
      <button onClick={props.addUserCard} className="actionBtn" >Add User Card</button> */}
    </div>
  );
};
export default ActionArea;
