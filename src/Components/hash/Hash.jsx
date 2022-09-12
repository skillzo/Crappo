import React from "react";
import { useAuth } from "../../store/context";
import "./hash.css";
function Hash() {
  const { theme } = useAuth();
  return (
    <div className="hash-container" id={theme}>
      <div>
        <h2> Check How Much You Can Earn With Us</h2>
        <p>
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="hashtab" id={theme} data-aos="zoom-in-left">
        <div>
          <input type="search" placeholder="Enter your hash rate:" />
          <select name="" id="">
            <option value="">TH/s</option>
            <option value="">H/s</option>
            <option value="">KH/s</option>
            <option value="">MH/s</option>
            <option value="">GH/s</option>
          </select>
          <button className="button2 hash-button">Calculate</button>
        </div>
        <div className="hashtab-text">
          <p className="colored-text">ESTIMATED 24 HOUR REVENUE:</p>
          <h3>
            0.05513059 ETH <span className="colored-text">($1275)</span>
          </h3>
          <p>
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hash;
