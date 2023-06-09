import React from 'react'
import { styled } from 'styled-components'
import { cor2 } from '../UI/variaveis'
import { Box, Titulo } from '../UI'
const RodapeStyle = styled.div`
    width: 100%;
    height: 200px;
    background-color: ${cor2};
    padding-top: 50px;
`

export default function Rodape() {
  return (
    <RodapeStyle>
        <Box>
            <Titulo>loopstudios</Titulo>
        </Box>
    </RodapeStyle>
  )
}
