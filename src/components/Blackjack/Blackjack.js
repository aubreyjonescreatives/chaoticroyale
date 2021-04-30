import { useEffect, useState, useCallback, useContext } from "react";
import cards, { stackedDeck, shuffle, getCard, sleep, reducer } from "./cards.js";
import "./Blackjack.scss";
import { ScoreContext } from "../../ScoreContext";

// import axios from "axios";
import CardArea from "./CardArea/CardArea";
import ActionArea from "./ActionArea/ActionArea";
import BetArea from "./BetArea/BetArea";

const Blackjack = (props) => {
  const [gameState, setGameState] = useState("pregame");
  const score = useContext(ScoreContext);
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [userValue, setUserValue] = useState([]);
  const [dealerValue, setDealerValue] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [theBet, setTheBet] = useState(10);
  const [showDealerScore, setShowDealerScore] = useState(false);
  const [shownDealerScore, setShownDealerScore] = useState(0);
  // const [scoreUpdating, setScoreUpdating] = useState(false)

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

  useEffect(() => {
    console.log("!!!!USER BALANCE: ", score.get)
  }, [score.get])

  function dealCard(whoTo, faceState) {
    let newCard = getCard(faceState, deck);
    if (whoTo === "user") {
      setUserCards((userCards) => [...userCards, newCard]);
      setUserValue((userValue) => [...userValue, newCard.value]);
    } else {
      setDealerCards((dealerCards) => [...dealerCards, newCard]);
      setDealerValue((dealerValue) => [...dealerValue, newCard.value]);
    }
  }

  const freshDeal = async () => {
    dealCard("user", "up", userCards);
    await sleep(300);
    dealCard("house", "down", dealerCards);
    await sleep(300);
    dealCard("user", "up", userCards);
    await sleep(100);
    dealCard("house", "up", dealerCards);
    await sleep(500).then(setGameState("dealingDone"));
  };

  //This useEffect governs a user bust, or a score over 21
  useEffect(() => {
    async function busted() {
      setGameState("bust");
    }
    if (userScore > 21) {
      busted();
    }
  }, [userScore]);

  //Takes a card from the deck and deals to Dealer
  const handleDealerCard = useCallback(() => {
    const doTheCard = async () => {
      console.log("Handle dealer card called, giving dealer a card.");
      let newCard = getCard("up", deck);
      await sleep(650);
      setDealerCards((dealerCards) => [...dealerCards, newCard]);
      setDealerValue((dealerValue) => [...dealerValue, newCard.value]);
      // await sleep(5950).then(setGameState("dealerPhase"));
      setGameState("dealerPhase")
    };
    doTheCard();
  }, [deck]);

  //Governs if dealer should be dealt a card
  useEffect(() => {
    const dealerNeedCardCheck = () => {
      if (gameState === "dealerPhase") {
        console.log("Dealer phase entered. Checking score.");

        if (dealerScore < userScore) {
          console.log("Dealer score is lower than user. Drawing card.");
          handleDealerCard();
        }
        if (dealerScore > userScore) {
          console.log("Dealer score is higher than user. Dealer ends.");
          setGameState("dealerEnds");
          setShowDealerScore(true);
        }
        if (dealerScore > 21) {
          console.log("Dealer score over 21.");
          setGameState("dealerEnds");
        }
        if (dealerScore === userScore && dealerScore <= 17) {
          console.log(
            "Dealer score is the same as user, but lower than or equal 17. Will risk drawing card."
          );
          handleDealerCard();
        }
        if (dealerScore === userScore && dealerScore >= 17) {
          setGameState("dealerEnds");
        }
      }
    };
    if (gameState === "dealerPhase") {
      dealerNeedCardCheck();
    }
  }, [dealerScore, userScore, gameState, handleDealerCard]);

  //governs card flipping at the end
  useEffect(() => {
    const flipEmGood = async () => {
      // flip face down card
      if (dealerCards[0].image.includes("CardFix1.svg")) {
        console.log("flipping card");
        await sleep(250);
        setDealerCards(
          dealerCards.map((card) => {
            let curCard = card;
            if (card.image.includes("CardFix1.svg")) {
              curCard.image = `cards/${curCard.name}.svg`;
            }
            return curCard;
          })
        );
      }
    };
    if (
      gameState === "dealerEnds" ||
      gameState === "winRoundNatural" ||
      gameState === "win6Card" ||
      gameState === "endRoundWin" ||
      gameState === "endRoundLose" ||
      gameState === "endRoundDraw" ||
      gameState === "bust" ||
      gameState === "postRound" ||
      gameState === "dealerBust"
    ) {
      flipEmGood();
    }
  }, [dealerCards, gameState]);

  //Changes phase to userPhase if their initial cards are less than 21
  //If user gets to 21 within their phase, changes to dealer's turn.
  //If they are a 9, 10, or 11 in their initial phase, they can double down.
  useEffect(() => {
    const userPhaseCheck = async () => {
      // if (userScore === 21 && userCards.length === 2) {
      //   console.log("natural win.");
      //   setGameState("winRoundNatural");
      //   return;
      // } else 
      if (userScore >= 9 && userScore <= 13 && userCards.length === 2) {
        console.log(`Double down chance detected. User score is ${userScore}`);
        setGameState("doubleDown");
      } else if (userScore === 21 && userCards.length > 2) {
        console.log(
          "User has 21 with more than 2 cards. Auto-stop, dealer's turn."
        );
        setGameState("nonNatural21");
      }
    };
    userPhaseCheck();
  }, [userScore, userCards]);

  useEffect(() => {
    const setUserPhase = async () => {
      if (userScore >= 9 && userScore <= 13) {
        if (userCards.length === 2) {
          setGameState("doubleDown");
        }
      } else if (userScore !== 21) {
        await sleep(100)
        setGameState("userPhase");
      }
    };
    if (gameState === "dealingDone" && userCards.length === 2) {
      setUserPhase();
    }
  }, [userCards, userScore, gameState, dealerScore]);

  const handleGameState = (state) => {
    setGameState(state);
    if (state === "addOne" && dealerScore > 0) {
      newHand();
    }
  };

  //Shuffles the cards, and assigns that deck as the main game deck.
  //Console logs the state whenever the gameState changes.
  //Reshuffles the deck in the betTime phase if the remaining number is < 30.
  useEffect(() => {
    console.log("GameState is now: ", gameState);

    const shuffleCards = async () => {
      console.log("Game starting. Now shuffling cards.");
      setGameState("shufflingCards");
      await sleep(400);
      let shuffledDeck = await shuffle(cards);
      //let shuffledDeck = stackedDeck;
      console.log("Shuffled cards:", shuffledDeck);
      handleDeck(shuffledDeck);
      setGameState("betTime");
    };
    const reShuffleCards = async () => {
      setGameState("reShufflingCards");
      await sleep(1000);
      let shuffledDeck = await shuffle(cards);
      handleDeck(shuffledDeck);
      setGameState("betTime");
    }
    if (gameState === "gameStart") {
      shuffleCards();
    }
    if (gameState === "betTime" && deck.length < 10) {
      reShuffleCards();
    }
  }, [gameState, deck]);

  //This useEffect is the score keeper. Only the player's full score is visable.
  useEffect(() => {
    const setScores = async () => {
      console.log("User value in use effect is: ", userValue);
      console.log("Dealer value in use effect is: ", dealerValue);
      let currentPlayerScore = await reducer(userValue);
      let hiddenDealerScore = await reducer(dealerValue);
      console.log("Current Player score: ", currentPlayerScore);
      setUserScore(currentPlayerScore);
      console.log("Current dealer score: ", hiddenDealerScore);
      setDealerScore(hiddenDealerScore);
    }
    setScores()
  }, [userValue, dealerValue]);

//Governs Six Card Charlie
  useEffect(() => {
    const youWin6 = () => {
      console.log("6 Card Charlie!");
      setGameState("win6Card");
    };
    const setWin6 = async () => {
      let score = await userScore;
      let cardsNum = await userValue;
      if (score <= 21 && cardsNum.length === 6) {
        youWin6();
        return
      }
    }
    setWin6()
  }, [userScore, userValue]);


  //This useEffect governs a blackjack/natural 21/bust
  useEffect(() => {
    const youWinNatural = async () => {
      await sleep(450);
      console.log("Natural 21 detected!");
      setGameState("winRoundNatural");
    };
    const busted = () => {
      console.log("User bust!");
      setGameState("bust");
    };
    console.log("Number of Player cards: ", userValue.length)
    console.log("Player current score: ", userScore)
    switch(true){
      case (userScore > 21):
        busted();
        break;
      case (userScore === 21):
        if(userValue.length === 2){
          youWinNatural();
        }
        break;
        default:
          return;
    }

  }, [userScore, userValue.length]);

  //Takes a card from the deck and deals to player for double down
  const handleDoubleDownCard = useCallback(() => {
    const giveDoubleDownCard = async () => {
      let newCard = getCard("up", deck);
      setUserCards((userCards) => [...userCards, newCard]);
      setUserValue((userValue) => [...userValue, newCard.value]);
      console.log("Double down card dealt.");
    };
    if (gameState === "hasDoubledDown") {
      giveDoubleDownCard();
      if (userScore <= 21) {
        setGameState("endDoubleDown");
      } else {
        setGameState("bust");
      }
    }
  }, [gameState, userScore, deck]);

  //Double down: change bet to bet x2, deal one card
  useEffect(() => {
    const handleDoubleDown = async () => {
      console.log("Player will double down.");
      setTheBet(theBet * 2);
      handleDoubleDownCard();
      await sleep(450);
    };
    if (gameState === "hasDoubledDown") {
      handleDoubleDown();
    }
  }, [gameState, theBet, handleDoubleDownCard]);

  //This useEffect governs a standard win/loss/draw/dealer bust after the dealer ends his turn
  useEffect(() => {
    const youWin = () => {
      setGameState("endRoundWin");
    };
    const youLose = () => {
      setGameState("endRoundLose");
    };
    const itsADraw = () => {
      setGameState("endRoundDraw");
    };
    const dealerBust = async () => {
      console.log("Dealer has busted.");
      setGameState("dealerBust");
    };
    const ender = async () => {
      if (dealerScore > 21 && gameState !== "postRound") {
        dealerBust();
        // youWin();
      }
      if (userScore > dealerScore && gameState === "dealerEnds") {
        console.log("Regular win!");
        youWin();
      } else if (userScore < dealerScore && gameState === "dealerEnds") {
        youLose();
      } else if (userScore === dealerScore && gameState === "dealerEnds") {
        itsADraw();
      }
    };
    ender();
  }, [userScore, gameState, dealerScore]);

  const betSetter = () => {
    console.log("The bet is now set to: ", theBet);
    handleGameState("addOne");
  };

  //Validates the bet, changing it if it goes outside the min/max.
  useEffect(() => {
    const autoValidate = async () => {
      if (theBet > 2000) {
        await sleep(100);
        setTheBet(2000);
      }
      if (theBet === 0) {
        await sleep(50);
        setTheBet(10);
      }
      if (theBet < 0) {
        await sleep(50);
        setTheBet(10);
      }
      if (Number.isInteger(theBet) === false) {
        await sleep(50);
        setTheBet(Math.floor(theBet));
      }
    };
    autoValidate();
  }, [theBet]);


  //called to start a new round
  const playAgain = async () => {
    newHand();
    handleGameState("betTime");
    setShowDealerScore(false);
    setShownDealerScore(0);
  };

//useEffect to count what card we're on

useEffect(() => {
  console.log("Deck length:", deck.length)
}, [deck.length])


  //This updates the dealer score, showing only their face up card.
  useEffect(() => {
    const getDealerValue = async () => {
      if (
        gameState === "dealerEnds" ||
        gameState === "winRoundNatural" ||
        gameState === "win6Card" ||
        gameState === "endRoundWin" ||
        gameState === "endRoundLose" ||
        gameState === "endRoundDraw" ||
        gameState === "bust" ||
        gameState === "dealerBust" ||
        gameState === "postRound" 
      ) {
        setShownDealerScore(dealerScore);
      } else {
        if (dealerScore !== 0) {
          console.log(
            `Shown dealer score is ${dealerScore} - ${dealerCards[0].value}`
          );
          let subtractVal =
            dealerCards[0].value !== "1or11" ? dealerCards[0].value : 11;
          setShownDealerScore(dealerScore - subtractVal);
        }
      }
    };
    getDealerValue();
  }, [dealerCards, dealerScore, showDealerScore, gameState]);


  //Here, a use effect that has score and gameState as dependencies.
  //Depending on win, lose, or draw, adds or subtracts from score
  useEffect(() => {
    const updateScore = async () => {
      // await sleep(1000).then(() => {
        if (gameState !== "postRound") {
          if (
          gameState === "winRoundNatural" 
        ) {
          console.log("Update score says: winRoundNatural")
          score.set(score.get + theBet)
          setGameState("postRound");
        }
        if (gameState === "endRoundLose") {
          console.log("Update score says: endRoundLose")
          score.set(score.get - theBet)
          setGameState("postRound");
        }
        if (gameState === "endRoundDraw") {
          console.log("Update score says: It's a draw.")
          setGameState("postRound");
        }
        if (gameState === "dealerBust") {
          console.log("Update score says: Dealer Busted.")
          score.set(score.get + theBet)
          setGameState("postRound");
        }
        if (gameState === "win6Card") {
          console.log("Update score says: Six card Charlie.")
          score.set(score.get + theBet)
          setGameState("postRound");
        }
        if (gameState === "bust") {
          console.log("Update score says: User Bust.")
          score.set(score.get - theBet)
          setGameState("postRound");
        }
        }
        
      // });
    };
    updateScore();
  }, [score, theBet, gameState]);

  useEffect(() => {
    console.log("The bet is now: ", theBet);
  }, [theBet]);

  return (
    <div className="Blackjack">
      <div className="CardArea">
        <CardArea
          theCards={dealerCards}
          name="Dealer"
          score={shownDealerScore}
        />
        <CardArea theCards={userCards} name="Player" score={userScore} />
      </div>
      {gameState !== "betTime" && (
        <ActionArea
          gameState={gameState}
          changeGamePhase={changeGamePhase}
          addCard={getCard}
          deck={deck}
          theBet={theBet}
          setTheBet={setTheBet}
          dealCard={dealCard}
          freshDeal={freshDeal}
          handleGameState={handleGameState}
          betSetter={betSetter}
          playAgain={playAgain}
          userScore={userScore}
          dealerScore={dealerScore}
        />
      )}

      {gameState === "betTime" && (
        <BetArea theBet={theBet} setTheBet={setTheBet} betSetter={betSetter} />
      )}
    </div>
  );
};

export default Blackjack;
