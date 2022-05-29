import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [score, setScore] = useState(4);

  return (
    <div className="App flex justify-start flex-col items-center">
      <Header score={score} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
