import React from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = () => {
  return (
    <main className="flex flex-row justify-center items-center h-full">
      <Routes>
        <Route path="/" element={<ChoseElement />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  );
};

export default Main;
