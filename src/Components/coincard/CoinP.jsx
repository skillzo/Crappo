import React from "react";
import { useAuth } from "../../store/context";
import "./coincard.css";

function CoinP(props) {
  const { theme } = useAuth();
  return (
    <div className="coins" id={theme}>
      <div>
        <img src={props.img} alt="" />
        <div className="coins-names">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div>
            <p>{props.para}</p>
          </div>
        </div>
        <p className="coins-description">{props.description}</p>
        <button className="button2">Start Mining</button>
      </div>
    </div>
  );
}

export default CoinP;
