import React from "react";
import "./section2.css";
import { useAuth } from "../../store/context";
import chart from "../../Assest/Chart.png";
import stats from "../../Assest/Statistic.png";
import table from "../../Assest/Table.png";

function Section2() {
  const { theme } = useAuth();
  return (
    <div className="invest" id={theme}>
      <div className="invest-header">
        <h2>
          Market Sentiments,Portfolio and Run The Infrastructure Of Your Choice
        </h2>
      </div>

      <div className="invest-images">
        <div className="card-image">
          <div className="card-image__text">
            <h3>Invest Smart </h3>
            <p>
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <button className="button2 learn-more"> Learn More </button>
          </div>
          <div className="invest-image">
            <img src={chart} alt="" />
          </div>
        </div>

        <div className="card-image card-image2">
          <div className="card-image__text card-image__text2">
            <h3>Detailed Statistics </h3>
            <p>
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="button2 learn-more"> Learn More </button>
          </div>
          <div className="invest-image invest-image3">
            <img src={stats} alt="" />
          </div>
        </div>

        <div className="card-image">
          <div className="card-image__text">
            <h3>Grow your profit and track your investments</h3>
            <p>
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="button2 learn-more"> Learn More </button>
          </div>
          <div className="invest-image invest-image2">
            <img src={table} alt="" />
          </div>
        </div>

        {/* start minning */}

        <div className="start-mining">
          <div  className="start-mining__text">
            <h3>Start mining now </h3>
            <p>
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div  className="start-mining__input">
            <input type="text" placeholder="Enter Your Email" />
            <button className="button3"> Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
