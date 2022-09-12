import React, { useRef, useEffect } from "react";
import { useAuth } from "../../store/context";
import "./header.css";
import hero from "../../Assest/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import gsap from "gsap";

function Header() {
  const textRef = useRef();
  const saveRef = useRef();
  const imgRef = useRef();
  useEffect(() => {
    var tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.from(textRef.current, {
        duration: 2,
        x: 100,
        ease: "elastic",
      })
        .from(saveRef.current, {
          duration: 1,
          x: 100,
        })
        .from(
          imgRef.current,
          {
            duration: 1,
            y: -100,
            repeat: -1,
            yoyo: true,
          },
          "-=2"
        );
    });
    return () => {
      ctx.revert();
    };
  }, []);
  AOS.init();
  const { theme } = useAuth();
  return (
    <div className="cointainer-header" id={theme}>
      <div className="button-slider" id={theme}>
        <div className="percent-save" id={theme} ref={saveRef}>
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
            <h1 ref={textRef}>
              Fastest & Secure{" "}
              <div
                data-aos="flip-up"
                data-aos-duration="500"
                data-aos-delay="800"
              >
                Platform To Invest
              </div>{" "}
              in Crypto
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
              Try for FREE{" "}
              <span className="Arrow-button">
                <ArrowForwardIosIcon color="primary" sx={{ fontSize: 10 }} />
              </span>
            </button>
          </div>
        </div>

        {/* header image here */}
        <div className="header-image">
          <img src={hero} alt="" ref={imgRef} />
        </div>
      </div>
    </div>
  );
}

export default Header;
