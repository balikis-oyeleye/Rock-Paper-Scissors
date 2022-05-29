import React from "react";
import scissors from "../../assets/images/icon-scissors.svg";
import rock from "../../assets/images/icon-rock.svg";
import paper from "../../assets/images/icon-paper.svg";

const Game = ({ choice }) => {
  let userChoice;
  if (choice === "rock") {
    userChoice = rock;
  } else if (choice === "paper") {
    userChoice = paper;
  } else if (choice === "scissors") {
    userChoice = scissors;
  }

  return <div>{choice}</div>;
};

export default Game;
