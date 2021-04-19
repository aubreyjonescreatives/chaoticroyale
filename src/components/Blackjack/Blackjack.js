import { useEffect, useState, useCallback } from "react";
import cards, { shuffle, getCard, sleep, reducer } from "./cards.js";
import "./Blackjack.scss";

// import axios from "axios";
import CardArea from "./CardArea/CardArea";
import ActionArea from "./ActionArea/ActionArea";

const Blackjack = (props) => {
  const [gameState, setGameState] = useState("pregame");
  const [userCards, setUserCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [userValue, setUserValue] = useState([]);
  const [dealerValue, setDealerValue] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [theBet, setTheBet] = useState(10);

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
    await sleep(300);
    dealCard("house", "up", dealerCards);
    await sleep(300);
  };

  //This useEffect governs a user bust, or a score over 21
  useEffect(() => {
    async function busted() {
      await sleep(600);
      setGameState("bust");
    }
    if (userScore > 21) {
      busted();
    }
  }, [userScore]);

  //Takes a card from the deck and deals to Dealer
  const handleDealerCard = useCallback(() => {
    // function dealCard(whoTo, faceState){
    console.log("Handle dealer card called, giving dealer a card.");
    let newCard = getCard("up", deck);
    setDealerCards((dealerCards) => [...dealerCards, newCard]);
    setDealerValue((dealerValue) => [...dealerValue, newCard.value]);
    // };
  }, [deck]);

  //When called
  const handleDealerAI = useCallback(() => {
    const dealerAI = async () => {
      await sleep(700)
      handleDealerCard();
      setGameState("dealerPhase");
    };
    dealerAI();
  }, [handleDealerCard]);

  //Governs if dealer should be dealt a card
  useEffect( () => {
    const dealerNeedCardCheck = () => {
      if (gameState === "dealerPhase") {
        console.log("Dealer phase entered. Checking score.");
        if (dealerScore < userScore) {
          console.log("Dealer score is lower than user. Drawing card.");
          handleDealerAI();
        }
        if (dealerScore > userScore) {
          console.log("Dealer score is higher than user. Dealer ends.")
          setGameState("dealerEnds");
        }
        if (dealerScore > 21) {
          console.log("Dealer score over 21.");
          setGameState("dealerEnds");
        }
        if (dealerScore === userScore && dealerScore <= 17) {
          console.log(
            "Dealer score is the same as user, but lower than or equal 17. Will risk drawing card."
          );
          handleDealerAI();
        } 
        if (dealerScore === userScore && dealerScore >= 17) {
          setGameState("dealerEnds");
        }
      }
      
    };
    dealerNeedCardCheck();
  }, [dealerScore, userScore, gameState, handleDealerAI]);

  //Changes phase to userPhase if their initial cards are less than 21
  useEffect(() => {
    const userPhaseCheck = async () =>{
      if (userScore < 21 && userCards.length === 2) {
        console.log(`Your score is ${userScore} after initial deal.`);
        await sleep(750)
        setGameState("userPhase");
      }
      if (userScore === 21 && userCards.length > 2) {
        console.log("User has 21 with more than 2 cards. Auto-stop, dealer's turn.")
        await sleep(1000)
        setGameState("dealerPhase");
      }
    }
    userPhaseCheck()
  }, [userScore, userCards]);

  const handleGameState = (state) => {
    setGameState(state);
    if (state === "addOne" && dealerScore > 0) {
      newHand();
    }
  };

  //Shuffles the cards, and assigns that deck as the main game deck.
  //Also console logs the state whenever the gameState changes.
  useEffect(() => {
    console.log("GameState is now: ", gameState);
    const shuffleCards = async () => {
      console.log("Game starting. Now shuffling cards.");
      setGameState("shufflingCards")
      await sleep(400)
      let shuffledDeck = await shuffle(cards);
      console.log("Shuffled cards:", shuffledDeck);
      handleDeck(shuffledDeck);
      //here, set state to take bet before addOne. addOne will happen upon bet confirm.
      //setGameState("addOne");
      setGameState("betTime");
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
    console.log("Current Player score: ", currentPlayerScore);
    setUserScore(currentPlayerScore);
    console.log("Current dealer score: ", hiddenDealerScore);
    setDealerScore(hiddenDealerScore);
  }, [userValue, dealerValue]);

  //This useEffect governs a blackjack/natural 21 win
  useEffect(() => {
    const youWinNatural = async () => {
      await sleep(450);
      setGameState("winRoundNatural");
    };
    if (userScore === 21 && userValue.length === 2) {
      console.log("Natural 21 detected!");
      youWinNatural();
    }
  }, [userScore, userValue]);

  //This useEffect governs a standard win/loss/draw/dealer bust after the dealer ends his turn
  useEffect(() => {
    const youWin =  () => {
      setGameState("endRoundWin");
    };
    const youLose =  () => {
      setGameState("endRoundLose");
    };
    const itsADraw =  () => {
      setGameState("endRoundDraw");
    };
    const dealerBust =  () => {
      console.log("Dealer has busted.");
      setGameState("dealerBust");
    };
    const ender = async () => {
      if (dealerScore > 21) {
        dealerBust();
        youWin();
      }
      if (userScore > dealerScore && gameState === "dealerEnds") {
        console.log("Regular win!");
        youWin();
      } else if (userScore < dealerScore && gameState === "dealerEnds") {
        youLose();
      } else if (userScore === dealerScore && gameState === "dealerEnds") {
        itsADraw();
      }
    }
    ender();
  }, [userScore, gameState, dealerScore]);

  const betSetter = () => {
    console.log("The bet is now set to: ", theBet)
    handleGameState("addOne")
  }

  useEffect(()=>{

    const autoValidate = async () => {
      if(theBet > 500) {
        await sleep(50)
        setTheBet(500)
      }
      if(theBet === 0) {
        await sleep(50)
        setTheBet(10)
      }
      if (Number.isInteger(theBet) === false ) {
        await sleep(50)
        setTheBet(Math.floor(theBet))
      }
    }
    autoValidate()
  },[theBet])

  const playAgain = () => {
    newHand()
    handleGameState("betTime")
  }

  //This useEffect governs a 6 Card Charlie Win
  useEffect(() => {
    const youWin6 = () => {
      setGameState("win6Card");
    };
    if (userValue.length === 6) {
      console.log("6 Card Charlie!");
      youWin6();
    }
  }, [userValue, userScore]);

  return (
    <div className="Blackjack">
      <div className="CardArea">
        <CardArea theCards={dealerCards} name="Dealer" score={dealerScore} />
        <CardArea theCards={userCards} name="Player" score={userScore} />
      </div>
      <ActionArea
        gameState={gameState}
        changeGamePhase={changeGamePhase}
        addCard={getCard}
        deck={deck}
        theBet={theBet}
        dealCard={dealCard}
        freshDeal={freshDeal}
        handleGameState={handleGameState}
        betSetter={betSetter}
        setTheBet ={setTheBet}
        playAgain={playAgain}
        userScore={userScore}
        dealerScore={dealerScore}
      />
      
    </div>
  );
};

export default Blackjack;
