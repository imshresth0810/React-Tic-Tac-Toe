import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [array, setArray] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (array[a] !== null && array[a] === array[b] && array[a] === array[c]) {
        return array[a];
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (array[index] !== null) {
      return;
    }
    const copyState = [...array];
    copyState[index] = isXTurn ? "X" : "O";
    setArray(copyState);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setArray(Array(9).fill(null));
  };

  return (
    <div className="board-container" style={{marginTop:"25px" , padding:"25px"}}>
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handleReset}>Play Again</button>
        </>
      ) : (
        <>
          <h4 className="text-center">Player {isXTurn ? "X" : "O"} please move</h4>
          <div className="d-flex justify-content-evenly">
            <Square onClick={() => handleClick(0)} value={array[0]} />
            <Square onClick={() => handleClick(1)} value={array[1]} />
            <Square onClick={() => handleClick(2)} value={array[2]} />
          </div>
          <div className="d-flex justify-content-evenly">
            <Square onClick={() => handleClick(3)} value={array[3]} />
            <Square onClick={() => handleClick(4)} value={array[4]} />
            <Square onClick={() => handleClick(5)} value={array[5]} />
          </div>
          <div className="d-flex justify-content-evenly">
            <Square onClick={() => handleClick(6)} value={array[6]} />
            <Square onClick={() => handleClick(7)} value={array[7]} />
            <Square onClick={() => handleClick(8)} value={array[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
