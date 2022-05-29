import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = ({ setScore, setModal }) => {
  const [choice, setChoice] = useState(null);
  return (
    <main className="flex justify-center h-full flex-col">
      <Routes>
        <Route path="/" element={<ChoseElement setChoice={setChoice} />} />
        <Route
          path="/game"
          element={
            <Game choice={choice} setScore={setScore} setChoice={setChoice} />
          }
        />
      </Routes>
      <div className="flex items-end justify-end mt-16">
        <button
          className="bg-white px-4 py-1 rounded-md font-semibold"
          onClick={() => setModal(true)}
        >
          Rules
        </button>
      </div>
    </main>
  );
};

export default Main;
