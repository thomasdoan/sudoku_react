import React, { useState, useEffect } from 'react'
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

  
  // const [history, setBoardHistory] = useState([initializeBoard()])
  const [history, setBoardHistory] = useState(initializeBoard())

  const [selected, setSelected] = useState(null)

  const setLocked = () => {
    var lockedBoard = new Array(history.length)
    for (var i=0; i < history.length; i++) {
      if (history[i] > 0) {
        lockedBoard[i] = true
      }
    }
    return lockedBoard
  }
  const [locked, ] = useState(setLocked())

  // useEffect(() => {
  //   initializeBoard();

  //   return function cleanup() {
  //     // eraseBoard();
  //   }
  // }, [])


  
  useEffect(() => {

    const changeNumber = (index, number) => {
      if (locked[index]) {
        return
      }
  
      const newBoard = history.substr(0, index) + number + history.substr(index + 1)
      setBoardHistory(newBoard)
    }

    function handleKeyDown(e) {
      const num = e.key
      if (num > 0 && num <= 9 && selected != null) {
        // console.log(e.key);
        // console.log(selected)
        changeNumber(selected, num)
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
      
    }
  }, [selected, history, locked]);


  const handleClick = (index) => {
    if (locked[index]) {
      setSelected(null)
      return
    }
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }

    // const oldVal = history[index]
    // var newVal = parseInt(oldVal) + 1
    // if (newVal === 10) {
    //   newVal = 1
    // }
    // const newBoard = history.substr(0, index) + newVal.toString() + history.substr(index + 1)
    // setBoardHistory(newBoard)
  }

  return (
    <GameContainer>
      <Board
        board={history}
        locked={locked}
        // board={history[history.length - 1]}
        setBoardHistory={setBoardHistory}
        onClick={handleClick}
        selected={selected}
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