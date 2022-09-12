import React, { useState } from "react";
import { useAuth } from "../../store/context";
import "./coincard.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CoinP(props) {
  const [isClicked, setIsClicked] = useState(false);
  const { theme } = useAuth();
  function clickToggle() {
    isClicked === false ? setIsClicked(true) : setIsClicked(false);
  }
  return (
    <div className="coins" id={theme} onClick={clickToggle}>
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
        <button className="button2 start-mining__button">
          {isClicked ? "Start Mining" : <ArrowForwardIosIcon />}
        </button>
      </div>
    </div>
  );
}

export default CoinP;
