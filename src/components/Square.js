import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.on ? "orange": "teal"};
  height: 60px;
  width: 60px;
  font-size: 200%;
  font-weight: ${props => props.locked ? "bold": "normal"};
  :nth-child(n) {
    border-bottom: 0.5px solid black;
    border-right: 0.5px solid black;
  }
  :nth-child(9n+3) {
    border-right: 2px solid black;
  }
  :nth-child(9n+6) {
    border-right: 2px solid black;
  }
  :nth-child(n+19):nth-child(-n+27) {
    border-bottom: 2px solid black;
  }
  :nth-child(n+46):nth-child(-n+54) {
    border-bottom: 2px solid black;
  }
}
`;

const Square = ({number, active, locked, onClick}) => {

  return (
    <Container on={active} locked={locked} onClick={onClick}>
      {number > 0 ? number : null}
    </Container>
  )
}

export default Square