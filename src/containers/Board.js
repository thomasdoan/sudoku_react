import React, { useState } from 'react'
import Square from '../components/Square'

const Board = ({
  setGameState,
  answersData
}) => {
  const [ boardData, setBoardData ] = useState([1,2,3])

  const evaluateBoard = () => {

  }

  const handleClickOnBoard = () => {
    // setBoardData
  }

  const resetGame = () => {
    setBoardData(null)
  }

  const isSquareValid = (value, index) => {
    // evaluate(value, index) ...
  }

  return(
    boardData.map((sqNum, index) => (
      <Square
        number={sqNum}
        handleClick={handleClickOnBoard}
        isSquareValid={sqNum === answersData[index]}
      />
    ))
  )
}

export default Board