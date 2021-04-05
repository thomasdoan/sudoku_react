import React, { useState } from 'react'
import Board from './Board'
import styled from 'styled-components'
import GameControls from './GameControls'
import randomGame from './GameSelector'

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const ControlsContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  user-select: none;
`;

const Game = () => {
  const initializeBoard = () => {
    const board = randomGame();
    return board
  }
  const [initialBoard, setInitialBoard] = useState(initializeBoard())
  const [history, setBoardHistory] = useState([initialBoard])
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null)

  const setInitialLocked = () => {
    var lockedBoard = new Array(initialBoard.length)
    for (var i=0; i < initialBoard.length; i++) {
      if (initialBoard[i] > 0) {
        lockedBoard[i] = true
      }
    }
    return lockedBoard
  }
  const newLocked = (board) => {
    const newLock = new Array(board.length)
    for (var i=0; i < board.length; i++) {
      if (board[i] > 0) {
        newLock[i] = true
      }
    }
    return newLock
  }
  const [locked, setLocked] = useState(setInitialLocked())

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
  }

  const undo = () => {
    if (step >= 1) {
      setStep(step - 1)
    }
    if (locked.every(ele => ele === null)) {
      setLocked(setInitialLocked())
    }
  }

  const redo = () => {
    if (step < history.length - 1) {
      setStep(step + 1)
    }
  }

  const eraseAll = () => {
    const empytBoard = '0'.repeat(history[step].length)
    setLocked(newLocked(Array(history[step].length)))
    setBoardHistory([...history, empytBoard])
    setStep(step + 1)
    setSelected(null)
  }

  const restart = () => {
    setStep(0)
    setSelected(null)
    setLocked(newLocked(setInitialLocked()))
  }

  const newRandomGame = () => {
    setStep(0)
    setSelected(null)
    const newGame = randomGame()
    setInitialBoard(newGame)
    setBoardHistory([newGame])
    setLocked(newLocked(newGame))
  }

  const handleKeyPress = (e) => {
    const num = e.key
    if (num >= 0 && num <= 9 && selected != null) {
      changeNumber(num)
    } else if (e.key === 'Delete') {
      changeNumber(0)
    }
  }

  const changeNumber = (number) => {
    if(selected && step >= 0) {
      const hist = history.slice(0, step + 1)
      const newBoard = history[step].substr(0, selected) + number + history[step].substr(selected + 1)
      setBoardHistory([...hist, newBoard])
      setStep(step + 1)
    }
  }

  const openCell = (board) => {
    for (var row=0; row < board.length; row++) {
      for (var col=0; col< board.length; col++){
        if (board[row][col] === 0) {
          return [row, col]
        }
      }
    }
    return [-1, -1]
  }

  const validPlacement = (board, row, col, val) => {
    
    for (var i=0; i < board.length; i++) {
      if (board[row][i] === val) return false
    }

    for (var r=0; r<board.length; r++) {
      if (board[r][col] === val) return false
    }

    const test = Math.floor(row / 3) * 3
    const topYPos = Math.floor(col / 3) * 3
    for (var x=test; x < test + 3; x++) {
      for(var y=topYPos; y < topYPos + 3; y++) {
        if (board[x][y] === val) return false
      }
    }
    // console.log(row, col, val)
    return true
  }

  const initialTo2D = () => {
    const board = initialBoard
    const splitBoardString = board.split("")
    let splitBoard = splitBoardString.map(i=>Number(i));
    const twoDBoard = []
    while (splitBoard.length) {
      twoDBoard.push(splitBoard.splice(0, 9))
    }
    return twoDBoard
  }
  const [two2DBoard, settwo2DBoard] = useState(initialTo2D())

  const solveGame = () => {
    // debugger;
    var board = two2DBoard
    var [row, col] = openCell(board)
    if (row === -1 & col === -1) return true
    // console.log(row, col)
    for (var i=1; i < 10; i++) {
      if (validPlacement(board, row, col, i)) {
        board[row][col] = i
        settwo2DBoard(board)
        // console.log(board)
        if (solveGame() === true){
          const flatBoard = two2DBoard.flat().join('')
          setBoardHistory([...history, flatBoard])
          setStep(step + 1)
          return true
        } 
        board[row][col] = 0
        settwo2DBoard(board)
      }
    }
    
  }


  return (
    <div tabIndex="0" onKeyPress={(e) => handleKeyPress(e)}>
      <GameContainer>
        <Board
          board={history[step]}
          locked={locked}
          onClick={handleClick}
          selected={selected}
          changeNumber={changeNumber}
        />
      </GameContainer>
      <ControlsContainer>
        <GameControls
          name={"Undo"}
          onClick={undo}
        />
        <GameControls
          name={"Redo"}
          onClick={redo}
        />
        <GameControls
          name={"Restart from beginning"}
          onClick={restart}
        />
        <GameControls
          name={"Solve"}
          onClick={solveGame}
        />
        <GameControls
          name={"Erase All"}
          onClick={eraseAll}
        />
        <GameControls
          name={"Random Puzzle"}
          onClick={newRandomGame}
        />
      </ControlsContainer>
    </div>



  );
}

export default Game