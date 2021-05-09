import { useContext } from "react";
import AppContext from "../contexts/AppContext";

const useStyle = () => {
  const {state} = useContext(AppContext);
  const { cellsWon, selectedLetter } = state;

  const cellClass = (cell, i, j) => {
    if (!cell) {
      return "Board__cell-empty";
    }
    switch (cellsWon[i][j]) {
      case 1:
        return "Board__cell-player-1";
      case 2:
        return "Board__cell-player-2";
      default:
        return "";
    }
  };

  const buttonClass = (letter) => {
    return letter===selectedLetter?"Buttons__content-active":""
  }

  return {cellClass, buttonClass}
}

export default useStyle;