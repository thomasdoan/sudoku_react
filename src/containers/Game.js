import React, { useState, useEffect } from 'react'
import Board from './Board'
// GAMESTATES

// start
// end
// evaluate

// loading

const Game = ({
  loginState
}) => {
  const [ gameState, setGameState ] = useState(null)

  useEffect(() => {
    initializeBoard();

    return function cleanup() {
      // eraseBoard();
    }
  }, [])

  const initializeBoard = () => {
    // load board data...
  }

  return (
    <div>
      <Board
        setGameState={setGameState}
      />
      <button onClick={() => setGameState("start")}>
        Start
      </button>
    </div>
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