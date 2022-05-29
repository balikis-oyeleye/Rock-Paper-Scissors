import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = ({ setScore }) => {
  const [choice, setChoice] = useState(null);
  return (
    <main className="flex flex-row justify-center items-center h-full">
      <Routes>
        <Route path="/" element={<ChoseElement setChoice={setChoice} />} />
        <Route
          path="/game"
          element={
            <Game choice={choice} setScore={setScore} setChoice={setChoice} />
          }
        />
      </Routes>
    </main>
  );
};

export default Main;
