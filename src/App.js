import "./App.css";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Score from "./components/Score";
import AppContextProvider from "./providers/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Score />
      <Board />
      <Buttons />
    </AppContextProvider>
  );
}

export default App;
