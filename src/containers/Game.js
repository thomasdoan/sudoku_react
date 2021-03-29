import React, { useState } from 'react'
import Board from './Board'
import styled from 'styled-components'
// GAMESTATES

// start
// end
// evaluate

// loading

const GameContainer = styled.div`
  width: 100vw;
  height: 100vh;
  ${'' /* min-width: 278px;
  min-height: 278px; */}
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Game = ({
  loginState
}) => {
  const initializeBoard = () => {
    const board = '014300209005009001070060043006002087190007400050083000600000105003508690042910300';
    return board
  }

  const [history, setBoardHistory] = useState([initializeBoard()])


  // useEffect(() => {
  //   initializeBoard();

  //   return function cleanup() {
  //     // eraseBoard();
  //   }
  // }, [])


  return (
    <GameContainer>
      <Board
        board={history[history.length - 1]}
        setBoardHistory={setBoardHistory}
      />
    </GameContainer>
  );
}

export default Game

// export default Board = ({
//   setGameState,
//   answersData
// }) => {
//   const [ boardData, setBoardData ] = useState([1,2,3])

//   const evaluateBoard = () => {
//     if(isBoardValid === true) {
//       setGameState("end")
//     }
//   }

//   const handleClickOnBoard = () => {
//     // setBoardData
//   }

//   const resetGame = () => {
//     setBoardData(null)
//   }

//   const isSquareValid = (value, index) => {
//     // evaluate(value, index) ...
//   }

//   return(
//     boardData.map((sqNum, index) => (
//       <Square
//         number={sqNum}
//         handleClick={handleClickOnBoard}
//         isSquareValid={sqNum === answersData[index]}
//       />
//     ))
//   )
// }

// const SquareWrapper = styled.div`
//   color: ${props => props.isValid ? 'black':'red'};
// `

// export default Square = ({number, handleClick, isSquareValid}) => {
//   return(

//     <SquareWrapper onClick={handleClick} isValid={isSquareValid}>
//       { number }
//     </SquareWrapper>
//   )
// }







// export default class Game extends React.component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       loginState: false
//     }
//   }

//   componentDidMount = () => {

//   }

//   componentDidUpdate = (prevProps) => {
//     // true != false
//     if(prevProps.loginState != this.state.loginState) {
//       this.setState({

//       })
//     }
//   }

//   render = () => {
//     return (
//       <div>
//         <button onClick={setGameState("start")}>
//           Start
//         </button>

//         {(this.state.loginState) ?
//           <GameHistory />
//           :
//           <LoginButton />
//         }
//       </div>
//     );
//   }
// }