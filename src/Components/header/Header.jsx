import React from "react";
import { useAuth } from "../../store/context";
import "./header.css";
import hero from "../../Assest/hero-img.png";

function Header() {
  const { theme } = useAuth();
  return (
    <div className="cointainer-header" id={theme}>
      <div className="button-slider" id={theme}>
        <div className="percent-save" id={theme}>
          <p>75% SAVE</p>
        </div>
        <div>
          {" "}
          <p>For The Best Black Friday Deals</p>{" "}
        </div>
      </div>
      <div className="header-main">
        <div className="header-text">
          <div className="header-main__text">
            {" "}
            <h1>Fastest & Secure Platform To Invest in Crypto</h1>
          </div>
          <div>
            <p>
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className="button2 header-button"> Try for FREE</button>
          </div>
        </div>

        {/* header image here */}
        <div className="header-image">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
