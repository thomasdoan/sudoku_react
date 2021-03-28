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
  initialBoard
}) => {

  const [boardData, setBoardData] = useState(initialBoard)
  const [selected, setSelected] = useState(null)

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

  

  return(
    <Container>
      {boardData.map((sqNum, i) => (
        <Square
          number={sqNum}
          active={i === selected}
          onClick={() => setSelected(i)}
          // handleClick={handleClickOnBoard}
          // isSquareValid={sqNum === answersData[]}
        />
      ))}
    </Container>

  )
}

export default Board