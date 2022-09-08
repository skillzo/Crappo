import React from "react";
import "./footer.css";
import "../Navbar/navbar.css";
import logo from "../../Assest/Logo.png";
import { useAuth } from "../../store/context";
import masterCard from "../../Assest/Mastercard.png";
import visa from "../../Assest/Visa.png";
import bitcoin from "../../Assest/Bitcoin.png";

function Footer() {
  const { theme } = useAuth();
  return (
    <div className="footer1" id={theme}>
      <div className="footer navbar-logo">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h3>CRAPPO</h3>
        </div>
      </div>
      <div className="footer footer-navinks">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer footer-navinks2">
        <h3>Resource Links</h3>
        <ul>
          <li>Download WhitePaper</li>
          <li>Smart Token</li>
          <li>BlockChaim Explore</li>
          <li>Crypto Api</li>
          <li>Intrest</li>
        </ul>
      </div>

      <div className="footer footer-payment">
        <h3>We accept the following payment Systems</h3>
        <div className="payments">
          <div className="payment">
            <img src={visa} alt="" />
          </div>
          <div className="payment">
            <img src={masterCard} alt="" />
          </div>
          <div className="payment">
            <img src={bitcoin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
