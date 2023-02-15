import Layout from "./components/Layout";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className="app min-h-screen bg-gradient-to-r from-radialGradient-100 to-radialGradient-200 pt-6 font-barlow">
      <ScoreBoard />
      <Layout />
    </div>
  );
}

export default App;
