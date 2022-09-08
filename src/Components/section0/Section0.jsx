import React from "react";
import "./section0.css";
import { useAuth } from "../../store/context";
import Illustrations from "../../Assest/hero-img2.png";

function Section0() {
  const {theme} = useAuth()
  return (
    <div className="numbers-container" id={theme}>
      <div className="numbers-image">
        <img src={Illustrations} alt="" />
      </div>
      <div className="numbers-text">
        <h2>Why you should Choose CRAPPO</h2>
        <p>
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <button className="button2"> Learn More</button>
      </div>
    </div>
  );
}

export default Section0;
