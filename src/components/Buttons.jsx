import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import "../styles/components/Buttons.css";

const Buttons = () => {
  const { changeSelectedLetter } = useContext(AppContext);

  return (
    <div className="Buttons">
      <div className="Buttons__content" onClick={changeSelectedLetter("S")}>
        S
      </div>
      <div className="Buttons__content" onClick={changeSelectedLetter("O")}>
        O
      </div>
    </div>
  );
};

export default Buttons;
