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
        {props.userScore > 21 ? <p>Bust!: {props.userScore} </p> : null}
        {props.gameState === "bust" ? (
          <div>
            <p>You lost the bet. </p>
            <button onClick={() => props.handleGameState("addOne")}>
              New Hand?
            </button>
          </div>
        ) : null}
        {props.gameState === "winRoundNatural" ? (
          <div>
            <p>BLACKJACK! You win!</p>
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
        {props.gameState === "winRound" ? (
          <div>
            <p>You win!</p>
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
