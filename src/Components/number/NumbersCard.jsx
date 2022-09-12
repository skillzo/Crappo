import React from "react";
import { useAuth } from "../../store/context";
import AOS from "aos";
import "aos/dist/aos.css";

function NumbersCard(props) {
  AOS.init();
  const { theme } = useAuth();
  return (
    <div className="main-numbers" id={theme}>
      <div className="numbers-logo">
        <img
          src={props.img}
          alt=""
          data-aos="flip-left"
          data-aos-mirror="true"
        />
      </div>
      <div className="main-numbers__text">
        <div>
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-offset="500"
          >
            {props.price}
          </h2>
        </div>
        <div>
          <p
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-offset="500"
            data-aos-easing="ease-in-out-back"
          >
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NumbersCard;
