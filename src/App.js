import "./App.css";
import Board from "./components/board/board.component";
import Header from "./components/header/header.component";
import { useState } from "react";

function App() {
  const [turn, setTurn] = useState("X");
  const [wins, setWins] = useState({ xWins: 0, oWins: 0 });
  return (
    <div className="App">
      <Header turn={turn} wins={wins} />
      <Board turn={turn} setWins={setWins} setTurn={setTurn} />
    </div>
  );
}

export default App;
