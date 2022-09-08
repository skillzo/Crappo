import React from "react";
import { useAuth } from "../../store/context";

function NumbersCard(props) {
    const {theme} = useAuth()
  return (
    <div className="main-numbers" id={theme}>
      <div className="numbers-logo">
        <img src={props.img} alt="" />
      </div>
      <div className="main-numbers__text">
        <div>
          <h2>{props.price}</h2>
        </div>
        <div>
          <p>{props.para}</p>
        </div>
      </div>
    </div>
  );
}

export default NumbersCard;
