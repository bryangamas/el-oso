import React from "react";
import AppContext from "../contexts/AppContext";
import useStartGame from "../hooks/useStartGame";

const AppContextProvider = ({ children }) => {
  let startGame = useStartGame();

  return (
    <AppContext.Provider value={startGame}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
