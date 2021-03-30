import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`;

const GameButton = ({name, onClick}) => {

    return (
      <Container onClick={onClick}>
        {name}
      </Container>
    )
  }
  
export default GameButton