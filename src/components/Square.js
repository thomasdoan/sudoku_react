import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: ${props => props.on ? "red": "transparent"};
  height: 30px;
  width: 30px;
`;

const Square = () => {
  const [ on, setOn] = useState(false)

  return (
    <Container on={on} onClick={() => setOn(!on)}>

    </Container>
  )
}

export default Square