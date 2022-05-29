import React from "react";
import { Routes, Route } from "react-router-dom";
import ChoseElement from "./ChoseElement";
import Game from "./Game";
import "./main.css";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ChoseElement />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  );
};

export default Main;
