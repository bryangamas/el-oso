const useStyle = () => {

  const cellClass = (cell, cellWon) => {
    if (!cell) {
      return "Board__cell-empty";
    }
    switch (cellWon) {
      case 1:
        return "Board__cell-player-1";
      case 2:
        return "Board__cell-player-2";
      default:
        return "";
    }
  };

  return {cellClass}
}

export default useStyle;