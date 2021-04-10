import { useEffect, useState } from "react";
import cards, { shuffle, getCard, sleep, reducer } from "./cards.js";
import "./Blackjack.scss";

// import axios from "axios";
import CardArea from "./CardArea/CardArea";
import ActionArea from "./ActionArea/ActionArea";
import InfoArea from "./InfoArea/InfoArea";

const Blackjack = (props) => {
  const [gameState, setGameState] = useState("pregame");
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [userValue, setUserValue] = useState([]);
  const [dealerValue, setDealerValue] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);

  const newHand = () => {
    setUserValue([]);
    setDealerValue([]);
    setUserScore(0);
    setDealerScore(0);
    setUserCards([]);
    setDealerCards([]);
  };
  const changeGamePhase = (phase) => {
    setGameState(phase);
  };

  const handleDeck = async (newDeck) => {
    setDeck(newDeck);
  };

  const dealCard = (whoTo, faceState) => {
    let newCard = getCard(faceState, deck);
    if (whoTo === "user") {
      setUserCards((userCards) => [...userCards, newCard]);
      setUserValue((userValue) => [...userValue, newCard.value]);
    } else {
      setDealerCards((dealerCards) => [...dealerCards, newCard]);
      setDealerValue((dealerValue) => [...dealerValue, newCard.value]);
    }
  };

  const freshDeal = async () => {
    dealCard("user", "up", userCards);
    await sleep(450);
    dealCard("house", "down", dealerCards);
    await sleep(450);
    dealCard("user", "up", userCards);
    await sleep(450);
    dealCard("house", "up", dealerCards);
    await sleep(450);
    console.log("User cards are: ", userCards);
    if (userScore !== 21) {
      setGameState("userPhase");
    }
  };

  const handleGameState = (state) => {
    setGameState(state);
    if (state === "addOne" && dealerScore > 0) {
      newHand();
    }
  };

  //  const printUserValue = () => {
  //     console.log("User value is:", userValue)
  //   }

  useEffect(() => {
    console.log("GameState is now: ", gameState);
    const shuffleCards = async () => {
      console.log("Game starting. Now shuffling cards.");
      let shuffledDeck = await shuffle(cards);
      console.log("Shuffled cards:", shuffledDeck);
      handleDeck(shuffledDeck);
      //   setDealState(true);
      setGameState("addOne");
    };

    if (gameState === "gameStart") {
      shuffleCards();
    }
  }, [gameState]);

  //This useEffect is the score keeper. Only the player's score is visable.
  useEffect(() => {
    console.log("User value in use effect is: ", userValue);
    console.log("Dealer value in use effect is: ", dealerValue);
    let currentPlayerScore = reducer(userValue);
    let hiddenDealerScore = reducer(dealerValue);
    console.log(currentPlayerScore);
    setUserScore(currentPlayerScore);
    console.log(hiddenDealerScore);
    setDealerScore(hiddenDealerScore);
  }, [userValue, dealerValue]);

  //This useEffect governs a bust, or a score over 21
  useEffect(() => {
    const busted = () => {
      setGameState("bust");
    };
    if (userScore > 21) {
      busted();
    }
  }, [userScore, gameState]);

  //This useEffect governs a blackjack/natural 21 win
  useEffect(() => {
    const youWinNatural = () => {
      setGameState("winRoundNatural");
    };
    if (userScore === 21 && userValue.length === 2) {
      console.log("Natural 21 detected!");
      youWinNatural();
    }
  }, [userScore, userValue]);

  //This useEffect governs a standard win/loss/draw
  useEffect(() => {
    const youWin = () => {
      setGameState("endRoundWin");
    };
    const youLose = () => {
      setGameState("endRoundLose");
    };
    const itsADraw = () => {
      setGameState("endRoundDraw")
    }
    if (userScore > dealerScore && gameState === "dealerEnds") {
      console.log("Regular win!");
      youWin();
    } else if (userScore < dealerScore && gameState === "dealerEnds") {
      youLose();
    }
  }, [userScore, gameState, dealerScore]);

  //This useEffect governs a 6 Card Charlie Win
  useEffect(() => {
    const youWin6 = () => {
      setGameState("win6Card");
    };
    if (userValue.length === 6) {
      console.log("6 Card Charlie!");
      youWin6();
    }
  }, [userValue]);

  return (
    <div className="App">
      <CardArea theCards={dealerCards} name="Dealer" />
      <CardArea theCards={userCards} name="Player" />
      <InfoArea
        gameState={gameState}
        handleGameState={handleGameState}
        userScore={userScore}
        dealerScore={dealerScore}
      />
      <ActionArea
        gameState={gameState}
        changeGamePhase={changeGamePhase}
        addCard={getCard}
        deck={deck}
        dealCard={dealCard}
        freshDeal={freshDeal}
      />
    </div>
  );
};

export default Blackjack;
