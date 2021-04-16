import "./InfoArea.scss";

const InfoArea = (props) => {
  return (
    <div className="results">
      <div>
        {props.gameState !== "pregame" ? (
          <p>Your total: {props.userScore} </p>
        ) : null}
      </div>
      <div>
       
        {props.gameState === "bust" ? (
          <div>
             <h3>Bust! </h3>
            <p>You lost the bet. </p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
        {props.gameState === "winRoundNatural" ? (
          <div>
            <h3>BLACKJACK! You win!</h3>
            <p>
              Your score: {props.userScore} Dealer score: {props.dealerScore}
            </p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
        {props.gameState === "win6Card" ? (
          <div>
            <p>Six Card Charlie! You win!</p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
        {props.gameState === "endRoundWin" ? (
          <div>
            <p>You win!</p>
            <p>
            Your score: {props.userScore} Dealer score: {props.dealerScore < 21 ? props.dealerScore : `BUST! ${props.dealerScore}`}
            </p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
                {props.gameState === "endRoundLose" ? (
          <div>
            <p>You lose the bet!</p>
            <p>
              Your score: {props.userScore} Dealer score: {props.dealerScore}
            </p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default InfoArea;
