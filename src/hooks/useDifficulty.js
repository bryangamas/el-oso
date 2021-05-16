import { useState } from "react";
import { HIT_REDUCTION } from "../util/constantsUtil";
import { calculateComputerMove } from "../util/computerStrategiesUtil";

const useDifficulty = (difficulty) => {
  const [hitPercent, setHitPercent] = useState(100);

  const hitReduction = HIT_REDUCTION[difficulty];

  const nextComputerMove = (board, lastEarnedPoints) => {
    if (lastEarnedPoints === 0) {
      setHitPercent(100);
    } else {
      setHitPercent(hitPercent - hitReduction);
    }
    return calculateComputerMove(board, hitPercent);
  };

  return {
    nextComputerMove,
  };
};

export default useDifficulty;
