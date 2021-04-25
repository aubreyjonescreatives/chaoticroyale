import "./ActionArea.scss";
import { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap";


const ActionArea = (props) => {
  const [endMessage, setEndMessage] = useState("")

  useEffect(() => {
    if(props.gameState === "winRoundNatural") {
      setEndMessage(`BLACKJACK! You win! $${props.theBet} added.`)
    }
    if(props.gameState === "win6") {
      setEndMessage(`Six Card Charlie! $${props.theBet} added.`)
    }
    if(props.gameState === "win6Card") {
      setEndMessage("Six Card Charlie! You win!")
    }
    if(props.gameState === "endRoundWin") {
      setEndMessage(`You win! $${props.theBet} added to balance.`)
    }
    if(props.gameState === "endRoundLose") {
      setEndMessage(`You lose the bet! Lost $${props.theBet} from balance.`)
    }
    if(props.gameState === "endRoundDraw") {
      setEndMessage("It was a draw. All bet money returned.")
    }
    if(props.gameState === "bust") {
      setEndMessage(`Bust! You lost the bet. Lost $${props.theBet}.`)
    }
  }, [props.gameState, props.theBet])

  return (
    <div className="ActionArea">
      <div className="results">
        {props.gameState === "bust" ? (
          <div>
            <h3>Bust! </h3>
            <p>You lost the bet. </p>
          </div>
        ) : null}
        {/* {props.gameState === "winRoundNatural" ? (
          <div>
            <h3>BLACKJACK! You win!</h3>
            <p>
              Your score: {props.userScore} Dealer score: {props.dealerScore}
            </p>
          </div>
        ) : null} */}
        {props.gameState === "doubleDown" ? (
          <div>
            <h3>
              Player score is {props.userScore}. Would you like to double down?
            </h3>
            <p className="doubleDownInfo">
              Doubling down will double your bet, and deal you one more card. It
              will then be the dealer's turn.
            </p>
            <button
              onClick={() => props.changeGamePhase("userPhase")}
              className="actionBtn"
            >
              No
            </button>
            <button
              onClick={() => props.changeGamePhase("hasDoubledDown")}
              className="actionBtn"
            >
              Yes
            </button>
          </div>
        ) : null}
        {props.gameState === "endDoubleDown" ? (
          <div className="endDoubleDown">
            <h3>
              Card drawn. Player score is now {props.userScore}. Bet is{" "}
              {props.theBet}.
            </h3>
            <button
              onClick={() => props.changeGamePhase("dealerPhase")}
              className="actionBtn"
            >
              Continue
            </button>
          </div>
        ) : null}
        {props.gameState === "nonNatural21" ? (
          <div className="endDoubleDown">
            <h3>Your cards add to {props.userScore}. Dealer's turn.</h3>
            <button
              onClick={() => props.changeGamePhase("dealerPhase")}
              className="actionBtn"
            >
              Continue
            </button>
          </div>
        ) : null}
        {props.gameState === "dealerPhase" ? (
          <div className="dealerPhase">
            <h3>Dealer's turn. Please wait...</h3>
            <Spinner animation="border" role="status" variant="success">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        {/* {props.gameState === "win6Card" ? (
          <div>
            <h3>Six Card Charlie! You win!</h3>
          </div>
        ) : null} */}
        {/* {props.gameState === "endRoundWin" ? (
          <div>
            <h3>You win!</h3>
            <p>
              Your score: {props.userScore} Dealer score:{" "}
              {props.dealerScore < 21
                ? props.dealerScore
                : `BUST! ${props.dealerScore}`}
            </p>
          </div>
        ) : null}
        {props.gameState === "endRoundLose" ? (
          <div>
            <h3>You lose the bet!</h3>
            <p>
              Your score: {props.userScore} Dealer score: {props.dealerScore}
            </p>
          </div>
        ) : null}
        {props.gameState === "endRoundDraw" ? (
          <div>
            <h3>It's a draw. Bet money returned.</h3>
            <p>
              Your score: {props.userScore} Dealer score: {props.dealerScore}
            </p>
          </div>
        ) : null} */}
      </div>

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

      {props.gameState === "betTime" ? (
        <div className="betArea">
          <label>
            Set your Bet
            <div className="betBox1">
              <input
                type="number"
                value={props.theBet}
                nChange={(e) => props.setTheBet(e.target.value)}
              />
            </div>
          </label>
          <p>Min: $10 Max: $500</p>
          <div className="betButtons">
            <button className="actionBtn" onClick={props.betSetter}>
              CONFIRM
            </button>
            <button
              className="actionBtn"
              onClick={() => props.changeGamePhase("pregame")}
            >
              CANCEL
            </button>
          </div>
        </div>
      ) : null}

      {props.gameState === "addOne" ? (
        <button onClick={props.freshDeal} className="actionBtn">
          Deal
        </button>
      ) : null}
      {props.gameState === "postRound"? (
        <>
        <h3>{endMessage}</h3>
        <button onClick={props.playAgain} className="actionBtn">
          Play Again?
        </button>
        </>
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
