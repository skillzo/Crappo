import React from "react";
import "./section0.css";
import { useAuth } from "../../store/context";
import Illustrations from "../../Assest/hero-img2.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Section0() {
  AOS.init();
  const { theme } = useAuth();
  return (
    <div className="numbers-container" id={theme}>
      <div className="numbers-image">
        <img src={Illustrations} alt="" 
        data-aos="slide-left"
        data-aos-anchor-placement="top-center"
        data-aos-duration="500"
        data-aos-mirror="flase"
        data-aos-once="true"
        />
      </div>
      <div className="numbers-text">
        <h2
        data-aos="flip-down"
        data-aos-duration="1000"
        >
        Why you should Choose CRAPPO</h2>
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
