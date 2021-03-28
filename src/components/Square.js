import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.on ? "orange": "teal"};
  height: 30px;
  width: 30px;
  text-align: center;
`;

const Square = ({number, active, onClick}) => {

  return (
    <Container on={active} onClick={onClick}>
      {number!= 0 ? number : null}
    </Container>
  )
}

export default Square