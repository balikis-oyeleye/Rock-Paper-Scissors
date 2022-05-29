import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [score, setScore] = useState(4);

  return (
    <div className="App flex justify-center">
      <Header score={score} />
    </div>
  );
}

export default App;
