import React from "react";
import { useAuth } from "../../store/context";
import "./numbers.css";
import NumbersCard from "./NumbersCard";
import { Num } from "../Arrays";
function Numbers() {
  const { theme } = useAuth();
  return (
    <div className="header-numbers" id={theme}>
      {Num.map((coin) => {
        return (
          <NumbersCard
            key={coin.id}
            img={coin.img}
            price={coin.price}
            para={coin.para}
          />
        );
      })}
    </div>
  );
}

export default Numbers;
