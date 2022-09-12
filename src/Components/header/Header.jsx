import React, { useEffect, useRef } from "react";
import { useAuth } from "../../store/context";
import "./header.css";
import hero from "../../Assest/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  AOS.init();
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
            <h1
              data-aos="slide-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
            >
              Fastest & Secure <span>Platform To Invest</span> in Crypto
            </h1>
          </div>
          <div>
            <p
              data-aos="slide-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button
              className="button2 header-button"
              data-aos="slide-left"
              data-aos-duration="800"
              data-aos-easing="ease-in-out-back"
            >
              {" "}
              Try for FREE
            </button>
          </div>
        </div>

        {/* header image here */}
        <div className="header-image">
          <img
            src={hero}
            alt=""
            data-aos="zoom-out-left"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-easing="ease-in-sine"
            data-aos-offset="500"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
