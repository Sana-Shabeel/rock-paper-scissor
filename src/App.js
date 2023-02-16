import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Rules from "./components/Rules";
import Result from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [playerchoice, setPlayerchoice] = useState({
    className: "",
    img: "",
    sign: "",
  });

  //const [score, setScore] = useState(0);

  // console.log(playerchoice.className);

  return (
    <div className="grid min-h-screen bg-gradient-to-r from-radialGradient-100 to-radialGradient-200 pt-6 font-barlow">
      <ScoreBoard />
      <Routes>
        <Route
          path="/"
          element={<Layout setPlayerchoice={setPlayerchoice} />}
        />
        <Route
          path="/result"
          element={
            <Result
              className={playerchoice.className}
              img={playerchoice.img}
              sign={playerchoice.sign}
            />
          }
        />
      </Routes>
      <Rules />
    </div>
  );
}

export default App;
