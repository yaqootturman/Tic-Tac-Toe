import { useState } from "react";
import "./board.css";
import evaluate from "../../utils/utils";

const Board = (props) => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const { turn, setTurn, setWins } = props;
  const cellClick = (index) => {
    if (cells[index] !== "") return;
    const newCells = [...cells];
    newCells[index] = turn;
    setCells(newCells);
    setTurn(turn === "X" ? "O" : "X");

    const result = evaluate(newCells);
    if (result) {
      setWinner(result);
      if (result === "X")
        setWins((wins) => {
          return { ...wins, xWins: wins.xWins + 1 };
        });
      else if ((result = "O"))
        setWins((wins) => {
          return { ...wins, oWins: wins.oWins + 1 };
        });
    }
  };
  return (
    <div>
      <div className="board">
        {cells.map((box, index) => (
          <div
            key={index}
            className={`cell ${box}`}
            onClick={() => cellClick(index)}
          >
            {box}
          </div>
        ))}
        {winner && (
          <div className="result">
            {winner === "draw" ? "Draw :-(" : "winner is: " + winner}
            <br /> <button>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
