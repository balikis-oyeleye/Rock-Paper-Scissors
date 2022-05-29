import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";

const Game = ({ choice, setScore, setChoice }) => {
  const [endGame, setEndGame] = useState(null);
  const [computer, setComputer] = useState("");
  const navigate = useNavigate();

  const computerPick = () => {
    let elementArray = ["rock", "scissors", "paper"];
    const random = elementArray[Math.floor(Math.random() * 2)];
    setComputer(random);
  };

  let computerChoice;

  // User's Choice
  let userChoice;
  if (choice === "rock") {
    userChoice = rock;
  } else if (choice === "paper") {
    userChoice = paper;
  } else if (choice === "scissors") {
    userChoice = scissors;
  }

  // Computer's Choice
  useEffect(() => {
    computerPick();
  }, []);

  if (computer === "rock") {
    computerChoice = rock;
  } else if (computer === "paper") {
    computerChoice = paper;
  } else if (computer === "scissors") {
    computerChoice = scissors;
  }

  //End Game Logic
  const gameResult = () => {
    if (
      (choice === "rock" && computer === "scissors") ||
      (choice == "paper" && computer === "rock") ||
      (choice == "scissors" && computer === "paper")
    ) {
      setEndGame("You Won 🎊");
      setScore((prev) => {
        return (prev += 1);
      });
    } else if (
      (choice === "scissors" && computer === "rock") ||
      (choice === "rock" && computer === "paper") ||
      (choice === "paper" && computer === "scissors")
    ) {
      setEndGame("You Lose 😞");
    } else {
      setEndGame("Draw");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      gameResult();
    }, 1500);
  }, [computer]);

  // Play again function
  const playAgainBtn = () => {
    navigate("/");
    setChoice(null);
  };

  return (
    <main>
      <div className="flex items-center justify-center gap-20 flex-row">
        <div>
          <h4 className="text-white text-center mb-3 font-semibold">YOU</h4>
          <div className="game-image__1 cursor-pointer">
            <div className="bg-white">
              <img src={userChoice} alt="user" className="w-3/4 h-auto" />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white text-center mb-3 font-semibold">
            OPPONENT
          </h4>
          <div className="game-image__2 cursor-pointer">
            <div className="bg-white">
              <img
                src={computerChoice}
                alt="computer"
                className="w-3/4 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {endGame && (
        <div className="text-center">
          <p className="text-white text-2xl mb-5">{endGame}</p>
          <button
            className="bg-white px-4 py-2 rounded-md font-semibold"
            onClick={playAgainBtn}
          >
            Play Again
          </button>
        </div>
      )}
    </main>
  );
};

export default Game;
