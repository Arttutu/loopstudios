import React from 'react'
import { styled } from 'styled-components'
import { cor1, cor2 } from '../UI/variaveis'
const CardStyle = styled.div`

    width: 300px;
    height: 500px;
    &:nth-child(-n + 8){
        margin-top: 40px;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    z-index: -1;
    
`
const Nome = styled.h2`
    color: ${cor2};
    font-size: 18px;
`
export default function Card({img, titulo}) {
  return (
    <CardStyle>
      <Img src={img} />
      <Nome>{titulo}</Nome>
    </CardStyle>
  )
}

