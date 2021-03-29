import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.on ? "orange": "teal"};
  height: 30px;
  width: 30px;
`;

const Square = ({number, active, onClick}) => {

  return (
    <Container on={active} onClick={onClick}>
      {number!= 0 ? number : null}
    </Container>
  )
}

export default Square