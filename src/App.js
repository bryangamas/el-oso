import "./App.css";
import AppContextProvider from "./providers/AppContextProvider";
import Header from "./components/Header";
import Score from "./components/Score";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import GameOver from "./components/modal/GameOver";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Score />
      <Board />
      <Buttons />
      <Footer />
      <GameOver />
    </AppContextProvider>
  );
}

export default App;
