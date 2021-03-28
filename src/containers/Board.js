import React, { useState } from 'react'
import Square from '../components/Square'
import styled from 'styled-components'

const Container = styled.div`
  height: 270px;
  width: 270px;
  background: white;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 1px;
  user-select: none;
`;



const Board = ({
  setGameState,
  answersData,
  board,
  onClick,
  selected
}) => {

  const [boardData, setBoardData] = useState(board)

  // const evaluateBoard = () => {

  // }

  // const handleClickOnBoard = () => {
  //   // setBoardData
  // }

  // const resetGame = () => {
  //   setBoardData(null)
  // }

  // const isSquareValid = (value, index) => {
  //   // evaluate(value, index) ...
  // }

  const squares = []
  for (var i=0; i < boardData.length; i++) {
    squares.push(
      <Square 
        number={boardData[i]}
        active={i === selected}
        onClick={() => onClick(i)}
      />
    )
  }

  return(
    <Container>
      {squares}
      {/* {boardData.map((sqNum, i) => (
        <Square
          number={sqNum}
          active={i === selected}
          onClick={() => onClick(i)}
        />
      ))} */}
    </Container>

  )
}

export default Board