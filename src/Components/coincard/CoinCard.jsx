import React from "react";
import CoinP from "./CoinP";
import "./coincard.css";
import { coins } from "../Arrays";
import AOS from "aos";
import "aos/dist/aos.css";
function CoinCard() {
  AOS.init();
  return (
    <div className="coin-main__container">
      <div>
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>
      </div>
      {/* coin Card */}
      <div className="coins-cointainer" data-aos="zoom-out-down">
        {coins.map((coin) => {
          return (
            <CoinP
              key={coin.id}
              name={coin.name}
              img={coin.img}
              para={coin.para}
              description={coin.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CoinCard;
