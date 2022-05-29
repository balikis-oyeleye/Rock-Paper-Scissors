import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const scoreItem = JSON.parse(localStorage.getItem("score"));
    if (scoreItem) {
      setScore(scoreItem);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  return (
    <BrowserRouter>
      <div className="App flex justify-start flex-col items-center">
        <Header score={score} />
        <Main setScore={setScore} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
