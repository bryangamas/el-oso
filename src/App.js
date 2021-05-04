import "./App.css";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  return (
    <>
      <Header />
      <Score />
      <Board />
      <Buttons />
    </>
  );
}

export default App;
