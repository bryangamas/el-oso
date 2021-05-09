import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import useStyle from "../hooks/useStyle";
import "../styles/components/Buttons.css";
import { LETTERS } from "../util/constantsUtil";

const Button = ({letter}) => {
  const {buttonClass}= useStyle();
  const { changeSelectedLetter } = useContext(AppContext);
  return (
    <div className={`Buttons__content ${buttonClass(letter)}`} onClick={changeSelectedLetter(letter)}>
      {letter}
    </div>
  );
};

const Buttons = () => {
  return (
    <section className="Buttons">
      <Button letter={LETTERS.S} />
      <Button letter={LETTERS.O} />
    </section>
  );
};

export default Buttons;
