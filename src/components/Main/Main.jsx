import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = () => {
  const [choice, setChoice] = useState(null);
  console.log(choice);
  return (
    <main className="flex flex-row justify-center items-center h-full">
      <Routes>
        <Route path="/" element={<ChoseElement setChoice={setChoice} />} />
        <Route path="/game" element={<Game choice={choice} />} />
      </Routes>
    </main>
  );
};

export default Main;
