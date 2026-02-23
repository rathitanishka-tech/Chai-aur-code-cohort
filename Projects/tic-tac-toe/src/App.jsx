import { useEffect, useState } from "react";
import "./App.css";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "winning" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winnerInfo, setWinnerInfo] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const currentPlayer = isXTurn ? "X" : "O";

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleClick = (index) => {
    if (board[index] || winnerInfo) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;

    setBoard(updatedBoard);

    const winner = checkWinner(updatedBoard);

    if (winner) {
      setWinnerInfo(winner);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const checkWinner = (currentBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return {
          player: currentBoard[a],
          pattern,
        };
      }
    }

    if (!currentBoard.includes("")) {
      return {
        player: "Draw",
      };
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWinnerInfo(null);
  };

  const getStatusMessage = () => {
    if (winnerInfo?.player === "Draw") {
      return "It's a Draw ✨";
    }

    if (winnerInfo?.player) {
      return `Player ${winnerInfo.player} Wins 🎉`;
    }

    return `Current Turn: ${currentPlayer}`;
  };

  return (
    <div className="container">
      <div className="game-card">
        <div className="top-bar">
          <h1>Tic Tac Toe</h1>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="status">
          {getStatusMessage()}
        </div>

        <div className="board">
          {board.map((square, index) => (
            <Square
              key={index}
              value={square}
              onClick={() => handleClick(index)}
              isWinning={winnerInfo?.pattern?.includes(index)}
            />
          ))}
        </div>

        <button
          className="reset-btn"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}