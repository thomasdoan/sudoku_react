import React, { useEffect, useState } from 'react'
import Square from '../components/Square'
import styled from 'styled-components'

const Container = styled.div`
  ${'' /* height: 280px;
  width: 280px; */}
  background: white;
  display: grid;
  grid-template-columns: repeat(9, 0fr);
  ${'' /* grid-gap: 1px; */}
  user-select: none;
  ${'' /* border: 2px solid black; */}
`;

const Board = ({
  board
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
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }
    
  }

  // addBoardHistory(...)

  return(
    <div>
      <Container>

        { board.split("").map((item, index) => (
            <Square
              number={item}
              active={index === selected}
              locked={true}
              onClick={() => handleClick(index)}
            />
          ))
        }

      </Container>

    </div>

  )
}

export default Board


// const FlexContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   width: 288px;
// `;


  // const renderBoard = () => {
  //   const squares = []
  //   for(let index = 0; index < board.length; index++) {
  //     squares.push(
  //       <Square
  //         key={index}
  //         number={board[index]}
  //         active={index === selected}
  //         onClick={() => handleClick(index)}
  //       />
  //     )
  //   }

  //   return squares;
  // }

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