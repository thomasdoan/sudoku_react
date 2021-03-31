import React, { useState } from 'react'
import Board from './Board'
import styled from 'styled-components'
import GameControls from './GameControls'
import randomGame from './GameSelector'

const GameContainer = styled.div`
  // width: 100vw;
  // height: 100vh;
  ${'' /* min-width: 278px;
  min-height: 278px; */}
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

  return (
    <div tabIndex="0" onKeyPress={(e) => handleKeyPress(e)}>
      <GameContainer>
        <Board
          board={history[step]}
          locked={locked}
          setBoardHistory={setBoardHistory}
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
        {/* <GameControls
          name={"Solve"}
          onClick={eraseAll}
        /> */}
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