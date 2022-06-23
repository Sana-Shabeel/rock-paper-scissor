import "./App.css";
import Header from "./components/Header";
import RockPprscr from "./components/RockPprscr";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="app bg-gradient-to-r from-purple to-pink w-screen pt-3	h-full">
      <Header />
      <RockPprscr />
      <Rules />
    </div>
  );
}

export default App;
