import React, { useEffect, useState } from 'react'
import Square from '../components/Square'
import styled from 'styled-components'

const Container = styled.div`
  height: 278px;
  width: 278px;
  background: white;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 1px;
  user-select: none;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 288px;
`;

const Board = ({
  setGameState,
  answersData,
  board,
}) => {
  const [selected, setSelected] = useState(null)
  const [ boardConfiguration, setBoardConfiguration ] = useState(null)

  // useEffect(() => {
  //   const newConfig = board.split("").map((item, index) => (
  //     <Square
  //       number={item}
  //       active={index === selected}
  //       onClick={() => handleClick(index)}
  //     />
  //   ));
  //   setBoardConfiguration(newConfig)
  // }, [board])
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

  const handleClick = (index) => {
    setSelected(index)
  }

  const renderBoard = () => {
    const squares = []
    for(let index = 0; index < board.length; index++) {
      squares.push(
        <Square
          key={index}
          number={board[index]}
          active={index === selected}
          onClick={() => handleClick(index)}
        />
      )
    }

    return squares;
  }




  // addBoardHistory(...)

  return(
    <div>
      <Container>
        {/* {squares} */}
        {/* { boardConfiguration } */}

        {/* { renderBoard() } */}

        { board.split("").map((item, index) => (
            <Square
              number={item}
              active={index === selected}
              onClick={() => handleClick(index)}
            />
          ))
        }


      </Container>
      {/* <FlexContainer>
        { board.split("").map((item, index) => (
            <Square
              number={item}
              active={index === selected}
              onClick={() => handleClick(index)}
            />
          ))
        }
      </FlexContainer> */}
    </div>

  )
}

export default Board