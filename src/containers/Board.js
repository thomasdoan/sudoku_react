// import React, { useState } from 'react'
import Square from '../components/Square'
import styled from 'styled-components'

const Container = styled.div`
  ${'' /* height: 280px;
  width: 280px; */}
  background: white;
  display: grid;
  grid-template-columns: repeat(9, 0fr);
  ${'' /* grid-gap: 1px; */}
  // user-select: none;
  ${'' /* border: 2px solid black; */}
`;

const Board = ({
  board,
  onClick,
  locked,
  selected
}) => {
  
  
  return(
    <div>
      <Container>

        { board.split("").map((item, index) => (
            <Square
              key={index}
              number={item}
              active={index === selected}
              locked={locked[index] === true}
              onClick={() => onClick(index)}
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

  /* <FlexContainer>
  { board.split("").map((item, index) => (
      <Square
        number={item}
        active={index === selected}
        onClick={() => handleClick(index)}
      />
    ))
  }
</FlexContainer> */