import React, { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import { WINNER } from "../../util/constantsUtil";
// import { setTimeout } from 'timers/promises';

import Modal from "./Modal";
import "../../styles/components/Modal/GameOver.css";

const GameOver = () => {
  const { state, restart } = useContext(AppContext);
  const { winner } = state;

  return (
    <Modal isOpen={winner}>
      <div className="GameOver">
        <p className="GameOver__result">
          {winner === WINNER.COMPUTADORA
            ? "Te gané"
            : winner === WINNER.HUMANO
            ? "¡Ganaste!"
            : "Ha sido un empate"}
        </p>
        {/* <p className="GameOver__question">¿Quieres una revancha?</p>
        <button
          className="GameOver__rematch"
          onClick={restart}
          type="button"
        >
          ¡Revancha!
        </button>
        <button className="GameOver__cancel" type="button">
          Hemos terminado
        </button> */}
        
        <button
          className="GameOver__continue"
          onClick={restart}
          type="button"
        >
          Continuar
        </button>
      </div>
    </Modal>
  );
};

export default GameOver;
