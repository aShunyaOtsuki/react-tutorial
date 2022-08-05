import { useState } from "react";

const Square = (props: { value: string; onClick: any }) => {
  return (
    <button
      className="square"
      onClick={() => {
        console.log(props.value);
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(true);

  const status = "Next player: " + (isNextX ? "X" : "O");

  const handleClick = (i: number) => {
    const nextSquares = squares.slice();
    nextSquares[i] = isNextX ? "X" : "O";
    setSquares(nextSquares);
    setIsNextX(!isNextX);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div></div>
        <ol></ol>
      </div>
    </div>
  );
};
