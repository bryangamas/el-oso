import "./App.css";
import Header from "./components/Header";
import Score from "./components/Score";
import Board from "./components/Board";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import AppContextProvider from "./providers/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Score />
      <Board />
      <Buttons />
      <Footer/>
    </AppContextProvider>
  );
}

export default App;
