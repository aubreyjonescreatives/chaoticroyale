import { useEffect, useState } from "react";
import cards, { shuffle } from "./cards.js";
import "./Blackjack.scss";

// import axios from "axios";
import CardArea from "./CardArea/CardArea";
import ActionArea from "./ActionArea/ActionArea";

const getCard = (faceState, deck) => {
  let aCard = deck.shift();
  if (faceState === "down") {
    aCard["image"] = "cardBacks/CardFix1.svg";
    return aCard;
  } else {
    return aCard;
  }
};



const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

const Blackjack = (props) => {
  const [gameState, setGameState] = useState("pregame");
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [userValue, setUserValue] = useState([]);
  const [dealerValue, setDealerValue] = useState([]);

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
      setUserValue(userValue.concat(newCard.value))
      console.log("User value is now: ", userValue)
    } else {
      setDealerCards((dealerCards) => [...dealerCards, newCard]);
      setDealerValue(dealerValue.concat(newCard.value))
      console.log("Dealer value is now: ", dealerValue)
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
    setGameState("userPhase")
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

  useEffect(() => {

    
  }, [deck])

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
