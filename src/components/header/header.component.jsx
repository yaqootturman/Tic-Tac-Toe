import "./header.css";
import { useState, useEffect } from "react";

const Header = (props) => {
  const { turn, wins, setWins } = props;

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wins"));
    if (items) {
      setWins(items);
    }
  }, []);
  return (
    <div className="header">
      <span> X: {wins.xWins}</span>
      <span> O: {wins.oWins}</span>
      <span>{turn + "turn"} </span>
    </div>
  );
};

export default Header;
