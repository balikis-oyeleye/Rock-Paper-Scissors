import { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal";

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
    <HashRouter>
      <div className="App flex justify-start flex-col items-center">
        {modal && <Modal setModal={setModal} />}
        <Header score={score} />
        <Main setScore={setScore} setModal={setModal} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
