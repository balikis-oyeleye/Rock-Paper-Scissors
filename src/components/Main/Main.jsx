import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = ({ setScore, setModal }) => {
  const [choice, setChoice] = useState(null);
  return (
    <main className="flex justify-center items-center h-full flex-col relative">
      <Routes>
        <Route path="/" element={<ChoseElement setChoice={setChoice} />} />
        <Route
          path="/game"
          element={
            <Game choice={choice} setScore={setScore} setChoice={setChoice} />
          }
        />
      </Routes>
      <button
        className="bg-white mt-6 px-4 py-1 rounded-md font-semibold absolute right-0 bottom-6"
        onClick={() => setModal(true)}
      >
        Rules
      </button>
    </main>
  );
};

export default Main;
