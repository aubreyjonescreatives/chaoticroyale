import { useEffect, useState } from "react";
import cards, { shuffle } from "./cards.js";
import "./Blackjack.scss";

// import axios from "axios";
import CardArea from "./CardArea/CardArea";
import ActionArea from "./ActionArea/ActionArea";

const getCard = (faceState, deck) => {
  let aCard = deck.shift();
  if (faceState === "down") {
    aCard["image"] = "cardBacks/Card1.svg";
    return aCard;
  } else {
    return aCard;
  }
};

const Blackjack = (props) => {
  const [gameState, setGameState] = useState("pregame");
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
//   const [dealState, setDealState] = useState(false);
//   const [aCard, setACard] = useState([]);

  const changeGamePhase = (phase) => {
    setGameState(phase);
  };

  const handleDeck = async (newDeck) => {
    setDeck(newDeck);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const dealCard = (whoTo, faceState, oldArray) => {
    let newCard = getCard(faceState, deck);
    if (whoTo === "user") {
      setUserCards((userCards) => [...userCards, newCard]);
    } else {
      setDealerCards((dealerCards) => [...dealerCards, newCard]);
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
    console.log("User cards are: ", userCards)
  };

  //   const handleGameState = (state) => {
  //     setGameState(state);
  //   };

  useEffect(() => {
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

  return (
    <div className="App">
      <CardArea theCards={dealerCards} name="Dealer" />
      <CardArea theCards={userCards} name="Player" />
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
