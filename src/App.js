import "./App.css";
import AppContextProvider from "./providers/AppContextProvider";
import Layout from "./components/Layout";
import GamePage from "./pages/game";

function App() {
  return (
    <AppContextProvider>
      <Layout>
        <GamePage />
      </Layout>
    </AppContextProvider>
  );
}

export default App;
