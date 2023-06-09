import React from 'react'
import { styled } from 'styled-components'
import { cor2 } from '../UI/variaveis'
const BotaoStyle = styled.button`
    border: 2px solid ${cor2};
    color: ${cor2};
    padding: 10px;
    width: 150px;
    border-radius: 5px;
    @media (max-width:768px){
      display: none;
    }
`
export default function Botao({texto}) {
  return (
    <BotaoStyle>{texto}</BotaoStyle>
  )
}
