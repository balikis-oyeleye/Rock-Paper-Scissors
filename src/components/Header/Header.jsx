import React, { useState } from "react";
import "./header.css";

const Header = ({ score }) => {
  return (
    <header className="header w-full flex justify-center h-1/4">
      <div className="header__main flex flex-row justify-between w-3/5 border-2 items-center px-4">
        <ul className="text-white">
          <li>ROCK</li>
          <li>PAPER</li>
          <li>SCISSORS</li>
        </ul>
        <div className="score bg-white rounded-lg font-bold text-center h-14 w-14">
          <h4>Score</h4>
          <p>{score}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
